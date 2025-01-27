describe('Medium Website', () => {
    it('should visit the website and assert the title', () => {
      const appUrl = Cypress.env('appUrl');
      cy.visit(appUrl);
      cy.title().should('eq', 'Medium: Read and write stories.');
    });
  });