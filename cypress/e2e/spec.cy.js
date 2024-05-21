//import {faker} from '@faker-js/faker'
import usersPage from '../support/pages/usersPage'
import registerPage from '../support/pages/registerPage';

/// <reference types="Cypress" />

describe('Testes no front end da ServeRest', () => {

    beforeEach('Login com sucesso no front.serverest', () => {
      cy.login()    
    });

    it('Deve acessar a lista de usuário e validar um usuário cadastrado', () => {
    
      usersPage.menuUsersElements();

      usersPage.listOptions();

      usersPage.listUsers();  
  })

    it('Deve acesssar a tela de "Cadastrar Usuários" e realizar um cadastro', () => {
      
      registerPage.acessRegisterUsers();

      registerPage.dataRegisterUsers();

    })
    
    
})


