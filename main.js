const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dog",
      imageUrl: "https://media.nature.com/lw800/magazine-assets/d41586-022-00209-0/d41586-022-00209-0_20071828.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dog",
      imageUrl: "https://www.akcpetinsurance.com/res/akc/blog/2022/natural-remedies-hip-dysplasia-dogs/hip-dysplasia-header.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dog",
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop/f_auto/mls-atl-prd/w8ahb9x3yj76tcrignzy.jpg"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=700&quality=85&auto=format&fit=max&s=56a2e35a42e37dcb12c3a7472c134443"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dog",
      imageUrl: "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: `Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).`,
      type: "dog",
      imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/rockcms/2022-03/black-lab-favorite-dog-main-220315-e8e0ee.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dog",
      imageUrl: "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.science.org/do/10.1126/science.aba2340/full/dogs_1280p_0.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.thesprucepets.com/thmb/meRd41is751DsQQjofaiKV_ZUBg=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/RR-COMP-p30-dino.jpg?w=660"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1845"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=700&quality=85&auto=format&fit=max&s=fa2a6e634973defc13bfcbae1b8e954d"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: `Doesn’t get weirded out by the word moist.`,
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2020/12/dino-80bbd77.jpg?quality=90&webp=true&resize=940,400"
    }
  ];

//rename keys in object to fit format
for (const iterator of pets) {
  iterator.image = iterator.imageUrl
  delete iterator.imageUrl
  iterator.typeOfPet = iterator.type
  delete iterator.type
}

//assign id to each object
pets.forEach((num, i) => {
  num.id = i +1
})

//utility function
const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

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
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
      </div>
      <div id='delete'>
      <button class="btn btn-danger" id="delete--${item.id}">X</button>
    </div>
    </div>`;
  }
  renderToDom('#myCards',domTargetCards);
};

//event listeners
const eventListeners = () => {
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
  //buttons on cards
  document.querySelector('#myCards').addEventListener('click', (e) => {
    //check to make sure e.target.id isn't empty
    if(e.target.id){
      const idStuff = e.target.id.split("--");
      console.log(idStuff);
      const index = idStuff[1];
      console.log(index);


      if(e.target.id.includes('delete')){
        //check to make sure you picked delete
        console.log('right pick')
        pets.splice(index-1,1);
        cardsOnDom(pets);
      }

    }
  })
}



//startup
const startUp = () => {
  cardsOnDom(pets);
  eventListeners();
}

startUp();
