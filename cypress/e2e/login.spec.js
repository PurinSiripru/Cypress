describe("Enter Tool Management",()=>{
    it('should enter main page',()=>{
        cy.visit('https://vending-main-client-dev.rvvcs.com/auth/login');
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.get('.v-navigation-drawer').should('be.visible')
        cy.get('.v-navigation-drawer__scrim').should('be.visible').click()
    })
})
