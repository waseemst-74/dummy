import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator } from '@playwright/test';

export class Dashboard extends BasePage {

    private bookNowButton: Locator;

    constructor(page: Page) {

        super(page);
        this.bookNowButton = page.locator('#book-now-btn').first();

    }


    async validateDashboard() {
        Logger.info('Starting login process...');
        await this.clickElement(this.bookNowButton);
        Logger.info('Login completed successfully.');
    }
}
