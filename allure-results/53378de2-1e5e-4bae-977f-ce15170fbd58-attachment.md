# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Confirm Booking >> Booking lifecycle for Hollywood Monsoon Night
- Location: tests\confirmBooking.spec.ts:30:9

# Error details

```
Error: expect(received).not.toContain(expected) // indexOf

Expected value: not "H-0OSCYQ"
Received array:     ["H-0OSCYQ"]
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
        - img [ref=e33]
        - heading "No bookings yet" [level=3] [ref=e35]
        - paragraph [ref=e36]: You haven't booked any events yet. Browse upcoming events and grab your tickets!
        - link "Browse Events" [ref=e38] [cursor=pointer]:
          - /url: /events
          - button "Browse Events" [ref=e39]
  - contentinfo [ref=e40]:
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e44]
          - paragraph [ref=e45]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e46]:
          - heading "Popular Courses" [level=3] [ref=e47]
          - list [ref=e48]:
            - listitem [ref=e49]:
              - link "Selenium WebDriver with Java" [ref=e50] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e51]:
              - link "Playwright with JavaScript" [ref=e52] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e53]:
              - link "RestAssured API Testing" [ref=e54] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e55]:
              - link "Cypress End-to-End Testing" [ref=e56] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e57]:
              - link "Appium Mobile Testing" [ref=e58] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e59]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e60]
          - paragraph [ref=e61]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e62] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e63]:
          - heading "EventHub Practice App" [level=3] [ref=e64]
          - list [ref=e65]:
            - listitem [ref=e66]:
              - link "Browse Events" [ref=e67] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e68]:
              - link "My Bookings" [ref=e69] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e70]:
              - link "Manage Events" [ref=e71] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e72]:
              - link "API Documentation" [ref=e73] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e74]:
        - paragraph [ref=e75]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e76]:
          - link "rahulshettyacademy.com →" [ref=e77] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e78] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - generic [ref=e80]:
    - generic [ref=e82]: ✓
    - paragraph [ref=e83]: Booking cancelled successfully
    - button "Dismiss" [ref=e84] [cursor=pointer]: ×
  - alert [ref=e85]
```

# Test source

```ts
  1  | import { BasePage } from './BasePage';
  2  | import { Logger } from '../utils/Logger';
  3  | import { Page, Locator, expect } from '@playwright/test';
  4  | 
  5  | 
  6  | export class BookingHollywoodPage extends BasePage {
  7  | 
  8  |     private bookingRefs: Locator;
  9  |     private bookingCards: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 | 
  13 |         super(page);
  14 |         this.bookingRefs = page.locator('.booking-ref');
  15 |         this.bookingCards = page.locator('#booking-card');
  16 | 
  17 |     }
  18 | 
  19 |     async getAllBookingRefs(): Promise<string[]> {
  20 |         const count = await this.bookingRefs.count();
  21 |         const refs: string[] = [];
  22 | 
  23 |         for (let i = 0; i < count; i++) {
  24 |             const refText = await this.bookingRefs.nth(i).textContent();
  25 |             if (refText) {
  26 |                 refs.push(refText.trim());
  27 |             }
  28 |         }
  29 |         return refs;
  30 |     }
  31 | 
  32 |     async cancelBookingByRef(ref: string): Promise<void> {
  33 |         const count = await this.bookingCards.count();
  34 |         Logger.info(`Found ${count} booking cards`);
  35 | 
  36 |         for (let i = 0; i < count; i++) {
  37 |             const card = this.bookingCards.nth(i);
  38 |             const refText = await card.locator('.booking-ref').textContent();
  39 | 
  40 |             if (refText?.trim() === ref) {
  41 |                 Logger.info(`Found matching booking card for ref: ${ref}`);
  42 |                 await card.getByRole('button', { name: 'Cancel Booking' }).click();
  43 |                 return;
  44 |             }
  45 |         }
  46 | 
  47 |         throw new Error(`Booking reference ${ref} not found on My Bookings page`);
  48 |     }
  49 | 
  50 | 
  51 |     async cancelBookingByRefe(ref: string): Promise<void> {
  52 |         Logger.info(`Attempting to cancel booking with ref: ${ref}`);
  53 | 
  54 |         // Attach dialog handler before clicking cancel
  55 |         this.page.on('dialog', async dialog => {
  56 |             Logger.info(`Dialog message: ${dialog.message()}`);
  57 |             await dialog.accept();
  58 |         });
  59 | 
  60 |         const bookingCards = this.page.locator('#booking-card');
  61 |         const count = await this.bookingRefs.count();
  62 |         for (let i = 0; i < count; i++) {
  63 |             const card = bookingCards.nth(i);
  64 |             const refText = await this.bookingRefs.nth(i).textContent();
  65 |             if (refText?.trim() === ref) {
  66 |                 Logger.info(`Found booking card for ref: ${ref}`);
  67 | 
  68 |                 await card.locator('[data-testid="cancel-booking-btn"]').click();
  69 |                 await this.page.locator('button:has-text("Yes, cancel it")').click()
  70 | 
  71 | 
  72 |                 break;
  73 |             }
  74 |         }
  75 |         await expect(this.page.getByText('Booking cancelled successfully')).toBeVisible();
  76 | 
  77 |         // After cancellation, re-check all refs
  78 |         const remainingRefs = await this.getAllBookingRefs();
  79 |         await this.page.waitForLoadState('networkidle')
  80 |         await this.page.waitForTimeout(3000)
> 81 |         await expect(remainingRefs).not.toContain(ref);
     |                                         ^ Error: expect(received).not.toContain(expected) // indexOf
  82 |         Logger.info(`Booking with ref ${ref} successfully cancelled`);
  83 | 
  84 |     }
  85 | }
```