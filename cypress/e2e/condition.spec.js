describe("Condition Test",()=>{
    it("enter company",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.wait(1000)
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").wait(1000).click()
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)").click()
    })
    it("click at search",()=>{
        cy.get('input[class="v-field__input"]').click()
    })  
    it("type name",()=>{
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > div > div > div > div.v-field__append-inner > i').wait(1000).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
    })
    it("click at filter",()=>{
        cy.get('input[class="v-field__input"]').type('test001')
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
    })
    it("click at column",()=>{
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).wait(1000).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').eq(1).wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
    })
    it("click at condition",()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
    })
    it("change condition",()=>{
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.contains('เริ่มต้นด้วย').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.contains('ลงท้ายด้วย').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.contains('เท่ากับ').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.contains('ไม่มี').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).wait(1000).click()
        cy.contains('ไม่เท่ากับ').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
    })
})
