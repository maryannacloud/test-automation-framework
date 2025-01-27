describe('Login Test', () => {

    before(() => {
        const email = Cypress.env('userEmail');
        cy.loginWithJWT(email)
    });

    beforeEach(() => {
        cy.restoreSessionWithJWT();
    });

    it('Should display the user avatar', () => {
        const appUrl = Cypress.env('appUrl');
        cy.visit(appUrl);
        cy.get('img[alt="User Avatar"]').should('be.visible');
    });

    it('Logs in using email', () => {
        const email = Cypress.env('userEmail');
        cy.loginWithEmail(email);
    });

  });