class MainPage {

    getUserProfileButton(){
        return cy.get('.css-7afvtf');
    }

    getSignOffButton1(){
        return cy.get(':nth-child(9) > .css-bve2vl');
    }

    getSignOffButton2(){
        return cy.get(':nth-child(7) > .css-bve2vl');
    }
}
export default MainPage;