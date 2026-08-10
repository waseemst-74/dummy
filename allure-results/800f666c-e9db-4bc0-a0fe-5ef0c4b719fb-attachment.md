# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Confirm Booking >> For Hollywood Monsoon Night
- Location: tests\confirmBooking.spec.ts:29:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: "H-VR8FND"
Received array: []
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "testclaudeone1@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - heading "My Bookings" [level=1] [ref=e26]
          - paragraph [ref=e27]: View and manage all your ticket bookings
        - generic [ref=e28]:
          - button "Clear all bookings" [ref=e29] [cursor=pointer]
          - paragraph [ref=e30]: Do this often for clean test data.
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - generic [ref=e35]:
                - generic [ref=e36]: H-VR8FND
                - generic [ref=e37]: confirmed
                - generic [ref=e38]: "#116724"
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e39]
              - generic [ref=e40]:
                - generic [ref=e41]: 📅 12 Jul 2026
                - generic [ref=e42]: 🎫 3 tickets
                - generic [ref=e43]: 📍 Los Angeles
                - generic [ref=e44]: 🗓 Booked 10 Aug 2026
            - generic [ref=e45]:
              - paragraph [ref=e46]: $7,500
              - paragraph [ref=e47]: total
          - generic [ref=e48]:
            - link "View Details" [ref=e49] [cursor=pointer]:
              - /url: /bookings/116724
              - button "View Details" [ref=e50]
            - button "Cancel Booking" [ref=e51] [cursor=pointer]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]:
              - generic [ref=e55]:
                - generic [ref=e56]: H-YRNRO5
                - generic [ref=e57]: confirmed
                - generic [ref=e58]: "#116721"
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e59]
              - generic [ref=e60]:
                - generic [ref=e61]: 📅 12 Jul 2026
                - generic [ref=e62]: 🎫 3 tickets
                - generic [ref=e63]: 📍 Los Angeles
                - generic [ref=e64]: 🗓 Booked 10 Aug 2026
            - generic [ref=e65]:
              - paragraph [ref=e66]: $7,500
              - paragraph [ref=e67]: total
          - generic [ref=e68]:
            - link "View Details" [ref=e69] [cursor=pointer]:
              - /url: /bookings/116721
              - button "View Details" [ref=e70]
            - button "Cancel Booking" [ref=e71] [cursor=pointer]
  - contentinfo [ref=e72]:
    - generic [ref=e73]:
      - generic [ref=e74]:
        - generic [ref=e75]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e76]
          - paragraph [ref=e77]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e78]:
          - heading "Popular Courses" [level=3] [ref=e79]
          - list [ref=e80]:
            - listitem [ref=e81]:
              - link "Selenium WebDriver with Java" [ref=e82] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e83]:
              - link "Playwright with JavaScript" [ref=e84] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e85]:
              - link "RestAssured API Testing" [ref=e86] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e87]:
              - link "Cypress End-to-End Testing" [ref=e88] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e89]:
              - link "Appium Mobile Testing" [ref=e90] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e91]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e92]
          - paragraph [ref=e93]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e94] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e95]:
          - heading "EventHub Practice App" [level=3] [ref=e96]
          - list [ref=e97]:
            - listitem [ref=e98]:
              - link "Browse Events" [ref=e99] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e100]:
              - link "My Bookings" [ref=e101] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e102]:
              - link "Manage Events" [ref=e103] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e104]:
              - link "API Documentation" [ref=e105] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e106]:
        - paragraph [ref=e107]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e108]:
          - link "rahulshettyacademy.com →" [ref=e109] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e110] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e111]
```

# Test source

```ts
  1  | import dotenv from 'dotenv';
  2  | import { test, expect } from '@playwright/test';
  3  | import { POManager } from '../pages/POManager';
  4  | import { Logger } from '../utils/Logger';
  5  | import { faker } from '@faker-js/faker';
  6  | 
  7  | dotenv.config();
  8  | 
  9  | test.describe('Confirm Booking', () => {
  10 |     let poManager: POManager;
  11 | 
  12 | 
  13 |     test.beforeEach(async ({ page }) => {
  14 |         Logger.info('Initializing POManager with logged-in page...');
  15 |         poManager = new POManager(page);
  16 | 
  17 |         Logger.info('Navigating to dashboard before each test...');
  18 |         await page.goto('/');
  19 |         console.log('Navigated to:', page.url());
  20 |     });
  21 | 
  22 |     test.afterEach(async ({ page }, testInfo) => {
  23 |         if (testInfo.status !== testInfo.expectedStatus) {
  24 |             Logger.error(`Test failed: ${testInfo.title}`);
  25 |             await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  26 |         }
  27 |     });
  28 | 
  29 |     test('For Hollywood Monsoon Night', async ({ page }) => {
  30 |         Logger.info('Searching for an opportunity with invalid data...');
  31 |         const dashboardPage = poManager.getDashboardPage();
  32 |         await dashboardPage.bookHollywoodMonsoonNight();
  33 |         Logger.info('Clicked on Book Now button for Hollywood Monsoon Night');
  34 |         const name = faker.person.fullName();
  35 |         const email = faker.internet.email();
  36 |         const phone = faker.phone.number({ style: 'mobile' });
  37 |         const eventHollywoodPage = poManager.getEventHollywoodPage();
  38 |         await eventHollywoodPage.fillHollywoodBookingForm(name, email, phone);
  39 |         await eventHollywoodPage.addMembers(3);
  40 |         const totalPriceDisplayed = await eventHollywoodPage.getTotalPrice();
  41 |         Logger.info(`Total price displayed: ${totalPriceDisplayed}`);
  42 |         //await expect(totalPriceDisplayed).toHaveText('$7,500');
  43 |         await expect(totalPriceDisplayed).toContain('$7,500');
  44 |         await eventHollywoodPage.confirmBooking();
  45 |         await expect(page.getByText('Booking Confirmed')).toBeVisible();
  46 |         await expect(page.getByText('Your tickets are reserved.')).toBeVisible();
  47 |         const bookingRef = await eventHollywoodPage.getBookingRef();
  48 |         console.log(`Booking Ref extracted: ${bookingRef}`);
  49 |         await expect(bookingRef).toMatch(/^H-[A-Z0-9]{6}$/);
  50 |         await eventHollywoodPage.viewBooking()
  51 |         await expect(page).toHaveURL(`${process.env.BASE_URL}bookings`)
  52 |         Logger.info(`Booking confirmed for the user ${name}`);
  53 |         const myBookingsPage = poManager.getBookHollywoodPage()
  54 |         const allRefs = await myBookingsPage.getAllBookingRefs();
  55 |         Logger.info(`All booking refs on My Bookings page: ${allRefs}`);
  56 | 
  57 |         // Assert that the bookingRef exists in the list
> 58 |         await expect(allRefs).toContain(bookingRef);
     |                               ^ Error: expect(received).toContain(expected) // indexOf
  59 |         console.log(`Booking reference ID is : ${bookingRef}`)
  60 | 
  61 |     });
  62 | });
  63 | 
```