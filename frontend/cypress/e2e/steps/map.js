const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('fitToViewer')) {
    return false;
  }
  return true;
});

Given("I am on the map page", () => {
  cy.visit("/");
  cy.wait(250);
});

When("I click on class {string}", (salleId) => {
  cy.get('svg', { timeout: 2000 }).should('exist');
  cy.get(`#${salleId}`, { timeout: 2000 })
    .should('exist')
    .scrollIntoView()
    .click({ force: true });
});

Then("I should see the popup containing {string}", (text) => {
  cy.get('div[style*="position: fixed"]', { timeout: 2000 })
    .first()
    .should('be.visible')
    .should('contain', text);
});

Then("I close the popup", () => {
  cy.get('div[style*="position: fixed"]').first().within(() => {
    cy.contains('button', 'Fermer').scrollIntoView().click();
  });
});


When("I switch to the second floor", () => {
  cy.get('select').select('2'); 
  cy.wait(100); 
});

When("I switch to the first floor", () => {
  cy.get('select').select('1'); 
  cy.wait(100); 
});

Then("I should see the SVG map", () => {
  cy.get('svg').should('be.visible');
});

Then("the popup should have a close button", () => {
  cy.get('div[style*="position: fixed"]').first().within(() => {
    cy.contains('button', 'Fermer').should('exist');
  });
});
Then("I should see a red navigation line", () => {
  cy.get('svg.map polyline', { timeout: 5000 })
    .should('exist')
    .and('have.attr', 'stroke', 'red');
});

When("I click the navigation button", () => {
  cy.contains('button', 'Trouver un chemin').scrollIntoView().click();
  cy.wait(500);
});

When("I click the cancel navigation button", () => {
  cy.contains('button', 'Annuler Navigation').scrollIntoView().click();
  cy.wait(500);
});

Then("I should not see a navigation line", () => {
  cy.get('svg.map polyline').should('not.exist');
});

When("I select class {string} from the checkbox list", (className) => {
  cy.contains('label', className)
    .parent()
    .find('input[type="checkbox"]')
    .scrollIntoView()
    .check();
  cy.wait(300);
});

When("I click the export PDF button", () => {
  cy.contains('button', 'Exporter sélection en PDF').scrollIntoView().click();
  cy.wait(1000); 
});

Then("the PDF generation should complete successfully", () => {
  cy.exec('ls cypress/downloads').its('stdout').should('not.be.empty');
});


// Search for a classroom
When("I search for {string}", (searchTerm) => {
  cy.get('input.search-input')
    .first()
    .clear()
    .type(searchTerm);
  cy.wait(500); // Wait for results to filter
});

// Verify search results appear with specific class
Then("I should see search results containing {string}", (className) => {
  cy.get('ul.results-list').should('be.visible');
  cy.get('ul.results-list li.result-item').should('contain', className);
});

// Click on a specific search result
When("I click on the search result {string}", (className) => {
  cy.get('ul.results-list li.result-item')
    .contains(className)
    .click();
  cy.wait(500); // Wait for popup to appear
});