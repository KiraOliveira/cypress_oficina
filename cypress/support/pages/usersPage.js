import elementsUsers from "../elementsScreen/elementsUsers";

class usersPage {

    menuUsersElements() {
        cy.get(elementsUsers.menuNavigation).should('exist').and('be.visible')
        cy.get(elementsUsers.imgNav).should('exist').and('be.visible')
        cy.get(elementsUsers.home).should('exist').and('be.visible').and('contain.text', 'Home')
        cy.get(elementsUsers.registerUsers).should('exist').and('be.visible').and('contain.text', 'Cadastrar Usuários')
        cy.get(elementsUsers.listUsers).should('exist').and('be.visible').and('contain.text', 'Listar Usuários')
        cy.get(elementsUsers.registerProducts).should('exist').and('be.visible').and('contain.text', 'Cadastrar Produtos')
        cy.get(elementsUsers.listProducts).should('exist').and('be.visible').and('contain.text', 'Listar Produtos')
        cy.get(elementsUsers.reports).should('exist').and('be.visible').and('contain.text', 'Relatórios')
        cy.get(elementsUsers.logout).should('exist').and('be.visible').and('contain.text', 'Logout')
    }
    listUsers() {
        cy.get(elementsUsers.screenAll).should('exist').and('be.visible')
        cy.get(elementsUsers.titleListUsers).should('exist').and('be.visible').and('contain.text', 'Lista dos Usuários')    
        
        cy.get(elementsUsers.columnsName).should('exist').and('be.visible').and('contain.text', 'Nome')    
        let usuarioCadastrado = "Sofia Sampaio"
        cy.get(elementsUsers.contentName).should('exist').and('be.visible').and('have.a.property', 'text').and('contain.text', usuarioCadastrado)

        cy.get(elementsUsers.columnsEmail).should('exist').and('be.visible').and('contain.text', 'Email')
        cy.get(elementsUsers.contentEmail).should('exist').and('be.visible').and('not.be.empty')

        cy.get(elementsUsers.columnsPassword).should('exist').and('be.visible').and('contain.text', 'Senha')
        cy.get(elementsUsers.contentPassword).should('exist').and('be.visible').and('not.be.empty')

        cy.get(elementsUsers.columnsAdm).should('exist').and('be.visible').and('contain.text', 'Administrador')
        cy.get(elementsUsers.contentAdm).should('exist').and('be.visible').and('not.be.empty')

        cy.get(elementsUsers.columnsActions).should('exist').and('be.visible').and('contain.text', 'Ações')
        cy.get(elementsUsers.buttonEdit).should('exist').and('be.visible').and('contain.text', 'Editar')
        cy.get(elementsUsers.buttonDelete).should('exist').and('be.visible').and('contain.text', 'Excluir')
    }
}

export default new usersPage();