/// <reference types="cypress"/>

import {When, Then, And, Given} from "cypress-cucumber-preprocessor/steps";

Given("open login page",()=>{
    cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login");
    cy.wait(2000)
})
When("type id wrong {string}",(name)=>{
    cy.get("#input-0").type('user',{delay: 200});
})
And("type correct password {string}",(name)=>{
    cy.get("#input-2").type('123456',{delay: 200});
})
Then("click Sign In button {string}",(name)=>{
    cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click();
})