import elementsRegister from '../support/elementsScreen/elementsRegister'


describe('Testes no front end da ServeRest', () => {
  
    it('Deve cadastrar um novo usuário', () => {
      cy.visit('https://front.serverest.dev/')

      // Entrar na tela de cadastro
      cy.get(elementsRegister.buttonRegister).should('exist').and('be.visible').and('contain.text', 'Cadastre-se').click()

      // Modal de Cadastro
      cy.get(elementsRegister.modalRegister).should('exist').and('be.visible')

      // Imagem
      cy.get(elementsRegister.imgTitle).should('exist').and('be.visible')

      // Preencher form de Cadastro
      cy.get(elementsRegister.titleModal).should('exist').and('be.visible').and('contain.text', 'Cadastro')
      cy.get(elementsRegister.fieldName).should('exist').and('be.visible').type('Kira')
      cy.get(elementsRegister.fieldEmail).should('exist').and('be.visible').type('kira30saas@gmail.com')
      cy.get(elementsRegister.fieldPassword).should('exist').and('be.visible').type('123456')

      // Campo de ADM
      cy.get(elementsRegister.checkbox).should('exist').and('be.visible').click()
      cy.get(elementsRegister.checkLabelAdm).should('exist').and('be.visible').and('contain.text', 'Cadastrar como administrador?')

      // Já é cadastrado?
      cy.get(elementsRegister.messagem).should('exist').and('be.visible').and('contain.text', 'Já é cadastrado?')

      // Entrar
      cy.get(elementsRegister.buttonEnter).should('exist').and('be.visible').and('contain.text', 'Entrar')

      // Botão Cadastrar
      cy.get(elementsRegister.buttonRegister).should('exist').and('be.visible').and('contain.text', 'Cadastrar').click()

      // Mensagem de Erro 
      cy.get(elementsRegister.message.error).should('exist').and('be.visible').and('contain.text', 'Este email já está sendo usado')



    })
  })
