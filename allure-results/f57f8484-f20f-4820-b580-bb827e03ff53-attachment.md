# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestCustomFix.spec.ts >> T1_ValidateUrl
- Location: tests\LoginTestCustomFix.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' }) to be visible

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |   //Declaration Locators
  6  |   private readonly usnTf: Locator;
  7  |   private readonly pswTf: Locator;
  8  |   private readonly loginBtn: Locator;
  9  | 
  10 |   //Initialization
  11 |   constructor(page: Page) {
  12 |     super(page);
  13 |     this.usnTf = page.getByRole("textbox", { name: "Email" });
  14 |     this.pswTf = page.getByRole("textbox", { name: "Password" });
  15 |     this.loginBtn = page.getByRole("button", { name: "Login" });
  16 |   }
  17 | 
  18 |   //Utilization page/element action methods
  19 |   async navigateToLoginPage(): Promise<void> {
  20 |     await this.page.goto("/user-signin");
  21 |   }
  22 | 
  23 |   async fetchLoginPageURL(): Promise<string> {
  24 |     let loginPageURL = this.page.url();
  25 |     console.log(`the login page url is ${loginPageURL}`);
  26 |     return loginPageURL;
  27 |   }
  28 | 
  29 |   async fetchLoginPageTitle(): Promise<string> {
  30 |     let loginPageTitle = this.page.title();
  31 |     console.log(`the login page title is ${loginPageTitle}`);
  32 |     return loginPageTitle;
  33 |   }
  34 | 
  35 |   async doLogin(usn: string, psw: string): Promise<void> {
> 36 |     await this.usnTf.waitFor({ state: "visible" });
     |                      ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  37 |     await this.usnTf.fill(usn);
  38 |     await this.pswTf.waitFor({ state: "visible" });
  39 |     await this.pswTf.fill(psw);
  40 |     await this.loginBtn.click();
  41 |     //await this.page.screenshot({ path: "./screenshots/HomePage.png" });
  42 |   }
  43 | }
  44 | 
```