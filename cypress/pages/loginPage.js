class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[data-test='username']",
            passwordField: "[data-test='password']",
            loginButton: "[data-test='login-button']",
            wrongCredentialAlert: ".error-message-container",
            inventoryList: '[data-test="inventory-list"]',
        }

        return selectors
    } 
    accessLoginPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    checkAccessValid(){
        cy.get(this.selectorsList().inventoryList)
    }
    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage