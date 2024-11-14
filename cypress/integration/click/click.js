/// <reference types="cypress"/>

import {When, Then, And, Given} from "cypress-cucumber-preprocessor/steps";

Given("open login page",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login")
})
When("click at Sign In {string}",(name)=>{
    cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click();
})
Then("Nothing Changed",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login")
})