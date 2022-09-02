// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var makeCoverButton = document.querySelector('.make-new-button')
var formView = document.querySelector('form-view')
var homeView = document.querySelector('home-view')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);

makeCoverButton.addEventListener("click", getForm)

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

function getForm () {
  homeView.style.display = "none"
}

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
