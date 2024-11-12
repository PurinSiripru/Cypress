/// <reference types="cypress"/>

import {When, Then, And, Given} from "cypress-cucumber-preprocessor/steps";

Given("open login page" ,()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login");
});
Then("verify to see the username in login page {string}",()=>{
    cy.get("#input-0");
})
And("verify to see the password in login page {string}",()=>{
    cy.get("#input-2");
})
When("type username and password in login page",(index,desc)=>{
    cy.get("#input-0").type('admin')
    cy.get("#input-2").type('123456')
})
And("click at Sign In button in login page",(name)=>{
    cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
})
Given("enter to main page",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com");
})
When("see title in main page {string}",(name)=>{
    cy.get("#__nuxt > div > div > div > div > nav > div > div:nth-child(2) > div > div.v-list.v-theme--PurpleTheme.bg-transparent.v-list--density-default.v-list--one-line.pa-6 > a:nth-child(3) > div.v-list-item__content > div.v-list-item-title").contains(name)
})
Then("click company in main page",()=>{
    cy.get()
})