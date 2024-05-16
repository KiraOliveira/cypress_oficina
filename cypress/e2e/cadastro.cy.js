import elementsRegister from '../support/elementsScreen/elementsRegister'


describe('Testes no front end da ServeRest', () => {
  
    it('Deve cadastrar um novo usuário', () => {
      cy.visit('https://front.serverest.dev/')

      // Entrar na tela de cadastro
      cy.get(elementsRegister.buttonRegister).should('exist').and('be.visible').click()

      // Preencher form de Cadastro
      cy.get(elementsRegister.modalRegister).should('exist').and('be.visible').
    })
  })
