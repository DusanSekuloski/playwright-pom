/*
  landing_page.js

  Selectors and Methods for Landing page 
*/

import  { BasePage }  from "../base_page";
import data from "../data/data";

exports.LandingPage = class LandingPage extends BasePage {
    // ---Selectors
    constructor(page) {
        super()
        this.page = page;
        // ---Header
        this.nftTixLogo_Button = page.locator('//span[@class="navbar-brand"]')
        this.eventsMenu_Dropdown = page.locator('//a[@id="navbarScrollingDropdown"]')
        this.allEvents_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events"]')
        this.concerts_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events/concerts"]')
        this.sports_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events/sports"]')
        this.conferences_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events/conferences"]')
        this.expos_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events/expos"]')
        this.festivals_Button = page.locator('//div[@class="dropdown-item"]//a[@href="/events/festivals"]')
        this.marketplace_Button = page.locator('//a[@href="/marketplace"]')
        this.forOrganizers_Button = page.locator('//a[@href="/organizers"]')
        this.howItWorks_Button = page.locator('//a[@href="/how-it-works"]')
        this.news_Button = page.locator('//a[@href="/news"]')
        this.login_Button = page.locator('(//div[@class="loginButton"]//button)[1]');
        this.signUp_Button = page.locator('(//div[@class="loginButton"]//button)[2]');
        // ---Login modal
        this.loginModalTitle_Text = page.locator('//h3[contains(text(), "Login")]');
        this.closeLoginModal_Button = page.locator("(//div[@class='modal-container']/*)[1]");
        // ---Sign-up modal
        this.signUpModalTitle_Text = page.locator('//h3[contains(text(), "Sign Up")]');
        this.closeSignUpModal_Button = page.locator('(//div[@class="modal-container"]/*)[3]');
        // ---Sections
        this.firstHeroSectionParagraph_Text = page.locator('//h1[@class="heading"]')
        this.secondHeroSectionParagraph_Text = page.locator('//div[@class="sub-section"]/p')
        this.trendingTitle_Text = page.locator('//h2[contains(text(), "Trending")]')
        this.justAnnouncedTitle_Text = page.locator('//h2[contains(text(), "Just Announced")]')
        this.topSelling_Text = page.locator('//h2[contains(text(), "Top Selling")]')
        this.browerByCategory_Text = page.locator('//h2[contains(text(), "Browse by Category")]')
        this.banners_Section = page.locator('//div[@class="baners-wrapper"]')
    }

    // ---Methods
    async goToLandingPage() {
        await this.page.goto("/");
    }

    async clickOnLogo() {
        await this.click(this.nftTixLogo_Button);
    }
    // ---Login modal
    async openLoginModal() {
        await this.click(this.login_Button);
        await this.compareText(this.loginModalTitle_Text, "Login");
    }

    async closeLoginModal() {
        await this.click(this.closeLoginModal_Button);
    }
    // ---Sign-Up modal
    async openSignUpModal() {
        await this.click(this.signUp_Button);
        await this.compareText(this.signUpModalTitle_Text, "Sign Up");
    }

    async closeSignUpModal() {
        await this.click(this.closeSignUpModal_Button);
    }
    // ---Redirections to all pages
    async goToAllEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.allEvents_Button);
    }

    async goToConcertEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.concerts_Button);
    }

    async goToSportEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.sports_Button);
    }

    async goToAllConferenceEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.conferences_Button);
    }

    async goToExpoEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.expos_Button);
    }

    async goToFestivalEventsPage() {
        await this.hoverElement(this.eventsMenu_Dropdown);
        await this.click(this.festivals_Button);
    }

    async goToMarketplacePage() {
        await this.click(this.marketplace_Button);
    }

    async goToForOrganizersPage() {
        await this.click(this.forOrganizers_Button);
    }

    async goToHowItWorksPage() {
        await this.click(this.howItWorks_Button);
    }

    async goToNewsPage() {
        await this.click(this.news_Button);
    }

    // ---Content on the page
    async checkTextOnLandingPage() {
        await this.compareText(this.firstHeroSectionParagraph_Text, data.firstHeroSectionParagraph);
        await this.compareText(this.secondHeroSectionParagraph_Text, data.secondHeroSectionParagraph);
    }

    // Checks if sections titles visible on the page
    async checkLandingPageSectionTitles() {
        const sectionTitles = [this.trendingTitle_Text, this.justAnnouncedTitle_Text, this.topSelling_Text, this.browerByCategory_Text];

        sectionTitles.forEach(async (element, i) => {
            await this.compareText(element, data.landingPageSectionTitles[i]);
        });
    }

};
