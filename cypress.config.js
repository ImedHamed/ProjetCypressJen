const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Déclarez le reporter principal

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com', // Définir l'URL de base pour les tests
    setupNodeEvents(on, config) {
      // Hooks pour générer des rapports avant et après l'exécution
      on('before:run', async (details) => {
        try {
          console.log('Running before:run hook');
          await beforeRunHook(details);
        } catch (error) {
          console.error('Error in before:run hook:', error.message);
        }
      });

      on('after:run', async () => {
        try {
          console.log('Running after:run hook');
          await afterRunHook();
        } catch (error) {
          console.error('Error in after:run hook:', error.message);
        }
      });

      return config; // Retourne la configuration mise à jour
    },
  },

  // Options du reporter Mochawesome
  reporterOptions: {
    reportDir: 'cypress/reports', // Dossier pour les rapports
    overwrite: false,             // Ne pas écraser les anciens rapports
    html: true,                   // Générer un fichier HTML
    json: true,                   // Générer un fichier JSON
    charts: true,                 // Ajouter des graphiques au rapport
    embeddedScreenshots: true,    // Intégrer les captures d'écran dans le rapport HTML
    inlineAssets: true,           // Inclure les fichiers CSS et JS dans le rapport
  },

  // Options supplémentaires
  screenshotOnRunFailure: true,   // Capturer une capture d'écran en cas de test échoué
  trashAssetsBeforeRuns: true,    // Supprimer les assets précédents avant chaque exécution
  video: true,                    // Enregistrer les vidéos des tests
});
