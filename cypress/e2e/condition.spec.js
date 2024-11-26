describe("Condition Test",()=>{
    it("enter company",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get("#input-0").type('admin');
        cy.get("#input-2").type('123456');
        cy.get(`#checkbox-4`).check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.wait(1000)
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)").click()
    })
    it("click at search",()=>{
        cy.get('#input-12').click()
    })  
    it("type name",()=>{
        cy.get('#input-12').type('test001',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > div > div > div > div.v-field__append-inner > i').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-muted.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
    })
    it("click at filter",()=>{
        cy.get('#input-12').type('test001')
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
    })
    it("click at column",()=>{
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-text-field.v-select.v-select--chips.v-select--multiple > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.get('#v-menu-43 > div > div > div:nth-child(3)').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-text-field.v-select.v-select--chips.v-select--multiple > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
    })
    it("click at condition",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').click().click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
    })
    it("change condition",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.contains('เริ่มต้นด้วย').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.contains('ลงท้ายด้วย').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.contains('เท่ากับ').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.contains('ไม่มี').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.v-list-item-title > div.v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-theme--PurpleTheme.v-locale--is-ltr.v-input--dirty.v-text-field.v-select.v-select--single.v-select--selected > div.v-input__control > div > div.v-field__append-inner > i').wait(1000).click()
        cy.contains('ไม่เท่ากับ').wait(1000).click()
        cy.get('#v-menu-14 > div > div > div > div > div.d-flex.flex-wrap.gap-2.justify-end > button.v-btn.v-btn--elevated.v-theme--PurpleTheme.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated').wait(1000).click()
    })
})
