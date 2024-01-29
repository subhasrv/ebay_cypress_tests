import {SELECTORS} from "../support/page_objects/selectors";
describe('Access a Product via Search on eBay', () => {
    it('should search for a product and verify the first result', () => {
      const searchString = 'MacBook';
      const searchCategory = 'Computers/Tablets & Networking';
  
      // Go to ebay.com
      cy.visit('https://www.ebay.com');
  
      // Type search string in the search bar
      cy.get(SELECTORS.Search_Bar).type(searchString);
  
      // Change the search category
      cy.get(SELECTORS.All_Categories).click()
      cy.get(SELECTORS.Computer_and_Networking).contains(searchCategory).click();
  
      // Click on the search button
      cy.get(SELECTORS.Search_Button).click();
  
      // Verify that the page loads completely
      cy.url().should('include', 'https://www.ebay.com/sch/');
  
      // Verify that the first result name matches with the search string
      cy.get(SELECTORS.Search_Result).should('contain',searchString)
      
    });
  });