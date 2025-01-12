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
    reporterOptions: {
      reportDir: "cypress/reports", // Dossier où les fichiers JSON seront générés
      overwrite: false,            // Conserver les fichiers existants
      html: true,                 // Désactiver les rapports HTML individuels
      json: true,                  // Activer les fichiers JSON
    },
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true,
});