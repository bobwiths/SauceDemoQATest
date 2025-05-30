import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import CatalogPage from '../pages/catalogPage.js'

const loginPage = new LoginPage()
const catalogPage = new CatalogPage()

describe('Check Card Product - SauceDemo', () => {
    it('Catalog Card Items Visible', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.checkCardProduct()
    })
    it('Catalog Card Items Visible', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.checkAddToCardButton()
    })
})