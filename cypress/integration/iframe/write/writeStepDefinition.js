import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import write from "./task/write";
import checkAccessWebApp from "./question/checkAccessWebApp";

const url = "http://the-internet.herokuapp.com/iframe";

Given("I access to web application", () => {
  cy.visit(url);
});

When(`write greet {string}`, (text) => {
  write(text);
});

Then(`should be displayed in the text editor: {string}`, (text) => {
  checkAccessWebApp(text);
});
