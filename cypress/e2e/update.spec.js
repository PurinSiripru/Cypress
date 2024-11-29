describe("Update Company Test",()=>{
    it("should login to website",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.wait(1000)
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a.v-list-item.v-list-item--active.v-list-item--link.v-theme--PurpleTheme.text-primary.v-list-item--density-default.v-list-item--one-line.v-list-item--rounded.v-list-item--variant-text.mb-1.leftPadding > div.v-list-item__content > div")
    })
    it("insert new company",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-8.v-col-lg-8.v-col-12.d-flex.flex-wrap.gap-2.align-center > a').should('be.visible').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > div > div:nth-child(1) > div > div:nth-child(1) > div.v-col-sm-12.v-col-lg-8.v-col-12').should('be.visible')
        cy.get('input[class="v-field__input"]').eq(1).click().type('test001')
    })
    it("save new company",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > div > div.v-row.justify-center.d-flex.flex-wrap.gap-2 > button').click().wait(1000)
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').wait(1000).click()
    })
    it("click at modify",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.v-table.v-table--has-top.v-table--has-bottom.v-theme--PurpleTheme.v-table--density-default.v-data-table > div.v-table__wrapper > table > tbody > tr:nth-child(4) > td:nth-child(1) > label > i').click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').click()
    })
    it("type address in modify",()=>{
        cy.get('input[class="v-field__input"]').eq(1).wait(1000).clear({delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > div > div.v-row.justify-center.d-flex.flex-wrap.gap-2 > button').wait(1000).click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').wait(1000).click()
        cy.get('textarea[class="v-field__input"]').wait(1000).type('123456',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > div > div.v-row.justify-center.d-flex.flex-wrap.gap-2 > button').wait(1000).click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').wait(1000).click()
    })
    it("type new company name",()=>{
        cy.get('input[class="v-field__input"]').eq(1).click().wait(1000).type('test002',{delay: 100})
    })
    it("save new company name",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > div > div.v-row.justify-center.d-flex.flex-wrap.gap-2 > button').wait(1000).click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').should('be.visible').click()
    })
})





