import elementsUsers from "../elementsScreen/elementsUsers";
import elementsRegister from "../elementsScreen/elementsRegister";
//import users from "../../fixtures/users.json" 

class registerUsers {

    screenRegisterFirst() {
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

    }
    acessRegisterUsers() {
      cy.get(elementsUsers.registerUsers).should('exist').and('be.visible').and('have.text', 'Cadastrar Usuários').click()
    }
    dataRegisterUsers() {
      cy.get(elementsRegister.formScreen).should('exist').and('be.visible')
      cy.get(elementsUsers.titleUsers).should('exist').and('be.visible').and('have.text', 'Cadastro de usuários')
      cy.get(elementsRegister.blockName).should('exist').and('be.visible')
      cy.get(elementsRegister.labelName).should('exist').and('be.visible').and('have.text', 'Nome: *')
      cy.get(elementsRegister.fieldName).should('exist').and('be.visible').type('Kira 1')
      cy.get(elementsRegister.blockEmail).should('exist').and('be.visible')
      cy.get(elementsRegister.labelEmail).should('exist').and('be.visible').and('have.text', 'Email: *')
      cy.get(elementsRegister.fieldEmail).should('exist').and('be.visible').type('kg@gmail.com')
      cy.get(elementsRegister.blockPassword).should('exist').and('be.visible')
      cy.get(elementsRegister.labelPassword).should('exist').and('be.visible').and('have.text', 'Senha: *')
      cy.get(elementsRegister.fieldPassword).should('exist').and('be.visible').type('123456')
      cy.get(elementsRegister.checkbox).should('exist').and('be.visible').click()
      cy.get(elementsRegister.checkLabelAdm).should('exist').and('be.visible').and('have.text', 'Cadastrar como administrador?')
      cy.get(elementsRegister.buttonRegisterUsers).should('exist').and('be.visible').and('have.text', 'Cadastrar').click()
    }
    message() {
      // Mensagem de Erro 
      cy.get(elementsRegister.message.error).should('exist').and('be.visible').and('contain.text', 'Este email já está sendo usado')
    }

}

export default new registerUsers();