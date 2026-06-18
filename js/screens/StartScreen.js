import { getState, setState, getHistory } from '../state.js';
import { fetchTopics, generateQuestions } from '../api.js';

export function render() {
  const s = getState();
  return `
    <div class="screen ${s.screen === 'start' ? 'active' : ''}" id="startScreen">
      <div class="card">
        <h2>Quiz GeneXus Advanced 18</h2>
        <p>Teste seus conhecimentos do curso GeneXus Advanced. Selecione os topicos e a quantidade de questoes para comecar.</p>
      </div>
      ${s.error ? `<div class="error-msg">${s.error}</div>` : ''}
      <div class="card">
        <form id="configForm">
          <div class="form-group">
            <label>Topicos para incluir no quiz:</label>
            <div class="topic-list" id="topicList">
              ${s.topics.length === 0
                ? '<p style="color:var(--muted)">Carregando topicos...</p>'
                : s.topics.map(t => `
                  <button type="button" class="topic-pill${s.selectedTopics.includes(t) ? ' selected' : ''}" data-topic="${t}" ${s.generating ? 'disabled' : ''}>
                    <span class="pill-radio"></span>
                    <span class="pill-label">${t}</span>
                  </button>
                `).join('')
              }
            </div>
          </div>
          <div class="form-group">
            <label for="qty">Quantidade de questoes por topico:</label>
            <select id="qty" ${s.generating ? 'disabled' : ''}>
              <option value="2" ${s.questionCount === 2 ? 'selected' : ''}>2 questoes</option>
              <option value="3" ${s.questionCount === 3 ? 'selected' : ''}>3 questoes</option>
              <option value="4" ${s.questionCount === 4 ? 'selected' : ''}>4 questoes</option>
              <option value="5" ${s.questionCount === 5 ? 'selected' : ''}>5 questoes</option>
            </select>
          </div>
          <div class="form-group">
            <label for="timer">Tempo limite:</label>
            <select id="timer" ${s.generating ? 'disabled' : ''}>
              <option value="0" ${s.timerDuration === 0 ? 'selected' : ''}>Sem limite</option>
              <option value="300" ${s.timerDuration === 300 ? 'selected' : ''}>5 minutos</option>
              <option value="600" ${s.timerDuration === 600 ? 'selected' : ''}>10 minutos</option>
              <option value="900" ${s.timerDuration === 900 ? 'selected' : ''}>15 minutos</option>
              <option value="1200" ${s.timerDuration === 1200 ? 'selected' : ''}>20 minutos</option>
            </select>
          </div>
          <div class="form-group">
            <label>Dificuldade:</label>
            <div class="diff-checkboxes">
              <label class="diff-checkbox">
                <input type="checkbox" class="diff-input" value="easy" ${s.difficulties.includes('easy') ? 'checked' : ''}>
                <span>Facil</span>
              </label>
              <label class="diff-checkbox">
                <input type="checkbox" class="diff-input" value="medium" ${s.difficulties.includes('medium') ? 'checked' : ''}>
                <span>Medio</span>
              </label>
              <label class="diff-checkbox">
                <input type="checkbox" class="diff-input" value="hard" ${s.difficulties.includes('hard') ? 'checked' : ''}>
                <span>Dificil</span>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" id="startBtn" ${s.generating ? 'disabled' : ''}>
            ${s.generating
              ? '<span class="spinner-ring" style="width:20px;height:20px;border-width:3px"></span> Gerando questoes...'
              : 'Gerar Prova'
            }
          </button>
        </form>
      </div>
      ${renderHistory()}
    </div>
  `;
}

export function mount() {
  const form = document.getElementById('configForm');
  const topicList = document.getElementById('topicList');

  if (getState().topics.length === 0) {
    loadTopics();
  }

  const onPillClick = (e) => {
    const pill = e.target.closest('.topic-pill');
    if (!pill) return;
    const s = getState();
    let selected = [...s.selectedTopics];
    const topic = pill.dataset.topic;
    if (selected.includes(topic)) {
      selected = selected.filter(t => t !== topic);
    } else {
      selected.push(topic);
    }
    setState({ selectedTopics: selected, error: null });
    document.querySelectorAll('.topic-pill').forEach(p => {
      p.classList.toggle('selected', selected.includes(p.dataset.topic));
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const selected = Array.from(document.querySelectorAll('.topic-pill.selected')).map(p => p.dataset.topic);

    if (selected.length === 0) {
      setState({ error: 'Selecione pelo menos um topico.' });
      return;
    }

    const checkedDiff = Array.from(document.querySelectorAll('.diff-input:checked')).map(cb => cb.value);
    if (checkedDiff.length === 0) {
      setState({ error: 'Selecione pelo menos uma dificuldade.' });
      return;
    }
    const timerDuration = parseInt(document.getElementById('timer').value);
    setState({ selectedTopics: selected, difficulties: checkedDiff, questionCount: parseInt(document.getElementById('qty').value), timerDuration, error: null, generating: true });

    try {
      const data = await generateQuestions(selected, parseInt(document.getElementById('qty').value), checkedDiff);
      if (!data.questions || data.questions.length === 0) {
        throw new Error('Nenhuma questao foi gerada. Verifique se o servidor esta rodando.');
      }
      setState({
        questions: data.questions,
        currentIndex: 0,
        answers: [],
        completed: false,
        result: null,
        screen: 'quiz',
        generating: false,
      });
    } catch (err) {
      setState({ error: err.message, generating: false });
    }
  };

  document.addEventListener('click', onPillClick);
  form?.addEventListener('submit', onSubmit);

  return () => {
    document.removeEventListener('click', onPillClick);
    form?.removeEventListener('submit', onSubmit);
  };
}

function renderHistory() {
  const history = getHistory();
  if (history.length === 0) return '';
  return `
    <div class="card">
      <h3 style="margin-bottom:12px;font-size:1rem">Ultimos resultados</h3>
      ${history.map(h => `
        <div class="history-row">
          <span class="history-date">${new Date(h.date).toLocaleDateString('pt-BR')}</span>
          <span class="history-score ${h.score >= 60 ? 'text-correct' : 'text-wrong'}">${h.score}%</span>
          <span class="history-detail">${h.correct}/${h.total}</span>
        </div>
      `).join('')}
    </div>
  `;
}

async function loadTopics() {
  const topicList = document.getElementById('topicList');
  try {
    const data = await fetchTopics();
    const preSelected = data.topics.slice(0, 3);
    setState({ topics: data.topics, selectedTopics: preSelected, error: null });
    if (topicList) {
      topicList.innerHTML = data.topics.map(t => `
        <button type="button" class="topic-pill${preSelected.includes(t) ? ' selected' : ''}" data-topic="${t}" ${getState().generating ? 'disabled' : ''}>
          <span class="pill-radio"></span>
          <span class="pill-label">${t}</span>
        </button>
      `).join('');
    }
  } catch (err) {
    setState({ error: 'Nao foi possivel carregar topicos. O servidor esta rodando? (http://localhost:3000)' });
    if (topicList) {
      topicList.innerHTML = '<p style="color:var(--error)">Erro ao carregar. Verifique o servidor.</p>';
    }
  }
}
