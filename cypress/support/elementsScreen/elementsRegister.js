
const elementsRegister = {

    // Botão de Cadastro na tela de Login
    buttonRegister:  '[data-testid="cadastrar"]',

    // Tela do Cadastro - Inicial
    modalRegister: '.form',
    imgTitle: '.imagem',
    titleModal: '.font-robot',
    fieldName: '[data-testid="nome"]',
    fieldEmail: '[data-testid="email"]',
    fieldPassword: '[data-testid="password"]',
    checkbox: '[data-testid="checkbox"]',
    checkLabelAdm: '.form-check-label',
    
    messagem: '.message',
    buttonEnter: '[data-testid="entrar"]',

    // Já cadastrado
    message: {
        fielText: '.alert',
        sucesso: '.alert > :nth-child(2)', // Cadastro realizado com sucesso!
        error: '.alert > :nth-child(2)'  // Este email já está sendo usado  
    },

    // Tela do Cadastro - Interna
    formScreen: '.jumbotron > form',
    blockName: ':nth-child(3) > .mb-3',
    labelName: ':nth-child(3) > .mb-3 > .form-label',
    blockEmail: ':nth-child(4) > .mb-3',
    labelEmail: ':nth-child(4) > .mb-3 > .form-label',
    blockPassword: ':nth-child(5) > .mb-3',
    labelPassword: ':nth-child(5) > .mb-3 > .form-label',
    buttonRegisterUsers: '[data-testid="cadastrarUsuario"]'    
}

export default elementsRegister;