const elementsLogin =  {

    // Tela de Login
    modalLogin: '.form',
    imgTitleLogin: '.imagem',
    titleModalLogin: '.font-robot',
    fieldEmailLogin: '[data-testid="email"]',
    fieldPasswordLogin: '[data-testid="senha"]',

    messageNotRegister: '.message',
    buttonRegister:  '[data-testid="cadastrar"]',
    buttonEnter: '[data-testid="entrar"]',

    messageErrorLogin: {
        fielMessage: '.alert',
        messageError: '.alert > :nth-child(2)'
    },
    closeMessage: '.close > span'
}

export default elementsLogin;