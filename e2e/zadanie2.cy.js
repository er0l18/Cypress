/// <reference types="cypress" />

describe('Zadanie logowanie', () => {
  beforeEach(() => {  
    cy.visit('https://www.edu.goit.global/account/login');
  })
  it('Test 1', () => {
    cy.get('#user_email').type('user888@gmail.com');
    cy.get('#user_password').type('1234567890');
    cy.get('.eckniwg2').click();
    cy.get('.css-7afvtf').click();
    cy.get(':nth-child(9) > .css-bve2vl').click();
  })
  it('Test 2', () => {
    cy.get('#user_email').type('testowyqa@qa.team');
    cy.get('#user_password').type('QA!automation-1');
    cy.get('.eckniwg2').click();
    cy.get('.css-7afvtf').click();
    cy.get(':nth-child(7) > .css-bve2vl').click();
})

})