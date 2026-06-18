import { getTopicList, getQuestionsForTopics } from './questions.js';

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

export async function generateQuestions(topics, count = 3, difficulties) {
  const data = await tryBackend('/api/generate', {
    method: 'POST',
    body: JSON.stringify({ topics, count })
  });

  if (data && data.questions && data.questions.length > 0) {
    return data;
  }

  const questions = getQuestionsForTopics(topics, count, difficulties);
  return { questions };
}
