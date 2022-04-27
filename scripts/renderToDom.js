
import pets from "./data.js";
import assignId from "./assignId.js";
import renameKeys from "./renameKeys.js";
import petsBtnModal from "./petsBtnModal.js";
import cardsOnDom from "./cardsOnDom.js";
import eventListeners from "./eventListeners.js";

//utility function
const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

//default export means exporting way you imported
export default renderToDom;
// export { renderToDom, petModal }; separating functions by comments - DO FOR MULTIPLE EXPORTS BUT ALSO HAVE TO IMPORT THE SAME WAY
