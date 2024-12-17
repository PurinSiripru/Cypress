describe('User Test',()=>{
    it("login to website",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").click()
    })
    it('search test001',()=>{
        cy.get('button[class="v-btn v-btn--icon v-theme--PurpleTheme v-btn--density-default v-btn--size-small v-btn--variant-flat ms-md-3 ms-sm-5 ms-3 text-muted"]').should('be.visible').click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line v-list-item--rounded v-list-item--variant-text mb-1 leftPadding"]').eq(3).should('be.visible').click()
        
        cy.get('input[class="v-field__input"]').click().type('test001')
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เริ่มต้นด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ลงท้ายด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่มี').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('insert new user , test validation not select company',()=>{
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default elevation-3 v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click().wait(500).type('ทดสอบ')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click().wait(500).type('โดยแม็ก')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click().wait(500).type('123456@gmail.com')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click().wait(500).type('test001')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click().wait(500).type('13579')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').wait(1000).click()
        cy.contains('create').scrollIntoView().should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').wait(1000).click()
        cy.contains('dev01').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(3).should('be.visible').wait(1000).click()
        cy.contains('main').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
    })
    it('search test001 again',()=>{
        
        cy.get('input[class="v-field__input"]').click().type('test001')
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เริ่มต้นด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ลงท้ายด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่มี').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('check test001 detail',()=>{
        cy.scrollTo('bottom')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(48).should('be.visible').click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).should('be.visible').click()
        cy.wait(3000)
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
    })
    it('cannot change Username',()=>{
        cy.scrollTo('bottom')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(48).should('be.visible').click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(1).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible')
    })
    it('change test001 data , select company',()=>{
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click().wait(500).type('tester',{delay: 100})
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click().wait(500).type('by purin',{delay: 100})
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click().wait(500).type('tester123@gmail.com',{delay: 100})
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').clear()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click().wait(500).type('24680',{delay: 100})
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').wait(1000).click()
        cy.contains('company').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').wait(1000).click()
        cy.contains('dev02').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('dana').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(3).should('be.visible').wait(1000).click()
        cy.contains('main').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        
        cy.scrollTo('top')
    })
    it('search tester by purin',()=>{
        
        cy.get('input[class="v-field__input"]').click().type('tester by purin')
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เริ่มต้นด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ลงท้ายด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่มี').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.contains('ไม่เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('check test001 detail again',()=>{
        cy.scrollTo('bottom')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(48).should('be.visible').click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).should('be.visible').click()
        cy.wait(3000)
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
    })
    it('delete test001',()=>{
        cy.scrollTo('bottom')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(48).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('not found tester by purin',()=>{
        
        cy.get('input[class="v-field__input"]').click().type('tester by purin')
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        
        cy.contains('เริ่มต้นด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        
        cy.contains('ลงท้ายด้วย').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        
        cy.contains('เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        
        cy.contains('ไม่มี').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').click()
        
        cy.contains('ไม่เท่ากับ').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
        
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.scrollTo('top')
    })
})
