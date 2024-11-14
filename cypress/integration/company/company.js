/// <reference types="cypress"/>

import {When, Then, And, Given} from "cypress-cucumber-preprocessor/steps";

Given("select company",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
    cy.get("#input-0").type('admin');
    cy.get("#input-2").type('123456');
    cy.get(`#checkbox-4`).check();
    cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
    cy.wait(3000)
    cy.visit("https://vending-main-client-dev.rvvcs.com/")
    cy.get("#__nuxt > div > div > div > div > nav")
    cy.get("#__nuxt > div > div > div > div > div").wait(2000).click()
    cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").wait(2000).click()
    cy.get("#__nuxt > div > div > div > div > nav")
})
When("click at บริษัท",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/company");
    cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3)").wait(2000)
    cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a.v-list-item.v-list-item--active.v-list-item--link.v-theme--PurpleTheme.text-primary.v-list-item--density-default.v-list-item--one-line.v-list-item--rounded.v-list-item--variant-text.mb-1.leftPadding > div.v-list-item__content > div")
    .click({force: true});
    cy.get("#__nuxt > div > div > div > div > div").click()
    cy.get("#__nuxt > div > div > div > div > main > div")
})
And("click at เพิ่มรายการใหม่",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/company")
    cy.get("#__nuxt > div > div > div > div > div").wait(2000).click()
    cy.get("#__nuxt > div > div > div > div > main > div")
    cy.wait(2000)
    cy.get("#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.mt-6 > div > div.v-col-md-8.v-col-lg-8.v-col-12.d-flex.flex-wrap.gap-2.align-center > a").wait(2000).click({force: true})
})
And("เข้าสู่ฟอร์มการใส่ข้อมูลรายการ",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/company/add")
    cy.wait(2000)
})
And("คลิกไปที่แถบชื่อบริษัท",()=>{
    cy.get("#__nuxt > div > div > div > div > div").click()
    cy.get("#input-7").click({force: true}).should('be.visible').type('test001')
})
And("บันทึกข้อมูลบริษัท",()=>{
    cy.wait(2000)
    cy.get("#__nuxt > div > div > div > div > main > div > div > form > div > div.v-row.justify-center.d-flex.flex-wrap.gap-2 > button").wait(2000).click({force: true})
    cy.wait(2000)
})
And("บันทึกสำเร็จ",()=>{
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div")
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").wait(2000).click()
    cy.wait(2000)
    cy.visit("https://vending-main-client-dev.rvvcs.com/company")
})
And("ลบข้อมูลรายการ",()=>{
    cy.get("#__nuxt > div > div > div > div > div").click()
    cy.wait(2000)
    cy.get("#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.v-table.v-table--has-top.v-table--has-bottom.v-theme--PurpleTheme.v-table--density-default.v-data-table > div.v-table__wrapper > table > tbody > tr:nth-child(4) > td:nth-child(4)")
    cy.get("#__nuxt > div > div > div > div > main > div > div > div.v-card-text > div.v-table.v-table--has-top.v-table--has-bottom.v-theme--PurpleTheme.v-table--density-default.v-data-table > div.v-table__wrapper > table > tbody > tr:nth-child(4) > td:nth-child(1)").click()
    cy.wait(2000)
})
Then("ยืนยันการลบรายการ",()=>{
    cy.get("#v-menu-18 > div > div > div").wait(2000).click()
    cy.wait(2000)
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").wait(2000).click()
    cy.wait(2000)
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div")
})
