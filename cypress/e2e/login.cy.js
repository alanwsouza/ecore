/// <reference types="cypress" />

import Login from "../support/pages/Login"

describe('Valid Login', () => {
  
  it('should login when provided valid credentials', () => {
    Login.loginPage();
    Login.validLogin();
    Login.validateLoginSuccessfully();
  })
})

describe('Invalid Login', () => {
  
  it('should not login when provided a wrong user', () => {
    Login.loginPage();
    Login.wrongUser();
    Login.validateInvalidLogin();
  })

  it('should not login when provided a wrong password', () => {
    Login.loginPage();
    Login.wrongPassword();
    Login.validateInvalidLogin();
  })

  it('should not login when provided the wrong user and password', () => {
    Login.loginPage();
    Login.wrongUserPassword();
    Login.validateInvalidLogin();
  })
})
