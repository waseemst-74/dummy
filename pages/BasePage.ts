import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(Locator: Locator) {
        Logger.info(`Clicking element: ${Locator}`);
        //await this.page.click(Locator);
        await Locator.click();

    }

    async typeText(locator: Locator, text: string) {
        Logger.info(`Typing into ${locator}: ${text}`);
        //await this.page.fill(locator, text);
        await locator.fill(text);
    }

    async waitForElement(selector: string) {
        Logger.info(`Waiting for element: ${selector}`);
        await this.page.waitForSelector(selector);
    }
}
