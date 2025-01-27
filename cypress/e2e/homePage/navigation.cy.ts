describe('Cleerly Health Website', () => {
    it('should visit the website and verify the title', () => {
      cy.visit('https://medium.com');
      cy.title().should('eq', 'Medium: Read and write stories.');
    });
  });