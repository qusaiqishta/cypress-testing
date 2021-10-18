describe('Custom Commands', () => {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Just a log', function () {
        cy.typeLogin('standard_user', 'secret_sauce')
        cy.get('.title').should('contain.text', "product")

    })

    afterEach(function () {
        cy.logout()
    })
})