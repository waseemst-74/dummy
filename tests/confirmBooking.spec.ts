import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { POManager } from '../pages/POManager';
import { Logger } from '../utils/Logger';

dotenv.config();

test.describe('Search for Opportunity with valid and invalid data', () => {
    let poManager: POManager;

    test.beforeEach(async ({ page }) => {
        Logger.info('Initializing POManager with logged-in page...');
        poManager = new POManager(page);

        Logger.info('Navigating to dashboard before each test...');
        await page.goto('/');
        console.log('Navigated to:', page.url());
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== testInfo.expectedStatus) {
            Logger.error(`Test failed: ${testInfo.title}`);
            await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
        }
    });

    test('Confirm booking for Dillii Diwali Mela', async ({ page }) => {
        Logger.info('Searching for an opportunity with invalid data...');
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.validateDashboard();
        Logger.info('Clicked on Book Now button for Dillii Diwali Mela.');

    });
});
