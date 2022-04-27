import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import assignId from "./assignId.js";
import renameKeys from "./renameKeys.js";
import petsBtnModal from "./petsBtnModal.js";
import cardsOnDom from "./cardsOnDom.js";
import eventListeners from "./eventListeners.js";

//startup
const startUp = () => {
  renameKeys(pets);
  assignId(pets);
  petsBtnModal();
  cardsOnDom(pets);
  eventListeners();
}

startUp();
