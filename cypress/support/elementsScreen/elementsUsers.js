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
    titleListUsers: 'h1',

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