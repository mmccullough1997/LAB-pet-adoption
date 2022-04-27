import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import assignId from "./assignId.js";
import petsBtnModal from "./petsBtnModal.js";
import cardsOnDom from "./cardsOnDom.js";
import eventListeners from "./eventListeners.js";

//rename keys in object to fit format
const renameKeys = (array) => {
  for (const iterator of array) {
    iterator.image = iterator.imageUrl
    delete iterator.imageUrl
    iterator.typeOfPet = iterator.type
    delete iterator.type
  }
}

export default renameKeys;
