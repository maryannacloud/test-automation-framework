describe('Login Test', () => {

    before(() => {
        cy.loginWithJWT('testuser@example.com', 'password123')
    });

    beforeEach(() => {
        // Restore session for every test
        cy.restoreSessionWithJWT();
    });

    it('Should display the user avatar', () => {
        cy.visit('https://medium.com/');
        cy.get('img[alt="User Avatar"]').should('be.visible');
    });

    it('Logs in using email', () => {
      cy.loginWithEmail('testuser@example.com');
    });

    it('Should access the dashboard', () => {
        cy.visit('https://medium.com/dashboard');
        cy.contains('Your Dashboard').should('be.visible');
      });

  });