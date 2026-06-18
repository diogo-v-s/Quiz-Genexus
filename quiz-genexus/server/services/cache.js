const questionsCache = new Map();
let generationInProgress = false;

export function getCached(topic) {
  return questionsCache.get(topic) || null;
}

export function setCached(topic, questions) {
  questionsCache.set(topic, questions);
}

export function getAllCached() {
  const all = [];
  for (const questions of questionsCache.values()) {
    all.push(...questions);
  }
  return all;
}

export function isGenerating() {
  return generationInProgress;
}

export function setGenerating(value) {
  generationInProgress = value;
}

export function clearCache() {
  questionsCache.clear();
}
