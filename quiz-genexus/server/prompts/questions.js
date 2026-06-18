export function buildPrompt(chunk, count, mcCount, tfCount, difficulty = 'medium') {
  return `Você é um especialista em GeneXus Advanced. Gere questões de prova baseadas APENAS no conteúdo fornecido.

CONTEÚDO:
${chunk}

REGRAS:
- Gere exatamente ${count} questões: ${mcCount} Múltipla Escolha + ${tfCount} Verdadeiro/Falso
- Dificuldade: ${difficulty}
- Idioma: Português Brasileiro
- Cada questão deve ter explicação didática citando o conceito
- NÃO use formatação markdown na resposta
- Responda APENAS com o JSON válido

FORMATO JSON:
{
  "questions": [
    {
      "type": "multiple_choice",
      "topic": "Nome do Tópico",
      "difficulty": "${difficulty}",
      "question": "Pergunta clara e direta?",
      "options": ["Opção A", "Opção B", "Opção C", "Opção D"],
      "correct": 2,
      "explanation": "Explicação: o conceito X define que..."
    },
    {
      "type": "true_false",
      "topic": "Nome do Tópico",
      "difficulty": "${difficulty}",
      "question": "Afirmação para julgar.",
      "correct": true,
      "explanation": "Verdadeiro: conforme documentação..."
    }
  ]
}`;
}

export const SYSTEM_PROMPT = 'Você é um gerador de questões de múltipla escolha e verdadeiro/falso sobre GeneXus Advanced. Responda apenas com JSON válido, sem markdown.';
