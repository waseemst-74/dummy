import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';

export class POManager {
    page: Page;
    loginPage: LoginPage;
    dashboardPage: Dashboard;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new Dashboard(page);
    }

    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
}