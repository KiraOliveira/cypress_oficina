import registerUsers from '../support/pages/registerPage'


describe('Testes no front end da ServeRest', () => {
  
    it('Deve cadastrar um novo usuário', () => {
      cy.visit('https://front.serverest.dev/')
     
      registerUsers.screenRegisterFirst();
      
    })
  })
