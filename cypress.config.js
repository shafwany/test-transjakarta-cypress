const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});