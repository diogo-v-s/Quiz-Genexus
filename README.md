# Quiz GeneXus Advanced 18

Sistema de quiz interativo baseado no conteúdo do curso **GeneXus Advanced 18**, com perguntas de múltipla escolha e verdadeiro/falso sobre todos os tópicos do curso.

## Objetivo

Testar e reforçar o conhecimento dos conceitos avançados do GeneXus 18 através de um quiz dinâmico, com feedback imediato e replay das questões.

## Acesso

<a href="https://diogo-v-s.github.io/Quiz-Genexus" target="_blank">https://diogo-v-s.github.io/Quiz-Genexus</a>

## Como funciona

1. Selecione os tópicos que deseja estudar (Transactions, Formulas, Procedures, Business Components, etc.)
2. Escolha a quantidade de questões por tópico
3. Responda o quiz — selecione a opção e clique em "Continuar"
4. Resultado — veja se foi Aprovado (>= 60%) ou Reprovado
5. Revisão — clique em "Visualizar Questões" para ver cada pergunta, sua resposta, a resposta correta e a explicação

## Tópicos abordados

- Transactions & Rules (Add, Subtract, Nullable, Subtypes)
- Formulas (Horizontal, Inline, Aggregate, Compound)
- Dynamic Transactions & Events
- Procedures (For Each, Subroutines, Unique Clause)
- Data Selector
- Data Provider
- Business Components (Insert, Update, Delete, Save)
- Database Updates (New, For Each, Delete)
- Transactional Integrity (LUW)
- Web Panels & UI Events
- Access to External Data (REST, SOAP, ODATA)

## Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Backend (opcional):** Node.js + Express
- **IA (opcional):** Ollama (geração automática de questões)
- **Hospedagem:** GitHub Pages

## Rodar localmente

```bash
npm install
npm start
```

Abra http://localhost:3000

Para gerar questões automaticamente via IA, instale o Ollama:

```bash
ollama pull llama3.1:8b
ollama serve
```

## Estrutura

```
quiz-genexus/
├── index.html          Pagina principal
├── css/style.css       Estilos
├── js/                 Frontend (vanilla JS)
│   ├── main.js         Roteamento e navegacao
│   ├── state.js        Gerenciamento de estado
│   ├── questions.js    Banco de 40 questoes seed
│   ├── api.js          Comunicacao com backend
│   ├── screens/        Telas (Start, Quiz, Result)
│   └── components/     Componentes (QuestionCard)
├── server/             Backend opcional (Node.js)
│   ├── index.js        Servidor Express
│   ├── routes/         API de geracao
│   └── services/       Chunker, Ollama, validacao
└── content/            Conteudo do curso (.txt)
```

## Sobre o conteudo

As questoes foram extraidas do material oficial do curso GeneXus Advanced 18, ministrado pelo instrutor Daniel Strack. O sistema conta com 40 questoes pre-escritas e suporte para geracao ilimitada via IA (Ollama).
