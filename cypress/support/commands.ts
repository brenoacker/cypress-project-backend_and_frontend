/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (subject, target) => {
//     cy.wrap(subject)
//       .trigger('mousedown', { button: 0, force: true })
//       .then(() => {
//         cy.get(target)
//           .trigger('mousemove', { force: true })
//           .trigger('mouseup', { force: true });
//       });
//   });
  
//   declare namespace Cypress {
//     interface Chainable<Subject> {
//       dragAndDrop(target: string): Chainable<Subject>;
//     }
//   }
  
//   Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (subject, target) => {
//     cy.wrap(subject)
//       .trigger('mousedown', { button: 0 })
//       .then(() => {
//         cy.get(target)
//           .trigger('mousemove')
//           .trigger('mouseup', { force: true });
//       });
//   });

  import 'cypress-file-upload';

  import 'cypress-drag-drop';