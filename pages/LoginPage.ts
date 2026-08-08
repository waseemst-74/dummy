import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator } from '@playwright/test';

export class LoginPage extends BasePage {

    private emailInput: Locator;
    private passwordInput: Locator;
    private signInButton: Locator;
    //private primaryOfferings: Locator;
    /*private searchByName: Locator;
    private errorToast: Locator;
    private cards: Locator;*/

    constructor(page: Page) {

        super(page);
        this.emailInput = page.locator("//input[@id='email']");
        this.passwordInput = page.locator('//input[@id="password"]');
        this.signInButton = page.locator('//button[@id="login-btn"]');

    }


    async login(username: string, password: string) {
        Logger.info('Starting login process...');
        await this.typeText(this.emailInput, username);
        await this.typeText(this.passwordInput, password);
        await this.clickElement(this.signInButton);
        //await this.waitForElement(this.primaryOfferings);
        Logger.info('Login completed successfully.');
    }
}
