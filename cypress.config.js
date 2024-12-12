const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vending-main-client-dev.rvvcs.com/auth/login',
    specPattern: "cypress/e2e/*.spec.js",
    defaultCommandTimeout: 20000,
    testIsolation: false,
    experimentalMemoryManagement: true,
  },
});
