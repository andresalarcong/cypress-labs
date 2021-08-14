import { homePage } from "../ui/homePage";

export default function checkAccessWebApp(message) {
  cy.xpath(homePage.messages_text.replaceAll("TEXT", message)).should(
    "include.text",
    message
  );
}
