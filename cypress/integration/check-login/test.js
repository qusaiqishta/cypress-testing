describe('Login Successfully',()=>{
    before(()=>{
        cy.visit('https://www.forbes.com/?sh=4a22fa8f2254')
    })

    it('iFrame - Type in the body - jQuery Way', () => {
        // cy.get('iframe[name="piano-id-g8WXN"]').within(($frame) => {
        //     const body = $frame.contents().find('#email')
        //     cy.wrap(body).clear().type('qaautomation@forbes.com')
        // })

        cy.get('iframe[name="piano-id-g8WXN"]').then((element) => {
			const body = element.contents().find('body');
			cy.wrap(body).find(this.signInPopUp).should('exist');
			cy.wrap(body).find(this.loginHeadline).should('be.visible');
			cy.wrap(body).find(this.emailAddressTextBox).type('qaautomation@forbes.com')

;
			cy.wrap(body).find(this.passwordTextBox).type('Forbes@123').wait(2000);
			cy.wrap(body).find(this.signInButton).click();
		});
    });
    it.only('should login successfully when entered a valid credentials',()=>{
        cy.pause();
        cy.get('.login[data-ga-track="U20-SignIn"]').click();
       cy.wait(3000)
       cy.get('iframe[name="piano-id-g8WXN"]').its('0.contentDocument.body')
            cy.get('#email').type('qaautomation@forbes.com');
            cy.get('password').type('Forbes@123');
            cy.get('button.login-modal__login-button').click();
//     cy.get('iframe[name="piano-id-g8WXN"]')
//   .then(($iframe) => {
//     const $body = $iframe.contents().find('body')

//     cy.wrap($body)
//       .find('#email')
//       .type('fake@email.com')
//   })
       
    })

   
})

// const getIframeDocument = () => {
//     return (cy.get('.login[data-ga-track="U20-SignIn"]').click(),
//     cy.get('iframe[name="piano-id-g8WXN"]')
//     )
//     .its('0.contentDocument').should('exist')
//   }
  
//   const getIframeBody = () => {
//     return getIframeDocument()
//     .its('body').should('not.be.undefined')
//     .then(cy.wrap)
//   }
  
//   it('gets the post', () => {
//     cy.visit('https://www.forbes.com/?sh=4a22fa8f2254')
//     cy.get('.login[data-ga-track="U20-SignIn"]').click()
//     getIframeBody().find('#email').type('qaautomation@forbes.com')
//     getIframeBody().find('#password').type('Forbes@123')
//   })
