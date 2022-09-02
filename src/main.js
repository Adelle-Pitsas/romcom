// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var makeCoverButton = document.querySelector('.make-new-button')
var homeView = document.querySelector(".home-view")
var fullFormView = document.querySelector(".form-view")
var homeButton = document.querySelector(".home-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var savedView = document.querySelector(".saved-view")
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);

makeCoverButton.addEventListener("click", getFormView);

viewSavedButton.addEventListener("click", getSavedCoverView);

homeButton.addEventListener("click", getHomeView);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  coverImgSrc.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  tagLine1.innerText = descriptors[getRandomIndex(descriptors)]
  tagLine2.innerText = descriptors[getRandomIndex(descriptors)]
}

function getFormView () {
    fullFormView.classList.remove("hidden")
    homeView.classList.add("hidden")
    homeButton.classList.remove("hidden")
    randomCoverButton.classList.add("hidden")
    saveCoverButton.classList.add("hidden")
  }

function getSavedCoverView() {
  savedView.classList.remove("hidden")
  homeView.classList.add("hidden")
  fullFormView.classList.add("hidden")
  }

function getHomeView(){
  homeView.classList.remove("hidden")
  savedView.classList.add("hidden")
  fullFormView.classList.add("hidden")
  homeButton.classList.add("hidden")
  randomCoverButton.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
}




// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
