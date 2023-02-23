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