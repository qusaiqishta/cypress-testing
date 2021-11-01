import { source } from '../../src/sourceForAmazon'

var data_asin;
describe('Basket', () => {
    before(() => {
        cy.visit('/');
        // cy.xpath(source.sinIn).click();
        // cy.contains('Create your Amazon account').click();
        // cy.xpath(source.nameField).type('qusai96525pp');
        // cy.xpath(source.email).type('just.3songs@gmail.com');
        // cy.xpath(source.password).type('123456q');
        // cy.xpath(source.rePassword).type('123456q');
        // cy.xpath(source.createAccount).click({force: true});
        // cy.xpath('//*[@id="home_children_button"]').click();
        cy.xpath(source.searchBar).type('handbag{enter}');
        cy.xpath(source.bags).eq(2).then(ele=>{
            data_asin=ele.attr('data-asin');
        })
    });
    
    it('should insert the selected item on the basket', () => {
        cy.xpath(source.bags).eq(2).click();
        cy.xpath(source.addToCart).click({force: true});
        cy.xpath(source.cartItem).click();
        cy.xpath(source.bagContainer).should('have.attr','data-asin',data_asin);
    });
});