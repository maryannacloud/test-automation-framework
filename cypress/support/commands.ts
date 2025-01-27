Cypress.Commands.add('loginWithEmail', (email: string) => {
    cy.get('button').contains('Sign in').click();
    cy.get('div[role=dialog]').should('be.visible');
    cy.get('button').contains('Sign in with email').click();
    cy.get('h2').contains('Sign in with email').should('be.visible'); 
    cy.get('input[name="email"]').type(email);
    cy.get('button').contains('Continue').click();
    cy.contains('Check your inbox').should('be.visible');
});

Cypress.Commands.add('loginWithJWT', (email: string, password: string) => {
    cy.request({
        method: 'POST',
        url: 'https://medium.com/api/login',
        body: {email, password }
    }).then((response) => {
        expect(response.status).to.eq(200);
        const jwt = response.body.jwt;
        Cypress.env('jwt', jwt);
    });
});

Cypress.Commands.add('restoreSessionWithJWT', () => {
    const jwt = Cypress.env('jwt');
    if (jwt) {
        cy.window().then((window) => {
            window.localStorage.setItem('jwt', jwt);
        });
    } else {
        throw new Error('JWT token is not available');
    }
});

Cypress.Commands.add('checkHeader', (headerText: string) => {
    cy.get('header').contains(headerText);
  });

  Cypress.Commands.add('assertElementVisible', (selector: string) => {
    cy.get(selector).should('be.visible');
  });