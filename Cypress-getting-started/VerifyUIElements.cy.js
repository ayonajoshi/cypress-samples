/// <reference types="Cypress" />

describe('UI Elements', function()
{
    it('Verify Inputbox & Radio buttons', function()
    {
        cy.visit("https://demo.guru99.com/test/newtours/") //visit url
        cy.wait(500)
        cy.url().should('include','newtours')//verify url should include 'newtours'
        cy.wait(500)
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.wait(800)
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
        cy.wait(500)

        cy.get('input[name=submit]').should('be.visible').click() //Sign-in
        cy.wait(500)

        cy.title().should('eq','Login: Mercury Tours') //Title verification 
        cy.wait(500)
        cy.get('a[href="reservation.php"]').contains('Flights').click()
        cy.wait(500)

        //Radio buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')//visibility checked status
        cy.wait(800)
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()//visibility checked status
        cy.wait(700)

        cy.get('[name=findFlights]').should('be.visible').click()//continue button
        cy.wait(700)
        cy.title().should('eq','Find a Flight: Mercury Tours:')//Title verification
    }
)
}
) 