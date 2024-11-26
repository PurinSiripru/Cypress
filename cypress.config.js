const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vending-main-client-dev.rvvcs.com/auth/login',
    setupNodeEvents(on, config) {
      on('file:preprocessor' ,cucumber())
    },
    specPattern: "cypress/e2e/*.spec.js",
    defaultCommandTimeout: 20000,
    testIsolation: false,
  },
});
