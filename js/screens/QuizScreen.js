import { getState, setState } from '../state.js';
import { renderQuestion } from '../components/QuestionCard.js';

export function render() {
  const s = getState();
  if (!s.questions.length) return '<p>Nenhuma questao disponivel.</p>';

  const total = s.questions.length;
  const pct = total > 0 ? ((s.currentIndex) / total) * 100 : 0;

  return `
    <div class="screen ${s.screen === 'quiz' ? 'active' : ''}">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
      <p id="questionCounter">Questao ${s.currentIndex + 1} de ${total}</p>
      ${renderQuestion(s.questions[s.currentIndex], s.answers[s.currentIndex] ?? null)}
      <div class="nav-buttons">
        <button class="btn btn-outline" id="prevBtn" ${s.currentIndex === 0 ? 'disabled' : ''}>
          Anterior
        </button>
        ${s.currentIndex < total - 1
          ? `<button class="btn btn-primary" id="nextBtn">Continuar</button>`
          : `<button class="btn btn-success" id="finishBtn">Finalizar Prova</button>`
        }
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
      const idx = parseInt(option.dataset.index);
      selectAnswer(idx);
      return;
    }

    if (e.target.id === 'prevBtn' || e.target.closest('#prevBtn')) {
      if (s.currentIndex > 0) {
        setState({ currentIndex: s.currentIndex - 1 });
      }
      return;
    }

    if (e.target.id === 'nextBtn' || e.target.closest('#nextBtn')) {
      const currentAnswer = s.answers[s.currentIndex];
      if (currentAnswer === null || currentAnswer === undefined) {
        alert('Selecione uma resposta antes de continuar.');
        return;
      }
      if (s.currentIndex < s.questions.length - 1) {
        setState({ currentIndex: s.currentIndex + 1 });
      }
      return;
    }

    if (e.target.id === 'finishBtn' || e.target.closest('#finishBtn')) {
      const currentAnswer = s.answers[s.currentIndex];
      if (currentAnswer === null || currentAnswer === undefined) {
        alert('Selecione uma resposta antes de finalizar.');
        return;
      }
      finishQuiz();
      return;
    }
  };

  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
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

  // Direct DOM update - no re-render
  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.classList.toggle('selected', i === selectedIndex);
  });
}

function finishQuiz() {
  const s = getState();

  for (let i = 0; i < s.questions.length; i++) {
    if (s.answers[i] === null || s.answers[i] === undefined) {
      alert(`Voce deixou a questao ${i + 1} sem responder.`);
      setState({ currentIndex: i });
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

  setState({
    completed: true,
    result: { total, correct, score, byTopic },
    screen: 'result',
  });
}
