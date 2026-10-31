import {test,expect} from '@playwright/test';
import { LoginPage } from '../src/pagelayers/LoginPage';
import { ResultsCartPage } from '../src/pagelayers/ResultsCartPage.';
import { HomePage } from '../src/pagelayers/HomePage';
import { WishListPage } from '../src/pagelayers/WishListPage';

test ('addToWishList',async({page})=>{
//url,login,search,choose product, add to wish list,gotowishlist, verify product is present
let loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com","PlayWright@34");

})