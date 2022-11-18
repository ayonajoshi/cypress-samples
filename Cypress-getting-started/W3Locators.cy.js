/// <reference types = "cypress"/>

describe('Locating Elements', function()
    {
        it('verify types of locators', function()
            {
                cy.wait(200)
                cy.visit("https://campus.w3schools.com/collections/certifications") //opens url
                cy.wait(200)
                cy.get(".live-search-form-field").type("Learn R") //#id | search box
                cy.wait(200)
                cy.get(".live-search-button").click() //click on search button | [type='submit']
                cy.wait(200)
                cy.get(".productitem") //class | click add to cart | .click()
                cy.wait(200)
                cy.get("[data-variant-id=40359332773945]").click()
                cy.wait(200)
                cy.get('select#quantity_40359332773945_fd134adeb3991c3bd334868580e287ef').select('2').should('have.value', '2') //class | Quantity specifying
                cy.wait(400)//waiting time
                cy.get('.money').contains('$40.00') //show order summary
            }
        )
    }
)

