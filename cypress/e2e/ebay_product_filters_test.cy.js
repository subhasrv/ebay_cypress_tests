import {SELECTORS} from "../support/page_objects/selectors";
describe('eBay Cell Phones & Smartphones Filters Test', () => {
  it('Applies filters for Condition, Price, and Item Location', () => {
    // Visit eBay's website/    
    cy.visit('https://www.ebay.com');

    // Navigate to Cell Phones & Accessories under Electronics category and open new page
    cy.get(SELECTORS.shop_By_Category).contains('Shop by category').click();
    cy.get(SELECTORS.Electronics).should('exist')
    cy.get(SELECTORS.Cellphones_and_Accessories).click();
    
    //click cell phones and smart phones in left side navigation 
    cy.get(SELECTORS.Cellphones_and_Smartphones).contains('Cell Phones & Smartphones').click()

    // Click on All Filters
    cy.scrollTo(0,700)
    cy.get(SELECTORS.Filter_by_Condition).contains('Condition').click()

    // Add filter for Condition - New
    cy.get(SELECTORS.Condition_New).click()

    //Add filter for Price Range - Under $290
    cy.get(SELECTORS.Filter_by_Price).click()
    cy.get(SELECTORS.Price_Under_290).click()

    // Verify that the filter tags are applied
    cy.get(SELECTORS.Applied_Filters).contains('2 filters applied').click()
    cy.get(SELECTORS.Applied_Filter_Condition).should('contain','Condition: New')
    cy.get(SELECTORS.Applied_filter_Price).should('contain','Price: Under $290.00')
    ;
  });
});
