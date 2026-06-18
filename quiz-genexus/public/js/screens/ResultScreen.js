import { getState, setState, resetState } from '../state.js';

export function render() {
  const s = getState();
  if (!s.result) return '';

  const { total, correct, score, byTopic } = s.result;
  const approved = score >= 60;
  const gradeColor = approved ? 'var(--success)' : 'var(--error)';
  const statusText = approved ? 'APROVADO' : 'REPROVADO';

  const letters = ['A', 'B', 'C', 'D'];

  const reviewHtml = s.questions.map((q, i) => {
    const a = s.answers[i];
    const isCorrect = a?.isCorrect;
    const selectedIdx = a?.selected ?? 0;
    const selectedLabel = q.options[selectedIdx];
    const correctIdx = q.type === 'multiple_choice' ? q.correct : (q.correct ? 0 : 1);
    const correctLabel = q.type === 'multiple_choice' ? q.options[q.correct] : (q.correct ? 'Verdadeiro' : 'Falso');

    const optionsDisplay = q.options.map((opt, oi) => {
      let cls = 'review-option';
      const labels = q.type === 'multiple_choice' ? letters : ['V', 'F'];
      if (oi === correctIdx) cls += ' review-correct';
      if (oi === selectedIdx && oi !== correctIdx) cls += ' review-wrong';
      return `<div class="${cls}">${labels[oi]}. ${opt}</div>`;
    }).join('');

    return `
      <div class="review-item" data-q="${i}">
        <div class="review-header" onclick="this.parentElement.classList.toggle('expanded')">
          <span class="review-status ${isCorrect ? 'status-correct' : 'status-wrong'}">
            ${isCorrect ? 'Acertou' : 'Errou'}
          </span>
          <span class="review-num">Questao ${i + 1}</span>
          <span class="review-toggle">Ver detalhes</span>
        </div>
        <div class="review-body">
          <div class="review-question">${q.question}</div>
          ${optionsDisplay}
          <div class="review-answer">
            <span class="${isCorrect ? 'text-correct' : 'text-wrong'}">
              Sua resposta: ${selectedLabel}
            </span>
          </div>
          ${!isCorrect ? `<div class="review-correct-answer">Resposta correta: ${correctLabel}</div>` : ''}
          <button class="btn btn-small btn-explain" data-explain="${i}">Ver explicacao</button>
          <div class="review-explain" id="explain-${i}">${q.explanation}</div>
        </div>
      </div>
    `;
  }).join('');

  const topicHtml = Object.entries(byTopic).map(([topic, data]) => {
    const pct = data.total > 0 ? (data.correct / data.total) * 100 : 0;
    const barColor = pct >= 60 ? 'var(--success)' : pct >= 40 ? '#ca8a04' : 'var(--error)';
    return `
      <div class="topic-row">
        <span class="topic-label">${topic}</span>
        <div class="topic-bar">
          <div class="topic-bar-fill" style="width: ${pct}%; background: ${barColor}"></div>
        </div>
        <span class="topic-score">${data.correct}/${data.total}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="screen ${s.screen === 'result' ? 'active' : ''}">
      <div class="card result-summary">
        <div class="result-status ${approved ? 'status-approved' : 'status-failed'}">
          ${statusText}
        </div>
        <div class="result-score">
          <div class="score" style="color: ${gradeColor}">${score}%</div>
          <div class="score-label">${correct} de ${total} questoes corretas</div>
        </div>
        <div class="result-stats">
          <div class="stat-card">
            <div class="stat-value" style="color:var(--success)">${correct}</div>
            <div class="stat-label">Corretas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color:var(--error)">${total - correct}</div>
            <div class="stat-label">Incorretas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color:var(--primary)">${total}</div>
            <div class="stat-label">Total</div>
          </div>
        </div>
        <div class="result-actions">
          <button class="btn btn-primary" id="viewReviewBtn">Visualizar Questoes</button>
          <button class="btn btn-outline" id="restartBtn">Refazer Prova</button>
        </div>
      </div>

      <div class="card topic-breakdown">
        <h3>Desempenho por Topico</h3>
        ${topicHtml}
      </div>

      <div class="card review-section" id="reviewSection" style="display:none">
        <h3>Revisao das Questoes</h3>
        ${reviewHtml}
      </div>
    </div>
  `;
}

export function mount() {
  document.getElementById('viewReviewBtn')?.addEventListener('click', () => {
    const section = document.getElementById('reviewSection');
    if (section) {
      const isHidden = section.style.display === 'none';
      section.style.display = isHidden ? 'block' : 'none';
      document.getElementById('viewReviewBtn').textContent = isHidden ? 'Esconder Questoes' : 'Visualizar Questoes';
    }
  });

  document.getElementById('restartBtn')?.addEventListener('click', () => {
    resetState();
  });

  document.querySelectorAll('.btn-explain').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.explain;
      const el = document.getElementById(`explain-${idx}`);
      if (el) {
        const isVisible = el.classList.contains('show');
        el.classList.toggle('show');
        btn.textContent = isVisible ? 'Ver explicacao' : 'Esconder explicacao';
      }
    });
  });
}
