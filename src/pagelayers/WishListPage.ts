import {Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage"

export class WishListPage extends BasePage{
    private readonly heartIcon:Locator;
    private readonly profileIcon:Locator;
    private readonly wishListButton:Locator;



constructor(page:Page){
        super(page);
        this.heartIcon=page.locator('svg.icon-class');
        this.profileIcon=page.locator('.MuiAvatar-root.MuiAvatar-circular.MuiAvatar-colorDefault');
        this.wishListButton=page.locator('.MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz');
    }

    async addtoWishList(){
        await this.heartIcon.click();
        await this.profileIcon.click();
        await this.wishListButton.click();
    }
}

