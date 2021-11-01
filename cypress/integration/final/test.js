import { source } from '../../src/frontEndMEntor';
import { elements } from '../../support/commands';

describe('Footer', () => {
    before(() => {
        cy.visit('/');
        cy.getDesigns();
    });

    it('should footer elements navigate user to right distenation', () => {
        cy.xpath(source.footerElements).should('have.length', 11).each((ele, index) => {
            expect(ele.attr('href')).to.contain(source.urlsWords[index]);
        });
    });
    
    it('should when clicking on other designs, the corresponding design shows', () => {
        for (let j = 0; j < elements[0].length; j++) {
            cy.get(elements[0][j]).should('be.visible').click();
            for (let i = 0; i < elements[0].length; i++) {
                console.log(elements[0][i])
                cy.get(elements[0][i]).should('be.visible');
            };
        };
    });

    it('should desktop design be chosen by default', () => {
        cy.getChallenges();
        cy.xpath(source.firstChallenge).eq(0).should('have.text', 'Desktop design')
            .and('have.class', 'jEtYYf');
    });

    it('should +/- expand or show less of text', () => {
        cy.xpath(source.faq).click();
        cy.xpath(source.signs).then((sign) => {
            cy.xpath(source.paragraphs).should('not.be.visible');
            cy.get(sign).should('have.class', 'fa-plus').click({ multiple: true }).should('have.class', 'fa-minus');
            cy.xpath(source.paragraphs).should('be.visible');
        });
    });

})