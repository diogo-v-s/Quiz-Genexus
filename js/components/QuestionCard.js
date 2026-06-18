export function renderQuestion(q, answer) {
  const letters = ['A', 'B', 'C', 'D'];
  const isMc = q.type === 'multiple_choice';

  const optionsHtml = q.options.map((opt, i) => {
    let cls = 'option';
    const isSelected = answer !== null && answer !== undefined && answer.selected === i;
    if (isSelected) cls += ' selected';

    const label = isMc ? letters[i] : (i === 0 ? 'V' : 'F');
    return `
      <div class="${cls}" data-index="${i}">
        <span class="letter">${label}</span>
        <span>${opt}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="card" id="questionCard">
      <div class="question-meta">
        <span class="badge badge-topic">${q.topic || 'Geral'}</span>
        ${isMc
          ? '<span class="badge badge-multiple_choice">Multipla Escolha</span>'
          : '<span class="badge badge-true_false">Verdadeiro/Falso</span>'
        }
        <span class="badge badge-difficulty-${q.difficulty || 'medium'}">${q.difficulty || 'medium'}</span>
      </div>
      <h3>${q.question}</h3>
      <div class="options" id="optionsContainer">
        ${optionsHtml}
      </div>
    </div>
  `;
}
