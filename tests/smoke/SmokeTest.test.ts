/*
  SmokeTest.test.js

  Smoke test for Guest role
*/

import { test, expect } from '@playwright/test';
test('Smoke Test on NFT-TiX Website', async ({ page }) => {
  // Check Landing page 
  await page.goto('/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('heading', { name: 'Login' }).isVisible();
  await page.locator('.modal-close').first().click();
  await page.getByRole('button', { name: 'SIGN UP' }).click();
  await page.getByRole('heading', { name: 'Sign Up' }).isVisible();
  await page.locator('div:nth-child(4) > .modal-close > path').click();
  await page.getByRole('heading', { name: 'NFT Tickets for music, sports, games and more.' }).isVisible();
  await page.getByRole('button', { name: 'Browse Events' }).isVisible();
  await page.getByRole('heading', { name: 'Trending' }).isVisible();
  await page.getByRole('heading', { name: 'Popular' }).isVisible();
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
  await page.getByText('Browse').isVisible();
  await page.getByText('Results').isVisible();
  await page.getByText('Concerts', { exact: true }).isVisible();
  await page.getByText('Conferences', { exact: true }).isVisible();
  await page.getByText('Sports', { exact: true }).isVisible();
  await page.getByText('Expos', { exact: true }).isVisible();
  await page.getByText('Festivals', { exact: true }).isVisible();
  await page.getByText('Category').isVisible();
  await page.getByText('Tiers').isVisible();
  await page.getByText('Silver', { exact: true }).isVisible();
  await page.getByText('Gold').isVisible();
  await page.getByText('Platinum').isVisible();
  await page.getByText('Diamond').isVisible();
  await page.getByText('Other').isVisible();
  await page.getByText('Upcoming').isVisible();
  await page.getByText('Finished').isVisible();
  await page.getByText('Protected by Darkblock').isVisible();
  await page.getByRole('button', { name: 'APPLY FILTER' }).isVisible();
  await page.locator('div').filter({ hasText: /^Sort by$/ }).isVisible();
  // Check For Organizers page
  await page.getByRole('link', { name: 'For organizers' }).click();
  await page.getByRole('heading', { name: 'The only fully programmable blockchain NFT ticketing platform' }).isVisible();
  await page.getByRole('heading', { name: 'Traditional Ticketing' }).isVisible();
  await page.getByRole('heading', { name: 'NFT TiX', exact: true }).isVisible();
  await page.getByRole('heading', { name: 'Smarter Ticketing (Made Super Simple)' }).isVisible();
  await page.locator('section').getByRole('button', { name: 'SIGN UP' }).click();
  await page.getByRole('heading', { name: 'Sign Up' }).isVisible();
  await page.locator('div:nth-child(4) > .modal-close > path').click();
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
});