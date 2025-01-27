declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in via email.
       * @param email - email address to use for login
       */
      loginWithEmail(email: string): Chainable<void>;
    }
  }

declare namespace Cypress {
    interface Chainable {
        checkHeader(headerText: string): Chainable<Element>;
        assertElementVisible(selector: string): Chainable<Element>;
    }
  }

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to log in via API and store the JWT token in Cypress environment.
         * @param email - The email address to use for login
         * @param password - The password to use for login
         */
        loginWithJWT(email: string, password: string): Chainable<void>;

        /**
         * Custom command to restore a session using a JWT token stored in the Cypress environment.
         */
        restoreSessionWithJWT(): Chainable<void>;
}
}