import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import CatalogPage from '../pages/catalogPage.js'

const loginPage = new LoginPage()
const catalogPage = new CatalogPage()

describe('Catalog SauceDemo', () => {
    it('Catalog Visible', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.checkItemCatalog()
    })
    it.only('Sort Items By Price - Low to High', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
        catalogPage.sortProductsByPrice()
    })
})