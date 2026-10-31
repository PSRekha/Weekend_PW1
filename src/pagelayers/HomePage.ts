import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class HomePage extends BasePage{
       //locators
  private readonly profileIcon: Locator;
  private readonly myProfile: Locator;
  private readonly logoutOption: Locator;
  private readonly searchTextField : Locator;
  private readonly searchIcon:Locator;

  //initialization
  constructor(page: Page) {
    super(page);
    this.profileIcon = page.getByRole('button', { name: "Account settings" });
    this.myProfile = page.getByRole('menuitem', { name: "My Profile" });
    this.logoutOption = page.getByRole('menuitem', { name: "Logout" });
    this.searchTextField=page.locator("//input[@id='search']");
    this.searchIcon=page.getByTestId('SearchIcon');
    
  }

  //utilization
  async fetchHomePageURL(): Promise<string> {
    let homePageUrl = await this.page.url();
    console.log(`the homepage url is ${homePageUrl}`);
    return homePageUrl;
  }

  async fetchHomePageTitle(): Promise<string> {
    let homePageTitle = await this.page.title();
    console.log(`the homepage url is ${homePageTitle}`);
    return homePageTitle;
  }

  async checkForProfileIcon(){
    return await this.myProfile.isVisible();
  }

  async searchProduct(productName:String):Promise<void>{
    await this.searchTextField.fill('productName');
    await this.searchIcon.click();
  }

  async dologout() {
    await this.profileIcon.click();
    await this.logoutOption.click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: "./Screenshot/Logout.png" });
  }
}