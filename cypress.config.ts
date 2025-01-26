import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://cleerlyhealth.com',
    supportFile: 'cypress/support/e2e.ts'  
    },
  });
