import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class EventHollywoodPage extends BasePage {

    private bookEmailInput: Locator;
    private bookNameInput: Locator;
    private bookPhoneInput: Locator;
    private plusButton: Locator;
    private totalPrice: Locator;
    private confirmBookingButton: Locator;
    private viewBookingButton: Locator
    private bookingReference: Locator


    constructor(page: Page) {

        super(page);
        this.bookEmailInput = page.locator('#customer-email');
        this.bookNameInput = page.locator('#customerName');
        this.bookPhoneInput = page.locator('#phone');
        this.plusButton = page.locator("//button[@type='button']").nth(1);
        this.totalPrice = page.locator('.text-indigo-700').nth(1);
        this.confirmBookingButton = page.locator('#confirm-booking');
        this.viewBookingButton = page.getByText("View My Bookings");
        this.bookingReference = page.locator('.booking-ref');
    }


    async fillHollywoodBookingForm(name: string, email: string, phone: string) {
        Logger.info('Filling booking form...');

        await this.typeText(this.bookNameInput, name);
        await this.typeText(this.bookEmailInput, email);
        await this.typeText(this.bookPhoneInput, phone);
    }

    async addMembers(count: number) {
        Logger.info(`Adding ${count} members...`);
        for (let i = 0; i < count - 1; i++) {   // already 1 member by default
            await this.clickElement(this.plusButton);
            await this.page.waitForTimeout(2000); // wait for half a second to ensure the UI updates
        }
    }
    async getTotalPrice(): Promise<string | null> {
        return await this.totalPrice.textContent();
    }
    async confirmBooking() {
        Logger.info('Confirming booking...');
        await this.clickElement(this.confirmBookingButton);
    }

    async getBookingRef(): Promise<string | null> {
        return (await this.bookingReference.textContent())?.trim() ?? '';
    }

    async viewBooking() {
        Logger.info('View Booking details')
        await this.clickElement(this.viewBookingButton);
    }
}
