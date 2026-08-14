// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000, // Global timeout for each test (30 seconds)
  globalSetup: require.resolve('./global-setup'),

  expect: {
    timeout: 30000, // Timeout for expect() assertions (30 seconds)
  },
  testDir: './tests',
  fullyParallel: false,
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  retries: 0,
  workers: 3,
  use: {
    actionTimeout: 20 * 1000,
    navigationTimeout: 30 * 1000,
    baseURL: process.env.BASE_URL,
    storageState: 'auth.json',
    headless: false
  },

  // 🔹 Add projects for cross-browser testing
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
