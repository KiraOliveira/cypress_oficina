import elementsLogin from "../elementsScreen/elementsLogin";
import loginDados from "../../fixtures/loginDados.json";

class loginPageUser {
  screenLoginElements() {
    cy.get(elementsLogin.modalLogin).should("exist").and("be.visible");
    cy.get(elementsLogin.imgTitleLogin).should("exist").and("be.visible");
    cy.get(elementsLogin.titleModalLogin)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Login");
  }
  loginSucess() {
    cy.get(elementsLogin.fieldEmailLogin)
      .should("exist")
      .and("be.visible")
      .clear()
      .type(loginDados.email.sucess);
    cy.get(elementsLogin.fieldPasswordLogin)
      .should("exist")
      .and("be.visible")
      .clear()
      .type(loginDados.password.sucess);
    cy.get(elementsLogin.buttonEnter)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Entrar")
      .click();
  }
  loginEmailError() {
    cy.get(elementsLogin.fieldEmailLogin)
      .should("exist")
      .and("be.visible")
      .type(loginDados.email.error);
    cy.get(elementsLogin.fieldPasswordLogin)
      .should("exist")
      .and("be.visible")
      .type(loginDados.password.sucess);
    cy.get(elementsLogin.buttonEnter)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(elementsLogin.messageErrorLogin.fielMessage)
      .should("exist")
      .and("be.visible");
    cy.get(elementsLogin.messageErrorLogin.messageError)
      .should("exist")
      .and("be.visible")
      .and("contain.text", loginDados.message.error);
    cy.get(elementsLogin.closeMessage)
      .should("exist")
      .and("be.visible")
      .click();
  }
  loginPasswordError() {
    cy.get(elementsLogin.fieldEmailLogin)
      .should("exist")
      .and("be.visible")
      .clear()
      .type(loginDados.email.sucess);
    cy.get(elementsLogin.fieldPasswordLogin)
      .should("exist")
      .and("be.visible")
      .clear()
      .type(loginDados.password.error);
    cy.get(elementsLogin.buttonEnter)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(elementsLogin.messageErrorLogin.fielMessage)
      .should("exist")
      .and("be.visible");
    cy.get(elementsLogin.messageErrorLogin.messageError)
      .should("exist")
      .and("be.visible")
      .and("contain.text", loginDados.message.error);
    cy.get(elementsLogin.closeMessage)
      .should("exist")
      .and("be.visible")
      .click();
  }
  notRegistration() {
    cy.get(elementsLogin.messageNotRegister)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Não é cadastrado?");
  }
  register() {
    cy.get(elementsLogin.buttonRegister)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Cadastre-se");
  }
}

export default new loginPageUser();
