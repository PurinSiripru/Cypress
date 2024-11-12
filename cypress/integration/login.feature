Feature: Login Page

    Scenario: Open and verify login page
        Given open login page
        Then verify to see the username in login page "Username"
        And verify to see the password in login page "PassWord"
@regression     
    Scenario: Type username and password in login page
        Given open login page
        When type username and password in login page
        And click at Sign In button in login page
    
    Scenario: Enter Main Page
        Given enter to main page
        When see title in main page "บริษัท"
        Then click company in main page