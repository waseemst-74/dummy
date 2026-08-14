import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class Dashboard extends BasePage {

    private bookNowButton: Locator;
    private eventCard: Locator;
    private confirmBookingButton: Locator;
    private myBookings: Locator


    constructor(page: Page) {

        super(page);
        this.bookNowButton = page.locator('#book-now-btn').first();
        this.eventCard = page.locator("article:has-text('Hollywood Monsoon Night — Los Angeles') >> text=Book Now");
        this.confirmBookingButton = page.locator('#confirm-booking')
        this.myBookings = page.locator('#nav-bookings')

    }


    async validateDashboard() {
        Logger.info('Starting login process...');
        await this.clickElement(this.bookNowButton);
        Logger.info('Login completed successfully.');
    }

    async bookHollywoodMonsoonNight() {
        Logger.info('Looking for Hollywood Monsoon Night card...');
        //const bookNow = this.eventCard.locator("button:has-text('Book Now')");
        await this.clickElement(this.eventCard);
        Logger.info('Clicked Book Now for Hollywood Monsoon Night — Los Angeles.');
        await expect(this.page.getByText('Hand-picked upcoming events just for you')).toBeVisible({ timeout: 10000 });
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}events/2`);
        await expect(this.confirmBookingButton).toBeVisible();
    }

    async goToMyBookings() {
        await this.clickElement(this.myBookings);
    }

    /*async bookDilliDiwali() {
        Logger.info('Looking for Dilli Diwali...');
        //const bookNow = this.eventCard.locator("button:has-text('Book Now')");
        await this.clickElement(this.dilliDiwaliEventCard);
        Logger.info('Clicked Book Now for Dilli Diwali Mela');
        await expect(this.page.getByText('Dilli Diwali Mela')).toBeVisible({ timeout: 10000 });
        await expect(this.page).toHaveURL(`${process.env.BASE_URL}events/3`);
        await expect(this.confirmBookingButton).toBeVisible();
    }*/
}
