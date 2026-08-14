import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { POManager } from '../pages/POManager';
import { Logger } from '../utils/Logger';
import { faker } from '@faker-js/faker';

dotenv.config();

test.describe('Confirm Booking', () => {
    let poManager: POManager;
    let bookingRef: string;


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

    test('Booking lifecycle for Hollywood Monsoon Night', async ({ page }) => {
        await test.step('Create booking', async () => {
            Logger.info('Landed on Dashboard for Event booking...');
            const dashboardPage = poManager.getDashboardPage();
            await dashboardPage.bookHollywoodMonsoonNight();
            Logger.info('Clicked on Book Now button for Hollywood Monsoon Night');
            const name = faker.person.fullName();
            const email = faker.internet.email();
            const phone = faker.phone.number({ style: 'mobile' });
            const eventHollywoodPage = poManager.getEventHollywoodPage();
            await eventHollywoodPage.fillHollywoodBookingForm(name, email, phone);
            await eventHollywoodPage.addMembers(1);
            const totalPriceDisplayed = await eventHollywoodPage.getTotalPrice();
            Logger.info(`Total price displayed: ${totalPriceDisplayed}`);
            //await expect(totalPriceDisplayed).toHaveText('$7,500');
            await expect(totalPriceDisplayed).toContain('$2,500');
            await eventHollywoodPage.confirmBooking();
            await expect(page.getByText('Booking Confirmed')).toBeVisible();
            await expect(page.getByText('Your tickets are reserved.')).toBeVisible();
            bookingRef = (await eventHollywoodPage.getBookingRef()) ?? '';
            console.log(`Booking Ref extracted: ${bookingRef}`);
            await expect(bookingRef).toMatch(/^H-[A-Z0-9]{6}$/);
            await eventHollywoodPage.viewBooking()
            await expect(page).toHaveURL(`${process.env.BASE_URL}bookings`)
            Logger.info(`Booking confirmed for the user ${name}`);
            await page.waitForSelector('.booking-ref');
            const myBookingsPage = poManager.getBookHollywoodPage()
            const allRefs = await myBookingsPage.getAllBookingRefs();
            Logger.info(`All booking refs on My Bookings page: ${allRefs}`);

            // Assert that the bookingRef exists in the list
            await expect(allRefs).toContain(bookingRef);
            console.log(`Booking reference ID is : ${bookingRef}`)

        });
        await test.step('Cancel booking', async () => {
            Logger.info('Navigating to My bookings...');
            const dashboardPage = poManager.getDashboardPage();
            await dashboardPage.goToMyBookings();
            await expect(page).toHaveURL(`${process.env.BASE_URL}bookings`)
            const myBookingsPage = poManager.getBookHollywoodPage();
            await myBookingsPage.cancelBookingByRefe(bookingRef);
            /* page.on('dialog', async dialog => {
                 console.log(`Dialog message: ${dialog.message()}`);
                 await dialog.accept();
             })
             await page.waitForSelector('.booking-ref');
             await expect(page.locator('.booking-ref')).not.toContainText(bookingRef);
             Logger.info(`Booking with ref ${bookingRef} successfully cancelled`);
         });*/
        });
    });
})