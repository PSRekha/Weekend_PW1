import {test} from '../src/Fixtures/CustomFixtures';;

test('T1_HomePageTitle',async({homePage,loginPage})=>{
await loginPage.navigateToLoginPage();
await loginPage.doLogin("shopperplaywright@gmail.com", "Playwright@34");
let title=await homePage.fetchHomePageTitle();
console.log(title);

})