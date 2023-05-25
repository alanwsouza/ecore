/// <reference types="cypress" />

import InvoiceList from "../support/pages/InvoiceList"

describe('Invoice List', () => {

  it('click first item presentend in page Invoice List and validate the informations', () => {
  InvoiceList.firstInvoiceDetails();
  InvoiceList.validateInvoiceDetails();
  })
})