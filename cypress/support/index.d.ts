declare namespace Cypress {
  interface Chainable {
      /**
       * Custom command to log in via email.
       * @param email - email address to use for login
       */
      loginWithEmail(email: string): Chainable<void>;

      /**
       * Custom command to restore a session using a JWT token stored in the Cypress environment.
       */
      restoreSessionWithJWT(): Chainable<void>;

      /**
       * Custom command to log in via API and store the JWT token in Cypress environment.
       * @param email - The email address to use for login
       */
      loginWithJWT(email: string): Chainable<void>;

      /**
       * Custom command to check a header's text.
       * @param headerText - The text to check in the header
       */
      checkHeader(headerText: string): Chainable<Element>;

      /**
       * Custom command to assert that an element is visible.
       * @param selector - The CSS selector of the element
       */
      assertElementVisible(selector: string): Chainable<Element>;
  }
}