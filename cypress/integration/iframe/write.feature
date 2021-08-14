Feature: Access to Web Applicacion and Authentication

    I as a user require to write to my future work colleague

    Scenario: Greet to my future work colleague
        Given I access to web application
        When write greet 'Hi! future work colleague'
        Then should be displayed in the text editor: 'Hi! future work colleague'