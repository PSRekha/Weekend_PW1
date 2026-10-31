import {test,expect} from '@playwright/test';
import { LoginPage } from '../src/pagelayers/LoginPage';
import { ResultsCartPage } from '../src/pagelayers/ResultsCartPage.';
import { HomePage } from '../src/pagelayers/HomePage';

test('addProductToCart',async({page})=>{
    //url,login,search,choose product, add to cart,gotocart,logout
    let loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com","PlayWright@34");
    //await page.getByRole('textbox', { name: 'Email' }).click();
    //await page.getByRole('textbox', { name: 'Email' }).fill('shopperplaywright@gmail.com');
    //await page.getByRole('textbox', { name: 'Password' }).fill('PlayWright@34');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('#search').click();
    await page.locator('#search').fill('shirts');
    await page.getByTestId('SearchIcon').click();
    await page.getByTestId('FavoriteIcon').first().click();
    await page.getByTestId('FavoriteIcon').first().click();
    await page.locator('.featuredProducts_footerRight__k498x > .MuiSvgIcon-root > path').first().click();
    await page.getByTestId('FavoriteIcon').first().click();
    let homePage=new HomePage(page);
    await homePage.searchProduct("shirts");
    page.waitForTimeout(2000);
    let resultsCartPage=new ResultsCartPage(page);
    await resultsCartPage.addTocart();
    await page.screenshot({path:"./screenshots/CartTest.png"});

})