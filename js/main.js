import { getState, setOnChange } from './state.js';
import { render as renderStart, mount as mountStart } from './screens/StartScreen.js';
import { render as renderQuiz, mount as mountQuiz } from './screens/QuizScreen.js';
import { render as renderResult, mount as mountResult } from './screens/ResultScreen.js';
import { renderQuestion } from './components/QuestionCard.js';

let currentScreen = null;
let cleanup = null;

function navigate(screen) {
  if (screen === currentScreen) return;
  if (cleanup) { cleanup(); cleanup = null; }

  const content = document.getElementById('content');
  const s = getState();

  if (screen === 'start') {
    content.innerHTML = renderStart();
    cleanup = mountStart();
  } else if (screen === 'quiz') {
    content.innerHTML = renderQuiz();
    cleanup = mountQuiz();
  } else if (screen === 'result') {
    content.innerHTML = renderResult();
    cleanup = mountResult();
  }

  updateTopbar(s);
  currentScreen = screen;
}

function updateTopbar(s) {
  const indicator = document.getElementById('progress-indicator');
  if (!indicator) return;
  if (s.screen === 'quiz' && s.questions.length > 0) {
    const answered = s.answers.filter(a => a !== null && a !== undefined).length;
    indicator.textContent = `${answered}/${s.questions.length} respondidas`;
  } else if (s.screen === 'result') {
    indicator.textContent = 'Concluido';
  } else {
    indicator.textContent = '';
  }
}

function updateQuestionCard(s) {
  const q = s.questions[s.currentIndex];
  if (!q) return;

  const card = document.getElementById('questionCard');
  if (card) {
    const answer = s.answers[s.currentIndex] ?? null;
    card.outerHTML = renderQuestion(q, answer);
  }

  const nav = document.querySelector('.nav-buttons');
  if (nav) {
    const total = s.questions.length;
    nav.innerHTML = `
      <button class="btn btn-outline" id="prevBtn" ${s.currentIndex === 0 ? 'disabled' : ''}>
        Anterior
      </button>
      ${s.currentIndex < total - 1
        ? `<button class="btn btn-primary" id="nextBtn">Continuar</button>`
        : `<button class="btn btn-success" id="finishBtn">Finalizar Prova</button>`
      }
    `;
  }

  updateCounter(s);
  updateProgress(s);
  updateTopbar(s);
}

function updateCounter(s) {
  const el = document.getElementById('questionCounter');
  if (el) el.textContent = `Questao ${s.currentIndex + 1} de ${s.questions.length}`;
}

function updateProgress(s) {
  const fill = document.querySelector('.progress-fill');
  if (fill) {
    const pct = s.questions.length > 0 ? ((s.currentIndex) / s.questions.length) * 100 : 0;
    fill.style.width = `${pct}%`;
  }
}

function handleStateChange(newState, prevState) {
  if (newState.screen !== prevState.screen) {
    navigate(newState.screen);
  } else if (newState.screen === 'quiz') {
    if (newState.currentIndex !== prevState.currentIndex) {
      updateQuestionCard(newState);
    } else {
      updateCounter(newState);
      updateProgress(newState);
      updateTopbar(newState);
    }
  }
}

setOnChange(handleStateChange);
navigate(getState().screen);
