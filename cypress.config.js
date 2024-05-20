const { defineConfig } = require("cypress");

module.exports = defineConfig({

    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    responseTimeout: 30000,
    watchForFileChanges: false,
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      baseUrl: 'https://front.serverest.dev/',
      viewportHeight: 768,
      viewportWidth: 1024,
      video: true,
      env: { hideXhr: true},
      experimentalMemoryManagement: true,
      experimentalModifyObstructiveThirdPartyCode: true,
      numTestsKeptInMemory: 20,
      failOnStatusCode: false    
  },
});
