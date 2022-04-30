import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import assignId from "./assignId.js";
import renameKeys from "./renameKeys.js";
import cardsOnDom from "./cardsOnDom.js";
import eventListeners from "./eventListeners.js";

//add pets modal form
const petsBtnModal = () => {
  const domString = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-pet">
    Add Pet
    </button>

    <!-- Modal -->
    <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
          <form>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Image" id="image" aria-label="image" required>
            <label for="image">Image Link</label>
          </div>

          
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
            <label for="name">Name</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
            <label for="color">Color</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="specialSkill" id="specialSkill" aria-label="specialSkill" required>
            <label for="specialSkill">Special Skill</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="typeOfPet" aria-label="typeOfPet" required>
              <option value="">Select a category</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="dino">Dino</option>
            </select>
            <label for="typeOfPet">Type</label>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  `;
  renderToDom('#createBtnContainer', domString);

}

export default petsBtnModal;
