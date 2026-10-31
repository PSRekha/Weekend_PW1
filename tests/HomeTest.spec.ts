import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pagelayers/LoginPage";
import { HomePage } from "../src/pagelayers/HomePage";

let homePage: HomePage;

test.beforeEach("navigateToHomePage", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.doLogin("shopperplaywright@gmail.com", "Playwright@34");

  homePage = new HomePage(page);
});
test("TC1-ValidateHomePageUrl", async ({ page }) => {
  let pageUrl = await homePage.fetchHomePageURL();
  expect(pageUrl).toBe("https://www.shoppersstack.com/user-signin");
});

test("TC2-ValidateHomePageTitle", async ({ page }) => {
  let Title = await homePage.fetchHomePageTitle();
  expect(Title).toBe("ShoppersStack | Home");
});

test("TC3-ValidateProfileIconVisibility", async ({ page }) => {
  let flag = await homePage.checkForProfileIcon();
  console.log("Profile icon visible", flag);
  expect(flag).toBeTruthy();
});

test("TC4-ValidateSuccessfullLogout", async ({ page }) => {
  await homePage.dologout();
});
