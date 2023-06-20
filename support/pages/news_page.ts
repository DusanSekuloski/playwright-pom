/*
  news_page.js

  Selectors and Methods for News page 
*/

import { BasePage } from "../base_page";
import data from "../data/data";
import urls from "../data/urls";

exports.NewsPage = class NewsPage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        this.newsPageTitle_Text = page.locator('//h1[@class="heading"]')
        this.firstNewsParagraph_Text = page.locator('//div[@class="sub-section"]')
    }

    // ---Methods
    async checkIfYouAreOnNewsPage() {
        await this.compareText(this.newsPageTitle_Text, data.newsPageTitle);
        await this.compareText(this.firstNewsParagraph_Text, data.firstNewsParagraph);
        await this.checkUrl(this.page, urls.newsPage);
    }
}
