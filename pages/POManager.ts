import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';
import { EventHollywoodPage } from './EventHollywoodPage';
import { BookingHollywoodPage } from './BookingHollywoodPage'

export class POManager {
    page: Page;
    loginPage: LoginPage;
    dashboardPage: Dashboard;
    eventHollywoodPage: EventHollywoodPage;
    bookHollywoodPage: BookingHollywoodPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new Dashboard(page);
        this.eventHollywoodPage = new EventHollywoodPage(page);
        this.bookHollywoodPage = new BookingHollywoodPage(page)
    }

    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getEventHollywoodPage() {
        return this.eventHollywoodPage;
    }

    getBookHollywoodPage() {
        return this.bookHollywoodPage;
    }
}