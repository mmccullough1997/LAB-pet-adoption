import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import assignId from "./assignId.js";
import renameKeys from "./renameKeys.js";
import petsBtnModal from "./petsBtnModal.js";
import eventListeners from "./eventListeners.js";

// import renderToDom from "./renderToDom";

// const renderToDom = (divId,textToRender) => {
//   const selectedElement = document.querySelector(divId);
//   selectedElement.innerHTML = textToRender;
// }

//function to add cards
const cardsOnDom = (array) => {
  let domTargetCards = "";
  for(const item of array) {
    domTargetCards += 
    `<div class="card" style="width: 18rem;">
      <header class="name" "justify-content:center" >${item.name}</header>
      <img src="${item.image}" class="card-img-top" alt="...">
      <div class="card-body" class="mainText">
        <h5 class="card-title">${item.color}</h5>
        <p class="card-text">${item.specialSkill}</p>
        <div class="${item.typeOfPet} mt-auto" id="card-type">${item.typeOfPet.slice(0,1).toUpperCase() + item.typeOfPet.slice(1)}</div>
      </div>
      <div id='delete'>
      <button class="btn btn-danger" id="delete--${item.id}">X</button>
    </div>
    </div>`;
  }
  renderToDom('#myCards',domTargetCards);
};

export default cardsOnDom;
