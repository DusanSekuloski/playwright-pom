/*
    smokeGuest.test.js

    Checks functionalities available for Guest role on NFT-TiX website
*/

import { test } from '@playwright/test';
import { LandingPage } from '../../support/pages/landing_page';
import { EventsPage } from '../../support/pages/events_page';
import { MarketplacePage } from '../../support/pages/marketplace_page';
import { ForOrganizersPage } from '../../support/pages/for_organizers_page';
import { HowItWorksPage } from '../../support/pages/how_it_works_page';
import { NewsPage } from '../../support/pages/news_page'; 
import data from '../../support/data/data';



test.describe('Smoke Test for Guest role on NFT-TiX @smokeTest', async () => { 
    
    
    test('Check Landing page', async ({ page }) => {

       // ---Creating instance of each imported class
    const landingPage = new LandingPage(page);
    const eventsPage = new EventsPage(page);
    const marketplacePage = new MarketplacePage(page);
    const forOrganizersPage = new ForOrganizersPage(page);
    const howItWorksPage = new HowItWorksPage(page);
    const newsPage = new NewsPage(page);
        
        await landingPage.goToLandingPage();
        await landingPage.checkLandingPageSectionTitles()
    
        
     // ---Login modal should be visible 
     await landingPage.openLoginModal();
     await landingPage.closeLoginModal();
     // ---Sign-up modal should be visible 
     await landingPage.openSignUpModal();
     await landingPage.closeSignUpModal();
     // ---Redirection to Events pages from Events drop-down menu
     await landingPage.goToAllEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.allEventsPage);
     await landingPage.goToConcertEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.concertsPageTitle);
     await landingPage.goToSportEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.sportsPageTitle);
     await landingPage.goToAllConferenceEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.conferencesPageTitle);
     await landingPage.goToExpoEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.exposPageTitle);
     await landingPage.goToFestivalEventsPage();
     await eventsPage.checkIfYouAreOnEventTypePage(data.festivalsPageTitle);
     // ---Redirection to Marketplace page
     await landingPage.goToMarketplacePage();
     await marketplacePage.checkIfYouAreOnMarketplacePage();
     // ---Redirection to For Organizers page
     await landingPage.goToForOrganizersPage();
     await forOrganizersPage.checkIfYouAreOnForOrganizersPage();
      //---Redirection to How It Works page
     await landingPage.goToHowItWorksPage();
     await howItWorksPage.checkIfYouAreOnHowItWorksPage();
      //---Redirection to News page
     await landingPage.goToNewsPage();
     await newsPage.checkIfYouAreOnNewsPage();
})
});