Feature: SVG popup

    Scenario: Click une classe pour avoir un popup
        Given I am on the map page
        When I click on class "L1756"
        Then I should see the popup containing "Classe :  L1756"
        Then I close the popup