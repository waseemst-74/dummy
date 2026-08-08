// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000, // Global timeout for each test (30 seconds)
  globalSetup: require.resolve('./global-setup'),

  expect: {
    timeout: 30000, // Timeout for expect() assertions (5 seconds)
  },
  testDir: './tests',
  fullyParallel: false,
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  retries: 0,
  workers: 1,
  use: {
    actionTimeout: 20 * 1000,   // Timeout for actions like click/fill
    navigationTimeout: 30 * 1000,
    baseURL: process.env.BASE_URL,
    storageState: 'auth.json',
    headless: false

  }

});