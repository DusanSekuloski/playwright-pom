/*
  events_page.js

  Selectors and Methods for all Event pages available from Events drop-down menu 
*/

import { BasePage } from "../base_page";
import data from "../data/data";
import urls from "../data/urls";

exports.EventsPage = class EventsPage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        // ---All Events page
        this.chooseEvent_Text = page.locator('//h1[@class="heading"]');
        this.trendingTitle_Text = page.locator('//h2[contains(text(), "Trending")]');
        this.popularTitle_Text = page.locator('//h2[contains(text(), "Popular")]');
        this.justAnnouncedTitle_Text = page.locator('//h2[contains(text(), "Just Announced")]');
        this.otherCategoryTitle_Text = page.locator('//h2[contains(text(), "Other Category")]');
        this.performersTitle_Text = page.locator('(//section[@class="container-section"])[5]//h2');
        // ---Other pages; selectors are the same for all pages
        this.pageTitle_Text = page.locator('//h1[@class="heading mb-5"]');
    }

    // ---Methods
    // Checks if sections titles visible on the All Events page
    async checkEventsPageSectionTitles() {
        const sectionTitles = [this.trendingTitle_Text, this.popularTitle_Text, this.justAnnouncedTitle_Text, this.otherCategoryTitle_Text, this.performersTitle_Text];

        sectionTitles.forEach(async (element, i) => {
            await this.compareText(element, data.eventsSectionTitles[i]);
        });
    }

    // Checks redirection to pages from Events drop-down menu
    async checkIfYouAreOnEventTypePage(eventType) {
        if (eventType == data.allEventsPage) {
            await this.compareText(this.chooseEvent_Text, data.chooseEventsParagraph);
            await this.checkUrl(this.page, urls.eventsPage);
        }
        else if (eventType == data.concertsPageTitle) {
            await this.compareText(this.pageTitle_Text, data.concertsPageTitle);
            await this.checkUrl(this.page, urls.concertsPage);
        } 
        else if (eventType == data.sportsPageTitle) {
            await this.compareText(this.pageTitle_Text, data.sportsPageTitle);
            await this.checkUrl(this.page, urls.sportsPage);
        }
        else if (eventType == data.conferencesPageTitle) {
            await this.compareText(this.pageTitle_Text, data.conferencesPageTitle);
            await this.checkUrl(this.page, urls.conferencesPage);
        }
        else if (eventType == data.exposPageTitle) {
            await this.compareText(this.pageTitle_Text, data.exposPageTitle);
            await this.checkUrl(this.page, urls.exposPage);
        }
        else if (eventType == data.festivalsPageTitle) {
            await this.compareText(this.pageTitle_Text, data.festivalsPageTitle);
            await this.checkUrl(this.page, urls.festivalsPage);
        }

    }
};
