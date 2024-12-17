describe("License Test",()=>{
    it("should login to website",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").click()
    })
    it("should click at license",()=>{ 
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(7)").click()
    })
    it("search test001",()=>{
        
        cy.get('input[class="v-field__input"]').click()
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เริ่มต้นด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ลงท้ายด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่มี').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        
    })
    it('insert new license',()=>{
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-8.v-col-lg-8.v-col-12.d-flex.flex-wrap.gap-2.align-center > a').click()
        cy.get('input[aria-label="View"]').eq(0).click().click()
        cy.get('input[aria-label="Update"]').eq(1).click()
        cy.get('input[aria-label="Approve"]').eq(2).click()
        cy.get('input[aria-label="Delete"]').eq(3).click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > form > div.v-card-text.d-flex.justify-center.gap-2 > button').click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click()
        cy.get('input[type="text"]').click().wait(500).type('test001',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > form > form > div.v-card-text.d-flex.justify-center.gap-2 > button').click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click()
    })
    it('search test001 again',()=>{
        
        cy.get('input[class="v-field__input"]').click().type('test001',{delay: 100})
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        
        cy.contains('เริ่มต้นด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ลงท้ายด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่มี').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
    })
    it('check details test001',()=>{
        cy.visit('https://vending-main-client-dev.rvvcs.com/license')
        cy.get('div[class="v-navigation-drawer__scrim"]').click()
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(7).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        cy.scrollTo(0, 500);
        ; // รอ 500ms
        cy.scrollTo(0, 1000);
        ; 
        cy.scrollTo(0, 1500);
        ;
        cy.scrollTo(1500, 0);
        ; // รอ 500ms
        cy.get('a[class="v-breadcrumbs-item--link"]').click()
        
    })
    it('update test001 to test002',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(7).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(1).click()
        cy.get('input[value="test001"]').clear()
        cy.get('thead input[type="checkbox"]').each(($checkbox)=>{
            cy.wrap($checkbox).wait(200).check();
        })
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[class="v-field__input"]').click().wait(500).type('test002',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
    it('search not found test001',()=>{
        cy.get('input[class="v-field__input"]').click().type('test001')
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เริ่มต้นด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ลงท้ายด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่มี').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
    })
    it('search found test002',()=>{
        cy.get('input[class="v-field__input"]').click().type('test002')
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เริ่มต้นด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ลงท้ายด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่มี').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
    })
    it('check details test002',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(7).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        cy.scrollTo(0, 500);
        ; // รอ 500ms
        cy.scrollTo(0, 1000);
        ; 
        cy.scrollTo(0, 1500);
        ;
        cy.scrollTo(1500, 0);
        ; // รอ 500ms
        cy.get('a[class="v-breadcrumbs-item--link"]').click()
        
    })
    it('delete test002',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(7).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        
        cy.get('div[class="swal2-popup swal2-modal swal2-icon-success swal2-show"]')
        
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        
    })
    it('search not found test002',()=>{
        cy.get('input[class="v-field__input"]').click().type('test002')
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เริ่มต้นด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ลงท้ายด้วย').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่มี').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).click()
        
        cy.contains('ไม่เท่ากับ').click()
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('#__nuxt > div > div > div > div > main > div > div > div.v-card-item > div > div.v-row.my-4 > div.v-col-md-4.v-col-lg-4.v-col-12.d-flex.flex-wrap.gap-2.align-center > i').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
    })
})
