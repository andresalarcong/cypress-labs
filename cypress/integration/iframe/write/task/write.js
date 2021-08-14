import { textEditor } from "../ui/textEditor.js";

export default function write(text) {
  cy.getIframeBody().clear().type(text);
}
