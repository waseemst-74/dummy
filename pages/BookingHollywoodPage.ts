import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';
import { Page, Locator, expect } from '@playwright/test';


export class BookingHollywoodPage extends BasePage {

    private bookingRefs: Locator;
    private bookingCards: Locator;

    constructor(page: Page) {

        super(page);
        this.bookingRefs = page.locator('.booking-ref');
        this.bookingCards = page.locator('#booking-card');

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

    async cancelBookingByRef(ref: string): Promise<void> {
        const count = await this.bookingCards.count();
        Logger.info(`Found ${count} booking cards`);

        for (let i = 0; i < count; i++) {
            const card = this.bookingCards.nth(i);
            const refText = await card.locator('.booking-ref').textContent();

            if (refText?.trim() === ref) {
                Logger.info(`Found matching booking card for ref: ${ref}`);
                await card.getByRole('button', { name: 'Cancel Booking' }).click();
                return;
            }
        }

        throw new Error(`Booking reference ${ref} not found on My Bookings page`);
    }


    async cancelBookingByRefe(ref: string): Promise<void> {
        Logger.info(`Attempting to cancel booking with ref: ${ref}`);

        // Attach dialog handler before clicking cancel
        this.page.on('dialog', async dialog => {
            Logger.info(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });

        const bookingCards = this.page.locator('#booking-card');
        const count = await this.bookingRefs.count();
        for (let i = 0; i < count; i++) {
            const card = bookingCards.nth(i);
            const refText = await this.bookingRefs.nth(i).textContent();
            if (refText?.trim() === ref) {
                Logger.info(`Found booking card for ref: ${ref}`);

                await card.locator('[data-testid="cancel-booking-btn"]').click();
                await this.page.locator('button:has-text("Yes, cancel it")').click()


                break;
            }
        }
        await expect(this.page.getByText('Booking cancelled successfully')).toBeVisible();
        await expect(this.page.locator('.booking-ref', { hasText: ref })).toHaveCount(0);
        // After cancellation, re-check all refs
        const remainingRefs = await this.getAllBookingRefs();
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(3000)
        await expect(remainingRefs).not.toContain(ref);
        Logger.info(`Booking with ref ${ref} successfully cancelled`);

    }
}