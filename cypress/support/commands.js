// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})

Cypress.Commands.add('addItemToCart', () => {
    cy.get(source.bags).first().click();
    cy.get(source.addToCart).click({ force: true });
    cy.get(source.cartItem).click();
})


// _________________________________________________________________

import { source } from '../src/frontEndMEntor';
let elements=[];
export {elements};
Cypress.Commands.add('getChallenges', () => {
    cy.contains('Challenges').click({force:true});
    cy.xpath(source.challenges).first().click();
})

Cypress.Commands.add('getDesigns', () => {
    cy.contains('Challenges').click({force:true});
    cy.xpath(source.challenges).first().click();
    cy.xpath(source.designs).then(design => {
        elements.push(design)
    })
})

