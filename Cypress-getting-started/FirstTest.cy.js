describe('MyTestSuite',function()
{
    it('Verify Title of the page',function()
    {
        cy.visit('https://www.youtube.com/')
        cy.title().should('eq','YouTube')
    })
})
 