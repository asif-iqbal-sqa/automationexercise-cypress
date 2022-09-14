/// <reference types="cypress" />

describe ("Test Case 1: Register User", () => {

    it ("2. Navigate to url 'http://automationexercise.com'", () => {
        cy.visit ("http://automationexercise.com");
    })

    
    it ("URL Validation", () => {

        cy.url().should('include', "automationexercise");
        cy.url().should('equal', "https://automationexercise.com/");
    })

    it ("3. Verify that home page is visible successfully", () => {
        cy.get ("div> div:nth-of-type(2) > img[alt='demo website for practice']").should("be.visible").should("have.length", "3");
    })

    it("4. Click on 'Signup / Login' button", ()=> {

        cy.get (".nav.navbar-nav > li:nth-of-type(4) > a")
        .should("be.visible")
        .click();

    })

    it("5. Verify 'New User Signup!' is visible", ()=> {
        
        cy.get (".signup-form > h2")
        .should ("be.visible");
        
    })

    it("6. Enter name and email address", ()=> {

        cy.get ("input[placeholder='Name']")
        .type ("cypress user")

        cy.get ("input[data-qa='signup-email']")
        .type ("cypressuser5@yopmail.com")
        cy.wait(10000);
        
    })

    it ("7. Click 'Signup' button", ()=> {
        
        cy.get ("button[data-qa='signup-button']")
        .click();

    })

})