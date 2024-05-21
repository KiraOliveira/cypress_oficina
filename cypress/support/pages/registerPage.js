import elementsUsers from "../elementsScreen/elementsUsers";
//import elementsRegister from "../elementsScreen/elementsRegister";

class registerUsers {

    acessRegisterUsers() {
        cy.get(elementsUsers.registerUsers).should('exist').and('be.visible').and('have.text', 'Cadastrar Usuários').click()

    }

}

export default registerUsers();