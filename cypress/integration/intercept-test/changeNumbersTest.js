import { source } from '../../integration/pom/sourceForChangeNumber.js'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Intercept Mock Api', () => {
    it('intial validation for negative value and positive one', () => {
        cy.visit(source.pagePath)
        cy.get(source.ticker).first().should('be.visible')
            .then(num => {
                const text = Number(num.text().replace(/%/g, ''))
                cy.wrap(text).should('be.lessThan', 0)

                cy.get('a.percent-link span.ticker-green').first().should('be.visible')
                    .then(num => {
                        const text = Number(num.text().replace(/%/g, ''))
                        cy.wrap(text).should('be.greaterThan', 0)
                    })

            })

    })

    it('should negative be postive when it is mocked', () => {
        cy.intercept('GET', source.interceptPath, { fixture: 'intercept/changeNumber.json' }).as('alias')
        cy.visit(source.pagePath)
        cy.wait('@alias').its('response.statusCode').should('eq', 200)

        cy.get(source.percentNUmber).should('be.visible').and('have.class', 'ticker-green')
            .then((num) => {
                const text = Number(num.text().replace(/%/g, ''))
                expect(text).to.be.greaterThan(0)

            })
    })

    it('should positive be negative when it is mocked', () => {
        cy.intercept('GET', source.interceptPath, { fixture: 'intercept/changeNumberToNegative.json' }).as('stock')
        cy.visit(source.pagePath)
        cy.wait(5000)
        cy.get(source.percentNUmber).should('be.visible').and('have.class', 'ticker-red')
            .then(num => {
                const text = Number(num.text().replace(/%/g, ''))
                cy.wrap(text).should('be.lessThan', 0)
            })
    })
})