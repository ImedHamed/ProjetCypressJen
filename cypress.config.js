const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      
    },
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 2
    },

    "reporter": 'mochawesome',
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
    },

    
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true,
});