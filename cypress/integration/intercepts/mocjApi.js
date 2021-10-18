describe('Intercept Mock Api',()=>{
    it('intial validation',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#todo-list li').should('have.length',4)
        .and('contain','test')
        .and('contain','wash dishes')
    })
    // it('mocked api response',()=>{
    //     cy.intercept('GET','/todos',{fixture:'intercept/intercept.json'})
    //     cy.visit('http://localhost:3000')
    //     cy.get('#todo-list li').should('have.length',3)
    //     .and('contain','excerise1')
    //     .and('contain','exercise2')
    //     .and('contain','exercise3')

    // })
    // it('mocked a ready todo',()=>{
    //     const newObj={
    //         "title":"just a new todo",
    //         "completed":true,
    //         "id":"3"
    //     }
    //     cy.visit('http://localhost:3000/')
    //     cy.intercept('GET','/todos',{
    //         body:newObj
    //     })
    //     cy.log('test')
    // })
})