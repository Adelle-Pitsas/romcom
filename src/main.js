// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var fullFormView = document.querySelector(".form-view");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedView = document.querySelector(".saved-view");
var inputCover = document.querySelector("#cover");
var inputTitle = document.querySelector("#title");
var inputDescriptor1 = document.querySelector("#descriptor1");
var inputDescriptor2 = document.querySelector("#descriptor2");
var createNewBookButton = document.querySelector(".create-new-book-button")
var savedViewSection = document.querySelector(".saved-covers-section")



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);

makeCoverButton.addEventListener("click", getFormView);

viewSavedButton.addEventListener("click", getSavedCoverView);

homeButton.addEventListener("click", getHomeView);

createNewBookButton.addEventListener("click", makeNewBook);

saveCoverButton.addEventListener("click", saveCurrentCover);

savedViewSection.addEventListener("dblclick", removeCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover (
    coverImage.src,
    coverTitle.innerText,
    tagline1.innerText,
    tagline2.innerText
  );

  return currentCover;
};

function getFormView() {
  fullFormView.classList.remove("hidden");
  homeView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedView.classList.add("hidden");
};

function getSavedCoverView() {
  event.preventDefault();
  savedView.classList.remove("hidden");
  homeView.classList.add("hidden");
  fullFormView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");

  displayCovers();
}

function displayCovers(){
  var displaySavedCovers = "";
  for (var i = 0; i < savedCovers.length; i++) {
    displaySavedCovers +=
    `<section class="mini-cover" id=${savedCovers[i].id}>
    <img id="mini-cover" class="cover-image" src=${savedCovers[i].cover}>
    <h2 id="mini-title" class="cover-title">${savedCovers[i].title}</h2>
    <h3 id="mini-tagline" class="tagline"> A tale of <span id="mini-tagline1" class="tagline-1">${savedCovers[i].tagline1}</span> and <span id="mini-tagline2" class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img id="mini-price-tag" class="price-tag">
    <img id="mini-price-tag" class="overlay">
    </section>`
  };
  savedViewSection.innerHTML = displaySavedCovers;
};

function getHomeView() {
  homeView.classList.remove("hidden");
  savedView.classList.add("hidden");
  fullFormView.classList.add("hidden");
  homeButton.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
};

function makeNewBook() {
  event.preventDefault();
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);

  currentCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value);

  coverImage.src = inputCover.value;
  coverTitle.innerText = inputTitle.value;
  tagline1.innerText = inputDescriptor1.value;
  tagline2.innerText = inputDescriptor2.value;

  getHomeView();
};

function saveCurrentCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    };
  };
};

function removeCover(event) {
  var coverToRemove = Number(event.target.parentNode.id);
  for (var i = 0; i < savedCovers.length; i++) {
    if (coverToRemove === savedCovers[i].id) {
      savedCovers.splice(i,1)
    };
  };
  getSavedCoverView();
};





// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
