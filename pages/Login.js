class LoginPage {

    getUsernameInput(){
        return cy.get('#user_email');
    }

    getPasswordInput(){
        return cy.get('#user_password');
    }

    getSignInButton(){
        return cy.get('.eckniwg2');
    }
}
export default LoginPage;