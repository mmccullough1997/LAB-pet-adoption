import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import assignId from "./assignId.js";
import renameKeys from "./renameKeys.js";
import petsBtnModal from "./petsBtnModal.js";
import cardsOnDom from "./cardsOnDom.js";

//event listeners
const eventListeners = () => {

  const petModal = new bootstrap.Modal(document.querySelector('#add-pet'));
  //filter
  document.querySelector('#myButtons').addEventListener('click', (e) => {
    //check that event listener is working
    console.log('You clicked a filter button', e.target.id);
    if (e.target.id === 'all') {
      cardsOnDom(pets);
    } else if (e.target.id) {
      const types = pets.filter(taco => taco.typeOfPet === e.target.id);
        cardsOnDom(types);
    }
  })

   // FORM SUBMIT
   const form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
     e.preventDefault(); // this goes in EVERY form submit to prevent page reload
     // grab the values from the form inputs and create an object
     const newPetObj = {
       image: document.querySelector('#image').value,
       name: document.querySelector('#name').value,
       color: document.querySelector('#color').value,
       specialSkill: document.querySelector('#specialSkill').value,
       typeOfPet: document.querySelector('#typeOfPet').value,
     };
 
     // push that object to the data array
     pets.push(newPetObj);
     pets.forEach((num, i) => {
      num.id = (i-1) +1
    })

     
     // rerender cards using the cardsOnDom function and pass it the updated data array
     cardsOnDom(pets);
      petModal.hide();
     form.reset();
   });

  //  console.log(pets);

  //delete buttons on cards
  document.querySelector('#myCards').addEventListener('click', (e) => {
    //check to make sure e.target.id isn't empty
    if(e.target.id){
      // const idStuff = e.target.id.split("--");
      // console.log(idStuff);
      // const index = idStuff[1];
      // console.log(index);

      const [method, id] = e.target.id.split('--');
      // console.log(idStuff, 'hi);
      // console.log(pets[idStuff]);
      // console.log(id);
      const index = pets.findIndex((taco) => taco.id === parseInt(id));
      // console.log('index', index);
      
      // console.log(index, 'me again');
      
      // console.log(idStuff,'wassup bitch');
      // console.log(typeof idStuff)
      //is this a string or a number?


      if(e.target.id.includes('delete')){
        // console.log(pets[idStuff]);
        pets.splice(index,1);
        cardsOnDom(pets);
      }
    }
  })
}

export default eventListeners;
