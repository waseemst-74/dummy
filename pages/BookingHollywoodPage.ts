import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator } from '@playwright/test';


export class BookingHollywoodPage extends BasePage {

    private bookingRefs: Locator;

    constructor(page: Page) {

        super(page);
        this.bookingRefs = page.locator('.booking-ref');

    }

    async getAllBookingRefs(): Promise<string[]> {
        const count = await this.bookingRefs.count();
        const refs: string[] = [];

        for (let i = 0; i < count; i++) {
            const refText = await this.bookingRefs.nth(i).textContent();
            if (refText) {
                refs.push(refText.trim());
            }
        }
        return refs;
    }
}

