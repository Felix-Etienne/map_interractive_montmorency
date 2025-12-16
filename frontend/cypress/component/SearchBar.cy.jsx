import React from 'react';
import SearchBar from '../../src/components/SearchBar/SearchBar.jsx';

describe('SearchBar Component', () => {
  const mockClasses = ['L1756', 'L1758', 'L1760', 'L2750', 'L2752'];

  it('should render search input', () => {
    cy.mount(<SearchBar classes={mockClasses} />);
    cy.get('input.search-input').should('exist');
    cy.get('input.search-input').should('have.attr', 'placeholder', 'Rechercher une classe');
  });

  it('should filter and display matching results', () => {
    cy.mount(<SearchBar classes={mockClasses} />);
    
    cy.get('input.search-input').type('L17');
    cy.get('ul.results-list').should('be.visible');
    cy.get('li.result-item').should('have.length', 3); // L1756, L1758, L1760
    cy.get('li.result-item').first().should('contain', 'L1756');
  });

  it('should call onSelectClasse when result is clicked', () => {
    const onSelectSpy = cy.spy().as('onSelectSpy');
    cy.mount(<SearchBar classes={mockClasses} onSelectClasse={onSelectSpy} />);
    
    cy.get('input.search-input').type('L17');
    cy.get('li.result-item').first().click();
    
    cy.get('@onSelectSpy').should('have.been.calledWith', 'L1756', true);
  });

  it('should hide results after selecting a class', () => {
    cy.mount(<SearchBar classes={mockClasses} />);
    
    cy.get('input.search-input').type('L17');
    cy.get('ul.results-list').should('be.visible');
    
    cy.get('li.result-item').first().click();
    cy.get('ul.results-list').should('not.exist');
  });
});