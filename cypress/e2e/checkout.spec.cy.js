import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import CatalogPage from '../pages/catalogPage.js'
import CheckoutPage from '../pages/checkoutPage.js'

const loginPage = new LoginPage()
const catalogPage = new CatalogPage()
const checkoutPage = new CheckoutPage()

describe('Checkout - SauceDemo', () => {
    it('Add and remove itens', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.add3ItensToCart()
        checkoutPage.removeSecondItemCart()
    })
    it('Checkout - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.add2ItensToCart()
        checkoutPage.checkoutProcessSuccess(userData.checkoutInfo.firstName, userData.checkoutInfo.lastName, userData.checkoutInfo.postalCode)
    })
    it('Checkout - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.add2ItensToCart()
        checkoutPage.checkoutProcessFail(userData.checkoutInfo.lastName, userData.checkoutInfo.postalCode)
    })
})

