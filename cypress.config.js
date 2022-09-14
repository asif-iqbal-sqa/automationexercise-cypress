const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 7000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responseTimeout": 15000,
    "video": false,
    "failOnStatusCode": false,
    "viewportHeight": 1000,
    "viewportWidth": 1600,
    "baseUrl": "https://www.automationexercise.com/",
    "reporter": "cypress-mochawesome-reporter"
  },
});
