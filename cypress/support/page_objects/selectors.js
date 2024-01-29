
// selectors.js

export const SELECTORS = {
    shop_By_Category: 'div button[id="gh-shop-a"]',
    Electronics: '#gh-sbc > tbody > tr > td:nth-child(1) > h3:nth-child(3) > a',
    Cellphones_and_Accessories: '#gh-sbc > tbody > tr > td:nth-child(1) > ul:nth-child(4) > li:nth-child(4) > a',
    Cellphones_and_Smartphones: 'a[href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094"]',
    Filter_by_Condition: 'li div button span[class="brm__flyout__btn-label"]',
    Condition_New:'li a[href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?rt=nc&LH_ItemCondition=1000&mag=1"]',
    Filter_by_Price:'li div button[aria-controls="s0-28_1-9-0-1[0]-0-0-6-8-4[7]-flyout"]',
    Price_Under_290: 'li a[href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?LH_ItemCondition=1000&rt=nc&_udhi=290&mag=1"]',
    Applied_Filters: 'li[class="brm__item brm__item--applied"]',
    Applied_Filter_Condition: 'div ul li a[href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?_udhi=290&rt=nc&mag=1"]',
    Applied_filter_Price: 'div ul li a[href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?LH_ItemCondition=1000&rt=nc&mag=1"]',
    Search_Bar: 'input[placeholder="Search for anything"]',
    All_Categories: 'td[id="gh-cat-td"]',
    Computer_and_Networking: '#gh-cat > option:nth-child(12)',
    Search_Button: '#gh-f > table > tbody > tr > td.gh-td.gh-sch-btn',
    Search_Result: '#item346e04beb7 > div > div.s-item__info.clearfix > a'


    // Add more selectors as needed
  };
  