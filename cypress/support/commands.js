// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('@4tw/cypress-drag-drop')

import { fireCdpCommand } from 'cypress-real-events/fireCdpCommand';
import { getCypressElementCoordinates } from 'cypress-real-events/getCypressElementCoordinates';

Cypress.Commands.add('dragTo', { prevSubject: true }, (subject, targetSelector) => {
  const sourceCoordinates = getCypressElementCoordinates(subject, 'center');

  cy.wrap(subject).realMouseDown();

  return cy.get(targetSelector).then(async ($target) => {
    const targetCoordinates = getCypressElementCoordinates($target, 'center');
    const steps = 15;

    for (let i = 1; i <= steps; i++) {
      const point = {
        x: sourceCoordinates.x + ((targetCoordinates.x - sourceCoordinates.x) * i) / steps,
        y: sourceCoordinates.y + ((targetCoordinates.y - sourceCoordinates.y) * i) / steps,
      };

      await fireCdpCommand('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        button: 'left',
        pointerType: 'mouse',
        ...point,
      });
    }

    return cy.wrap($target).realMouseUp();
  });
});