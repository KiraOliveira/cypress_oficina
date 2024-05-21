import elementsUsers from "../elementsScreen/elementsUsers";
import elementsRegister from "../elementsScreen/elementsRegister";
import users from "../../fixtures/users.json" 

class registerUsers {

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

}

export default new registerUsers();