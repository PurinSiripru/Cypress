describe('Company Test',()=>{
        it('should enter main page',()=>{
            cy.visit('https://vending-main-client-dev.rvvcs.com/auth/login');
            cy.get("#input-0").click().type('admin')
            cy.get("#input-2").click().type('123456')
            cy.get("#checkbox-4").click().click()
            cy.get("button[type='button']").click().wait(1000)
            cy.wait(2000)
            cy.get('nav[class="v-navigation-drawer v-navigation-drawer--left v-navigation-drawer--temporary v-navigation-drawer--active v-theme--PurpleTheme v-navigation-drawer--mobile elevation-0 leftSidebar"]')
            cy.wait(2000)
            cy.get('div[class="v-navigation-drawer__scrim"]').click()
            cy.wait(2000)
        })
        it('should enter company',()=>{
            cy.get('button[class="v-btn v-btn--icon v-theme--PurpleTheme v-btn--density-default v-btn--size-small v-btn--variant-flat ms-md-3 ms-sm-5 ms-3 text-muted"]').click()
            cy.wait(2000)
            cy.get('#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)').wait(2000).should('be.visible').click()
            cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-8.v-col-lg-8.v-col-12.d-flex.flex-wrap.gap-2.align-center > a').should('be.visible').click()
        })
    })  
        

