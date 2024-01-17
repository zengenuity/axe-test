const { defineConfig } = require("cypress");
const { cypressConfig } = require('@axe-core/watcher');

module.exports = defineConfig(cypressConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  axe: {
    apiKey: '973cdb0c-37f6-4fd7-8490-aeb3bd5adf9f'
  },
  // Your existing Cypress configuration code here
}));
