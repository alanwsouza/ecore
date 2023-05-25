const el = require('./elements').ELEMENTS;

class Login {
    loginPage(){
        cy.visit('https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/');
    }

    validLogin(){
        cy.get(el.username).type('demouser');
        cy.get(el.password).type('abc123');
        cy.get(el.submit).click();
    }

    wrongUser(){
        cy.get(el.username).type('Demouser');
        cy.get(el.password).type('abc123');
        cy.get(el.submit).click();
    }

    wrongPassword(){
        cy.get(el.username).type('demouser');
        cy.get(el.password).type('nananana');
        cy.get(el.submit).click();
    }

    wrongUserPassword(){
        cy.get(el.username).type('demouser_');
        cy.get(el.password).type('xyz');
        cy.get(el.submit).click();
    }

    validateLoginSuccessfully(){
        cy.contains('Invoice List').should('be.visible')
    }

    validateInvalidLogin(){
        cy.contains('Wrong username or password.').should('be.visible')
    }
}
export default new Login();