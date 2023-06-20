/*
  for_organizers_page.js

  Selectors and Methods for For Organizers page 
*/

import { BasePage } from "../base_page";
import data from "../data/data";
import urls from "../data/urls";

exports.ForOrganizersPage = class ForOrganizersPage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        this.firstForOrganizersParagraph_Text = page.locator('//h1[@class="heading"]')
        this.secondForOrganizersParagraph_Text = page.locator('//p[@class="paragraph mt-5"]')
    }

    // ---Methods
    async checkIfYouAreOnForOrganizersPage() {
        await this.compareText(this.firstForOrganizersParagraph_Text, data.firstForOrganizersParagraph);
        await this.compareText(this.secondForOrganizersParagraph_Text, data.secondForOrganizersParagraph);
        await this.checkUrl(this.page, urls.forOrganizersPage);
    }
}
