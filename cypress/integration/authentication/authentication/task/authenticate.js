import { loginPage } from "../ui/loginPage.js";

export default function authenticate(username, password) {
  cy.get(loginPage.email).type(username);
  cy.get(loginPage.password).type(password);
  cy.xpath(loginPage.button).click();
}
