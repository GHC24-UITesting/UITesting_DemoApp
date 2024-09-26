// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
    headless: false, // Set to false to run tests with a visible browser
  },
  webServer: {
    command: 'npm start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
