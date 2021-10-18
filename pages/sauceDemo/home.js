class HomeSaucePage{
    elements={
        usernameInput:()=>cy.get('#user-name'),
        passwordInput:()=>cy.get('#password'),
        loginBtn:()=>cy.get('#login-button'),
        errorMessage:()=>cy.get('h3[data-test="error"]')
    }

    typeUserName(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click()
    }
}

module.exports= new HomeSaucePage();