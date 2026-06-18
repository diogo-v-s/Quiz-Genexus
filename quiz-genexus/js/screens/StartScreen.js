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
                  <label class="topic-item">
                    <input type="checkbox" value="${t}"
                      ${s.selectedTopics.includes(t) ? 'checked' : ''}
                      ${s.generating ? 'disabled' : ''}>
                    <span>${t}</span>
                  </label>
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

  // Load topics if not already loaded
  if (getState().topics.length === 0) {
    loadTopics();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const checks = document.querySelectorAll('#topicList input:checked');
    const selected = Array.from(checks).map(c => c.value);
    const qty = parseInt(document.getElementById('qty').value);

    if (selected.length === 0) {
      setState({ error: 'Selecione pelo menos um topico.' });
      return;
    }

    setState({ selectedTopics: selected, questionCount: qty, error: null, generating: true });

    try {
      const data = await generateQuestions(selected, qty);
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

  const onChangeCheck = () => setState({ error: null });

  form?.addEventListener('submit', onSubmit);
  topicList?.addEventListener('change', onChangeCheck);

  return () => {
    form?.removeEventListener('submit', onSubmit);
    topicList?.removeEventListener('change', onChangeCheck);
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
    setState({ topics: data.topics, selectedTopics: data.topics.slice(0, 3), error: null });
    // Update DOM directly
    if (topicList) {
      topicList.innerHTML = data.topics.map(t => `
        <label class="topic-item">
          <input type="checkbox" value="${t}" checked>
          <span>${t}</span>
        </label>
      `).join('');
    }
  } catch (err) {
    setState({ error: 'Nao foi possivel carregar topicos. O servidor esta rodando? (http://localhost:3000)' });
    if (topicList) {
      topicList.innerHTML = '<p style="color:var(--error)">Erro ao carregar. Verifique o servidor.</p>';
    }
  }
}
