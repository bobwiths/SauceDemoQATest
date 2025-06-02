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
            imgCardProduct: "[data-test='item-4-img-link']",
            invTitleCardProduct: "[data-test='inventory-item-name']",
            invDescCard: "[data-test='inventory-item-desc']",
            addToCartBackpack: "[data-test='add-to-cart-sauce-labs-backpack']",
            removeBackpack: "[data-test='remove-sauce-labs-backpack']",
            shoppingCartBadge: "[data-test='shopping-cart-badge']",
            shoppingCartLink: "[data-test='shopping-cart-link']",
            checkShoppingCartList: "[data-test='cart-list']",
            continueShoppingButton: "[data-test='continue-shopping']",
            priceProductCard: "[data-test='inventory-item-price']",
            checkButton: "button",
            addToCartGenericButton: ".btn_primary",
        }

        return selectors
    }
    add2ItensToCart(){
        cy.get(this.selectorsList().addToCartGenericButton).eq(0).click()
        cy.get(this.selectorsList().addToCartGenericButton).eq(1).click()
        cy.get(this.selectorsList().shoppingCartBadge).contains('2')
        cy.get(this.selectorsList().shoppingCartLink).click()
    }
    add3ItensToCart(){
        cy.get(this.selectorsList().addToCartGenericButton).eq(0).click()
        cy.get(this.selectorsList().addToCartGenericButton).eq(1).click()
        cy.get(this.selectorsList().addToCartGenericButton).eq(2).click()
        cy.get(this.selectorsList().shoppingCartBadge).contains('3')
        cy.get(this.selectorsList().shoppingCartLink).click()
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
    checkCardProduct(){
        cy.get(this.selectorsList().imgCardProduct)
        cy.get(this.selectorsList().invTitleCardProduct)
        cy.get(this.selectorsList().invDescCard)
        cy.get(this.selectorsList().priceProductCard)
        cy.get(this.selectorsList().checkButton).contains('Add to cart')
    }
    checkAddToCardButton(){
        cy.get(this.selectorsList().addToCartBackpack).click()
        cy.get(this.selectorsList().shoppingCartBadge).contains('1')
        cy.get(this.selectorsList().checkButton).contains('Remove')
        cy.get(this.selectorsList().removeBackpack).click()
        cy.get(this.selectorsList().checkButton).contains('Add to cart').eq(0)
    }
}

export default CatalogPage