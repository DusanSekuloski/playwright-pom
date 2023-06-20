/*
  SmokeTestUser.test.js

  Smoke test for User role
*/

import { test, expect } from '@playwright/test';

test('User Smoke Test on NFT-TiX Website', async ({ page }) => {
  // Login as user
  await page.goto('/');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('(//input[@name="username"])[1]').fill('Sandu');
  await page.locator('(//input[@name="password"])[1]').fill('Pakacagi01');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.locator('.modal-close').first().click({force: true});
  // Check Account Settings page
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/user');
  await page.locator('div').filter({ hasText: /^ACCOUNT SETTINGS$/ }).isVisible();
  await page.locator('div').filter({ hasText: /^Connect Wallet$/ }).first().isVisible();
  await page.getByRole('link', { name: 'Reset Password' }).isVisible();
  await page.getByRole('button', { name: 'SAVE CHANGES' }).isVisible();
  await page.locator('div').filter({ hasText: /^Delete Account$/ }).isVisible();
  await page.getByText('Google Two Factor Authentication').isVisible();
  await page.getByRole('button', { name: 'SAVE CHANGES' }).isVisible();
  await page.getByText('Email', { exact: true }).isVisible();
  await page.getByText('Username').isVisible();
  await page.locator('div').filter({ hasText: /^Off$/ }).locator('label span').isVisible();
  await page.getByText('Download Personal Data').isVisible();
  await page.getByRole('button', { name: 'REQUEST DOWNLOAD' }).isVisible();
  await page.getByText('The lower limit is 320x180 and the maximum size is 1MBUpload File').isVisible();
  await page.getByText('Upload File').isVisible();
  await page.locator('canvas').first().isVisible();
  await page.getByText('Options', { exact: true }).isVisible();
  await page.locator('canvas').first().click();
  await page.getByRole('link', { name: '› MY TICKETS' }).isVisible();
  await page.getByRole('link', { name: '› FAVORITES' }).isVisible();
  await page.getByRole('link', { name: '› ACCOUNT SETTINGS' }).isVisible();
  await page.getByRole('link', { name: '› HELP CENTER' }).isVisible();
  await page.getByText('LOGOUT').isVisible();
  // Check My Tickets page  
  await page.getByRole('link', { name: '› MY TICKETS' }).click();
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/user/my-tickets');
  await page.getByRole('heading', { name: 'MY TICKETS' }).isVisible();
  await page.getByRole('heading', { name: 'You have to connect your wallet in order to see your tickets.' }).isVisible();
  await page.locator('canvas').first().click();
  // Check Favourites page 
  await page.getByRole('link', { name: '› FAVORITES' }).click();
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/user/favorites');
  await page.getByRole('heading', { name: 'You don\'t have any favorite events.' }).isVisible();
  await page.locator('canvas').first().click();
  // Check going to the Account Settings page from some other page
  await page.getByRole('link', { name: '› ACCOUNT SETTINGS' }).click();
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/user');
  await page.locator('canvas').first().click();
  // Check Help Center page
  await page.getByRole('link', { name: '› HELP CENTER' }).click();
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/how-it-works#ask');
  await page.getByRole('heading', { name: 'Can’t find answer to your question?' }).isVisible();
  await page.locator('#how-it-works-ask input[name="email"]').isVisible();
  await page.locator('textarea[name="question"]').isVisible();
  await page.getByRole('button', { name: 'SEND QUESTION' }).isVisible();
  // Check Landing page
  await page.getByRole('link', { name: 'logo' }).click();
  await expect(page).toHaveURL('https://legacy-app.dev.nft-tix.com/');
  await page.getByRole('heading', { name: 'NFT Tickets for music, sports, games and more.' }).isVisible();
  await page.getByRole('button', { name: 'Browse Events' }).isVisible();
  await page.getByRole('heading', { name: 'Trending' }).isVisible();
  await page.getByRole('heading', { name: 'Popular' }).isVisible();
  // Added Top Selling 
  await page.getByRole('heading', { name: 'Top Selling' }).isVisible();
  await page.getByRole('heading', { name: 'Just Announced' }).isVisible();
  await page.getByRole('heading', { name: 'Other Category' }).isVisible();
  await page.getByRole('heading', { name: 'Performers' }).isVisible();
  await page.getByRole('heading', { name: 'About us' }).isVisible();
  await page.getByRole('heading', { name: 'Newsletter' }).isVisible();
  await page.getByRole('heading', { name: 'Pages' }).isVisible();
  await page.getByRole('heading', { name: 'Contact Us' }).isVisible();
  // Check Events
  await page.getByRole('button', { name: 'Search Events' }).click();
  await page.getByRole('heading', { name: 'What are you searching for... ?' }).isVisible();
  await page.getByPlaceholder('Type Performer, Event or Organizer...').isVisible();
  await page.locator('.modal-shadow').first().click();
  await page.getByRole('button', { name: 'Browse Events' }).click();
  await page.getByRole('heading', { name: 'CHOOSE EVENT. BUY TICKETS. HAVE FUN!' }).isVisible();
  await page.getByRole('heading', { name: 'Trending' }).isVisible();
  await page.getByRole('heading', { name: 'Popular' }).isVisible();
  await page.getByRole('heading', { name: 'Just Announced' }).isVisible();
  await page.getByRole('heading', { name: 'Other Category' }).isVisible();
  await page.getByRole('heading', { name: 'Performers' }).isVisible();
  await page.getByRole('button', { name: 'EVENTS', exact: true }).hover();
  await page.getByRole('link', { name: '› CONCERTS' }).click();
  await page.getByRole('heading', { name: 'concerts' }).isVisible();
  await page.getByRole('button', { name: 'EVENTS', exact: true }).hover();
  await page.getByRole('link', { name: '› SPORTS' }).click();
  await page.getByRole('heading', { name: 'sports' }).isVisible();
  await page.getByRole('button', { name: 'EVENTS', exact: true }).hover();
  await page.getByRole('link', { name: '› CONFERENCES' }).click();
  await page.getByRole('heading', { name: 'conferences' }).isVisible();
  await page.getByRole('button', { name: 'EVENTS', exact: true }).hover();
  await page.getByRole('link', { name: '› EXPOS' }).click();
  await page.getByRole('heading', { name: 'expos' }).isVisible();
  await page.getByRole('button', { name: 'EVENTS', exact: true }).hover();
  await page.getByRole('link', { name: '› FESTIVALS' }).click();
  await page.getByRole('heading', { name: 'festivals' }).isVisible();
  // Check Marketplace page
  await page.locator('div').filter({ hasText: /^MARKETPLACE$/ }).click();
  await page.getByRole('heading', { name: 'MARKETPLACE' }).click();
  await page.getByText('Browse').click();
  await page.getByText('Sports', { exact: true }).isVisible();
  await page.getByText('Expos', { exact: true }).isVisible();
  await page.getByText('Festivals', { exact: true }).isVisible();
  await page.getByText('Category').isVisible();
  await page.getByText('Tiers').isVisible();
  await page.getByText('Silver').isVisible();
  await page.getByText('Gold').isVisible();
  await page.getByText('Platinum').isVisible();
  await page.getByText('Diamond').isVisible();
  await page.getByText('Other').isVisible();
  await page.getByText('Upcoming').isVisible();
  await page.getByText('Finished').isVisible();
  // Protected by Darkblock should not exist anymore
  await page.getByRole('button', { name: 'APPLY FILTER' }).isVisible();
  await page.locator('div').filter({ hasText: /^Sort by$/ }).isVisible();
  // Check For Organizers page
  await page.getByRole('link', { name: 'For organizers' }).click();
  await page.getByRole('heading', { name: 'The only fully programmable blockchain NFT ticketing platform' }).isVisible();
  await page.getByRole('heading', { name: 'Traditional Ticketing' }).isVisible();
  await page.getByRole('heading', { name: 'NFT TiX', exact: true }).isVisible();
  await page.getByRole('heading', { name: 'Smarter Ticketing (Made Super Simple)' }).isVisible();
  await page.getByRole('heading', { name: 'Why There\'s Nothing Quite Like NFT TiX' }).isVisible();
  await page.getByRole('heading', { name: 'Start Selling NFT Tickets' }).isVisible();
  await page.getByRole('button', { name: 'Submit' }).isVisible();
  await page.getByRole('button', { name: 'Start Selling NFT Tickets' }).isVisible();
  // Check How It Works page
  await page.getByRole('link', { name: 'HOW IT WORKS' }).click();
  await page.getByRole('heading', { name: 'HOW IT WORKS?' }).isVisible();
  await page.getByRole('button', { name: 'FOR ATTENDEES' }).isVisible();
  await page.getByRole('button', { name: 'FOR ORGANIZERS' }).isVisible();
  await page.getByRole('button', { name: 'FAQ' }).isVisible();
  await page.getByRole('heading', { name: 'FOR ATTENDEES' }).isVisible();
  await page.getByRole('heading', { name: 'FOR ORGANIZERS' }).isVisible();
  await page.getByRole('heading', { name: 'FAQ' }).isVisible();
  // Check News page
  await page.getByRole('link', { name: 'News' }).click();
  await page.getByRole('heading', { name: 'NEWS', exact: true }).isVisible();
  await page.getByText('All', { exact: true }).isVisible();
  await page.getByText('Educational').first().isVisible();
  await page.getByText('How To').isVisible();
  await page.getByText('Events', { exact: true }).isVisible();
  await page.getByText('Did You Know').isVisible();
  await page.getByText('General').isVisible();
  await page.getByText('UPCOMING EVENTS').isVisible();
  await page.getByRole('button', { name: 'SHOW ALL EVENTS' }).click();
  await page.getByRole('heading', { name: 'CHOOSE EVENT. BUY TICKETS. HAVE FUN!' }).isVisible();
  // Check Footer section
  await page.getByRole('link', { name: 'logo' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('heading', { name: 'PRIVACY POLICY' }).isVisible();
  await page.getByRole('link', { name: 'Terms and Conditions' }).click();
  await page.getByRole('heading', { name: 'TERMS AND CONDITIONS' }).isVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Event Audit Report' }).click();
  const page1 = await page1Promise;
  await page1.getByText('chainsulting / Smart-Contract-Security-Audits Public').isVisible();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Marketplace Audit Report' }).click();
  const page2 = await page2Promise;
  await page2.locator('#repository-container-header').getByRole('link', { name: 'Smart-Contract-Security-Audits' }).click();
  await page2.locator('#repository-container-header').getByRole('link', { name: 'Smart-Contract-Security-Audits' }).click();
  // Check logout
  await page.locator('canvas').first().click();
  await page.getByText('LOGOUT').click();
  await page.getByRole('button', { name: 'LOGIN' }).isVisible();
  await page.getByRole('button', { name: 'SIGN UP' }).isVisible();
});
