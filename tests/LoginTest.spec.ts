import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pagelayers/LoginPage';
import * as allure from 'allure-js-commons'; 

let loginPage:LoginPage;

test.beforeEach('navigateToLoginPage',async({page})=>{
    await allure.epic('Web Application');
    await allure.feature('Login');
    await allure.story('valid user login');
    await allure.severity('critical');
    await allure.description('verify that a registered user can login successfully');
    loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();
})

test('T1-ValidateLoginPageURL', async ({page})=>{
//let  loginPage=new LoginPage(page);
//await loginPage.navigateToLoginPage();
let pageURL=await loginPage.fetchLoginPageURL();
expect(pageURL).toBe("https://www.shoppersstack.com/user-signin");
})

test('T2-ValidateLoginPageTitle', async ({page})=>{
//let  loginPage=new LoginPage(page);
//await loginPage.navigateToLoginPage();
let pageTitle=await loginPage.fetchLoginPageTitle();
expect(pageTitle).toBe("ShoppersStack");
})

test('T3-ValidateLoginPageURL', async ({page})=>{
//let  loginPage=new LoginPage(page);
//await loginPage.navigateToLoginPage();
await loginPage.doLogin("shopperplaywright@gmail.com","Playwright@34");
})