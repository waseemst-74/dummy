# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Search for Opportunity with valid and invalid data >> Confirm booking for Hollywood Monsoon Night
- Location: tests\confirmBooking.spec.ts:27:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Hollywood Monsoon Night — Los Angeles')
Expected: visible
Error: strict mode violation: getByText('Hollywood Monsoon Night — Los Angeles') resolved to 2 elements:
    1) <span class="text-gray-900 truncate">Hollywood Monsoon Night — Los Angeles</span> aka locator('span').filter({ hasText: 'Hollywood Monsoon Night — Los' })
    2) <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Hollywood Monsoon Night — Los Angeles</h1> aka getByRole('heading', { name: 'Hollywood Monsoon Night — Los' })

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Hollywood Monsoon Night — Los Angeles')

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
      - navigation [ref=e24]:
        - link "Events" [ref=e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=e26]: /
        - generic [ref=e27]: Hollywood Monsoon Night — Los Angeles
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img "Hollywood Monsoon Night — Los Angeles" [ref=e31]
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]: Concert
              - generic [ref=e35]: Featured
            - heading "Hollywood Monsoon Night — Los Angeles" [level=1] [ref=e36]
            - generic [ref=e37]:
              - img [ref=e38]
              - text: This is a featured event — always available for practice
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: 📅
                - generic [ref=e43]:
                  - paragraph [ref=e44]: Date
                  - paragraph [ref=e45]: Sunday, 12 July
              - generic [ref=e46]:
                - generic [ref=e47]: 🕐
                - generic [ref=e48]:
                  - paragraph [ref=e49]: Time
                  - paragraph [ref=e50]: 12:30 am
              - generic [ref=e51]:
                - generic [ref=e52]: 📍
                - generic [ref=e53]:
                  - paragraph [ref=e54]: Venue
                  - paragraph [ref=e55]: Dome, NSCI SVP Stadium, Worli
              - generic [ref=e56]:
                - generic [ref=e57]: 🌆
                - generic [ref=e58]:
                  - paragraph [ref=e59]: City
                  - paragraph [ref=e60]: Los Angeles
              - generic [ref=e61]:
                - generic [ref=e62]: 🎫
                - generic [ref=e63]:
                  - paragraph [ref=e64]: Available
                  - paragraph [ref=e65]: 8 / 3000 seats
              - generic [ref=e66]:
                - generic [ref=e67]: 💰
                - generic [ref=e68]:
                  - paragraph [ref=e69]: Price per ticket
                  - paragraph [ref=e70]: $2,500
            - generic [ref=e71]:
              - heading "About this event" [level=2] [ref=e72]
              - paragraph [ref=e73]: An unforgettable evening of live music performed by A-list playback singers under the open Mumbai sky. Featuring chart-toppers from the last three decades with a stunning light show and pyrotechnics.
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "Book Tickets" [level=2] [ref=e77]
            - generic [ref=e78]: $2,500
          - paragraph [ref=e79]: per ticket
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Tickets
              - generic [ref=e83]:
                - button "−" [disabled] [ref=e84]
                - generic [ref=e85]: "1"
                - button "+" [ref=e86] [cursor=pointer]
                - generic [ref=e87]: (max 8)
            - generic [ref=e88]:
              - generic [ref=e89]: Full Name*
              - textbox "Full Name*" [ref=e90]:
                - /placeholder: Your full name
            - generic [ref=e91]:
              - generic [ref=e92]: Email*
              - textbox "Email*" [ref=e93]:
                - /placeholder: you@email.com
            - generic [ref=e94]:
              - generic [ref=e95]: Phone Number*
              - textbox "Phone Number*" [ref=e96]:
                - /placeholder: +91 98765 43210
            - generic [ref=e97]:
              - generic [ref=e98]:
                - generic [ref=e99]: $2,500 × 1 ticket
                - generic [ref=e100]: $2,500
              - generic [ref=e101]:
                - generic [ref=e102]: Total
                - generic [ref=e103]: $2,500
            - button "Confirm Booking" [ref=e104] [cursor=pointer]
  - contentinfo [ref=e105]:
    - generic [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e109]
          - paragraph [ref=e110]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e111]:
          - heading "Popular Courses" [level=3] [ref=e112]
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Selenium WebDriver with Java" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e116]:
              - link "Playwright with JavaScript" [ref=e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e118]:
              - link "RestAssured API Testing" [ref=e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e120]:
              - link "Cypress End-to-End Testing" [ref=e121] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e122]:
              - link "Appium Mobile Testing" [ref=e123] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e124]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e125]
          - paragraph [ref=e126]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e127] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e128]:
          - heading "EventHub Practice App" [level=3] [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Browse Events" [ref=e132] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e133]:
              - link "My Bookings" [ref=e134] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e135]:
              - link "Manage Events" [ref=e136] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e137]:
              - link "API Documentation" [ref=e138] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e139]:
        - paragraph [ref=e140]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e141]:
          - link "rahulshettyacademy.com →" [ref=e142] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e143] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e144]
```

# Test source

```ts
  1  | import { BasePage } from './BasePage';
  2  | import { Logger } from '../utils/Logger';
  3  | import { Page, Locator } from '@playwright/test';
  4  | import { expect } from '@playwright/test';
  5  | 
  6  | export class Dashboard extends BasePage {
  7  | 
  8  |     private bookNowButton: Locator;
  9  |     private eventCard: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 | 
  13 |         super(page);
  14 |         this.bookNowButton = page.locator('#book-now-btn').first();
  15 |         //this.eventCard = page.locator("//div[contains(@class,'event-card')][.//text()[contains(.,'Hollywood Monsoon Night — Los Angeles')]]");
  16 |         //this.eventCard = page.locator("//article[.//h3[contains(text(),'Hollywood Monsoon Night — Los Angeles')]]//button[contains(.,'Book Now')]");
  17 |         this.eventCard = page.locator("article:has-text('Hollywood Monsoon Night — Los Angeles') >> text=Book Now");
  18 |     }
  19 | 
  20 | 
  21 |     async validateDashboard() {
  22 |         Logger.info('Starting login process...');
  23 |         await this.clickElement(this.bookNowButton);
  24 |         Logger.info('Login completed successfully.');
  25 |     }
  26 | 
  27 |     async bookHollywoodMonsoonNight() {
  28 |         Logger.info('Looking for Hollywood Monsoon Night card...');
  29 |         //const bookNow = this.eventCard.locator("button:has-text('Book Now')");
  30 |         await this.clickElement(this.eventCard);
  31 |         Logger.info('Clicked Book Now for Hollywood Monsoon Night — Los Angeles.');
  32 |         await expect(this.page.getByText('Hand-picked upcoming events just for you')).toBeVisible({ timeout: 10000 });
  33 |         await expect(this.page).toHaveURL(`${process.env.BASE_URL}events/2`);
> 34 |         await expect(this.page.getByText('Hollywood Monsoon Night — Los Angeles')).toBeVisible({ timeout: 10000 });
     |                                                                                    ^ Error: expect(locator).toBeVisible() failed
  35 |         await expect(this.page.locator('#confirm-booking')).toBeVisible();
  36 |     }
  37 | }
  38 | 
```