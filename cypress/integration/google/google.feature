Feature: google.com
  Scenario: visiting the frontpage
    Given I am on the Google homepage
    Then I should see the Google logo

  Scenario: searching for "apple" on Google
    Given I am on the Google homepage
    When I type "apple" into the search bar
    And I press enter
    Then I should see search results for "apple"

  Scenario: clicking on the "News" tab on Google search results
    Given I am on the Google search results page
    When I click on the "Notícias" tab
    Then I should see "Apple" search results
