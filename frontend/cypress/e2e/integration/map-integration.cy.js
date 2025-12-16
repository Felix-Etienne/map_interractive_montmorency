describe('Map Integration Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
    
    // Ignore the fitToViewer error
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('fitToViewer')) {
        return false;
      }
      return true;
    });
  });

  // Test 1: SVG map loads with classroom elements
  it('should load SVG map with classroom elements', () => {
    cy.get('svg', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('svg path.salle').should('have.length.greaterThan', 0);
    
    // Verify specific classroom exists
    cy.get('#L1756').should('exist');
  });

  // Test 2: Clicking a classroom triggers popup
   it('should display popup when classroom is clicked', () => {
    cy.get('svg').should('exist');
    cy.get('#L1756').scrollIntoView().click({ force: true });
    cy.wait(500);
    
    // Just check the first popup
    cy.get('div[style*="position: fixed"]')
      .first()
      .should('be.visible')
      .should('contain', 'Classe')
      .should('contain', 'L1756')
      .find('button')
      .contains('Fermer')
      .should('exist');
  });


  // Test 3: Floor selector changes the displayed map
  it('should change map when floor selector is used', () => {
    // Get initial SVG
    cy.get('svg').should('exist');
    
    // Switch to second floor
    cy.get('select').first().select('2');
    cy.wait(1000);
    
    // Verify map still exists (different floor loaded)
    cy.get('svg').should('exist');
    
    // Verify a classroom from floor 2 exists
    cy.get('#L2750').should('exist');
    
    // Switch back to first floor
    cy.get('select').first().select('1');
    cy.wait(1000);
    
    // Verify floor 1 classroom exists again
    cy.get('#L1756').should('exist');
  });

  // Test 4: Search bar filters and displays results
  it('should filter classroom results when searching', () => {
    cy.get('input.search-input').first().clear().type('L17');
    cy.wait(500);
    
    // Verify results list appears
    cy.get('ul.results-list').should('be.visible');
    
    // Verify filtered results contain searched term
    cy.get('ul.results-list li.result-item').each(($item) => {
      expect($item.text()).to.match(/L17/i);
    });
  });

  // Test 5: Checkbox selection for PDF export
  it('should allow selecting multiple classrooms via checkboxes', () => {
    // Select first classroom
    cy.contains('label', 'L1756')
      .parent()
      .find('input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
    
    // Select second classroom
    cy.contains('label', 'L1758')
      .parent()
      .find('input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
    
    // Verify export button exists
    cy.contains('button', 'Exporter sélection en PDF').should('exist');
  });

  // Test 6: Navigation line appears between two clicked classrooms
  it('should create navigation line between two classrooms', () => {
    // Enable pathfinding mode
    cy.contains('button', 'Trouver un chemin').click();
    cy.wait(500);
    
    // Click first classroom
    cy.get('#L1756').click({ force: true });
    cy.wait(500);
    
    // Click second classroom
    cy.get('#L1758').click({ force: true });
    cy.wait(1000);
    
    // Verify navigation line appears
    cy.get('svg.map polyline', { timeout: 5000 })
      .should('exist')
      .and('have.attr', 'stroke', 'red');
    
    // Verify cancel button exists
    cy.contains('button', 'Annuler Navigation').should('exist');
  });
});