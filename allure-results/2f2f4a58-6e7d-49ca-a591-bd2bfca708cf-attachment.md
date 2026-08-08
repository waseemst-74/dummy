# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Search for Opportunity with valid and invalid data >> Confirm booking for Dillii Diwali Mela
- Location: tests\confirmBooking.spec.ts:27:9

# Error details

```
Error: locator.click: Error: strict mode violation: locator('#book-now-btn') resolved to 3 elements:
    1) <a href="/events/3" id="book-now-btn" aria-disabled="false" data-testid="book-now-btn" class="↵              px-4 py-2 rounded-lg text-sm font-semibold transition-colors↵              bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm↵            ">Book Now</a> aka getByRole('article').filter({ hasText: 'FestivalFeaturedDilli Diwali' }).getByTestId('book-now-btn')
    2) <a href="/events/2" id="book-now-btn" aria-disabled="false" data-testid="book-now-btn" class="↵              px-4 py-2 rounded-lg text-sm font-semibold transition-colors↵              bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm↵            ">Book Now</a> aka getByRole('article').filter({ hasText: 'ConcertFeaturedHollywood' }).getByTestId('book-now-btn')
    3) <a href="/events/1" id="book-now-btn" aria-disabled="false" data-testid="book-now-btn" class="↵              px-4 py-2 rounded-lg text-sm font-semibold transition-colors↵              bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm↵            ">Book Now</a> aka getByRole('article').filter({ hasText: 'ConferenceFeaturedWorld Tech' }).getByTestId('book-now-btn')

Call log:
  - waiting for locator('#book-now-btn')

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
  - alert [ref=e155]
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
     |                       ^ Error: locator.click: Error: strict mode violation: locator('#book-now-btn') resolved to 3 elements:
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