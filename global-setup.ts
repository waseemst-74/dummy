import { chromium, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { Logger } from './utils/Logger';
import { LoginPage } from './pages/LoginPage';   // ✅ import your POM

dotenv.config();
const authFile = path.join(process.cwd(), 'auth.json');

async function globalSetup() {
  Logger.info('Running global setup: logging in...');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to login page
  await page.goto(process.env.BASE_URL!);

  // Use your POM instead of raw locators
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
  Logger.info(`Login successful for user, ${process.env.APP_USERNAME?.slice(0, 3)}***`);

  // Wait until dashboard loads to ensure cookies are captured
  await expect(page.getByText('Discover & Book')).toBeVisible();
  await expect(page.getByText('From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.')).toBeVisible({ timeout: 30000 });
  await context.storageState({ path: authFile });
  await browser.close();

  Logger.success('Global setup completed, auth.json saved.');
}

export default globalSetup;
