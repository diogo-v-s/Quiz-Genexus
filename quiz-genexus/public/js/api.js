import { getTopicList, getQuestionsForTopics } from './questions.js';

const BACKEND_URL = window.location.origin;

async function tryBackend(path, options = {}) {
  try {
    const res = await fetch(`${BACKEND_URL}${path}`, {
      signal: AbortSignal.timeout(2000),
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
  // Try backend first (for AI-generated questions via Ollama)
  const data = await tryBackend('/api/generate', {
    method: 'POST',
    body: JSON.stringify({ topics, count })
  });

  if (data && data.questions && data.questions.length > 0) {
    return data;
  }

  // Fallback to local seed questions
  const questions = getQuestionsForTopics(topics, count);
  return { questions, fallback: true };
}
