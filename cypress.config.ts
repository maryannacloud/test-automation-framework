import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    appUrl: process.env.APP_URL,
    userEmail: process.env.USER_EMAIL,
  },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: process.env.APP_URL,
    setupNodeEvents(on, config) {
      
    },
  },
});
