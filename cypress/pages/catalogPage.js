class CatalogPage {
    selectorsList() {
        const selectors = {
            inventoryList: "[data-test='inventory-list']",
            inventoryContainer: "[data-test='inventory-container']",
            itemTitleLink: "[data-test='item-0-title-link']",
            productSortContainer: '.select_container',  
            activeOption: "[data-test='product-sort-container']",
            inventoryItemDesc: "[data-test='inventory-item-desc']",
            backToProductsButton: "[data-test='back-to-products']",
            priceProduct: ".pricebar",
            imgProduct: ".inventory_item_img",
            checkProductPriceFS: '[data-test="inventory-item-price"]',
        }

        return selectors
    }
    checkItemCatalog(){
        cy.get(this.selectorsList().itemTitleLink).click()
        cy.get(this.selectorsList().inventoryItemDesc)
        cy.get(this.selectorsList().backToProductsButton).click()
        cy.get(this.selectorsList().inventoryList)
    }
    sortProductsByPrice(){
        cy.get('select').select('lohi')
        cy.get(this.selectorsList().priceProduct).eq(0).contains('$7.99')
        cy.get(this.selectorsList().imgProduct).eq(0).click()
        cy.get(this.selectorsList().checkProductPriceFS).contains('$7.99')
    }
}

export default CatalogPage