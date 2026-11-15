# AgroFeira - UFRA Paragominas

Repositório oficial da disciplina Laboratório de Produção de Software (SIPGM) do curso de Bacharelado em Sistemas de Informação da Universidade Federal Rural da Amazônia (UFRA), Campus Paragominas.

Identificação do Aluno

Nome completo: Alex da Silva Oliveira

Matrícula: 2024008859

Curso: Sistemas de Informação / PGM - Bacharelado

Repositório oficial: github.com/derykalex/agrofeira--derykalex-

Site publicado (GitHub Pages): derykalex.github.io/agrofeira-derykalex/aula8.html

Sobre o Projeto

A AgroFeira é uma plataforma web desenvolvida de forma incremental ao longo das atividades práticas da disciplina. O objetivo principal é conectar os produtores rurais da região de Paragominas diretamente aos consumidores locais, promovendo o comércio justo, a agricultura familiar e o acesso transparente a produtos frescos e artesanais sem intermediários.

Evolução Passo a Passo (Das Aulas Anteriores até o React)

O projeto foi construído estruturadamente aula após aula, consolidando boas práticas de desenvolvimento web moderno:

1. Atividades Iniciais (Estruturação e HTML Semântico)

Objetivo: Estabelecer a identidade e a estrutura base do site utilizando HTML5 semântico.

Páginas criadas:

index.html: Página principal com banners e destaques institucionais da AgroFeira.

catalogo.html: Listagem estruturada de produtos regionais frescos.

safra.html: Acompanhamento sazonal das produções agrícolas locais.

cadastro-produtor.html: Formulário para adesão de novos agricultores à rede.

sobre.html: Apresentação institucional e modelo padronizado de cabeçalho e rodapé.

2. Estilização e Camadas CSS (reset.css, utilitarios.css, componentes.css)

Objetivo: Organizar os estilos visuais em camadas lógicas, garantindo previsibilidade e consistência visual.

Organização:

reset.css: Padronização de margens, preenchimentos e caixas de dimensionamento (box-sizing).

utilitarios.css: Classes utilitárias reutilizáveis para ajustes rápidos.

componentes.css: Estilização específica de blocos visuais, cartões de produtos, barras de navegação e rodapés.

3. Design System e Tokens de Cores (tokens.css, tema.js)

Objetivo: Implementar variáveis globais de design (Design Tokens) para gerir paletas de cores, tipografia e espaçamentos, permitindo alternância fluida entre temas claros e escuros.

Funcionalidade: O script tema.js gere dinamicamente a persistência da preferência de tema do utilizador (localStorage).

4. Frameworks CSS e Validação de Formulários (Bootstrap & Checkout)

Objetivo: Explorar a integração de frameworks utilitários e validar interações de formulários complexos.

Ficheiros: checkout-bootstrap.html e catalogo-bootstrap.html, garantindo validação nativa de formulários e acessibilidade via atributos ARIA.

5. Atividade 6: Registro de Decisão Arquitetural (decisao.html)

Objetivo: Documentar escolhas tecnológicas críticas, avaliando prós e contras entre folhas de estilo autorais, Bootstrap e Tailwind CSS, fundamentando o que motivaria uma eventual mudança de rumo técnico.

6. Atividade 8: JavaScript Nativo e Primeiros Componentes React

Objetivo: Transicionar a aplicação de um documento estático puramente HTML/CSS para uma interface dinâmica e reativa.

Entregas da Aula 8:

Parte A: Implementação e validação das três formas de inserção de JavaScript na página aula8.html (Externa em js/aula8.js, Interna via <script> e Em linha/Inline via onclick).

Parte B: Desenvolvimento do tabuleiro do Jogo da Velha (Tic-Tac-Toe) no CodeSandbox, aprendendo componentes, props, eventos e gestão de memória com o gancho useState.

Parte C: Construção do catálogo da AgroFeira em componentes React reutilizáveis (Produto e Catalogo), aplicando estados individuais para os botões de compra.

Parte D: Consolidação das respostas reflexivas e relatórios de erros comuns no desenvolvimento (aula8.html validada pelo W3C e impressa em PDF).

Links dos Projetos no CodeSandbox (Atividade 8)

Tabuleiro do Jogo da Velha (Parte B):

Aceder ao Projeto no CodeSandbox

AgroFeira em Componentes (Parte C):

Aceder ao Projeto no CodeSandbox

Validação e Tecnologias Utilizadas

Linguagens: HTML5, CSS3, JavaScript (ES6+), JSX (React).

Ferramentas: Git, GitHub, GitHub Pages, CodeSandbox, W3C Nu Validator.

Padrões: Acessibilidade Web (WCAG), Design Responsivo, Componentização Modular.