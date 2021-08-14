import { textEditor } from "../ui/textEditor";

export default function checkAccessWebApp(text) {
  cy.getIframeBody().xpath(textEditor.paragraph).should("include.text", text);
}
