# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Confirm Booking >> Booking lifecycle for Hollywood Monsoon Night
- Location: tests\confirmBooking.spec.ts:30:9

# Error details

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('article:has-text(\'Hollywood Monsoon Night — Los Angeles\')').locator('text=Book Now')

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
                - generic [ref=e36]: H-00RREC
                - generic [ref=e37]: confirmed
                - generic [ref=e38]: "#116818"
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e39]
              - generic [ref=e40]:
                - generic [ref=e41]: 📅 12 Jul 2026
                - generic [ref=e42]: 🎫 1 ticket
                - generic [ref=e43]: 📍 Los Angeles
                - generic [ref=e44]: 🗓 Booked 10 Aug 2026
            - generic [ref=e45]:
              - paragraph [ref=e46]: $2,500
              - paragraph [ref=e47]: total
          - generic [ref=e48]:
            - link "View Details" [ref=e49] [cursor=pointer]:
              - /url: /bookings/116818
              - button "View Details" [ref=e50]
            - button "Cancel Booking" [ref=e51] [cursor=pointer]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]:
              - generic [ref=e55]:
                - generic [ref=e56]: H-FE0HQU
                - generic [ref=e57]: confirmed
                - generic [ref=e58]: "#116738"
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e59]
              - generic [ref=e60]:
                - generic [ref=e61]: 📅 12 Jul 2026
                - generic [ref=e62]: 🎫 1 ticket
                - generic [ref=e63]: 📍 Los Angeles
                - generic [ref=e64]: 🗓 Booked 10 Aug 2026
            - generic [ref=e65]:
              - paragraph [ref=e66]: $2,500
              - paragraph [ref=e67]: total
          - generic [ref=e68]:
            - link "View Details" [ref=e69] [cursor=pointer]:
              - /url: /bookings/116738
              - button "View Details" [ref=e70]
            - button "Cancel Booking" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - generic [ref=e76]: H-E93NMS
                - generic [ref=e77]: confirmed
                - generic [ref=e78]: "#116734"
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e79]
              - generic [ref=e80]:
                - generic [ref=e81]: 📅 12 Jul 2026
                - generic [ref=e82]: 🎫 1 ticket
                - generic [ref=e83]: 📍 Los Angeles
                - generic [ref=e84]: 🗓 Booked 10 Aug 2026
            - generic [ref=e85]:
              - paragraph [ref=e86]: $2,500
              - paragraph [ref=e87]: total
          - generic [ref=e88]:
            - link "View Details" [ref=e89] [cursor=pointer]:
              - /url: /bookings/116734
              - button "View Details" [ref=e90]
            - button "Cancel Booking" [ref=e91] [cursor=pointer]
  - contentinfo [ref=e92]:
    - generic [ref=e93]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e96]
          - paragraph [ref=e97]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e98]:
          - heading "Popular Courses" [level=3] [ref=e99]
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "Selenium WebDriver with Java" [ref=e102] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e103]:
              - link "Playwright with JavaScript" [ref=e104] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e105]:
              - link "RestAssured API Testing" [ref=e106] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e107]:
              - link "Cypress End-to-End Testing" [ref=e108] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e109]:
              - link "Appium Mobile Testing" [ref=e110] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e111]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e112]
          - paragraph [ref=e113]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e114] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e115]:
          - heading "EventHub Practice App" [level=3] [ref=e116]
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Browse Events" [ref=e119] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e120]:
              - link "My Bookings" [ref=e121] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e122]:
              - link "Manage Events" [ref=e123] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e124]:
              - link "API Documentation" [ref=e125] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e126]:
        - paragraph [ref=e127]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e128]:
          - link "rahulshettyacademy.com →" [ref=e129] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e130] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - generic:
    - generic [ref=e132]:
      - generic [ref=e134]: ✓
      - paragraph [ref=e135]: Booking cancelled successfully
      - button "Dismiss" [ref=e136] [cursor=pointer]: ×
    - generic [ref=e138]:
      - generic [ref=e140]: ✓
      - paragraph [ref=e141]: Booking cancelled successfully
      - button "Dismiss" [ref=e142] [cursor=pointer]: ×
    - generic [ref=e144]:
      - generic [ref=e146]: ✓
      - paragraph [ref=e147]: Booking cancelled successfully
      - button "Dismiss" [ref=e148] [cursor=pointer]: ×
  - alert [ref=e149]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { Logger } from '../utils/Logger';
  3  | 
  4  | export class BasePage {
  5  |     protected page: Page;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 |     async clickElement(Locator: Locator) {
  12 |         Logger.info(`Clicking element: ${Locator}`);
  13 |         //await this.page.click(Locator);
> 14 |         await Locator.click();
     |                       ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  15 | 
  16 |     }
  17 | 
  18 |     async typeText(locator: Locator, text: string) {
  19 |         Logger.info(`Typing into ${locator}: ${text}`);
  20 |         //await this.page.fill(locator, text);
  21 |         await locator.fill(text);
  22 |     }
  23 | 
  24 |     async waitForElement(selector: string) {
  25 |         Logger.info(`Waiting for element: ${selector}`);
  26 |         await this.page.waitForSelector(selector);
  27 |     }
  28 | }
  29 | 
```