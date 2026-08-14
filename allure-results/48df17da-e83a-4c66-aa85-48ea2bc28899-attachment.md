# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmBooking.spec.ts >> Confirm Booking >> Booking lifecycle for Hollywood Monsoon Night
- Location: tests\confirmBooking.spec.ts:30:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://eventhub.rahulshettyacademy.com/events/3"
Received: "https://eventhub.rahulshettyacademy.com/events/2"

Call log:
  - Expect "toHaveURL" with timeout 30000ms
    5 × unexpected value "https://eventhub.rahulshettyacademy.com/"
    28 × unexpected value "https://eventhub.rahulshettyacademy.com/events/2"

```

```yaml
- navigation:
  - link "EventHub":
    - /url: /
    - img
    - text: EventHub
  - link "Home":
    - /url: /
  - link "Events":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
  - link "API Docs":
    - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - button "Admin":
    - text: Admin
    - img
  - text: testclaudeone1@gmail.com
  - button "Logout"
- main:
  - navigation:
    - link "Events":
      - /url: /events
    - text: / Hollywood Monsoon Night — Los Angeles
  - img "Hollywood Monsoon Night — Los Angeles"
  - text: Concert Featured
  - heading "Hollywood Monsoon Night — Los Angeles" [level=1]
  - img
  - text: This is a featured event — always available for practice 📅
  - paragraph: Date
  - paragraph: Sunday, 12 July
  - text: 🕐
  - paragraph: Time
  - paragraph: 12:30 am
  - text: 📍
  - paragraph: Venue
  - paragraph: Dome, NSCI SVP Stadium, Worli
  - text: 🌆
  - paragraph: City
  - paragraph: Los Angeles
  - text: 🎫
  - paragraph: Available
  - paragraph: 8 / 3000 seats
  - text: 💰
  - paragraph: Price per ticket
  - paragraph: $2,500
  - heading "About this event" [level=2]
  - paragraph: An unforgettable evening of live music performed by A-list playback singers under the open Mumbai sky. Featuring chart-toppers from the last three decades with a stunning light show and pyrotechnics.
  - heading "Book Tickets" [level=2]
  - text: $2,500
  - paragraph: per ticket
  - text: Tickets
  - button "−" [disabled]
  - text: "1"
  - button "+"
  - text: (max 8) Full Name*
  - textbox "Full Name*":
    - /placeholder: Your full name
  - text: Email*
  - textbox "Email*":
    - /placeholder: you@email.com
  - text: Phone Number*
  - textbox "Phone Number*":
    - /placeholder: +91 98765 43210
  - text: $2,500 × 1 ticket $2,500 Total $2,500
  - button "Confirm Booking"
- contentinfo:
  - heading "Rahul Shetty Academy" [level=3]
  - paragraph: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
  - heading "Popular Courses" [level=3]
  - list:
    - listitem:
      - link "Selenium WebDriver with Java":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Playwright with JavaScript":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "RestAssured API Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Cypress End-to-End Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Appium Mobile Testing":
        - /url: https://rahulshettyacademy.com
  - heading "QA Job Hiring Platform" [level=3]
  - paragraph: Get hired faster — take skill assessments trusted by top QA employers worldwide.
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
  - heading "EventHub Practice App" [level=3]
  - list:
    - listitem:
      - link "Browse Events":
        - /url: /events
    - listitem:
      - link "My Bookings":
        - /url: /bookings
    - listitem:
      - link "Manage Events":
        - /url: /admin/events
    - listitem:
      - link "API Documentation":
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - paragraph: © 2026 Rahul Shetty Academy. All rights reserved.
  - link "rahulshettyacademy.com →":
    - /url: https://rahulshettyacademy.com
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
- alert
```

```
Error: page.screenshot: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\wasee\AppData\Local\ms-playwright\firefox-1532\firefox\firefox.exe -no-remote -wait-for-browser -foreground -profile C:\Users\wasee\AppData\Local\Temp\playwright_firefoxdev_profile-WiYiJJ -juggler-pipe -silent
<launched> pid=21408
[pid=21408][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
[pid=21408][out] 
[pid=21408][out] Juggler listening to the pipe
[pid=21408][out] console.error: "Warning: unrecognized command line flag" "-foreground"
[pid=21408][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
[pid=21408][out] console.warn: services.settings: #fetchAttachment: Forcing fallbackToDump to false due to Utils.LOAD_DUMPS being false
[pid=21408][out] console.error: [Exception... "Favicon at "https://eventhub.rahulshettyacademy.com/favicon.ico" failed to load."  nsresult: "0x80004004 (NS_ERROR_ABORT)"  location: "JS frame :: resource:///modules/FaviconLoader.sys.mjs :: onStopRequest :: line 274"  data: no]
[pid=21408][out] console.error: (new NotFoundError("Could not find fa0fc42c-d91d-fca7-34eb-806ff46062dc in cache or dump", "resource://services-settings/Attachments.sys.mjs", 48))
[pid=21408][out] console.warn: "Unable to find the attachment for" "fa0fc42c-d91d-fca7-34eb-806ff46062dc"
[pid=21408][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
[pid=21408][out] console.error: "Error fetching remote settings base url from CDN. Falling back to https://firefox-settings-attachments.cdn.mozilla.net/" (new SyntaxError("XMLHttpRequest.open: '/' is not a valid URL.", (void 0), 126))
[pid=21408][out] console.error: services.settings: 
[pid=21408][out]   Message: EmptyDatabaseError: "main/nimbus-desktop-experiments" has not been synced yet
[pid=21408][out]   Stack:
[pid=21408][out]     EmptyDatabaseError@resource://services-settings/Database.sys.mjs:19:5
[pid=21408][out] list@resource://services-settings/Database.sys.mjs:96:13
[pid=21408][out] 
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```