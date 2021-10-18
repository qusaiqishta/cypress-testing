describe('Verifying Search , Filter And Got Results',()=>{
    before(()=>{
        cy.visit('https://www.amazon.com/');
        cy.get(`${Cypress.env('searchBar')}`).type(`${Cypress.env('typeInSearch')}`);
        cy.get('input#nav-search-submit-button').click();
    });

    beforeEach(()=>{
        cy.get('.a-dropdown-label').click();
    });

afterEach(()=>{
    cy.get('div[data-component-type="s-search-result"]').should('exist');
        // .should('have.length.greaterThan',1)
})

    it('Should get results when clicking on newest arrivals',()=>{
        cy.get('.a-nostyle.a-list-link li').eq(4).click();
        cy.get('ul.a-nostyle.a-list-link li').should('have.length',5);
       
    })

    it('Should got a results when clicking on featured',()=>{
        cy.get('.a-nostyle.a-list-link li').eq(0).click({force: true})
        cy.get('ul.a-nostyle.a-list-link li').then(ele=>{
            console.log(ele)
        })
        cy.get('ul.a-nostyle.a-list-link').eq(0).find('li').should('have.length',5)
    })
})