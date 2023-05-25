const el = require('./elements').ELEMENTS;

class InvoiceList {
    firstInvoiceDetails(){
        cy.login();
        cy.get(el.firstInvoiceDetail).invoke('removeAttr', 'target').click();
    }

    validateInvoiceDetails(){
        cy.contains('Rendezvous Hotel').should('be.visible')
        cy.contains('14/01/2018').should('be.visible')
        cy.contains('15/01/2018').should('be.visible')
        cy.contains('Invoice #110 details').should('be.visible')
        cy.contains('0875').should('be.visible')
        cy.get('.container > div').should('be.visible')
        cy.contains('Superior Double').should('be.visible')
        cy.contains('1').should('be.visible')
        cy.contains('$150').should('be.visible')
        cy.contains('USD $20.90').should('be.visible')
        cy.contains('USD $19').should('be.visible')
        cy.contains('USD $209').should('be.visible')
    }
}

export default new InvoiceList();