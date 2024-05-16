const elementsUsers = {

    // Menus de navegação
    menuNavigation: '.navbar',
    imgNav: '.imagem',
    home: '[data-testid="home"]',
    registerUsers: '[data-testid="cadastrar-usuarios"]',
    listUsers: '[data-testid="listar-usuarios"]',
    registerProducts: '[data-testid="cadastrar-produtos"]',
    listProducts: '[data-testid="listar-produtos"]',
    reports: '[data-testid="link-relatorios"]',
    logout: '[data-testid="logout"]',

    screenAll: '.jumbotron',

    // Título da Tela
    titleUsers: 'h1',
    messageAdm: '.lead',
    cards: '.row',

    // Opções
    optionRegisterUsers: ':nth-child(2) > .card > .card-body',
    titleRegisterUsers: ':nth-child(2) > .card > .card-body > .card-title',
    aboutRegisterUsers: ':nth-child(2) > .card > .card-body > .card-text',
    buttonRegisterUsers: '[data-testid="cadastrarUsuarios"]',
    
    optionListUsers: ':nth-child(3) > .card > .card-body',
    titleListUsers: ':nth-child(3) > .card > .card-body > .card-title',
    aboutListUsers: ':nth-child(3) > .card > .card-body > .card-text',
    buttonListUsers: '[data-testid="listarUsuarios"]',

    optionRegisterProducts: ':nth-child(4) > .card > .card-body',
    titleRegisterProducts: ':nth-child(4) > .card > .card-body > .card-title',
    aboutRegisterProducts: ':nth-child(4) > .card > .card-body > .card-text',
    buttonRegisterProducts: '[data-testid="cadastrarProdutos"]',

    optionListProducts: ':nth-child(5) > .card > .card-body',
    titleListProducts: ':nth-child(5) > .card > .card-body > .card-title',
    aboutListProducts: ':nth-child(5) > .card > .card-body > .card-text',
    buttonListProducts: '[data-testid="listarProdutos"]',

    optionReports: ':nth-child(6) > .card > .card-body',
    titleReports: ':nth-child(6) > .card > .card-body > .card-title',
    aboutReports: ':nth-child(6) > .card > .card-body > .card-text',
    buttonReports: '[data-testid="relatorios"]',
    
    // Colunas e Conteúdos
    columnsName: 'thead > tr > :nth-child(1)',
    contentName: 'tbody > :nth-child(1) > :nth-child(1)',
    columnsEmail: 'thead > tr > :nth-child(2)',
    contentEmail: 'tbody > :nth-child(1) > :nth-child(2)',
    columnsPassword: 'thead > tr > :nth-child(3)',
    contentPassword: 'tbody > :nth-child(1) > :nth-child(3)',
    columnsAdm: 'thead > tr > :nth-child(4)',
    contentAdm: 'tbody > :nth-child(1) > :nth-child(4)',
    columnsActions: 'thead > tr > :nth-child(5)',
    buttonEdit: ':nth-child(1) > :nth-child(5) > .row > .btn-info',
    buttonDelete: ':nth-child(1) > :nth-child(5) > .row > .btn-danger',

}

export default elementsUsers;