const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      
    
      
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