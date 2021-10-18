import HomeSaucePage from '../..pages/sauceDemo/home.js'
import InventoryPage from '../..pages/sauceDemo/inventory.js'


describe('POM Implementation',()=>{
beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
})

    it('Should Login From Home Page',()=>{
        HomeSaucePage.typeUserName('standard_user')
        HomeSaucePage.typePassword('secret_sauce')
        HomeSaucePage.clickLogin()
        InventoryPage.elements.titleSpan().should('have.text','Products')

    })
})