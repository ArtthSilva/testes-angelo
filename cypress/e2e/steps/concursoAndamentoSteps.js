import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://transparencia.joaopessoa.pb.gov.br/#/';

Given('que eu acesso o site de transparência de João Pessoa', () => {
  cy.visit(url);
  cy.contains('Acesso Rápido').should('be.visible');
});

When('eu clico no link de Concursos', () => {
  cy.get('a.cartao-componente')
      .contains('Concursos')
      .should('be.visible')
      .click();
});

Then('devo ser redirecionado para a página de Concursos', () => {
  cy.url().should('include', '/concursos');
});

And('a página deve conter o texto "Concursos"', () => {
  cy.contains('Concursos').should('be.visible');
});

Then('devo clicar no dropdown Status', () => {
  cy.get('label.ui-dropdown-label')
    .contains('Selecionar Status')
    .should('be.visible')
    .click();
});

And('devo selecionar a opção "Em Andamento"', () => {
  cy.get('ul.ui-dropdown-items li')
    .contains('Em Andamento')
    .should('be.visible')
    .click();
});

And('devo clicar no botão "Pesquisar"', () => {
  cy.get('button[pbutton]')
    .contains('Pesquisar')
    .should('be.visible')
    .click();
    
  cy.wait(2000); 
});

Then('devo ver na o dado da tabela de concursos "Data de Publicação"', () => {
  cy.get('th')
    .contains('Data de Publicação')
    .should('be.visible');
});
