describe('Check Page Status Code',()=>{
    it('should through respone status of 404',()=>{
        cy.request({url: 'https://www.forbes.com/dsfasdff?sh=3afd86c0476a', failOnStatusCode: false}).its('status').should('equal', 404);
    });
    it('should error bar be exist when visitng 404 page',()=>{
        cy.visit({url:'https://www.forbes.com/dsfasdff?sh=3afd86c0476a',failOnStatusCode:false})
        cy.get('.error-banner__text').should('be.visible').and('have.text','We can’t find the page that you are looking for.');
    });
});