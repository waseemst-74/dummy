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

Expected substring: "$7,500"
Received string:    "$300"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [active] [ref=e11] [cursor=pointer]:
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
      - generic [ref=e26]:
        - heading "Discover & Book Amazing Events" [level=1] [ref=e27]:
          - text: Discover & Book
          - text: Amazing Events
        - paragraph [ref=e28]: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
        - generic [ref=e29]:
          - link "Browse Events →" [ref=e30] [cursor=pointer]:
            - /url: /events
            - generic [ref=e31]: Browse Events →
          - link "My Bookings" [ref=e32] [cursor=pointer]:
            - /url: /bookings
            - button "My Bookings" [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "Featured Events" [level=2] [ref=e37]
            - paragraph [ref=e38]: Hand-picked upcoming events just for you
          - link "View all →" [ref=e39] [cursor=pointer]:
            - /url: /events
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - img "Dilli Diwali Mela" [ref=e43]
              - generic [ref=e45]: Festival
              - generic [ref=e46]: Featured
            - generic [ref=e47]:
              - link "Dilli Diwali Mela" [ref=e48] [cursor=pointer]:
                - /url: /events/3
                - heading "Dilli Diwali Mela" [level=3] [ref=e49]
              - generic [ref=e50]:
                - generic [ref=e51]:
                  - img [ref=e52]
                  - generic [ref=e54]: Tue, 20 Oct
                - generic [ref=e55]:
                  - img [ref=e56]
                  - generic [ref=e58]: Pragati Maidan Exhibition Grounds, Delhi
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - paragraph [ref=e61]: $300
                  - generic [ref=e62]: 8 seats left!
                - link "Book Now" [ref=e63] [cursor=pointer]:
                  - /url: /events/3
          - article [ref=e64]:
            - generic [ref=e65]:
              - img "Hollywood Monsoon Night — Los Angeles" [ref=e66]
              - generic [ref=e68]: Concert
              - generic [ref=e69]: Featured
            - generic [ref=e70]:
              - link "Hollywood Monsoon Night — Los Angeles" [ref=e71] [cursor=pointer]:
                - /url: /events/2
                - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - img [ref=e75]
                  - generic [ref=e77]: Sun, 12 Jul
                - generic [ref=e78]:
                  - img [ref=e79]
                  - generic [ref=e81]: Dome, NSCI SVP Stadium, Worli, Los Angeles
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - paragraph [ref=e84]: $2,500
                  - generic [ref=e85]: 8 seats left!
                - link "Book Now" [ref=e86] [cursor=pointer]:
                  - /url: /events/2
          - article [ref=e87]:
            - generic [ref=e88]:
              - img "World Tech Summit" [ref=e89]
              - generic [ref=e91]: Conference
              - generic [ref=e92]: Featured
            - generic [ref=e93]:
              - link "World Tech Summit" [ref=e94] [cursor=pointer]:
                - /url: /events/1
                - heading "World Tech Summit" [level=3] [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - img [ref=e98]
                  - generic [ref=e100]: Sat, 18 Apr
                - generic [ref=e101]:
                  - img [ref=e102]
                  - generic [ref=e104]: Hyderabad, Hitech city, Hyderabad
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - paragraph [ref=e107]: $1,500
                  - generic [ref=e108]: 8 seats left!
                - link "Book Now" [ref=e109] [cursor=pointer]:
                  - /url: /events/1
      - generic [ref=e111]:
        - heading "Ready to experience something new?" [level=2] [ref=e112]
        - paragraph [ref=e113]: Browse thousands of events across India. Book tickets in seconds.
        - link "Explore All Events" [ref=e114] [cursor=pointer]:
          - /url: /events
          - button "Explore All Events" [ref=e115]
  - contentinfo [ref=e116]:
    - generic [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e120]
          - paragraph [ref=e121]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e122]:
          - heading "Popular Courses" [level=3] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Selenium WebDriver with Java" [ref=e126] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e127]:
              - link "Playwright with JavaScript" [ref=e128] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e129]:
              - link "RestAssured API Testing" [ref=e130] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e131]:
              - link "Cypress End-to-End Testing" [ref=e132] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e133]:
              - link "Appium Mobile Testing" [ref=e134] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e135]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e136]
          - paragraph [ref=e137]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e138] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e139]:
          - heading "EventHub Practice App" [level=3] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Browse Events" [ref=e143] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e144]:
              - link "My Bookings" [ref=e145] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e146]:
              - link "Manage Events" [ref=e147] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e148]:
              - link "API Documentation" [ref=e149] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e150]:
        - paragraph [ref=e151]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e152]:
          - link "rahulshettyacademy.com →" [ref=e153] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e154] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - generic [ref=e156]:
    - generic [ref=e158]: ✓
    - paragraph [ref=e159]: Booking cancelled successfully
    - button "Dismiss" [ref=e160] [cursor=pointer]: ×
  - alert [ref=e161]
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
> 43 |         await expect(totalPriceDisplayed).toContain('$7,500');
     |                                           ^ Error: expect(received).toContain(expected) // indexOf
  44 |         await eventHollywoodPage.confirmBooking();
  45 |         await expect(page.getByText('Booking Confirmed')).toBeVisible();
  46 |         await expect(page.getByText('Your tickets are reserved.')).toBeVisible();
  47 |         const bookingRef = await eventHollywoodPage.getBookingRef();
  48 |         console.log(`Booking Ref extracted: ${bookingRef}`);
  49 |         await expect(bookingRef).toMatch(/^H-[A-Z0-9]{6}$/);
  50 |         await eventHollywoodPage.viewBooking()
  51 |         await expect(page).toHaveURL(`${process.env.BASE_URL}bookings`)
  52 |         Logger.info(`Booking confirmed for the user ${name}`);
  53 |         await page.waitForSelector('.booking-ref');
  54 |         const myBookingsPage = poManager.getBookHollywoodPage()
  55 |         const allRefs = await myBookingsPage.getAllBookingRefs();
  56 |         Logger.info(`All booking refs on My Bookings page: ${allRefs}`);
  57 | 
  58 |         // Assert that the bookingRef exists in the list
  59 |         await expect(allRefs).toContain(bookingRef);
  60 |         console.log(`Booking reference ID is : ${bookingRef}`)
  61 | 
  62 |     });
  63 | });
  64 | 
```