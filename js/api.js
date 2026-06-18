import { getTopicList, getQuestionsForTopics } from './questions.js';
import { getState } from './state.js';

const isGitHubPages = window.location.hostname.includes('github.io');

async function tryBackend(path, options = {}) {
  if (isGitHubPages) return null;
  try {
    const res = await fetch(`${window.location.origin}${path}`, {
      signal: AbortSignal.timeout(1500),
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers }
    });
    if (!res.ok) throw new Error('Backend error');
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchTopics() {
  const data = await tryBackend('/api/topics');
  if (data && data.topics) {
    return data;
  }
  return { topics: getTopicList() };
}

export async function generateQuestions(topics, count = 3) {
  const s = getState();

  const data = await tryBackend('/api/generate', {
    method: 'POST',
    body: JSON.stringify({ topics, count })
  });

  if (data && data.questions && data.questions.length > 0) {
    return data;
  }

  if (s.aiEnabled && s.apiKey) {
    try {
      const aiQuestions = await generateWithAI(topics, count, s.apiKey);
      if (aiQuestions && aiQuestions.length > 0) {
        return { questions: aiQuestions, ai: true };
      }
    } catch {}
  }

  const questions = getQuestionsForTopics(topics, count);
  return { questions, fallback: true };
}

async function generateWithAI(topics, count, apiKey) {
  const models = [
    'google/gemini-2.0-flash-exp:free',
    'mistralai/mistral-7b-instruct:free',
  ];

  let lastError;
  for (const model of models) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Quiz GeneXus Advanced',
        },
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: 'Voce e um gerador de questoes de prova sobre GeneXus Advanced. Responda APENAS com JSON valido, sem marcacao, sem explicacao extra.',
            },
            {
              role: 'user',
              content: `Gere ${count} questoes de multipla escolha sobre os topicos: ${topics.join(', ')}. Cada questao deve ter: "type": "multiple_choice", "topic", "difficulty" ("easy","medium","hard"), "question", "options" (array de 4 alternativas), "correct" (indice 0-3), "explanation". Retorne um array JSON.`,
            },
          ],
          temperature: 0.8,
          max_tokens: 4000,
        }),
      });

      if (!res.ok) {
        lastError = new Error(`HTTP ${res.status}`);
        continue;
      }

      const json = await res.json();
      const text = json.choices?.[0]?.message?.content;
      if (!text) {
        lastError = new Error('Empty response');
        continue;
      }

      const parsed = JSON.parse(text.replace(/```json\s*/gi, '').replace(/```\s*/g, ''));
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((q, i) => ({
          ...q,
          id: 'ai_' + i + '_' + Math.random().toString(36).slice(2, 8),
        }));
      }
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError || new Error('All models failed');
}
