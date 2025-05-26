import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login SauceDemo', () => {
    it('Login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.standardUser.username, userData.standardUser.password)
        loginPage.checkAccessValid()
    })
    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })
})