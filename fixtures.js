

const { test, expect } = require('@playwright/test');
const { LandingPage } = require ('../support/pages/landing_page');

exports.expect = expect;

exports.test = test.extend({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await landingPage.goToLandingPage()
        await landingPage.checkLandingPageSectionTitles();
        await use(landingPage);
    }
});

