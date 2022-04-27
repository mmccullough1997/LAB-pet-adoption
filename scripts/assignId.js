import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import renameKeys from "./renameKeys.js";
import petsBtnModal from "./petsBtnModal.js";
import cardsOnDom from "./cardsOnDom.js";
import eventListeners from "./eventListeners.js";

//assign id to each object
const assignId = (array) => {
  array.forEach((num, i) => {
    num.id = (i-1) +1
  })
}

export default assignId;
