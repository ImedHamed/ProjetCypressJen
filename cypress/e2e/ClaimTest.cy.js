describe('Buzz Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      // Load fixture data
    cy.fixture('Login.json').then((testdata) => {
      const { baseUrlUsername, baseUrlPassword } = testdata;
      // Fill in the login form
      cy.loginHRM(baseUrlUsername,baseUrlPassword)
    })
      
    })

    it('Verify Claim module is displayed in Buzz', () => {
        
        cy.get('a[href="/web/index.php/claim/viewClaimModule"]').as('ClaimModule') // creating alisas

        cy.get('@ClaimModule').should('be.visible').click() //using alisas
        cy.get('button[type="submit"]').click
    })
  })