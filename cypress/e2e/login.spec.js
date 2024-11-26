describe("Enter Tool Management",()=>{
    it('should enter main page',()=>{
        cy.visit('https://vending-main-client-dev.rvvcs.com/auth/login');
        cy.get("#input-0").click().type('admin')
        cy.get("#input-2").click().type('123456')
        cy.get("#checkbox-4").click().click()
        cy.get("button").contains('Sign in').click().wait(1000)
        cy.get('.v-navigation-drawer').should('be.visible')
        cy.get('.v-navigation-drawer__scrim').should('be.visible').click()
    })
})