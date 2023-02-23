Cypress Cucumber Starter Kit
============================

This starter kit contains everything you need to start using Cypress with Cucumber. It uses the @bahmutov/cypress-esbuild-preprocessor package to compile your test files, making your test execution faster. It also includes the @testing-library/cypress package to make test writing easier and more readable.


Prerequisites
--------------

*   Node.js (version 12 or higher)
*   Cypress (installed globally or as a project development dependency)
*   Git

Installation
----------

To get started, clone this repository onto your machine:

```bash
  git clone https://github.com/saulocastillos/cypress-cucumber-starter-kit.git
```

Then, navigate to the project directory and run the following command to install the dependencies:

```bash
  npm install
```

Running Tests
--------------------

To run the tests, execute the following command:

```bash
  npm run test
```

This will start Cypress and run all tests located in the `cypress/integration` folder.

Writing Tests
-----------------

This starter kit includes a basic example test for the Google website. You can find it in `cypress/integration/google/google.feature`. To write your own tests, simply create a new `.feature` file in that folder and implement your step definitions in a corresponding `.js` file.

For example, if you create a `my-feature.feature` file, create a `my-feature.js` file in the `cypress/integration` folder with the corresponding step definitions.

For more information on how to write tests with Cucumber and Cypress, please consult the official documentation:

*   [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
*   [Cucumber](https://cucumber.io/docs/guides/overview/)
*   [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

Example Test
------------

```gherkin
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

```

And the `google.js` file:

```javascript
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

Given("I am on the Google homepage", () => {
  cy.visit("https://www.google.com")
})

Then("I should see the Google logo", () => {
  cy.findByRole('img', {  name: /google/i})
})

When("I type {string} into the search bar", (searchTerm) => {
  cy.findByRole('combobox', {  name: /q/i}).type(searchTerm)
});

When("I press enter", () => {
  cy.findByRole('combobox', {  name: /q/i}).type('{enter}')
});

Then("I should see search results for {string}", (searchTerm) => {
  cy.get('div.g').should('contain', searchTerm)
});

Given("I am on the Google search results page", () => {
  cy.visit("https://www.google.com/search?q=apple")
});

When("I click on the {string} tab", (tabName) => {
  cy.contains(tabName).click()
});

Then("I should see {string} search results", (tabName) => {
  cy.get('div.g').should('contain', tabName)
});
```

Remembering that this file must be in `cypress/integration/google/google.js`, so that it can be used by the feature file `cypress/integration/google/google.feature`