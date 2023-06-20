

import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/landing_page';

const _expect = expect;
export { _expect as expect };

const _test = test.extend({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await landingPage.goToLandingPage();
        await landingPage.checkLandingPageSectionTitles();
        await use(landingPage);
    }
});
export { _test as test };

