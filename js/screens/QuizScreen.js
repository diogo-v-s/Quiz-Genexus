import { getState, setState, resetState, saveHistory } from '../state.js';
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
      <p id="questionCounter">
        Questao ${idx + 1} de ${total}
        ${s.timerDuration > 0 ? ` | <span id="timerDisplay">${formatTime(s.timeLeft)}</span>` : ''}
      </p>
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

let timerInterval = null;

export function mount() {
  const content = document.getElementById('content');

  const s = getState();
  if (s.timerDuration > 0 && s.timeLeft <= 0) {
    setState({ timeLeft: s.timerDuration });
  }

  if (s.timerDuration > 0 && !timerInterval) {
    timerInterval = setInterval(() => {
      const cur = getState();
      if (cur.timeLeft <= 1) {
        clearInterval(timerInterval);
        timerInterval = null;
        setState({ timeLeft: 0 });
        finishQuiz();
        return;
      }
      setState({ timeLeft: cur.timeLeft - 1 });
      const td = document.getElementById('timerDisplay');
      if (td) {
        td.textContent = formatTime(cur.timeLeft - 1);
        td.className = cur.timeLeft <= 60 ? 'danger' : cur.timeLeft <= 180 ? 'warning' : '';
      }
    }, 1000);
  }

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

  const keyHandler = (e) => {
    const s = getState();

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

    const q = s.questions[s.currentIndex];
    const isLast = s.currentIndex >= s.questions.length - 1;

    if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      if ((q.type === 'multiple_choice' && idx < (q.options ? q.options.length : 4)) ||
          (q.type !== 'multiple_choice' && idx < 2)) {
        selectAnswer(idx);
      }
      return;
    }

    if (e.key === 'v' || e.key === 'V') { selectAnswer(0); return; }
    if (e.key === 'f' || e.key === 'F') { selectAnswer(1); return; }

    if (e.key === 'Enter') {
      if (s.answers[s.currentIndex] == null) {
        alert('Selecione uma resposta antes de continuar.');
        return;
      }
      if (isLast) {
        try { finishQuiz(); } catch (ex) { alert('Erro: ' + ex.message); }
      } else {
        goTo(s.currentIndex + 1);
      }
      return;
    }

    if (e.key === 'ArrowLeft') { goTo(s.currentIndex - 1); return; }
    if (e.key === 'ArrowRight') {
      if (s.answers[s.currentIndex] == null) return;
      goTo(s.currentIndex + 1);
      return;
    }
    if (e.key === 'Escape') {
      if (confirm('Tem certeza que deseja cancelar a prova?')) resetState();
      return;
    }
  };

  document.addEventListener('click', handler);
  document.addEventListener('keydown', keyHandler);

  return () => {
    document.removeEventListener('click', handler);
    document.removeEventListener('keydown', keyHandler);
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
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

  const result = { total, correct, score, byTopic };
  saveHistory(result);
  setState({ completed: true, result });
  setState({ screen: 'result' });
}
