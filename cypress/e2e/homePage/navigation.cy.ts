describe('Cleerly Health Website', () => {
    it('should visit the website and verify the title', () => {
      cy.visit('https://cleerlyhealth.com');
      cy.title().should('eq', 'Personalized Analysis and Treatment of Heart Disease | Cleerly');
    });
  });