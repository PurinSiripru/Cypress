/// <reference types="cypress"/>

import {When, Then, And, Given} from "cypress-cucumber-preprocessor/steps";

Given("open main page",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com")
})
When("verify to see company in main page {string}" ,(name)=>{
    cy.get(`#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3) > div.v-list-item__content`).should('contain',name);
})
And("select the insert company ")