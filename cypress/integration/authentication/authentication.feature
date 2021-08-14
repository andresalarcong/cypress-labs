Feature: Access to Web Applicacion and Authentication

  I as a user required access to Web Application

  Scenario: Access to Web App
    Given I access to web application
    When enter username 'tomsmith' and password 'SuperSecretPassword!'
    Then web application show me 'You logged into a secure area!'
