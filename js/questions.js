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
    question: "Qual funcao de agregacao NAO e suportada nativamente pelas Aggregate Formulas do GeneXus?",
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
    explanation: "Inline formulas usam o contexto da tabela base para calcular valores."
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
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "hard",
    question: "Para consumir um Web Service REST no GeneXus, qual objeto deve ser utilizado?",
    options: ["Data Provider", "Procedure com HTTP Call", "Web Panel", "Stored Procedure"],
    correct: 1,
    explanation: "Para consumir REST, usa-se Procedure com HTTP Call ou o objeto REST Procedure. Para SOAP, importa-se o WSDL."
  },
  {
    type: "true_false",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "easy",
    question: "O GeneXus suporta integracao com bancos de dados NoSQL como MongoDB atraves de conectores nativos.",
    correct: false,
    explanation: "Falso. GeneXus tem suporte nativo a bancos SQL relacionais. Para NoSQL, e necessario usar External Objects ou APIs customizadas."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "Qual o efeito da regra 'NoAccept' em um atributo de transacao no GeneXus?",
    options: ["Impede que o atributo seja exibido no formulario", "Bloqueia a aceitacao de valores nulos", "Marca o atributo como somente leitura na interface", "Remove a validacao de tipo do atributo"],
    correct: 2,
    explanation: "NoAccept impede que o atributo seja editado pelo usuario, tornando-o apenas para exibicao."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "hard",
    question: "Em uma formula vertical de agregacao, como o GeneXus determina o nivel de agrupamento?",
    options: ["Pela clausula Group By explicita", "Pelo contexto da formula (atributo base)", "Pela ordem alfabetica dos atributos", "Pela PK da tabela base"],
    correct: 1,
    explanation: "O nivel de agrupamento em formulas verticais e definido pelo contexto — o atributo base da formula determina o agrupamento."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "Para que serve o evento 'Exit' em uma transacao GeneXus?",
    options: ["Encerrar a aplicacao", "Cancelar a operacao atual e retornar ao estado anterior", "Salvar e fechar a transacao", "Exportar dados para arquivo"],
    correct: 1,
    explanation: "O evento Exit e acionado quando o usuario cancela ou fecha a transacao, permitindo limpar variaveis ou confirmar o cancelamento."
  },
  {
    type: "true_false",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "Toda transacao dinamica no GeneXus requer obrigatoriamente um Data Provider para inicializar seus dados.",
    correct: true,
    explanation: "Dynamic Transactions usam Data Provider como fonte de dados inicial, pois nao possuem tabela propria no banco."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "Qual clausula do For each permite ordenar os registros de forma crescente?",
    options: ["ASCEND", "ORDER ASC", "SORT BY", "ORDER BY"],
    correct: 0,
    explanation: "A clausula ORDER pode ser ASCEND (crescente) ou DESCEND (decrescente) no comando For each do GeneXus."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "easy",
    question: "Um Data Selector pode receber parametros para filtrar dados dinamicamente?",
    options: ["Sim, atraves de parametros definidos no Data Selector", "Nao, Data Selector e estatico", "Apenas se vinculado a um For each", "Somente em versoes Enterprise"],
    correct: 0,
    explanation: "Data Selector aceita parametros para filtrar dados dinamicamente, permitindo reuso com diferentes criterios."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "Qual a diferenca entre um Data Selector e uma Query no GeneXus?",
    options: ["Data Selector nao executa, apenas define condicoes; Query executa e retorna dados", "Query e mais rapida que Data Selector", "Data Selector so funciona em Web Panels", "Nao ha diferenca"],
    correct: 0,
    explanation: "Data Selector define condicoes e ordenacao para reuso, mas nao executa. Query executa e retorna um conjunto de dados."
  },
  {
    type: "true_false",
    topic: "DATA SELECTOR",
    difficulty: "easy",
    question: "Um Data Selector pode ser usado como fonte de dados para um Grid em um Web Panel.",
    correct: true,
    explanation: "Data Selector pode ser usado como fonte de dados de Grid, Formulas e em comandos For each."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "hard",
    question: "No Data Provider, como criar uma estrutura hierarquica aninhada (pai-filho)?",
    options: ["Usando atributos com o mesmo nome", "Definindo nos filhos dentro do no pai no XML de saida", "Criando SDTs separados e vinculando", "Nao e possivel criar hierarquia em Data Provider"],
    correct: 1,
    explanation: "A hierarquia e definida pela indentacao dos nos no XML de saida — nos filhos sao definidos dentro do no pai."
  },
  {
    type: "true_false",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "O Data Provider pode transformar dados de multiplas fontes em uma unica estrutura de saida.",
    correct: true,
    explanation: "Data Provider suporta multiplas fontes de entrada e as transforma em uma unica estrutura hierarquica de saida (SDT, XML, JSON)."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "hard",
    question: "O que acontece se um comando New tentar inserir um registro com chave primaria ja existente?",
    options: ["O registro e atualizado automaticamente", "O comando When duplicate e executado", "Um erro de banco e lancado e o programa para", "O registro e ignorado silenciosamente"],
    correct: 1,
    explanation: "When duplicate captura a tentativa de inserir chave duplicada e executa o bloco definido, permitindo tratar a situacao."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "O que ocorre quando um erro de banco acontece dentro de uma LUW no GeneXus?",
    options: ["Apenas a operacao com erro e desfeita", "Toda a LUW e desfeita (rollback)", "O programa continua ignorando o erro", "Um commit parcial e executado"],
    correct: 1,
    explanation: "Em caso de erro dentro de uma LUW, todo o conjunto de operacoes e desfeito (rollback) para manter a integridade."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "easy",
    question: "O comando Commit no GeneXus persiste todas as operacoes da LUW atual no banco de dados.",
    correct: true,
    explanation: "Commit finaliza a LUW atual e persiste todas as operacoes realizadas dentro dela no banco de dados."
  },

  // ======= TRANSACTIONS & RULES (6-15) =======
  {
    type: "true_false",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "A regra Default em uma transacao GeneXus define um valor padrao para um atributo quando nenhum valor e informado pelo usuario.",
    correct: true,
    explanation: "A regra Default atribui automaticamente um valor ao atributo caso nenhum valor tenha sido informado pelo usuario no momento da insercao do registro."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "No GeneXus, para que serve a propriedade 'Logical Deletion' em uma transacao?",
    options: ["Permite excluir logicamente um registro sem remove-lo fisicamente da base de dados", "Exclui permanentemente o registro da base de dados", "Impede a exclusao do registro", "Copia o registro para uma tabela de auditoria antes de excluir"],
    correct: 0,
    explanation: "A propriedade 'Logical Deletion' permite marcar registros como excluidos sem remove-los fisicamente, preservando a integridade referencial e permitindo a recuperacao futura dos dados."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "Em uma transacao GeneXus, para que serve a regra Trigger?",
    options: ["Disparar automaticamente a execucao de uma transacao filha", "Validar dados antes da insercao na base de dados", "Definir um valor padrao para um atributo", "Impedir a exclusao de registros com dependencias"],
    correct: 0,
    explanation: "A regra Trigger e utilizada para associar uma transacao filha a uma transacao pai, disparando automaticamente a execucao da transacao filha quando a transacao pai e executada."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONS & RULES",
    difficulty: "easy",
    question: "A regra Refresh em uma transacao GeneXus e utilizada para recarregar os dados do formulario a partir da base de dados apos alteracoes.",
    correct: true,
    explanation: "A regra Refresh atualiza os dados exibidos no formulario com as informacoes mais recentes da base de dados apos operacoes de insercao, alteracao ou exclusao."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "Em uma transacao GeneXus, qual o efeito de configurar DeleteRule como 'Cascade'?",
    options: ["Apenas o registro pai e excluido", "Todos os registros filhos sao excluidos automaticamente", "Os registros filhos sao preservados apos a exclusao do pai", "A exclusao e bloqueada se existirem registros filhos associados"],
    correct: 1,
    explanation: "DeleteRule = 'Cascade' configura a exclusao em cascata, fazendo com que todos os registros filhos associados sejam automaticamente excluidos quando o registro pai for excluido."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "Qual a ordem correta de execucao das regras em uma transacao GeneXus?",
    options: ["Default, NoAccept, Trigger, Add/Subtract/Delete", "Add/Subtract/Delete, Default, NoAccept, Trigger", "Trigger, Default, NoAccept, Add/Subtract/Delete", "NoAccept, Default, Trigger, Add/Subtract/Delete"],
    correct: 0,
    explanation: "A ordem padrao de execucao das regras em uma transacao GeneXus e: Default, NoAccept, Trigger, Add/Subtract/Delete."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONS & RULES",
    difficulty: "medium",
    question: "A regra Error em uma transacao GeneXus interrompe a execucao da transacao e exibe uma mensagem de erro personalizada ao usuario.",
    correct: true,
    explanation: "A regra Error permite definir mensagens de erro personalizadas que sao exibidas ao usuario e interrompem o fluxo normal da transacao, impedindo a confirmacao da operacao."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "hard",
    question: "Em uma transacao GeneXus com heranca, como as regras definidas na transacao pai sao herdadas pela transacao filha?",
    options: ["As regras do pai sao ignoradas na transacao filha", "As regras do pai sao executadas antes das regras da filha", "A transacao filha deve redefinir todas as regras do pai", "Apenas regras Default e NoAccept sao herdadas do pai"],
    correct: 1,
    explanation: "Em uma transacao com heranca, as regras da transacao pai sao automaticamente herdadas e executadas antes das regras definidas na transacao filha, respeitando a hierarquia de heranca."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "hard",
    question: "No GeneXus, qual o comportamento esperado quando um atributo possui simultaneamente as regras Default e NoAccept?",
    options: ["A regra Default e ignorada", "A regra NoAccept e ignorada", "Default define o valor e NoAccept impede alteracao posterior", "Ambas as regras sao ignoradas e o atributo fica livre"],
    correct: 2,
    explanation: "Quando um atributo possui Default e NoAccept simultaneamente, a regra Default define o valor inicial do atributo e a regra NoAccept impede que o usuario altere esse valor posteriormente."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONS & RULES",
    difficulty: "hard",
    question: "Em uma transacao GeneXus, qual a finalidade da propriedade 'Trigger Condition' em uma regra Trigger?",
    options: ["Definir a condicao sob a qual a transacao filha deve ser disparada", "Definir o valor padrao do atributo que serve como trigger", "Validar a integridade referencial entre pai e filho", "Controlar a ordem de execucao das triggers na transacao"],
    correct: 0,
    explanation: "A propriedade 'Trigger Condition' define a condicao que determina quando a transacao filha sera automaticamente disparada pela regra Trigger, permitindo controle seletivo sobre a execucao."
  },

  // ======= FORMULAS (6-15) =======
  {
    type: "true_false",
    topic: "FORMULAS",
    difficulty: "easy",
    question: "No GeneXus, formulas horizontais sao calculadas registro a registro, considerando apenas valores do proprio registro.",
    correct: true,
    explanation: "Formulas horizontais operam sobre valores de atributos do proprio registro atual, realizando calculos linha a linha sem considerar outros registros da base."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "easy",
    question: "No GeneXus, qual o contexto padrao de uma formula definida diretamente em um atributo de uma transacao?",
    options: ["Contexto do nivel hierarquico onde o atributo esta definido", "Contexto global de toda a base de dados", "Contexto definido manualmente pelo desenvolvedor", "Contexto da transacao principal independente do nivel"],
    correct: 0,
    explanation: "O contexto padrao de uma formula em uma transacao e o nivel hierarquico onde o atributo esta definido, significando que a formula tem acesso aos atributos do mesmo nivel e niveis superiores."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "easy",
    question: "O que caracteriza uma formula vertical no GeneXus?",
    options: ["Opera sobre um conjunto de registros para calcular um valor agregado", "Opera sobre campos de um unico registro", "Opera apenas sobre atributos do tipo chave", "Opera exclusivamente sobre dados de fontes externas"],
    correct: 0,
    explanation: "Formulas verticais, tambem conhecidas como formulas de agregacao, operam sobre um conjunto de registros para calcular valores como soma, media, contagem, maximo e minimo."
  },
  {
    type: "true_false",
    topic: "FORMULAS",
    difficulty: "easy",
    question: "Formulas inline no GeneXus exigem a criacao de uma transacao separada para sua definicao.",
    correct: false,
    explanation: "Formulas inline sao definidas diretamente na propriedade Formula do atributo dentro da propria transacao, sem necessidade de uma transacao ou objeto separado para sua definicao."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "medium",
    question: "No GeneXus, qual funcao de agregacao e utilizada para contar o numero de registros em um determinado grupo?",
    options: ["Count", "Sum", "Avg", "Max"],
    correct: 0,
    explanation: "A funcao de agregacao Count e utilizada para contar o numero de registros dentro de um grupo definido pelo contexto da formula."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "medium",
    question: "Qual a principal diferenca entre formulas horizontais e formulas verticais no GeneXus?",
    options: ["Horizontais operam no mesmo registro; verticais operam sobre conjuntos de registros", "Horizontais utilizam SQL nativo; verticais utilizam regras de transacao", "Verticais sao mais rapidas que horizontais por usarem indices", "Nao ha diferenca conceitual; sao termos intercambiaveis"],
    correct: 0,
    explanation: "Formulas horizontais realizam calculos com valores do proprio registro, enquanto formulas verticais (ou de agregacao) operam sobre um conjunto de registros para calcular valores agregados."
  },
  {
    type: "true_false",
    topic: "FORMULAS",
    difficulty: "medium",
    question: "No GeneXus, formulas de agregacao podem utilizar a clausula 'Filter' para restringir os registros considerados no calculo.",
    correct: true,
    explanation: "Formulas de agregacao no GeneXus suportam a clausula 'Filter' ou condicoes para restringir quais registros serao considerados no calculo agregado."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "hard",
    question: "No GeneXus, como as formulas de agregacao tratam valores nulos ao calcular a media (Average)?",
    options: ["Valores nulos sao ignorados no calculo da media", "Valores nulos sao convertidos para zero no calculo", "A formula retorna erro se houver valores nulos", "A media considera nulos como zero apenas no divisor"],
    correct: 0,
    explanation: "Funcoes de agregacao como Average (Avg) ignoram valores nulos no calculo, considerando apenas registros com valores nao nulos tanto no somatorio quanto no divisor."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "hard",
    question: "Em uma formula de agregacao no GeneXus, qual o comportamento da funcao 'Sum' quando o conjunto de dados e vazio (nenhum registro encontrado)?",
    options: ["Retorna zero", "Retorna nulo", "Retorna o valor do atributo anterior", "Gera um erro de execucao"],
    correct: 0,
    explanation: "A funcao de agregacao Sum retorna zero quando aplicada a um conjunto vazio de registros, pois a soma de nenhum elemento e zero."
  },
  {
    type: "multiple_choice",
    topic: "FORMULAS",
    difficulty: "hard",
    question: "No GeneXus, qual o comportamento de uma formula de agregacao 'Max' quando aplicada a um conjunto de registros onde todos os valores do atributo alvo sao nulos?",
    options: ["Retorna nulo", "Retorna zero", "Retorna o menor valor possivel do tipo de dados", "Gera um erro de execucao"],
    correct: 0,
    explanation: "A funcao Max retorna nulo quando todos os valores do conjunto sao nulos, pois nao ha um valor maximo valido a ser determinado entre valores nulos."
  },

  // ======= DYNAMIC TRANSACTIONS & EVENTS (6-15) =======
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "easy",
    question: "Qual evento de transacao GeneXus permite interceptar e modificar mensagens do sistema antes de serem exibidas ao usuario?",
    options: ["OnMessage", "OnLoad", "OnError", "OnClick"],
    correct: 0,
    explanation: "O evento OnMessage permite interceptar, modificar ou suprimir mensagens do ambiente GeneXus antes de sua exibicao ao usuario."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "easy",
    question: "Qual das opcoes abaixo NAO corresponde a um evento padrao de uma transacao GeneXus?",
    options: ["Before Trn", "OnClick", "AfterComplete", "OnMessage"],
    correct: 1,
    explanation: "OnClick e um evento de controles de interface, nao sendo um evento padrao de transacao. Os eventos padrao incluem Start, Exit, Before Trn, After Trn, AfterComplete, OnLoad e OnMessage."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "O evento 'Before Trn' em uma transacao GeneXus e executado em qual momento do ciclo?",
    options: ["Ao abrir a transacao", "Ao sair do registro atual", "Antes da operacao de commit no banco de dados", "Apos a operacao de commit no banco de dados"],
    correct: 2,
    explanation: "O evento Before Trn e executado imediatamente antes da operacao de commit, permitindo validacoes finais e ajustes nos dados antes da gravacao."
  },
  {
    type: "true_false",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "Em transacoes dinamicas, o layout da interface pode ser customizado dinamicamente em tempo de execucao sem recompilacao.",
    correct: true,
    explanation: "Transacoes dinamicas permitem customizar o layout em execucao atraves de atributos e variaveis dinamicos, sem necessidade de recompilar a aplicacao."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "O evento 'AfterComplete' em uma transacao dinamica e executado em qual momento?",
    options: ["Antes do evento Start", "Logo apos o Before Trn", "Apos o commit e o After Trn, ao finalizar a transacao", "Apenas em caso de erro na transacao"],
    correct: 2,
    explanation: "AfterComplete e o ultimo evento do ciclo de vida da transacao, executado apos o commit e o evento After Trn."
  },
  {
    type: "true_false",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "medium",
    question: "Em uma transacao dinamica, o evento 'Start' e executado apenas na primeira abertura da transacao durante a sessao do usuario.",
    correct: false,
    explanation: "O evento Start e executado toda vez que a transacao e aberta ou navegada, e nao apenas na primeira vez da sessao."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "hard",
    question: "Qual a finalidade da propriedade 'Track Context' em uma transacao dinamica?",
    options: ["Controlar a ordem de execucao dos eventos", "Rastrear quais atributos foram modificados pelo usuario", "Definir o contexto de seguranca da transacao", "Gerenciar a conexao com o banco de dados"],
    correct: 1,
    explanation: "Track Context permite rastrear alteracoes nos atributos da transacao, identificando quais campos foram modificados pelo usuario durante a interacao."
  },
  {
    type: "true_false",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "hard",
    question: "O evento 'OnLoad' em uma transacao dinamica e executado toda vez que a transacao e carregada na memoria, inclusive durante atualizacoes parciais da interface.",
    correct: true,
    explanation: "OnLoad e disparado sempre que a transacao e carregada ou recarregada na memoria, incluindo refresh parciais da pagina."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "hard",
    question: "Em transacoes dinamicas, a estrutura de dados subjacente e tipicamente definida atraves de:",
    options: ["Tabelas SQL fixas no banco relacional", "SDTs (Structured Data Types) ou DBFs", "Arquivos de configuracao XML externos", "Apenas variaveis locais no codigo"],
    correct: 1,
    explanation: "Transacoes dinamicas utilizam SDTs ou DBFs como fonte de dados, proporcionando flexibilidade na definicao da estrutura sem depender de tabelas fixas."
  },
  {
    type: "multiple_choice",
    topic: "DYNAMIC TRANSACTIONS & EVENTS",
    difficulty: "hard",
    question: "Qual afirmacao sobre transacoes dinamicas e VERDADEIRA?",
    options: ["Nao suportam validacoes personalizadas", "Exigem recompilacao para alterar o layout", "Permitem associar diferentes layouts a mesma estrutura de dados", "Nao funcionam em aplicacoes web"],
    correct: 2,
    explanation: "Transacoes dinamicas permitem que diferentes layouts sejam aplicados a mesma estrutura de dados, adaptando a interface conforme o contexto de uso."
  },

  // ======= PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE) (6-15) =======
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "easy",
    question: "Qual clausula do comando For Each e utilizada para filtrar registros antes do processamento?",
    options: ["ORDER", "WHERE", "UNIQUE", "WHEN NONE"],
    correct: 1,
    explanation: "A clausula WHERE define condicoes de filtro no For Each, selecionando apenas registros que atendem aos criterios especificados."
  },
  {
    type: "true_false",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "easy",
    question: "Uma Procedure do tipo 'Procedure' no GeneXus nao possui valor de retorno direto, diferentemente de uma Function.",
    correct: true,
    explanation: "Procedures do tipo Procedure executam acoes sem retornar valor. Ja Functions possuem tipo de retorno definido e devolvem um valor ao chamador."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "easy",
    question: "O que sao 'Control Breaks' (cortes de controle) em um For Each com niveis?",
    options: ["Interrupcoes forcadas no loop", "Blocos executados quando o valor de um atributo de nivel muda", "Quebras de linha na saida da procedure", "Tratamento de excecoes no For Each"],
    correct: 1,
    explanation: "Control Breaks sao blocos executados automaticamente quando ha mudanca no valor de um atributo de nivel em um For Each ordenado, permitindo totalizacoes e subgrupos."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "O que a clausula 'UNIQUE' faz dentro de um comando For Each?",
    options: ["Ordena registros sem repeticoes", "Processa apenas registros com valores distintos nos atributos do nivel atual", "Remove registros duplicados do banco fisicamente", "Seleciona apenas registros com chave primaria unica"],
    correct: 1,
    explanation: "UNIQUE agrupa registros com valores iguais nos atributos do nivel atual, processando apenas um registro representante de cada grupo."
  },
  {
    type: "true_false",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "Em um For Each, a clausula 'WHERE' pode utilizar operadores logicos AND, OR e NOT para compor filtros complexos.",
    correct: true,
    explanation: "A clausula WHERE suporta AND, OR e NOT, permitindo construir condicoes de filtro complexas com multiplos criterios."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "Qual a sintaxe correta para definir e finalizar uma subroutine em GeneXus?",
    options: ["SUB 'nome' ... RETURN", "SUB 'nome' ... ENDSUB", "SUBROUTINE 'nome' ... ENDSUBROUTINE", "DEFINE SUB 'nome' ... ENDSUB"],
    correct: 1,
    explanation: "Subroutines em GeneXus sao definidas com SUB seguido do nome e finalizadas com ENDSUB. Sao chamadas com o comando DO 'nome'."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "medium",
    question: "Em uma procedure com parametros usando 'Parm()', qual afirmacao e correta?",
    options: ["Parm() pode ser declarado em qualquer posicao da procedure", "Parametros podem ser de entrada (in), saida (out) ou ambos (inout)", "Parm() aceita apenas tipos primitivos", "Parm() nao permite valores padrao para parametros"],
    correct: 1,
    explanation: "Parametros em Parm() podem ser declarados como in, out ou inout, permitindo passagem bidirecional de dados entre chamador e procedure."
  },
  {
    type: "true_false",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "hard",
    question: "Em um For Each, e permitido combinar as clausulas WHERE, ORDER e UNIQUE simultaneamente.",
    correct: true,
    explanation: "WHERE (filtro), ORDER (ordenacao) e UNIQUE (distincao) podem ser combinados no mesmo For Each, aplicando-se na ordem: filtro, ordenacao e agrupamento."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "hard",
    question: "Quando a clausula 'BREAK' e executada dentro de um For Each com multiplos niveis, qual o comportamento?",
    options: ["Interrompe apenas o nivel atual do For Each", "Interrompe todos os niveis imediatamente", "Reinicia o For Each do primeiro registro", "BREAK nao e permitido em For Each aninhado"],
    correct: 0,
    explanation: "BREAK interrompe apenas o nivel atual (mais interno) do For Each, permitindo que os niveis externos continuem seu processamento."
  },
  {
    type: "multiple_choice",
    topic: "PROCEDURES (FOR EACH, SUBROUTINES, UNIQUE)",
    difficulty: "hard",
    question: "Em uma procedure do tipo 'Function' no GeneXus, como e definido o tipo do valor de retorno?",
    options: ["Pela propriedade 'Return Value' no cabecalho da procedure", "Por um comando RETURN no corpo da procedure", "Por uma variavel &returnValue automatica", "Nao e possivel definir tipo de retorno em Functions"],
    correct: 0,
    explanation: "Uma Function possui a propriedade 'Return Value' no cabecalho, onde se define o tipo de dado retornado ao chamador."
  },

  // ======= DATA SELECTOR (6-15) =======
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "easy",
    question: "O que define a estrutura de saida (os campos retornados) de um Data Selector?",
    options: ["A definicao do banco de dados", "A lista de atributos configurada na janela Output do Data Selector", "O comando For Each que o utiliza", "A propriedade Parameters do Data Selector"],
    correct: 1,
    explanation: "A estrutura de saida de um Data Selector e definida pelos atributos listados na janela Output."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "Como se passam parametros para um Data Selector no GeneXus?",
    options: ["Atraves da propriedade Parameters do Data Selector e referenciando-os com &param na condicao", "Criando variaveis globais no objeto chamador", "Usando o comando Parm() dentro da definicao do Data Selector", "Os Data Selectors nao aceitam parametros"],
    correct: 0,
    explanation: "No Data Selector, define-se a lista de parametros na propriedade Parameters. Dentro das condicoes, esses parametros sao referenciados com o prefixo &."
  },
  {
    type: "true_false",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "Um Data Selector pode ser utilizado diretamente como fonte de dados em um comando For Each.",
    correct: true,
    explanation: "Sim, o Data Selector pode ser referenciado em um For Each, permitindo reutilizar a consulta definida no Data Selector dentro do loop."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "hard",
    question: "Qual clausula do Data Selector permite definir a ordenacao dos registros retornados?",
    options: ["Clausula WHERE", "Clausula ORDER (na janela Conditions)", "Propriedade Sort do Data Selector", "A ordenacao e definida exclusivamente no objeto que chama o Data Selector"],
    correct: 1,
    explanation: "A ordenacao no Data Selector e definida atraves da clausula ORDER configurada na janela Conditions."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "O que a propriedade 'Input' representa na definicao de um Data Selector?",
    options: ["Os parametros de entrada que o Data Selector recebe", "A tabela base (Transaction ou SDT) de onde os dados serao lidos", "O formato de saida esperado (XML, JSON, SDT)", "O nome do arquivo de entrada externo"],
    correct: 1,
    explanation: "A propriedade Input do Data Selector define a fonte de dados principal sobre a qual a consulta sera executada."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "hard",
    question: "Qual a principal vantagem de um Data Selector sobre uma Query (KB) em termos de reutilizacao?",
    options: ["O Data Selector e mais rapido que a Query", "A Query so pode ser usada em Dashboards", "O Data Selector pode ser chamado em For Each, Grids e formulas, enquanto a Query tem uso mais restrito", "Nao ha diferenca; ambos sao intercambiaveis"],
    correct: 2,
    explanation: "O Data Selector e mais flexivel: pode ser usado em For Each, Grids e formulas. A Query e tipicamente usada em Dashboards e Paineis Analiticos."
  },
  {
    type: "true_false",
    topic: "DATA SELECTOR",
    difficulty: "easy",
    question: "O Data Selector permite definir condicoes (filtros WHERE) para restringir quais registros serao retornados.",
    correct: true,
    explanation: "Na janela Conditions do Data Selector e possivel adicionar condicoes de filtro utilizando operadores como =, >, <, IN, LIKE, entre outros."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "easy",
    question: "Em qual dos seguintes contextos NAO e possivel utilizar um Data Selector?",
    options: ["Como fonte de dados para um Grid em um Web Panel", "Dentro de um comando For Each", "Em uma formula para calculo de um atributo formulado", "Como evento em um Workflow"],
    correct: 3,
    explanation: "O Data Selector nao pode ser utilizado como evento de Workflow. Seus usos principais sao Grids, For Each e formulas."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "medium",
    question: "O que um Data Selector retorna quando e chamado?",
    options: ["Sempre um unico valor escalar", "Um SDT preenchido com os dados da consulta", "Uma lista de atributos ou um SDT, dependendo de como e configurado", "Apenas o primeiro registro encontrado"],
    correct: 2,
    explanation: "O Data Selector pode retornar uma lista de atributos (quando usado em For Each ou Grid) ou um SDT (quando configurado para tal)."
  },
  {
    type: "multiple_choice",
    topic: "DATA SELECTOR",
    difficulty: "hard",
    question: "Como e possivel reutilizar um mesmo Data Selector em multiplos objetos sem duplicar sua definicao?",
    options: ["Copiando o codigo do Data Selector para cada objeto", "Criando um Data Selector como objeto independente e referenciando-o nos objetos consumidores", "Usando heranca de Data Selectors", "Nao e possivel reutilizar; cada objeto deve ter seu proprio Data Selector"],
    correct: 1,
    explanation: "O Data Selector e um objeto independente na KB. Uma vez criado, pode ser referenciado de qualquer objeto sem necessidade de recria-lo."
  },

  // ======= DATA PROVIDER (6-15) =======
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "easy",
    question: "Quais sao os grupos obrigatorios na definicao de um Data Provider?",
    options: ["Input, Process, Output", "Source, Condition, Output", "Output e pelo menos um Source com a estrutura de dados", "Variables, Rules, Conditions"],
    correct: 2,
    explanation: "Um Data Provider deve ter obrigatoriamente um grupo Output e pelo menos um grupo Source."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "Quando um Data Provider e configurado com saida do tipo SDT, como a estrutura de saida e determinada?",
    options: ["Pela propriedade 'Return' do Data Provider, que aponta para o SDT de saida", "Pela lista de atributos arrastados para o grupo Output", "Automaticamente, com base no banco de dados", "Pelo grupo Source, que define a estrutura de saida"],
    correct: 0,
    explanation: "No Data Provider, quando a saida e um SDT, a propriedade 'Return' deve ser configurada para apontar para o SDT desejado."
  },
  {
    type: "true_false",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "O Data Provider pode gerar saida diretamente nos formatos XML ou JSON sem transformacoes externas adicionais.",
    correct: true,
    explanation: "Sim, o Data Provider suporta nativamente a geracao de saida em XML e JSON, bastando configurar a propriedade 'Output Format'."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "hard",
    question: "Qual e a funcao do metodo LoadSequence dentro de um Data Provider?",
    options: ["Carregar dados de um arquivo CSV externo", "Carregar uma sequencia numerica para uso em calculos", "Carregar dados em ordem sequencial respeitando a hierarquia pai-filho", "Salvar os dados processados no banco de dados"],
    correct: 2,
    explanation: "LoadSequence carrega dados de forma sequencial respeitando a hierarquia definida, garantindo que os dados sejam carregados na ordem correta."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "Para que serve o grupo 'Source' dentro de um Data Provider?",
    options: ["Define o destino onde os dados serao persistidos", "Define a fonte de dados (tabela, view ou SDT) da qual os dados serao lidos", "Define a formatacao da saida (XML ou JSON)", "Define as permissoes de acesso aos dados"],
    correct: 1,
    explanation: "O grupo Source no Data Provider especifica de onde os dados serao obtidos — pode ser uma Transaction, tabela, view ou SDT."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "hard",
    question: "Qual a principal diferenca entre um Data Provider e uma Procedure no GeneXus?",
    options: ["Data Provider e procedural e Procedure e declarativa", "Data Provider e declarativo e Procedure e procedural", "Nao ha diferenca; ambos funcionam da mesma forma", "Procedure so funciona com dados de banco, enquanto Data Provider aceita qualquer fonte"],
    correct: 1,
    explanation: "O Data Provider adota abordagem declarativa (grupos). A Procedure segue o paradigma procedural (comandos sequenciais como For Each)."
  },
  {
    type: "true_false",
    topic: "DATA PROVIDER",
    difficulty: "easy",
    question: "O metodo Save() em um Data Provider so funciona quando a saida e um SDT baseado em uma Transaction.",
    correct: true,
    explanation: "Save() persiste os dados no banco apenas quando o SDT de saida esta associado a uma Transaction."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "medium",
    question: "Como um Data Provider combina dados de multiplas fontes em uma unica estrutura de saida?",
    options: ["Usando JOIN explicito no grupo Source", "Definindo multiplos grupos Source e associando-os por condicoes", "Usando Procedures auxiliares dentro do Data Provider", "Nao e possivel combinar multiplas fontes em um unico Data Provider"],
    correct: 1,
    explanation: "No Data Provider, e possivel definir multiplos grupos Source, cada um apontando para uma tabela diferente, e relaciona-los por condicoes."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "easy",
    question: "Qual propriedade do Data Provider define o formato de saida dos dados transformados?",
    options: ["Output Type", "Generate", "Output Format", "Return Type"],
    correct: 2,
    explanation: "A propriedade 'Output Format' define se a saida sera gerada como SDT, XML ou JSON."
  },
  {
    type: "multiple_choice",
    topic: "DATA PROVIDER",
    difficulty: "hard",
    question: "Em um Data Provider com estrutura hierarquica (pai-filho), como se define corretamente o nivel filho dentro do grupo pai?",
    options: ["Criando um grupo Output filho aninhado dentro do grupo Output pai", "Usando o comando LoadSequence entre pai e filho", "Criando dois Data Providers separados e mesclando o resultado", "Definindo uma condicao no grupo pai que referencia o filho"],
    correct: 0,
    explanation: "Para criar hierarquia, aninha-se um grupo Output filho dentro do grupo Output pai. O grupo pai carrega os registros do nivel superior e o filho carrega os subordinados."
  },

  // ======= BUSINESS COMPONENTS (6-15) =======
  {
    type: "true_false",
    topic: "BUSINESS COMPONENTS",
    difficulty: "easy",
    question: "O metodo Load() sem parametros em um Business Component cria uma instancia vazia com Mode igual a INS.",
    correct: true,
    explanation: "Load() sem argumentos prepara a estrutura para insert, definindo Mode.Value = Mode.INS."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "Como acessar as mensagens de erro apos uma operacao de Business Component?",
    options: ["&bc.ErrorMsg", "&bc.GetMessages()", "&bc.LastError", "&bc.Exception"],
    correct: 1,
    explanation: "GetMessages() retorna uma colecao de mensagens com detalhes sobre erros ou avisos ocorridos durante a operacao."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "hard",
    question: "O que ocorre ao alterar o valor da chave primaria em um Business Component com Mode.UPD e chamar Save()?",
    options: ["O BC faz Insert do novo registro com a nova chave", "O BC gera erro pois a PK nao pode ser alterada em Mode.UPD", "O BC atualiza o registro original com a nova chave sem erros", "O BC altera automaticamente o Mode para INS e faz Insert"],
    correct: 1,
    explanation: "Em Mode.UPD a PK e usada no WHERE do UPDATE. Altera-la gera erro de chave."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "easy",
    question: "O que faz o metodo Insert() em um Business Component quando a chave primaria ja existe no banco?",
    options: ["Sobrescreve o registro existente", "Retorna erro (Success = false)", "Altera automaticamente para Mode.UPD e faz Update", "Ignora a operacao silenciosamente"],
    correct: 1,
    explanation: "Insert() tenta inserir e, se a PK ja existir, retorna erro. InsertOrUpdate() trata duplicidade fazendo Update."
  },
  {
    type: "true_false",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "Em Business Components, o metodo Save() executa automaticamente Insert, Update ou Delete com base no valor atual do Mode.",
    correct: true,
    explanation: "Save() verifica o Mode (INS, UPD ou DLT) e executa a operacao correspondente automaticamente."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "hard",
    question: "Em um Business Component de 2 niveis, o que acontece se voce nao inicializar a colecao do nivel filho antes de adicionar linhas?",
    options: ["A colecao e inicializada automaticamente pelo BC", "Ocorre erro de execucao (NullReference)", "As linhas sao ignoradas silenciosamente", "O BC cria uma colecao vazia internamente"],
    correct: 1,
    explanation: "A colecao filho precisa ser explicitamente inicializada antes de adicionar elementos, caso contrario ocorre erro."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "Qual a diferenca principal entre Load(key) e GetByKey(key) em Business Components?",
    options: ["Load carrega os dados no proprio objeto BC; GetByKey retorna um novo BC", "GetByKey funciona apenas para BCs de 2 niveis", "Load so funciona para chaves numericas", "Nao ha diferenca; ambos fazem a mesma operacao"],
    correct: 0,
    explanation: "Load(key) popula o proprio BC. GetByKey(key) retorna um novo Business Component com os dados carregados."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "medium",
    question: "Qual metodo de Business Component permite descartar as alteracoes feitas desde o ultimo Load ou Save?",
    options: ["Cancel()", "Rollback()", "Clear()", "Reset()"],
    correct: 1,
    explanation: "Rollback() descarta as alteracoes no BC, restaurando o estado original carregado do banco ou a estrutura vazia inicial."
  },
  {
    type: "true_false",
    topic: "BUSINESS COMPONENTS",
    difficulty: "hard",
    question: "Em Business Components de 2 niveis, ao chamar Save() no nivel pai, as alteracoes no nivel filho sao persistidas automaticamente.",
    correct: true,
    explanation: "Save() em BC de 2 niveis persiste tanto o nivel pai quanto o nivel filho em cascata."
  },
  {
    type: "multiple_choice",
    topic: "BUSINESS COMPONENTS",
    difficulty: "hard",
    question: "Em um Business Component configurado com Mode.DLT, o que o metodo Save() executa?",
    options: ["Insert", "Update", "Delete", "Nenhuma operacao; Mode.DLT gera erro"],
    correct: 2,
    explanation: "Quando Mode = DLT, Save() executa a exclusao do registro representado pelo BC."
  },

  // ======= DATABASE UPDATES (NEW, FOR EACH, DELETE) (6-15) =======
  {
    type: "true_false",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "O comando New em procedures insere registros diretamente no banco sem executar as regras de validacao definidas na transacao.",
    correct: true,
    explanation: "Diferente da interface Web, o New em procedure nao dispara as regras (defaults, validacoes) da transacao; a insercao e direta."
  },
  {
    type: "true_false",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "easy",
    question: "O comando Delete dentro de um For Each interrompe o loop apos excluir o primeiro registro encontrado.",
    correct: false,
    explanation: "O Delete remove o registro corrente e o For Each continua iterando sobre os registros restantes normalmente."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "Ao executar Delete em um For Each sobre a tabela base de uma transacao com tabelas estendidas (subtype), o que ocorre com os registros das tabelas estendidas?",
    options: ["Permanecem orfaos no banco", "Tambem sao excluidos automaticamente", "Gera erro de integridade referencial", "A exclusao nao e permitida se existirem registros estendidos"],
    correct: 1,
    explanation: "As tabelas estendidas tem seus registros excluidos em cascata quando o registro correspondente na tabela base e removido."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "Qual a principal caracteristica do Update implicito dentro de um For Each?",
    options: ["Executa as regras de negocio da transacao", "Atualiza diretamente a tabela no banco sem validacoes de negocio", "Permite rollback individual por registro", "Gera mensagens de erro detalhadas via GetMessages()"],
    correct: 1,
    explanation: "O Update em For Each e uma operacao direta de banco, gerando SQL UPDATE sem passar pelo contexto da transacao ou regras de negocio."
  },
  {
    type: "true_false",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "hard",
    question: "Dentro de um For Each, e possivel utilizar o comando New para inserir registros em uma tabela diferente da que esta sendo iterada.",
    correct: true,
    explanation: "E permitido aninhar New dentro de For Each para inserir registros em outra tabela."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "easy",
    question: "O comando New em uma procedure faz commit automatico apos cada insercao?",
    options: ["Sim, sempre", "Nao, o commit deve ser explicito ou ocorre ao final da procedure", "Sim, apenas para transacoes de 2 niveis", "Sim, se houver regra de autocommit na transacao"],
    correct: 1,
    explanation: "Em procedures, New nao faz commit automatico. A persistencia efetiva ocorre ao final da procedure ou com Commit explicito."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "medium",
    question: "Qual operacao NAO e possivel realizar com o comando For Each?",
    options: ["Atualizar registros existentes", "Excluir registros", "Inserir novos registros", "Ler registros com filtros condicionais"],
    correct: 2,
    explanation: "For Each e usado para leitura, atualizacao e exclusao. A insercao de novos registros e feita exclusivamente com o comando New."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "hard",
    question: "Em um For Each com Update, o que ocorre se a atualizacao de um atributo violar uma restricao de chave unica no banco?",
    options: ["A atualizacao e feita sobrescrevendo o registro conflitante", "Ocorre erro de violacao de unicidade e a operacao falha", "A restricao de unicidade e removida automaticamente", "O atributo conflitante nao e atualizado, mas os demais sao salvos"],
    correct: 1,
    explanation: "O banco de dados rejeita a operacao se violar uma constraint unica, resultando em erro na execucao do For Each."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "easy",
    question: "O comando New em procedures equivale a qual operacao de Business Component?",
    options: ["Load()", "Insert()", "Delete()", "GetByKey()"],
    correct: 1,
    explanation: "New em procedures insere um novo registro no banco, mesma funcionalidade basica do metodo Insert() em Business Components."
  },
  {
    type: "multiple_choice",
    topic: "DATABASE UPDATES (NEW, FOR EACH, DELETE)",
    difficulty: "hard",
    question: "Em relacao a geracao de SQL, tanto Business Components quanto For Each com Update utilizam a chave primaria no WHERE para identificar o registro a ser modificado?",
    options: ["Apenas Business Components usam a PK no WHERE", "Apenas For Each com Update usa a PK no WHERE", "Ambos utilizam a chave primaria no WHERE do UPDATE", "Nenhum dos dois utiliza a PK; usam ROWID interno"],
    correct: 2,
    explanation: "Ambos geram UPDATE com WHERE na chave primaria para garantir que apenas o registro correto seja alterado."
  },

  // ======= TRANSACTIONAL INTEGRITY (LUW) (6-15) =======
  {
    type: "true_false",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "easy",
    question: "O comando Rollback no GeneXus desfaz todas as alteracoes pendentes realizadas desde o inicio da LUW atual ou desde o ultimo Commit.",
    correct: true,
    explanation: "O Rollback reverte todas as operacoes nao confirmadas da transacao atual."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Em relacao ao uso de Business Components e gerenciamento de LUW, qual afirmativa esta correta?",
    options: ["Cada chamada a Save() inicia e finaliza uma LUW independente", "Multiplos Save() de diferentes BCs compartilham a mesma LUW ate Commit ou Rollback", "Business Components ignoram o conceito de LUW", "O metodo Rollback() de um BC desfaz exclusivamente as operacoes daquele objeto"],
    correct: 1,
    explanation: "BCs operam dentro da LUW atual do procedimento. Multiplos Save() acumulam operacoes na mesma LUW."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Em um mesmo procedimento GeneXus, e possivel ter multiplas LUWs utilizando comandos Commit intermediarios.",
    correct: true,
    explanation: "Cada Commit confirma as operacoes pendentes da LUW atual e inicia implicitamente uma nova LUW."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "hard",
    question: "Um procedimento instancia dois BCs. BC_A.Save() e executado com sucesso, BC_B.Save() lanca excecao. Qual o estado final?",
    options: ["BC_A e parcialmente persistido", "BC_A e totalmente persistido", "BC_A nao e persistido, pois ambos compartilham a mesma LUW", "A persistencia depende da ordem de instanciacao"],
    correct: 2,
    explanation: "Ambos os BCs compartilham a mesma LUW. Uma falha nao tratada interrompe toda a LUW."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "easy",
    question: "O principio de atomicidade em uma LUW significa que:",
    options: ["As operacoes sao divididas em varias transacoes menores", "Todas as operacoes sao concluidas com sucesso ou nenhuma e aplicada", "Cada operacao e executada em paralelo", "Apenas a primeira e a ultima operacao precisam ser bem-sucedidas"],
    correct: 1,
    explanation: "Atomicidade garante o tudo-ou-nada: operacoes sao tratadas como uma unidade indivisivel."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Em um procedimento com laco For Each com operacoes de banco e Commit dentro do laco, qual o comportamento?",
    options: ["A LUW e confirmada apenas ao final do laco", "Commit dentro do laco causa erro", "Cada iteracao confirma sua propria LUW e inicia nova", "O laco interrompe apos o primeiro Commit"],
    correct: 2,
    explanation: "Commit confirma as operacoes da LUW atual e inicia nova LUW automaticamente."
  },
  {
    type: "true_false",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "hard",
    question: "O comando Commit confirma exclusivamente as operacoes do procedimento atual, sem afetar operacoes de outros objetos chamados no mesmo fluxo.",
    correct: false,
    explanation: "O Commit atua sobre toda a LUW atual, incluindo operacoes de objetos chamados internamente."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Em um procedimento com Try-Catch usando BCs, se um Save() falha no Try, qual a melhor pratica no Catch?",
    options: ["Chamar Commit()", "Chamar Rollback()", "Ignorar a excecao e prosseguir", "Nao e necessario tratar; GeneXus desfaz automaticamente"],
    correct: 1,
    explanation: "E necessario chamar Rollback() explicitamente no Catch para desfazer alteracoes e evitar confirmacao parcial."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "hard",
    question: "Em relacao ao commit implicito ao final de um procedimento, qual afirmativa e verdadeira?",
    options: ["Ocorre sempre ao final, independente de erros", "Ocorre apenas se todas as operacoes forem bem-sucedidas", "Nunca ocorre; e obrigatorio usar Commit explicito", "Ocorre apos cada linha com operacao de banco"],
    correct: 1,
    explanation: "GeneXus realiza commit implicito ao final apenas se nao ha excecoes nao tratadas."
  },
  {
    type: "multiple_choice",
    topic: "TRANSACTIONAL INTEGRITY (LUW)",
    difficulty: "medium",
    question: "Qual opcao define corretamente o escopo de uma LUW em um procedimento padrao (sem BCs)?",
    options: ["Comeca na primeira operacao de banco e termina no proximo Commit, Rollback ou final", "E delimitada exclusivamente por blocos Begin/End", "Cada instrucao de banco representa uma LUW independente", "Comeca apenas com Commit explicito e termina ao encerrar a aplicacao"],
    correct: 0,
    explanation: "A LUW se inicia na primeira operacao de banco e permanece ate Commit, Rollback ou termino do procedimento."
  },

  // ======= WEB PANELS & UI EVENTS (6-15) =======
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Qual a sequencia correta de eventos executados ao acessar um Web Panel com Base Table pela primeira vez?",
    options: ["Start -> Load -> Refresh", "ClientStart -> Start -> Refresh", "ClientStart -> Start -> Load", "Load -> Start -> Refresh"],
    correct: 2,
    explanation: "No primeiro acesso: ClientStart (client-side), Start (server-side, primeiro carregamento), Load (server-side, carrega dados)."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "hard",
    question: "No ciclo de vida de um Web Panel com Base Table, o evento Refresh e executado em qual situacao?",
    options: ["Em todo carregamento, incluindo o primeiro acesso", "Apenas quando invocado explicitamente", "Em todos os postbacks ao servidor, exceto no primeiro carregamento", "Exclusivamente em Web Panels sem Base Table"],
    correct: 2,
    explanation: "Refresh e executado em postbacks subsequentes ao primeiro carregamento."
  },
  {
    type: "true_false",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Grids baseados em SDT (Data Selector) disparam o evento Load da mesma forma que grids baseados em BC.",
    correct: false,
    explanation: "Grids baseados em SDT nao disparam Load automaticamente como os grids baseados em BC."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Em relacao ao evento Start de um Web Panel, qual afirmativa e correta?",
    options: ["Executa a cada postback", "Executa apenas no primeiro carregamento, nao em postbacks subsequentes", "Executa no navegador antes do ClientStart", "Executa apos Load tanto no primeiro acesso quanto em postbacks"],
    correct: 1,
    explanation: "Start e executado uma unica vez no primeiro carregamento. Em postbacks, apenas Refresh e Load sao executados."
  },
  {
    type: "true_false",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "easy",
    question: "Em postbacks subsequentes de um Web Panel com Base Table, Refresh e executado antes de Load no servidor.",
    correct: true,
    explanation: "A ordem em postbacks e: Refresh (carrega valores anteriores) seguido de Load (processa alteracoes)."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Qual a principal finalidade de um Composite Command em um Web Panel?",
    options: ["Executar comandos SQL diretamente", "Agrupar multiplas acoes do servidor em um unico postback", "Substituir eventos Server-side por JavaScript", "Criar animacoes visuais entre paginas"],
    correct: 1,
    explanation: "Composite Command agrupa varias acoes que serao executadas no servidor em um unico postback."
  },
  {
    type: "true_false",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "hard",
    question: "Eventos Client-side podem disparar codigo Server-side por meio do comando Call ou propriedade CallServer.",
    correct: true,
    explanation: "GeneXus permite que eventos client-side invoquem o servidor usando Call ou CallServer."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "hard",
    question: "Apos um postback iniciado por um botao em Web Panel com Base Table, qual sequencia server-side?",
    options: ["Start -> Load -> Refresh", "Refresh -> Load", "Load -> Refresh", "ClientStart -> Refresh -> Start"],
    correct: 1,
    explanation: "Em postbacks subsequentes: primeiro Refresh (restaura valores anteriores), depois Load (aplica novos valores)."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "medium",
    question: "Qual o principal proposito do evento ClientStart em um Web Panel?",
    options: ["Inicializar variaveis no servidor antes de Load", "Executar JavaScript no navegador antes de qualquer interacao com o servidor", "Validar campos apos carregamento completo", "Configurar automaticamente a Base Table"],
    correct: 1,
    explanation: "ClientStart executa JavaScript no navegador antes do primeiro postback ao servidor."
  },
  {
    type: "multiple_choice",
    topic: "WEB PANELS & UI EVENTS",
    difficulty: "easy",
    question: "Para executar um evento no servidor quando o usuario pressiona Enter dentro de um campo Edit, deve-se escrever codigo no evento:",
    options: ["Load do Web Panel", "Start do Web Panel", "Enter do controle de edicao (ex: &EditCampo.Enter)", "Refresh do Web Panel"],
    correct: 2,
    explanation: "Cada controle Edit possui seu proprio evento Enter, disparado no servidor quando o usuario pressiona Enter dentro do campo."
  },

  // ======= ACCESS TO EXTERNAL DATA (6-15) =======
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "No contexto do GeneXus, qual a principal diferenca entre consumir um Web Service SOAP e um REST?",
    options: ["SOAP exige WSDL e REST nao", "REST exige WSDL e SOAP nao", "Ambos usam WSDL obrigatoriamente", "SOAP so funciona com JSON e REST com XML"],
    correct: 0,
    explanation: "Servicos SOAP possuem contrato formal descrito em WSDL, enquanto REST e baseado em recursos e metodos HTTP padrao."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "Qual objeto do GeneXus e gerado automaticamente ao importar um WSDL para consumir um Web Service SOAP?",
    options: ["Procedure", "External Object", "Data Provider", "Web Panel"],
    correct: 1,
    explanation: "Ao importar um WSDL, o GeneXus gera um External Object com os metodos do servico."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "hard",
    question: "Para realizar uma chamada HTTP personalizada a uma API REST no GeneXus, qual objeto e utilizado?",
    options: ["Procedure com HttpCall ou HTTPClient", "Data Provider com saida REST", "Web Panel com Ajax Call", "External Object gerado por WSDL"],
    correct: 0,
    explanation: "Procedure com HttpCall ou HTTPClient permite executar requisicoes HTTP customizadas (GET, POST, PUT, DELETE)."
  },
  {
    type: "true_false",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "O protocolo ODATA permite filtrar dados atraves de parametros de URL como $filter, $select e $orderby.",
    correct: true,
    explanation: "ODATA define convencoes de query string com $filter, $select, $orderby, $top e $skip para consultar dados via REST."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "easy",
    question: "O que e um External Object no GeneXus?",
    options: ["Um objeto que representa uma tabela no banco", "Um objeto que encapsula metodos de uma biblioteca externa ou servico", "Um objeto para criar layouts de tela", "Um objeto para definir regras de negocios"],
    correct: 1,
    explanation: "External Object integra componentes externos (DLLs, Web Services, SDKs), expondo seus metodos como objetos GeneXus."
  },
  {
    type: "true_false",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "hard",
    question: "O GeneXus SDK permite criar novos tipos de objetos, geradores de codigo e conectores customizados.",
    correct: true,
    explanation: "O SDK do GeneXus possibilita a criacao de extensoes, novos objetos, geradores e conectores."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "medium",
    question: "Na engenharia reversa de bancos no GeneXus, o que ocorre quando um banco existente e conectado?",
    options: ["O banco e recriado do zero", "As tabelas e campos sao importados como Transaction objects", "Apenas os dados sao copiados para o modelo", "O banco precisa estar vazio para ser importado"],
    correct: 1,
    explanation: "A engenharia reversa le a estrutura do banco existente e gera Transaction objects correspondentes."
  },
  {
    type: "true_false",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "easy",
    question: "O GeneXus possui conectores nativos para integracao direta com bancos NoSQL como MongoDB.",
    correct: false,
    explanation: "GeneXus nao possui conectores nativos para NoSQL; a integracao exige componentes externos ou APIs REST."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "hard",
    question: "Ao consumir uma API REST com autenticacao OAuth 2.0 no GeneXus, qual abordagem e correta?",
    options: ["Usar External Object gerado a partir do WSDL", "Utilizar HTTPCall para obter o token e envia-lo no cabecalho Authorization", "GeneXus nao suporta OAuth 2.0", "Configurar o token na string de conexao do banco"],
    correct: 1,
    explanation: "Usa-se HTTPCall/HTTPClient para obter o token no endpoint de autenticacao e inclui-lo no cabecalho Authorization."
  },
  {
    type: "multiple_choice",
    topic: "ACCESS TO EXTERNAL DATA",
    difficulty: "easy",
    question: "Para processar um JSON retornado por uma API REST no GeneXus, qual estrutura e mais adequada?",
    options: ["Data Provider com saida JSON", "SDT com metodo FromJsonString", "Web Panel com variavel de texto", "Procedure com &httpClient.ToString direto"],
    correct: 1,
    explanation: "O SDT permite definir a estrutura do JSON e FromJsonString faz a desserializacao automatica."
  }
];

const TOPICS_LIST = [
  ...new Set(SEED_QUESTIONS.map(q => q.topic))
];

export function getTopicList() {
  return TOPICS_LIST;
}

export function getQuestionsForTopics(topics, countPerTopic, difficulties) {
  // Collect all questions grouped by topic
  const byTopic = {};
  SEED_QUESTIONS.forEach((q, idx) => {
    const t = q.topic;
    if (!byTopic[t]) byTopic[t] = [];
    byTopic[t].push({ ...q, id: idx + '_' + Math.random().toString(36).slice(2, 8) });
  });

  // Filter by difficulty if specified
  const filterByDifficulty = difficulties && difficulties.length > 0 && difficulties.length < 3;

  // Select random questions per topic
  const result = [];
  for (const topic of topics) {
    let pool = byTopic[topic] || [];
    if (filterByDifficulty) {
      pool = pool.filter(q => difficulties.includes(q.difficulty));
    }
    const available = Math.min(countPerTopic, pool.length);
    const shuffled = shuffle([...pool]);
    result.push(...shuffled.slice(0, available));
  }

  // Dedup by question text
  const seen = new Set();
  const deduped = [];
  for (const q of result) {
    if (!seen.has(q.question)) {
      seen.add(q.question);
      deduped.push(q);
    }
  }

  return shuffle(deduped);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
