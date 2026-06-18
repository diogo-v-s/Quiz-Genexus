import { Router } from 'express';
import { loadContent, chunkContent, getTopics } from '../services/chunker.js';
import { generateQuestions as callOllama } from '../services/ollama.js';
import { validateQuestions } from '../services/validator.js';
import { getCached, setCached, getAllCached, isGenerating, setGenerating, clearCache } from '../services/cache.js';
import { buildPrompt, SYSTEM_PROMPT } from '../prompts/questions.js';
import { getSeedQuestions } from '../services/seedQuestions.js';

export const generateRouter = Router();

let contentChunks = null;

function ensureContent() {
  if (!contentChunks) {
    const text = loadContent();
    contentChunks = chunkContent(text);
  }
  return contentChunks;
}

generateRouter.get('/topics', (req, res) => {
  res.json({ topics: getTopics() });
});

generateRouter.post('/generate', async (req, res) => {
  const { topics: selectedTopics, count = 3 } = req.body;

  if (!selectedTopics || !Array.isArray(selectedTopics) || selectedTopics.length === 0) {
    return res.status(400).json({ error: 'Selecione pelo menos um topico.' });
  }

  if (isGenerating()) {
    return res.status(409).json({ error: 'Ja existe uma geracao em andamento. Aguarde.' });
  }

  try {
    setGenerating(true);
    const chunks = ensureContent();
    const results = [];
    const topicsToProcess = chunks.filter(c => selectedTopics.includes(c.topic));

    if (topicsToProcess.length === 0) {
      return res.status(400).json({ error: 'Nenhum topico valido encontrado.' });
    }

    let usedFallback = false;

    for (const chunk of topicsToProcess) {
      const cached = getCached(chunk.topic);
      if (cached && cached.length > 0) {
        results.push(...cached);
        continue;
      }

      try {
        const mcCount = Math.ceil(count * 0.6);
        const tfCount = count - mcCount;
        const prompt = buildPrompt(chunk.text, count, mcCount, tfCount);

        console.log(`Gerando para: ${chunk.topic}...`);
        const raw = await callOllama(prompt, SYSTEM_PROMPT);
        const validated = validateQuestions(raw, chunk.topic);
        setCached(chunk.topic, validated);
        results.push(...validated);
        console.log(`  -> ${validated.length} questoes`);
      } catch (err) {
        console.log(`Falha ao gerar "${chunk.topic}": ${err.message}. Usando fallback.`);
        usedFallback = true;
        // Fallback para questoes seed
        const seedAll = getSeedQuestions();
        const seedForTopic = seedAll.filter(q => q.topic === chunk.topic);
        if (seedForTopic.length > 0) {
          const selected = seedForTopic.slice(0, count);
          setCached(chunk.topic, selected);
          results.push(...selected);
          console.log(`  -> ${selected.length} questoes (fallback)`);
        }
      }
    }

    if (results.length === 0 && usedFallback) {
      return res.status(500).json({
        error: 'Nao foi possivel gerar questoes. Verifique se o Ollama esta rodando (ollama serve) e tente novamente.',
        useSeed: true
      });
    }

    res.json({ questions: results, fallback: usedFallback });
  } catch (err) {
    console.error('Erro na geracao:', err);
    res.status(500).json({
      error: 'Erro ao gerar questoes: ' + err.message,
      useSeed: true
    });
  } finally {
    setGenerating(false);
  }
});

generateRouter.get('/questions', (req, res) => {
  const all = getAllCached();
  const seedAll = getSeedQuestions();
  res.json({
    total: all.length,
    questions: all.length > 0 ? all : seedAll
  });
});

generateRouter.post('/cache/clear', (req, res) => {
  clearCache();
  res.json({ ok: true });
});

generateRouter.get('/seed', (req, res) => {
  const seedAll = getSeedQuestions();
  const { topic } = req.query;
  if (topic) {
    res.json({ questions: seedAll.filter(q => q.topic === topic) });
  } else {
    res.json({ questions: seedAll });
  }
});
