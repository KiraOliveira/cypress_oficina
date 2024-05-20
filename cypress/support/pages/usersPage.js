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
    listOptions(){
        cy.get(elementsUsers.screenAll).should('exist').and('be.visible')
        cy.get(elementsUsers.titleUsers).should('exist').and('be.visible')//.and('contain.text', ' Bem Vindo Kira ') 
        cy.get(elementsUsers.messageAdm).should('exist').and('be.visible').and('contain.text', 'Este é seu sistema para administrar seu ecommerce.')    
        cy.get(elementsUsers.cards).should('exist').and('be.visible')
        
        cy.get(elementsUsers.optionRegisterUsers).should('exist').and('be.visible')
        cy.get(elementsUsers.titleRegisterUsers).should('exist').and('be.visible').and('contain.text', 'Cadastrar Usuários')
        cy.get(elementsUsers.aboutRegisterUsers).should('exist').and('be.visible').and('contain.text', 'Funcionalidade de cadastro de usuários para ter acesso ao ecommerce')
        cy.get(elementsUsers.buttonRegisterUsers).should('exist').and('be.visible').and('contain.text', 'Cadastrar')

        cy.get(elementsUsers.optionRegisterProducts).should('exist').and('be.visible')
        cy.get(elementsUsers.titleRegisterProducts).should('exist').and('be.visible').and('contain.text', 'Cadastrar Produtos')
        cy.get(elementsUsers.aboutRegisterProducts).should('exist').and('be.visible').and('contain.text', 'Funcionalidade de cadastro de produtos para ser utilizado no ecommerce')
        cy.get(elementsUsers.buttonRegisterProducts).should('exist').and('be.visible').and('contain.text', 'Cadastrar')

        cy.get(elementsUsers.optionListProducts).should('exist').and('be.visible')
        cy.get(elementsUsers.titleListProducts).should('exist').and('be.visible').and('contain.text', 'Listar Produtos')
        cy.get(elementsUsers.aboutListProducts).should('exist').and('be.visible').and('contain.text', 'Funcionalidade de listagem de produtos que estão cadastrados.')
        cy.get(elementsUsers.buttonListProducts).should('exist').and('be.visible').and('contain.text', 'Listar')

        cy.get(elementsUsers.optionReports).should('exist').and('be.visible')
        cy.get(elementsUsers.titleReports).should('exist').and('be.visible').and('contain.text', 'Relatórios')
        cy.get(elementsUsers.aboutReports).should('exist').and('be.visible').and('contain.text', 'Funcionalidade de relatórios gerais do sistema de ecommerce')
        cy.get(elementsUsers.buttonReports).should('exist').and('be.visible').and('contain.text', 'Ver')

        cy.get(elementsUsers.optionListUsers).should('exist').and('be.visible')
        cy.get(elementsUsers.titleListUsers).should('exist').and('be.visible').and('contain.text', 'Listar Usuários')
        cy.get(elementsUsers.aboutListUsers).should('exist').and('be.visible').and('contain.text', 'Funcionalidade de listagem de usuários que estão cadastrados.')
        cy.get(elementsUsers.buttonListUsers).should('exist').and('be.visible').and('contain.text', 'Listar').click()
    }
    listUsers() {
        cy.get(elementsUsers.titleUsers).should('exist').and('be.visible').and('contain.text', 'Lista dos usuários') 
        cy.get(elementsUsers.columnsName).should('exist').and('be.visible').and('contain.text', 'Nome')    
        let usuarioCadastrado = "Kira"
        cy.get(elementsUsers.screenAll).should('exist').and('be.visible').and('have.a.property', 'text')
        cy.get(elementsUsers.screenAll).should('contain.text', usuarioCadastrado)

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