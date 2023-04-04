/// <reference types="cypress" />
import LoginPage from '../pages/Login.js';
import MainPage from '../pages/HomePage.js';

describe('Zadanie logowanie - Page Object Pattern', () => {

  let loginPage;
  let mainPage;

  before(() => {
    loginPage = new LoginPage();
    mainPage = new MainPage();
  })

  beforeEach(() => {  
    cy.visit('https://www.edu.goit.global/account/login');
  })

  it('Testing user: user888@gmail.com', () => {
    loginPage.getUsernameInput().type('user888@gmail.com');
    loginPage.getPasswordInput().type('1234567890');
    loginPage.getSignInButton().click();
    mainPage.getUserProfileButton().click();
    mainPage.getSignOffButton1().click();
  })
  it('Testing user: testowyqa@qa.team', () => {
    loginPage.getUsernameInput().type('testowyqa@qa.team');
    loginPage.getPasswordInput().type('QA!automation-1');
    loginPage.getSignInButton().click();
    mainPage.getUserProfileButton().click();
    mainPage.getSignOffButton2().click();
  })
})