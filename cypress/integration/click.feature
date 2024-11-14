Feature: Click Sign In
@focus
    Scenario: Blank
        Given open login page
        When click at Sign In "Sign In" 
        Then Nothing Changed
    