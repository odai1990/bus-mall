'use strict'

// all needed varibales
const clickingCounter = 23;
let leftmgIndex = 0;
let rightImgIndex = 0;
let centerImgIndex = 0;
let shopitem = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg',
  'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg',
  'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let ViewResults = document.getElementById('View_Results');
let ulList = document.getElementById('data')
let imageSection = document.getElementById('Images');
let leftImage = document.getElementById('leftImage');
let centertImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');
// end of varivale declaration.




// create constructor
let Img = function (name) {
  this.name = name;
  this.image = `./img/${name}`;
  this.clicks = 0;
  this.show = 0;
  Img.all.push(this);
}
Img.all = [];
Img.counter = 0;
// end of counstrctor




// add images for array
function addImgesToArray() {
  for (let i = 0; i < shopitem.length; i++) {
    new Img(shopitem[i]);
  }

};//end of addImgesToArray




// to generate randoum number
function genrateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; // end of genrateRandomNumber




// adding event lestiner to images
function addingEventListneToImages() {
  ViewResults.addEventListener('click', appndingDataToUl);
  imageSection.addEventListener('click', clickingOnImageEvent);
};// end of addingEventListneToImages





//addding data to url
function appndingDataToUl(event) {
  ulList.style.display = 'block';
  for (let y = 0; y < Img.all.length; y++) {
    const liElement = document.createElement('li');
    ulList.appendChild(liElement);
    liElement.textContent = `${Img.all[y].name} had ${Img.all[y].clicks} votes, and was seen ${Img.all[y].show} times.`;
  }
  ViewResults.removeEventListener('click', appndingDataToUl);
  imageSection.removeEventListener('click', clickingOnImageEvent);
}; // end of appndingDataToUl






// add images to html
function renderingImages() {
  ViewResults.style.display = 'none';
  ulList.style.display = 'none';
  let rightIndex;
  let centertIndex;


  let leftIndex = genrateRandomNumber(0, Img.all.length - 1);
  leftImage.src = Img.all[leftIndex].image;
  leftImage.alt = Img.all[leftIndex].name;
  leftmgIndex = leftIndex;


  do {
    rightIndex = genrateRandomNumber(0, Img.all.length - 1);
  } while (leftIndex == rightIndex);


  rightImage.src = Img.all[rightIndex].image;
  rightImage.alt = Img.all[rightIndex].name;
  rightImgIndex = rightIndex;

  do {
    centertIndex = genrateRandomNumber(0, Img.all.length - 1);
  } while (leftIndex == centertIndex || rightIndex == centertIndex);

  centertImage.src = Img.all[centertIndex].image;
  centertImage.alt = Img.all[centertIndex].name;
  centerImgIndex = rightIndex;

  Img.all[leftIndex].show++;
  Img.all[rightIndex].show++;
  Img.all[centertIndex].show++;

};//end of renderingImages







//function for knows how is picture clicking on 
function clickingOnImageEvent(event) {

  if (Img.counter <= clickingCounter) {

    const clickedElement = event.target;
    if (clickedElement.id == 'leftImage' || clickedElement.id == 'rightImage' || clickedElement.id == 'centerImage') {
      if (clickedElement.id == 'leftImage') {
        Img.all[leftmgIndex].clicks++;

      }

      if (clickedElement.id == 'rightImage') {
        Img.all[rightImgIndex].clicks++;


      }


      if (clickedElement.id == 'centerImage') {
        Img.all[centerImgIndex].clicks++;


      }

      Img.counter++;
      renderingImages();

    }
  } else {
    ViewResults.style.display = 'block';
  }

};//end of clickingOnImageEvent









addImgesToArray();
addingEventListneToImages();
renderingImages();