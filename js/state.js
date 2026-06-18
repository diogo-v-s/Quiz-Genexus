const STORAGE_KEY = 'quiz_genexus_state';

let state = {
  screen: 'start',
  topics: [],
  selectedTopics: [],
  questionCount: 3,
  questions: [],
  currentIndex: 0,
  answers: [],
  completed: false,
  result: null,
  loading: false,
  error: null,
  generating: false,
  apiKey: '',
  aiEnabled: false,
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

export function resetState() {
  const prev = { ...state };
  state = {
    screen: 'start',
    topics: state.topics,
    selectedTopics: state.selectedTopics,
    questionCount: 3,
    questions: [],
    currentIndex: 0,
    answers: [],
    completed: false,
    result: null,
    loading: false,
    error: null,
    generating: false,
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
      questionCount: state.questionCount,
      apiKey: state.apiKey,
      aiEnabled: state.aiEnabled,
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
