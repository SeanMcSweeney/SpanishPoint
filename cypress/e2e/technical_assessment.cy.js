describe('Matching Engine Website Test', () => {
  it('should navigate to Repertoire Management Module and validate supported products', () => {
    // visit website
    cy.visit('https://www.matchingengine.com/');
    // select navbar burger
    cy.get('.navbar-burger')
      .click();
    // select Repertoire Management Module
    cy.contains('a.navbar-item', 'Repertoire Management Module')
      .click();
    // scroll to Additional Features
    cy.contains('h2.vc_custom_heading', 'Additional Features')
      .scrollIntoView();
    // select Products Supported
    cy.contains('span.vc_tta-title-text', 'Products Supported')
      .click();
    // confirm the header
    cy.contains('h3', 'There are several types of Product Supported:')
      .should('be.visible')
      .next('div')
      .find('ul')
      .find('li')
      .should('have.length', 4)
      .each(($el, index) => {
        // verify text in list
        const expectedTexts = ['Cue Sheet / AV Work', 'Recording', 'Bundle', 'Advertisement'];

        cy.wrap($el).should('contain.text', expectedTexts[index]);
      });
    });
});