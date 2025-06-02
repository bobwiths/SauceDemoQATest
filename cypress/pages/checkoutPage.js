class CheckoutPage {
    selectorsList() {
        const selectors = {
            removeItemGenericButton: ".btn_secondary",
            checkoutButton: ".checkout_button",
            firstNameField: "#first-name",
            lastNameField: "#last-name",
            postalCodeField: "#postal-code",
            continueButton: "#continue",
            shoppingCartBadge: ".shopping_cart_badge",
            finishButton: "[data-test='finish']",
            checkoutComplete: "#checkout_complete_container",
            backHomeButton: "[data-test='back-to-products']",
            inventoryContainer: "[data-test='inventory-container']",
            errorMessage: "[data-test='error']",
        }

        return selectors
    }
    removeSecondItemCart(){
        cy.get(this.selectorsList().removeItemGenericButton).eq(1).click()
        cy.get(this.selectorsList().shoppingCartBadge).contains('2')
        
    }
    checkoutProcessSuccess(firstName, lastName, postalCode){
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().postalCodeField).type(postalCode)
        cy.get(this.selectorsList().continueButton).click()
        cy.get(this.selectorsList().shoppingCartBadge).contains('2')
        cy.get(this.selectorsList().finishButton).click()
        cy.get(this.selectorsList().checkoutComplete)
        cy.get(this.selectorsList().backHomeButton).click()
        cy.get(this.selectorsList().inventoryContainer)
    }
     checkoutProcessFail(lastName, postalCode){
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().postalCodeField).type(postalCode)
        cy.get(this.selectorsList().continueButton).click()
        cy.get(this.selectorsList().errorMessage)
    }


}




export default CheckoutPage