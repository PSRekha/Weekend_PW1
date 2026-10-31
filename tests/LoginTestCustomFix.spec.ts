import {test} from '../src/Fixtures/CustomFixtures';
import { customdatatest } from '../src/Fixtures/DataFixtures';
import { CsvHelper } from '../src/Fixtures/Utilities/CSVHelper';
import { LoginPage } from '../src/pagelayers/LoginPage';
import * as allure from 'allure-js-commons';
import process from 'node:process';

test('T1_ValidateUrl',async({loginPage})=>{
await loginPage.navigateToLoginPage();
await loginPage.doLogin("shopperplaywright@gmail.com", "Playwright@34");
let pageURL=await loginPage.fetchLoginPageURL();
console.log(pageURL);
})

test('T2_ValidateTitle', async({loginPage})=>{
await loginPage.navigateToLoginPage();
await loginPage.doLogin("shopperplaywright@gmail.com", "Playwright@34");
let loginUrl=loginPage.fetchLoginPageURL();
console.log(loginUrl);
})

test('T3_validateLogin', async({loginPage})=>{
await loginPage.navigateToLoginPage();
await loginPage.doLogin("shopperplaywright@gmail.com", "Playwright@34");
})

test('T3_validateLoginwithEnvUrl', async({loginPage})=>{
await loginPage.navigateToLoginPage();
await loginPage.doLogin(process.env.qaUsn!, process.env.qaPwd!);
})

customdatatest('T3_ValidateLoginCSVFile',async({loginPage,testData})=>{
    for(const row of testData){
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin(
            row.username,
            row.password
        );
    }
})

// const data=CsvHelper.readCsv('./src/NegativeCredentials.csv');
// for (const test1 of data){
//     customdatatest('T3_ValidateLoginCSVFileWOFixtures.${test1.username}.${test1.password}'),async({loginPage})
//     await LoginPage.navigateToLoginPage();
//     await LoginPage.doLogin(test1.username, test1.password);
// }

// customdatatest('T_ValidateLogin',async({LoginPage,test})=>{
//     for (const row of testdata){
//         await LoginPage.navigateToLoginPage();
//         await LoginPage.login(row.username,row.password);
//     }
// })

