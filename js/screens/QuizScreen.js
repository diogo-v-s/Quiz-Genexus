import { getState, setState, resetState } from '../state.js';
import { renderQuestion } from '../components/QuestionCard.js';

export function render() {
  const s = getState();
  if (!s.questions.length) return '<p>Nenhuma questao disponivel.</p>';

  const total = s.questions.length;
  const idx = s.currentIndex;
  const pct = total > 0 ? (idx / total) * 100 : 0;

  return `
    <div class="screen active">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
      <p id="questionCounter">Questao ${idx + 1} de ${total}</p>
      ${renderQuestion(s.questions[idx], s.answers[idx] ?? null)}
      <div class="nav-buttons">
        <button class="btn btn-outline" id="prevBtn" ${idx === 0 ? 'disabled' : ''}>
          Anterior
        </button>
        ${idx < total - 1
          ? `<button class="btn btn-primary" id="nextBtn">Continuar</button>`
          : `<button class="btn btn-success" id="finishBtn">Finalizar Prova</button>`
        }
        <button class="btn btn-danger" id="cancelBtn">Cancelar</button>
      </div>
    </div>
  `;
}

export function mount() {
  const content = document.getElementById('content');

  const handler = (e) => {
    const s = getState();

    const option = e.target.closest('.option');
    if (option && content.contains(option)) {
      selectAnswer(parseInt(option.dataset.index));
      return;
    }

    if (e.target.id === 'prevBtn' || e.target.closest('#prevBtn')) {
      goTo(s.currentIndex - 1);
      return;
    }

    if (e.target.id === 'nextBtn' || e.target.closest('#nextBtn')) {
      if (s.answers[s.currentIndex] == null) {
        alert('Selecione uma resposta antes de continuar.');
        return;
      }
      goTo(s.currentIndex + 1);
      return;
    }

    if (e.target.id === 'cancelBtn' || e.target.closest('#cancelBtn')) {
      if (confirm('Tem certeza que deseja cancelar a prova?')) {
        resetState();
      }
      return;
    }

    if (e.target.id === 'finishBtn' || e.target.closest('#finishBtn')) {
      if (s.answers[s.currentIndex] == null) {
        alert('Selecione uma resposta antes de finalizar.');
        return;
      }
      try { finishQuiz(); } catch (e) { alert('Erro: ' + e.message); }
      return;
    }
  };

  document.addEventListener('click', handler);

  return () => {
    document.removeEventListener('click', handler);
  };
}

function selectAnswer(selectedIndex) {
  const s = getState();
  const q = s.questions[s.currentIndex];
  const isCorrect = q.type === 'multiple_choice'
    ? selectedIndex === q.correct
    : (selectedIndex === 0 ? q.correct === true : q.correct === false);

  const newAnswers = [...s.answers];
  newAnswers[s.currentIndex] = {
    questionId: q.id,
    selected: selectedIndex,
    isCorrect,
  };

  setState({ answers: newAnswers });

  document.querySelectorAll('.option').forEach((opt, i) => {
    opt.classList.toggle('selected', i === selectedIndex);
  });

  updateTopbar();
}

function goTo(newIndex) {
  const s = getState();
  if (newIndex < 0 || newIndex >= s.questions.length) return;
  setState({ currentIndex: newIndex });
  const content = document.getElementById('content');
  if (content) {
    try {
      content.innerHTML = render();
    } catch (e) {
      console.error('Erro ao renderizar questao:', e);
      content.innerHTML = '<p class="error-msg">Erro ao carregar questao. Tente novamente.</p>';
    }
  }
  updateTopbar();
}

function updateTopbar() {
  const s = getState();
  const indicator = document.getElementById('progress-indicator');
  if (!indicator) return;
  const answered = s.answers.filter(a => a != null).length;
  indicator.textContent = `${answered}/${s.questions.length} respondidas`;
}

function finishQuiz() {
  const s = getState();
  for (let i = 0; i < s.questions.length; i++) {
    if (s.answers[i] == null) {
      alert(`Voce deixou a questao ${i + 1} sem responder.`);
      setState({ currentIndex: i });
      const content = document.getElementById('content');
      if (content) content.innerHTML = render();
      updateTopbar();
      return;
    }
  }

  const total = s.questions.length;
  const correct = s.answers.filter(a => a?.isCorrect).length;
  const score = Math.round((correct / total) * 100);

  const byTopic = {};
  for (let i = 0; i < s.questions.length; i++) {
    const q = s.questions[i];
    const t = q.topic || 'Geral';
    if (!byTopic[t]) byTopic[t] = { correct: 0, total: 0 };
    byTopic[t].total++;
    if (s.answers[i]?.isCorrect) byTopic[t].correct++;
  }

  setState({ completed: true, result: { total, correct, score, byTopic } });
  setState({ screen: 'result' });
}
