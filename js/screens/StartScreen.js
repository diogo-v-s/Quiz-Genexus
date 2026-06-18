import { getState, setState } from '../state.js';
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
          <div class="ai-section">
            <label class="ai-toggle">
              <input type="checkbox" id="aiToggle" ${s.aiEnabled ? 'checked' : ''}>
              <span>Usar IA para gerar questoes</span>
            </label>
            <div class="ai-key-input" id="aiKeyWrap" style="${s.aiEnabled ? '' : 'display:none'}">
              <input type="password" id="apiKeyInput" class="input" placeholder="Chave da API OpenRouter (sk-or-...)" value="${s.apiKey}">
              <a href="https://openrouter.ai/keys" target="_blank" class="ai-help">Obter chave gratuita</a>
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
    if (!pill || pill.classList.contains('selected')) return;
    document.querySelectorAll('.topic-pill.selected').forEach(p => p.classList.remove('selected'));
    pill.classList.add('selected');
    setState({ selectedTopics: [pill.dataset.topic], error: null });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const selected = Array.from(document.querySelectorAll('.topic-pill.selected')).map(p => p.dataset.topic);

    if (selected.length === 0) {
      setState({ error: 'Selecione pelo menos um topico.' });
      return;
    }

    const aiEnabled = document.getElementById('aiToggle').checked;
    const apiKey = document.getElementById('apiKeyInput').value;
    setState({ selectedTopics: selected, questionCount: parseInt(document.getElementById('qty').value), apiKey, aiEnabled, error: null, generating: true });

    try {
      const data = await generateQuestions(selected, parseInt(document.getElementById('qty').value));
      if (!data.questions || data.questions.length === 0) {
        throw new Error('Nenhuma questao foi gerada. Verifique se o servidor esta rodando.');
      }
      setState({
        questions: shuffle(data.questions),
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

  const aiToggle = document.getElementById('aiToggle');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const aiKeyWrap = document.getElementById('aiKeyWrap');

  const onAiToggle = () => {
    const enabled = aiToggle.checked;
    aiKeyWrap.style.display = enabled ? '' : 'none';
    setState({ aiEnabled: enabled, error: null });
  };

  const onApiKeyInput = () => {
    setState({ apiKey: apiKeyInput.value, error: null });
  };

  aiToggle?.addEventListener('change', onAiToggle);
  apiKeyInput?.addEventListener('input', onApiKeyInput);
  topicList?.addEventListener('click', onPillClick);
  form?.addEventListener('submit', onSubmit);

  return () => {
    aiToggle?.removeEventListener('change', onAiToggle);
    apiKeyInput?.removeEventListener('input', onApiKeyInput);
    topicList?.removeEventListener('click', onPillClick);
    form?.removeEventListener('submit', onSubmit);
  };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function loadTopics() {
  const topicList = document.getElementById('topicList');
  try {
    const data = await fetchTopics();
    setState({ topics: data.topics, selectedTopics: [data.topics[0]], error: null });
    if (topicList) {
      topicList.innerHTML = data.topics.map((t, i) => `
        <button type="button" class="topic-pill${i === 0 ? ' selected' : ''}" data-topic="${t}" ${getState().generating ? 'disabled' : ''}>
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
