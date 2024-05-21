
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
    
}

export default elementsRegister;