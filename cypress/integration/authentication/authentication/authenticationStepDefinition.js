import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import checkAccessWebApp from "./question/checkAccessWebApp";
import authenticate from "./task/authenticate";

const url = "http://the-internet.herokuapp.com/login";

Given("I access to web application", () => {
  cy.visit(url);
});

When(`enter username {string} and password {string}`, (username, password) => {
  authenticate(username, password);
});

Then(`web application show me {string}`, (message) => {
  checkAccessWebApp(message);
});
