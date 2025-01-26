declare namespace Cypress {
    interface Chainable {
      
        /**
       * Custom command to check the header text.
       */
      checkHeader(headerText: string): Chainable<Element>;
  
      /**
       * Custom command to assert element visibility.
       */
      assertElementVisible(selector: string): Chainable<Element>;
    }
  }