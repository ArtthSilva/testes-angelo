import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://transparencia.joaopessoa.pb.gov.br/#/';

Given('que eu acesso o site de transparência de João Pessoa', () => {
  cy.visit(url);
  cy.contains('Acesso Rápido').should('be.visible');
});

When('eu clico no botão de Leis e Decretos', () => {
  cy.get('a.cartao-componente')
    .contains('Leis e Decretos')
    .should('be.visible')
    .click();
});

And('devo clicar no campo "Buscar título"', () => {
  cy.get(':nth-child(2) > .ui-inputtext')
    .should('be.visible')
    .click();
});

And('devo digitar {string}', (texto) => {
  cy.get(':nth-child(2) > .ui-inputtext')
    .clear()
    .type(texto);
});

And('devo ver na tabela de leis e decretos a coluna "Título do documento" com o texto {string}', {timeout: 20000}, (textoEsperado) => {
  cy.contains('td', textoEsperado)
    .should('be.visible');
});