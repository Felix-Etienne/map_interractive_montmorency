Feature: SVG popup

    Scenario: Click une classe pour avoir un popup
        Given I am on the map page
        When I click on class "L1756"
        Then I should see the popup containing "Classe :  L1756"
        Then I close the popup

    Scenario: Changer l'étage et avoir popup
        Given I am on the map page
        When I click on class "L1756"
        Then I should see the popup containing "L1756"
        Then I close the popup
        When I switch to the second floor
        When I click on class "L2750"
        Then I should see the popup containing "L2750"
        Then I close the popup
        When I switch to the first floor
        When I click on class "L1756"
        Then I should see the popup containing "L1756"
        Then I close the popup

    Scenario: Navigation entre deux classes
        Given I am on the map page
        When I click the navigation button
        When I click on class "L1756"
        Then I close the popup
        When I click on class "L1760"
        Then I close the popup
        Then I should see a red navigation line
        When I click the cancel navigation button
        Then I should not see a navigation line

    Scenario: Export selected classes to PDF
        Given I am on the map page
        When I select class "L1756" from the checkbox list
        And I select class "L1758" from the checkbox list
        When I click the export PDF button
        Then the PDF generation should complete successfully