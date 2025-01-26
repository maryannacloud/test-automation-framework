import './commands';

Cypress.on('test:before:run', () => {
    cy.log('Test is starting...');
});