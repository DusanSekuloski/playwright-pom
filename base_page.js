const { test, expect } = require('@playwright/test');

exports.BasePage = class BasePage {

    async checkUrl(page, url) {
        await expect(page).toHaveURL(url);
    }

    async click(selector) {
        await selector.click();
    }

    async hoverElement(selector) {
        await selector.hover();
    }

    async isVisible(selector) {
        await expect(selector).toBeVisible();
    }

    async compareText(selector, text) {
        await expect(selector).toContainText(text);
    }

    async enterText(selector, text) {
        await selector.fill(text);
    }
}