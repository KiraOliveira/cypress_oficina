import elementsRegisterProducts from '../elementsScreen/elementsRegisterProducts'
class registerProducts {

    dataRegisterProducts() {



        cy.get(elementsRegisterProducts.blockNameProduct).should('exist').and('be.visible')
        
        // Criar uma forma de acessar apenas a tela de cadastro dos produtos e realizar o cadastro   
    }

}


export default new registerProducts();