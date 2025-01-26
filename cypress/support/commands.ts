Cypress.Commands.add('checkHeader', (headerText: string) => {
    cy.get('header').contains(headerText);
  });

  Cypress.Commands.add('assertElementVisible', (selector: string) => {
    cy.get(selector).should('be.visible');
  });