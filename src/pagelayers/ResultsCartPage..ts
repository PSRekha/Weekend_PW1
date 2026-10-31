import { Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage";

export class ResultsCartPage extends BasePage{
    private readonly product:Locator;
    private readonly addToCart:Locator;
    private readonly goToCart:Locator;


    constructor(page:Page){
        super(page);
        this.product=page.getByRole('img',{name:'tshirts'});
        this.addToCart=page.getByRole('button',{name:'ADD TO CART'});
        this.goToCart=page.getByRole('link',{name:'1'})

    }

    async addTocart(){
        await this.product.click();
        await this.addToCart.click();
        await this.goToCart.click();
    }

}