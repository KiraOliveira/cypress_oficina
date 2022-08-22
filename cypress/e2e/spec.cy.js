/// <reference types="Cypress" />

import {faker} from '@faker-js/faker'

describe('Testes no front end da ServeRest', () => {


  beforeEach('Login com sucesso no front.serverest', () => {
    cy.login()    
  })

  // it('Não deve logar', () => {
  //   cy.visit('https://front.serverest.dev/')
  //   cy.get('[data-testid="email"]').type('ful@qa.com')
  //   cy.get('[data-testid="senha"]').type('123')
  //   cy.get('[data-testid="entrar"]').click()
  //   cy.get('.alert').should('contains.text', 'Email e/ou senha inválidos') //assertion na doc do cypress
  
  // })

  it.only('Deve acessar a lista de usuário e validar um usuário cadastrado', () => {
    let usuarioCadastrado = "Johnnie Waters"

    cy.get('[data-testid="listar-usuarios"]').click()
    cy.get('.table').should('be.visible').and('have.a.property', 'text')
    cy.get('.table').should('contains.text', usuarioCadastrado)
  })

  it('Deve cadastrar um novo produto com sucesso', () => {
    //Buscar e clicar no selecionar do botão "Cadastrar produto"
    //Buscar os seletores de cada input e escrever usando o type()
    //Ignorem o envio de imagem
    //Clicar no botão cadastrar
    cy.get('')
  })
})

