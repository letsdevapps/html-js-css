const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:8000',
    headless: false,
  },

  webServer: {
    command: 'npm start',
    url: 'http://localhost:8000',
    reuseExistingServer: true,
  },
});