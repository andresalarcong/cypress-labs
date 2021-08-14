// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Adds XPath command to Cypress.io test runner
// https://www.npmjs.com/package/cypress-xpath
require("cypress-xpath");

Cypress.Commands.add("getIframeBody", () => {
  return cy
    .get('iframe[id="mce_0_ifr"]')
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
});
