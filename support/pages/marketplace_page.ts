/*
  marketplace_page.js

  Selectors and Methods for Marketplace page 
*/

import { BasePage } from "../base_page";
import data from "../data/data";
import urls from "../data/urls";

exports.MarketplacePage = class MarketplacePage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        this.marketplacePageTitle_Text = page.locator('//h1[@class="heading"]')
    }

    // ---Methods
    async checkIfYouAreOnMarketplacePage() {
        await this.compareText(this.marketplacePageTitle_Text, data.marketplacePageTitle);
        await this.checkUrl(this.page, urls.marketplacePage);
    }
}
