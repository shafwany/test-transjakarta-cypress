class DroppablePage {
  get draggable() { return cy.get('#draggable'); }
  get droppable() { return cy.get('#simpleDropContainer #droppable'); }

  visit() {
    cy.intercept('**/googlesyndication.com/**', { statusCode: 204, body: '' });
    cy.intercept('**/googletagservices.com/**', { statusCode: 204, body: '' });
    cy.intercept('**/doubleclick.net/**', { statusCode: 204, body: '' });
    cy.intercept('**/adservice.google.com/**', { statusCode: 204, body: '' });

    cy.visit('/droppable');
    cy.wait(1000);
  }

  dragAndDrop() {
    this.draggable.scrollIntoView();

    this.draggable.trigger('mousedown', { which: 1 });
    this.droppable.trigger('mousemove', { which: 1 });
    this.droppable.trigger('mouseup', { which: 1, force: true }); // force di sini saja
  }

  verifyDropped() {
    this.droppable.should('contain', 'Dropped!');
  }
}

export default new DroppablePage();