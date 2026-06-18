import { getState, setState, getHistory } from '../state.js';
import { fetchTopics, generateQuestions } from '../api.js';

const TOPIC_ICONS = {
  "TRANSACTIONS & RULES": "\uD83D\uDCC4",
  "FORMULAS": "\uD83E\uDDEE",
  "DYNAMIC TRANSACTIONS & EVENTS": "\u26A1",
  "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)": "\u2699\uFE0F",
  "DATA SELECTOR": "\uD83D\uDCC4",
  "DATA PROVIDER": "\u2601\uFE0F",
  "BUSINESS COMPONENTS": "\uD83E\uDDE9",
  "DATABASE UPDATES (NEW, FOR EACH, DELETE)": "\uD83D\uDCBE",
  "TRANSACTIONAL INTEGRITY (LUW)": "\uD83D\uDD17",
  "WEB PANELS & UI EVENTS": "\uD83D\uDDA5\uFE0F",
  "ACCESS TO EXTERNAL DATA": "\uD83C\uDF10",
};

export function render() {
  const s = getState();
  return `
    <div class="screen ${s.screen === 'start' ? 'active' : ''}" id="startScreen">
      <div class="hero-section">
        <h1>Quiz GeneXus Advanced 18</h1>
        <p>Teste seus conhecimentos. Selecione os t\u00F3picos e a quantidade de quest\u00F5es para come\u00E7ar.</p>
      </div>

      ${s.error ? `<div class="error-msg">${s.error}</div>` : ''}

      <div class="card" id="topicCard">
        <div class="card-header">
          <div>
            <h3>T\u00F3picos</h3>
            <p>Selecione um ou mais t\u00F3picos</p>
          </div>
          <button type="button" id="selectAllBtn">Selecionar todos</button>
        </div>
        <div class="topic-list" id="topicList">
          ${s.topics.length === 0
            ? '<p style="color:var(--text-secondary);padding:6px 0;font-size:0.85rem">Carregando t\u00F3picos...</p>'
            : s.topics.map(t => {
                const icon = TOPIC_ICONS[t] || '\uD83D\uDCDD';
                const isSelected = s.selectedTopics.includes(t);
                return `
                  <div class="topic-row${isSelected ? ' selected' : ''}" data-topic="${t}" ${s.generating ? 'disabled' : ''}>
                    <span class="topic-icon">${icon}</span>
                    <span class="topic-name">${t}</span>
                    <span class="topic-check">${isSelected ? '\u2713' : ''}</span>
                  </div>
                `;
              }).join('')
          }
        </div>
      </div>

      <div class="card" id="configCard">
        <div class="card-header">
          <div>
            <h3>Configura\u00E7\u00F5es</h3>
            <p>Quantidade, dificuldade e tempo limite</p>
          </div>
        </div>
        <div class="qty-control">
          <button type="button" class="qty-btn" id="qtyDec" ${s.questionCount <= 1 || s.generating ? 'disabled' : ''}>\u2212</button>
          <span class="qty-value" id="qtyDisplay">${s.questionCount}</span>
          <button type="button" class="qty-btn" id="qtyInc" ${s.questionCount >= 15 || s.generating ? 'disabled' : ''}>+</button>
        </div>
        <div class="extra-row">
          <div class="option-group">
            <label>Dificuldade</label>
            <div class="diff-pills">
              ${['easy', 'medium', 'hard'].map(d => {
                const diffs = s.difficulties || [];
                return `<span class="diff-pill${diffs.includes(d) ? ' selected' : ''}" data-diff="${d}">${
                  d === 'easy' ? 'F\u00E1cil' : d === 'medium' ? 'M\u00E9dio' : 'Dif\u00EDcil'
                }</span>`;
              }).join('')}
            </div>
          </div>
          <div class="option-group">
            <label for="timer">Tempo limite</label>
            <select id="timer" class="timer-select" ${s.generating ? 'disabled' : ''}>
              <option value="0" ${(s.timerDuration || 0) === 0 ? 'selected' : ''}>Sem limite</option>
              <option value="300" ${s.timerDuration === 300 ? 'selected' : ''}>5 minutos</option>
              <option value="600" ${s.timerDuration === 600 ? 'selected' : ''}>10 minutos</option>
              <option value="900" ${s.timerDuration === 900 ? 'selected' : ''}>15 minutos</option>
              <option value="1200" ${s.timerDuration === 1200 ? 'selected' : ''}>20 minutos</option>
            </select>
          </div>
        </div>
      </div>

      <button type="button" class="btn-proceed" id="startBtn" ${s.generating ? 'disabled' : ''}>
        ${s.generating
          ? '<span class="spinner-ring" style="width:20px;height:20px;border-width:2px"></span> Gerando quest\u00F5es...'
          : 'Come\u00E7ar Quiz'
        }
      </button>

      ${renderHistory()}
    </div>
  `;
}

export function mount() {
  const topicList = document.getElementById('topicList');
  const startBtn = document.getElementById('startBtn');

  if (getState().topics.length === 0) {
    loadTopics();
  }

  const onTopicClick = (e) => {
    const row = e.target.closest('.topic-row');
    if (!row || row.hasAttribute('disabled')) return;
    const s = getState();
    let selected = [...s.selectedTopics];
    const topic = row.dataset.topic;
    if (selected.includes(topic)) {
      selected = selected.filter(t => t !== topic);
    } else {
      selected.push(topic);
    }
    setState({ selectedTopics: selected, error: null });
    document.querySelectorAll('.topic-row').forEach(r => {
      const isSel = selected.includes(r.dataset.topic);
      r.classList.toggle('selected', isSel);
      r.querySelector('.topic-check').textContent = isSel ? '\u2713' : '';
    });
  };

  const onSelectAll = () => {
    const s = getState();
    const allSelected = s.topics.every(t => s.selectedTopics.includes(t));
    const selected = allSelected ? [] : [...s.topics];
    setState({ selectedTopics: selected, error: null });
    document.querySelectorAll('.topic-row').forEach(r => {
      const isSel = selected.includes(r.dataset.topic);
      r.classList.toggle('selected', isSel);
      r.querySelector('.topic-check').textContent = isSel ? '\u2713' : '';
    });
  };

  const onQtyChange = (delta) => {
    const s = getState();
    const newVal = Math.max(1, Math.min(15, s.questionCount + delta));
    if (newVal === s.questionCount) return;
    setState({ questionCount: newVal });
    const display = document.getElementById('qtyDisplay');
    if (display) display.textContent = newVal;
    const decBtn = document.getElementById('qtyDec');
    const incBtn = document.getElementById('qtyInc');
    if (decBtn) decBtn.disabled = newVal <= 1;
    if (incBtn) incBtn.disabled = newVal >= 15;
  };

  const onDiffClick = (e) => {
    const pill = e.target.closest('.diff-pill');
    if (!pill) return;
    const val = pill.dataset.diff;
    const s = getState();
    let diffs = [...s.difficulties];
    if (diffs.includes(val)) {
      diffs = diffs.filter(d => d !== val);
    } else {
      diffs.push(val);
    }
    if (diffs.length === 0) return;
    setState({ difficulties: diffs });
    document.querySelectorAll('.diff-pill').forEach(p => {
      p.classList.toggle('selected', diffs.includes(p.dataset.diff));
    });
  };

  const onSubmit = async (e) => {
    const btn = e.target.closest('#startBtn');
    if (!btn) return;

    const s = getState();
    const selected = s.selectedTopics;

    if (selected.length === 0) {
      setState({ error: 'Selecione pelo menos um t\u00F3pico.' });
      return;
    }

    const diffs = s.difficulties || ['easy', 'medium', 'hard'];
    const timerEl = document.getElementById('timer');
    const timerDuration = timerEl ? parseInt(timerEl.value) : 0;
    const qty = s.questionCount;
    setState({ timerDuration, error: null, generating: true });

    try {
      const data = await generateQuestions(selected, qty, diffs);
      if (!data.questions || data.questions.length === 0) {
        throw new Error('Nenhuma quest\u00E3o foi gerada.');
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

  document.addEventListener('click', onTopicClick);
  document.getElementById('selectAllBtn')?.addEventListener('click', onSelectAll);
  document.getElementById('qtyDec')?.addEventListener('click', () => onQtyChange(-1));
  document.getElementById('qtyInc')?.addEventListener('click', () => onQtyChange(1));
  document.addEventListener('click', onDiffClick);
  document.addEventListener('click', onSubmit);

  return () => {
    document.removeEventListener('click', onTopicClick);
    document.removeEventListener('click', onDiffClick);
    document.getElementById('selectAllBtn')?.removeEventListener('click', onSelectAll);
    document.getElementById('qtyDec')?.removeEventListener('click', () => onQtyChange(-1));
    document.getElementById('qtyInc')?.removeEventListener('click', () => onQtyChange(1));
    document.removeEventListener('click', onSubmit);
  };
}

function renderHistory() {
  const history = getHistory();
  if (history.length === 0) return '';
  return `
    <div class="card" style="margin-top:8px">
      <div class="card-header">
        <div>
          <h3>\u00DAltimos resultados</h3>
          <p>Seus \u00FAltimos quizzes realizados</p>
        </div>
      </div>
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
      topicList.innerHTML = data.topics.map(t => {
        const icon = TOPIC_ICONS[t] || '\uD83D\uDCDD';
        const sel = preSelected.includes(t);
        return `
          <div class="topic-row${sel ? ' selected' : ''}" data-topic="${t}">
            <span class="topic-icon">${icon}</span>
            <span class="topic-name">${t}</span>
            <span class="topic-check">${sel ? '\u2713' : ''}</span>
          </div>
        `;
      }).join('');
    }
  } catch (err) {
    setState({ error: 'N\u00E3o foi poss\u00EDvel carregar t\u00F3picos.' });
    if (topicList) {
      topicList.innerHTML = '<p style="color:var(--error)">Erro ao carregar. Verifique o servidor.</p>';
    }
  }
}
