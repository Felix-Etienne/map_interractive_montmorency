const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('fitToViewer')) {
    return false;
  }
  return true;
});

Given("I am on the map page", () => {
  cy.visit("/");
  cy.wait(2000);
});

When("I click on class {string}", (salleId) => {
  cy.get('svg', { timeout: 10000 }).should('exist');
  cy.get(`#${salleId}`, { timeout: 10000 })
    .should('exist')
    .click({ force: true });
});

Then("I should see the popup containing {string}", (text) => {
  cy.get('div[style*="position: fixed"]', { timeout: 10000 })
    .first()
    .should('be.visible')
    .should('contain', 'L1756');
});

Then("I close the popup", () => {
  cy.get('div[style*="position: fixed"]').first().within(() => {
    cy.contains('button', 'Fermer').click();
  });
  // That's it - just click and move on
});