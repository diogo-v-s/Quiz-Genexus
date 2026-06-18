import crypto from 'crypto';

export const SEED_QUESTIONS = [
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "Qual o comportamento da regra Add no GeneXus quando o registro ja existe na base de dados?",
    options: ["Subtrai o valor", "Soma o novo valor ao existente", "Ignora a operacao", "Lanca um erro"],
    correct: 1,
    explanation: "Add soma o novo valor ao valor existente quando o registro ja existe na base de dados. Se nao existe, insere normalmente."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "O que acontece quando um atributo com Nullable = True fica vazio no formulario?",
    options: ["Envia 0 (zero) para o banco", "Envia string vazia para o banco", "Envia NULL para o banco", "Impede o salvamento"],
    correct: 2,
    explanation: "Quando o atributo aceita nulos e o campo fica vazio, o valor enviado ao banco e NULL, nao vazio."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "A regra Subtract no GeneXus, quando o registro existe, subtrai o valor informado.",
    correct: true,
    explanation: "Subtract subtrai o valor quando o registro ja existe. Se nao existe, insere com valor negativo."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "Client Side Validation no GeneXus tem como principal objetivo:",
    options: ["Reduzir a carga no servidor de banco de dados", "Melhorar a experiencia do usuario evitando viagens ao servidor", "Substituir todas as validacoes do servidor", "Criptografar dados sensiveis"],
    correct: 1,
    explanation: "Client Side Validation executa validacoes no lado do cliente antes de enviar ao servidor, melhorando a experiencia do usuario."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "medium",
    question: "Em uma formula horizontal, o que a clausula 'otherwise' significa?",
    options: ["A expressao padrao se nenhuma condicao for verdadeira", "O tratamento de erro da formula", "Uma condicao opcional", "O valor minimo aceito"],
    correct: 0,
    explanation: "A clausula otherwise define o valor padrao quando nenhuma condicao anterior (if) e satisfeita."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "hard",
    question: "Qual funcao de agregacao NÃO e suportada nativamente pelas Aggregate Formulas do GeneXus?",
    options: ["Count", "Average", "Find", "Concatenate"],
    correct: 3,
    explanation: "As funcoes suportadas sao: Count, Sum, Average, Max, Min e Find. Concatenate nao e uma funcao de agregacao nativa."
  },
  {
    type: "true_false",
    topic: "FORMULAS",
    difficulty: "easy",
    question: "Formulas de agregacao no GeneXus sempre precisam de um contexto para funcionar.",
    correct: false,
    explanation: "Falso. As formulas de agregacao nao precisam de um contexto, mas se houver, pode-se filtrar o resultado."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "medium",
    question: "Em uma formula inline, qual a base de contexto utilizada?",
    options: ["A tabela base do atributo formula", "A tabela estendida da transacao atual", "A tabela de parametros do usuario", "A tabela de sistema do GeneXus"],
    correct: 0,
    explanation: "Inline formulas usam o contexto da tabela base para calcular valores. O contexto pode ser da tabela estendida da tabela associada ao atributo formula."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "easy",
    question: "O que caracteriza uma Dynamic Transaction no GeneXus?",
    options: ["Nao possui tabela associada na base de dados", "E sincronizada automaticamente com um web service", "Usa uma tabela temporaria", "E executada apenas em modo batch"],
    correct: 0,
    explanation: "Dynamic Transactions nao possuem tabela associada na base de dados. Usam Data Provider para inicializar e receber dados."
  },
  {
    type: "true_false",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "O evento After Trn e disparado apos a execucao do Commit.",
    correct: true,
    explanation: "After Trn e disparado apos a execucao do Commit, no mesmo momento que AfterComplete."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "hard",
    question: "Qual evento de transacao e usado para inicializar variaveis quando a transacao e aberta?",
    options: ["Exit", "Track Context", "Start", "OnMessage"],
    correct: 2,
    explanation: "O Start event permite definir acoes executadas quando a transacao abre e comeca a trabalhar, como inicializar variaveis."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "O que a clausula 'When None' faz em um For each?",
    options: ["Executa quando nenhum registro atende a condicao do Where", "Ignora registros com valores nulos", "Para a execucao do For each", "Filtra registros duplicados"],
    correct: 0,
    explanation: "When none executa o bloco de codigo quando nenhum registro atende a condicao do Where no For each."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "hard",
    question: "Subrotinas no GeneXus NAO suportam:",
    options: ["Variaveis globais", "Comando For each", "Passagem de parametros", "Uso em Web Panels"],
    correct: 2,
    explanation: "Subrotinas sao definidas com SUB e invocadas com DO. Nao suportam passagem de parametros - usam variaveis globais."
  },
  {
    type: "true_false",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "A clausula Unique pode ser usada em cortes de controle (Control Break).",
    correct: false,
    explanation: "Falso. A clausula Unique nao e suportada para cortes de controle. E usada em listas sem elementos repetidos."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "O que acontece quando uma Subroutine e chamada dentro de um For each e a sub-rotina tambem contem um For each?",
    options: ["Os For each sao aninhados automaticamente", "Ocorre um erro de compilacao", "Os For each nao serao aninhados", "A sub-rotina e ignorada"],
    correct: 2,
    explanation: "Se uma sub-rotina e chamada dentro de um For each e tem tambem um comando For each, eles nao serao aninhados."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "Qual a principal vantagem de usar um Data Selector no GeneXus?",
    options: ["Aumentar a performance das consultas", "Centralizar condicoes e ordens para reutilizacao", "Criar indices automaticamente", "Gerar relatorios formatados"],
    correct: 1,
    explanation: "O Data Selector centraliza condicoes e ordens para reutilizar em varios objetos, simplificando codigo e manutencao."
  },
  {
    type: "true_false",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "O Data Selector pode ser usado em Formulas no GeneXus.",
    correct: true,
    explanation: "Data Selector pode ser usado em For each, Formulas, e na propriedade Data Selector de Grid com tabela Base."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "Qual estrutura representa o fluxo de trabalho de um Data Provider?",
    options: ["SELECT -> WHERE -> ORDER", "INPUT -> Transformacao -> OUTPUT", "CREATE -> READ -> UPDATE -> DELETE", "REQUEST -> PROCESS -> RESPONSE"],
    correct: 1,
    explanation: "Data Provider segue: INPUT -> Transformacao -> OUTPUT, onde a saida e uma estrutura hierarquica em formato SDT/BC."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "easy",
    question: "Quais formatos de saida o Data Provider suporta?",
    options: ["Apenas XML e JSON", "Txt, Html, Xml, Json, SDT e BC", "Apenas SDT e BC", "CSV, XML e JSON"],
    correct: 1,
    explanation: "Os formatos suportados sao: Txt, Html, Xml, Json, SDT e BC."
  },
  {
    type: "true_false",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "O metodo Save() de um Data Provider persiste dados diretamente no banco.",
    correct: true,
    explanation: "O metodo Save() permite persistir dados do Data Provider diretamente no banco de dados."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "easy",
    question: "Qual o valor do enum Mode quando um Business Component esta em modo Insert?",
    options: ["INS", "UPD", "DLT", "DSP"],
    correct: 0,
    explanation: "O Mode Insert tem valor 'INS' (insert). Outros modos: Update = 'UPD', Delete = 'DLT', Display = 'DSP'."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "Qual metodo de Business Component tenta insert e, se houver DuplicatePrimaryKey, faz update?",
    options: ["Save()", "InsertOrUpdate()", "Upsert()", "Merge()"],
    correct: 1,
    explanation: "InsertOrUpdate() tenta Insert. Se ocorrer erro DuplicatePrimaryKey, executa Update automaticamente."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "hard",
    question: "Qual metodo permite acessar uma linha especifica em um BC de dois niveis?",
    options: ["Load()", "GetByKey()", "Find()", "Seek()"],
    correct: 1,
    explanation: "GetByKey(LineId) e usado para acessar uma linha especifica em BC de dois niveis, retornando o BC da linha."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "O que retorna &bc.Success() apos uma operacao de banco?",
    options: ["O numero de registros afetados", "Verdadeiro se a operacao foi bem sucedida", "O ID do registro inserido", "A mensagem de erro se houver"],
    correct: 1,
    explanation: "&bc.Success() retorna verdadeiro se a ultima operacao (Insert, Update, Delete) foi bem sucedida."
  },
  {
    type: "true_false",
    topic: "BUSINESS COMPONENTS",
    difficulty: "easy",
    question: "Business Components fazem commit implicito apos cada operacao.",
    correct: false,
    explanation: "Falso. Business Components NAO fazem commit implicito. O desenvolvedor precisa chamar Commit explicitamente."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "O comando New em procedures ignora quais elementos da transacao?",
    options: ["Apenas as regras", "Apenas os eventos", "Regras e eventos definidos na transacao", "Nao ignora nada"],
    correct: 2,
    explanation: "New ignora regras e eventos definidos na transacao. Conta apenas com controle de duplicados (When duplicate)."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "hard",
    question: "O comando Delete dentro de um For each remove o registro de qual tabela?",
    options: ["Da tabela estendida", "Da tabela base do For each", "De todas as tabelas relacionadas", "Da tabela de auditoria"],
    correct: 1,
    explanation: "Delete remove o registro da tabela base do For each. Nao remove registros da tabela estendida."
  },
  {
    type: "true_false",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "O comando New em procedures realiza controle de integridade referencial automaticamente.",
    correct: false,
    explanation: "Falso. New NAO tem controle de integridade referencial. Conta apenas com controle de duplicados (When duplicate)."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "O update via For each atualiza quais atributos?",
    options: ["Apenas a PK", "Atributos da tabela base e estendida, exceto PK", "Apenas atributos da estendida", "Todos os atributos incluindo PK"],
    correct: 1,
    explanation: "Update via For each atualiza atributos da tabela base e sua estendida, com excecao da PK."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "O que e uma LUW (Logical Unit of Work) no GeneXus?",
    options: ["Um tipo de tabela especial", "Conjunto de operacoes executadas atomicamente", "Um comando de banco de dados", "Uma propriedade de transacao"],
    correct: 1,
    explanation: "LUW e um conjunto de operacoes que devem ser executadas atomicamente como uma unidade logica de trabalho."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Dois objetos transacao podem estar em uma unica LUW se forem Business Components.",
    correct: true,
    explanation: "Dois objetos transacao podem estar em uma unica LUW se forem usados como Business Components ou forem transacoes Dinamicas."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "hard",
    question: "O commit automatico em procedimentos ocorre quando:",
    options: ["Sempre ao final do procedimento", "Apenas se houver update, delete ou insert", "Nunca ocorre automaticamente", "A cada 10 registros processados"],
    correct: 1,
    explanation: "Commit automatico em procedimentos so ocorre se GeneXus interpretar necessario, ou seja, se ha update, delete ou insert."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "easy",
    question: "Qual a diferenca entre Web Panel com e sem Base Table?",
    options: ["Com Base Table nao precisa de codigo; sem Base Table requer codigo para carregar dados", "Sem Base Table e mais rapido", "Com Base Table nao suporta Grids", "Nao ha diferenca"],
    correct: 0,
    explanation: "Web Panel com Base Table tem atributos disponiveis diretamente. Sem Base Table, dados precisam ser carregados via codigo."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "hard",
    question: "Na ordem de execucao de eventos em um Panel, qual evento e executado primeiro?",
    options: ["Refresh", "Start", "ClientStart", "Load"],
    correct: 2,
    explanation: "A ordem e: 1. ClientStart, 2. Call to Data Provider, 3. Start, 4. Refresh, 5. Fixed Part Drawn, 6. Call to Grid DP, 7. Load, 8. Grid Part Drawn."
  },
  {
    type: "true_false",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Eventos Client-side disparam Server Side Events automaticamente em todas as situacoes.",
    correct: false,
    explanation: "Falso. Eventos Client-side nao disparam Server Side Events automaticamente, a menos que o comando Refresh seja usado."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Grids baseados em SDT nao disparam qual evento?",
    options: ["Start", "Refresh", "Load", "ClientStart"],
    correct: 2,
    explanation: "Load e o ultimo evento de sistema executado, mas para SDT-based Grids, Load nao e disparado."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "easy",
    question: "O que e um Composite Command no GeneXus?",
    options: ["Um comando SQL complexo", "Um bloco de codigo client-side com mais de 1 linha", "Uma formula de agregacao", "Um tipo de Data Provider"],
    correct: 1,
    explanation: "Composite command e um bloco de codigo para Client Side Events com mais de 1 linha, com parada em erro e tratamento automatico."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "easy",
    question: "Quais protocolos sao suportados pelo GeneXus para consumo de Web Services?",
    options: ["REST e SOAP", "Apenas REST", "Apenas SOAP", "HTTP e FTP"],
    correct: 0,
    explanation: "GeneXus suporta REST (arquitetura leve baseada em HTTP) e SOAP (protocolo estruturado com WSDL) para web services."
  },
  {
    type: "true_false",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "ODATA e um protocolo RESTful padrao OASIS para acesso e consulta a dados.",
    correct: true,
    explanation: "ODATA e um protocolo RESTful padrao OASIS que permite CRUD em bases remotas com consultas padronizadas."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "O que e engenharia reversa no contexto de acesso a dados no GeneXus?",
    options: ["Descriptografar dados do banco", "Gerar objetos GeneXus a partir do esquema de um banco existente", "Converter codigo GeneXus para outra linguagem", "Otimizar consultas SQL"],
    correct: 1,
    explanation: "Engenharia reversa permite conectar-se a uma base de dados existente e gerar objetos GeneXus automaticamente a partir do esquema do banco."
  }
];

export function getSeedQuestions() {
  return SEED_QUESTIONS.map(q => ({
    ...q,
    id: crypto.randomUUID()
  }));
}
