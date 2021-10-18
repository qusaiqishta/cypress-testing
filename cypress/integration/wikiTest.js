describe('Test Multible Links In Wikipedia',()=>{
   
    it('Should redirect to english translated page',()=>{
        cy.request('https://en.wikipedia.org/wiki/Main_Page')
    })
})