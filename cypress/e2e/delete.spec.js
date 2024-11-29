describe("Delete Company Test",()=>{
    it("enter company",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").wait(2000).click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").wait(2000).click()
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)").click()
    })
    it("select company",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.v-table.v-table--has-top.v-table--has-bottom.v-theme--PurpleTheme.v-table--density-default.v-data-table > div.v-table__wrapper > table > tbody > tr:nth-child(3) > td:nth-child(1) > label > i').click()
    })
    it("delete company",()=>{
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').wait(2000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
})


