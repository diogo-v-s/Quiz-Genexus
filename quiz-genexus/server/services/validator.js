import crypto from 'crypto';

export function validateQuestions(raw, topic) {
  let parsed;

  try {
    const cleaned = raw
      .replace(/```json\s*/gi, '')
      .replace(/```\s*$/g, '')
      .trim();
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error(`JSON inválido gerado para o tópico "${topic}"`);
  }

  if (!parsed.questions || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
    throw new Error(`Nenhuma questão gerada para o tópico "${topic}"`);
  }

  const validated = [];
  for (let q of parsed.questions) {
    try {
      if (q.type === 'multiple_choice') {
        if (!Array.isArray(q.options) || q.options.length !== 4) continue;
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) continue;
      } else if (q.type === 'true_false') {
        if (typeof q.correct !== 'boolean') continue;
        q.options = ['Verdadeiro', 'Falso'];
      } else continue;

      if (!q.question || q.question.length < 10) continue;
      if (!q.explanation || q.explanation.length < 10) continue;

      validated.push({
        id: crypto.randomUUID(),
        type: q.type,
        topic: q.topic || topic,
        difficulty: q.difficulty || 'medium',
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      });
    } catch {
      continue;
    }
  }

  if (validated.length === 0) {
    throw new Error(`Todas as questões do tópico "${topic}" foram rejeitadas na validação`);
  }

  return validated;
}
