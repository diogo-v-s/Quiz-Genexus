import { getState, setOnChange } from './state.js';
import { render as renderStart, mount as mountStart } from './screens/StartScreen.js';
import { render as renderQuiz, mount as mountQuiz } from './screens/QuizScreen.js';
import { render as renderResult, mount as mountResult } from './screens/ResultScreen.js';

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

function handleStateChange(newState, prevState) {
  console.log('[stateChange] screen:', prevState.screen, '->', newState.screen, 'questions:', newState.questions?.length);
  if (newState.screen !== prevState.screen) {
    navigate(newState.screen);
  } else if (newState.screen === 'quiz') {
    updateTopbar(newState);
  }
}

setOnChange(handleStateChange);
navigate(getState().screen);
