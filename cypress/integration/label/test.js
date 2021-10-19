import { source } from '../../integration/pom/sourceForLabel.js'
let texts=[];


describe('Matching Labels',()=>{
    before(()=>{
        cy.visit(source.pagePath);
        cy.get(source.slidText).each(ele=>{
            texts.push(ele.text())
            console.log(texts)
        })
    });
    afterEach(()=>{
        cy.contains('View All').click({force:true});
    });

    it('should label be 1964 before and after clicking',()=>{
        cy.get(source.slidText).eq(0).should('have.text','1964').click({force:true});
        cy.url().should('include','https://www.forbes.com/pictures/5988c29e31358e60d7759275/50-years-of-innovation-st')
        cy.get(source.h2AfterClick).eq(0).should('have.text','1964');
        
    });

    it('should label be matches before and after clicking',()=>{
        for(let i=1;i<texts.length;i++){

            cy.get(source.slidText).eq(i).should('have.text',texts[i]).click({force:true});
            cy.url().should('include',`https://www.forbes.com/pictures/5988c29e31358e60d7759275/${texts[i]}/`)
            cy.get(source.h2AfterClick).eq(1).should('have.text',texts[i]);
            
        }
    });

   
    // it('should label be 1996 before and after clicking',()=>{
    //     cy.get(source.slidText).eq(2).should('have.text','1996').click({force:true});
    //     cy.url().should('include','https://www.forbes.com/pictures/5988c29e31358e60d7759275/1996/')
    //     cy.get(source.h2AfterClick).eq(1).should('have.text','1996');
    // });
    
    
    // it('should label be 1998 before and after clicking',()=>{
    //     cy.get(source.slidText).eq(3).should('have.text','1998').click({force:true});
    //     cy.url().should('include','https://www.forbes.com/pictures/5988c29e31358e60d7759275/1998/')
    //     cy.get(source.h2AfterClick).eq(1).should('have.text','1998');
    // });

    // it('should label be 2002 before and after clicking',()=>{
    //     cy.get(source.slidText).eq(4).should('have.text','2002').click({force:true});
    //     cy.url().should('include','https://www.forbes.com/pictures/5988c29e31358e60d7759275/2002/')
    //     cy.get(source.h2AfterClick).eq(1).should('have.text','2002');
    // });

    // it('should label be 2014 before and after clicking',()=>{
    //     cy.get(source.slidText).eq(5).should('have.text','2014').click({force:true});
    //     cy.url().should('include','https://www.forbes.com/pictures/5988c29e31358e60d7759275/2014/')
    //     cy.get(source.h2AfterClick).eq(1).should('have.text','2014');
    // });
})


