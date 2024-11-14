Feature: Login Failed
@focus  
    Scenario: Open Login Page
        Given open login page
        When type id wrong "Username"
        And type correct password "Password"
        Then click Sign In button "SIGN IN"

