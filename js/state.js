const STORAGE_KEY = 'quiz_genexus_state';

let state = {
  screen: 'start',
  topics: [],
  selectedTopics: [],
  difficulties: ['easy', 'medium', 'hard'],
  questionCount: 3,
  questions: [],
  currentIndex: 0,
  answers: [],
  completed: false,
  result: null,
  loading: false,
  error: null,
  generating: false,
  timerDuration: 0,
  timeLeft: 0,
};

let onChange = null;

export function setOnChange(fn) {
  onChange = fn;
}

export function getState() {
  return state;
}

export function setState(partial) {
  const prev = { ...state };
  state = { ...state, ...partial };
  save();
  if (onChange) onChange(state, prev);
}

export function saveHistory(result) {
  try {
    const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    history.unshift({
      date: new Date().toISOString(),
      score: result.score,
      total: result.total,
      correct: result.correct,
      topics: result.byTopic ? Object.keys(result.byTopic) : [],
    });
    if (history.length > 5) history.length = 5;
    localStorage.setItem('quiz_history', JSON.stringify(history));
  } catch {}
}

export function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('quiz_history') || '[]');
  } catch { return []; }
}

export function resetState() {
  const prev = { ...state };
  state = {
    screen: 'start',
    topics: state.topics,
    selectedTopics: state.selectedTopics,
    difficulties: state.difficulties,
    questionCount: 3,
    questions: [],
    currentIndex: 0,
    answers: [],
    completed: false,
    result: null,
    loading: false,
    error: null,
    generating: false,
    timerDuration: state.timerDuration,
    timeLeft: 0,
  };
  localStorage.removeItem(STORAGE_KEY);
  if (onChange) onChange(state, prev);
}

function save() {
  try {
    const toSave = {
      questions: state.questions,
      currentIndex: state.currentIndex,
      answers: state.answers,
      completed: state.completed,
      result: state.result,
      selectedTopics: state.selectedTopics,
      difficulties: state.difficulties,
      questionCount: state.questionCount,
      timerDuration: state.timerDuration,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {}
}

function load() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.questions?.length && !parsed.completed) {
        state = { ...state, ...parsed, loading: false, error: null };
      }
    }
  } catch {}
}

load();
