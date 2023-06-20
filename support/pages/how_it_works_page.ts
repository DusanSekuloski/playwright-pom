/*
  how_it_works_page.js

  Selectors and Methods for How It Works page 
*/

import { BasePage } from "../base_page";
import data from "../data/data";
import urls from "../data/urls";

exports.HowItWorksPage = class HowItWorksPage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        this.howItWorkPageTitle_Text = page.locator('//h1[@class="heading"]')
        this.firstHowItWorksParagraph_Text = page.locator('//p[@class="paragraph mt-5"]')
        this.secondHowItWorksParagraph_Text = page.locator('//p[@class="paragraph my-5"]')
    }

    // ---Methods
    async checkIfYouAreOnHowItWorksPage() {
        await this.compareText(this.firstHowItWorksParagraph_Text, data.firstHowItWorksParagraph);
        await this.compareText(this.secondHowItWorksParagraph_Text, data.secondHowItWorksParagraph);
        await this.checkUrl(this.page, urls.howItWorksPage);
    }
}
