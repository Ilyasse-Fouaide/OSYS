const menuButton = document.querySelector(".flex-horizontal .container-block .container img");
const headerLinks = document.querySelector(".flex-horizontal .container-block .container .header-links");
const closeIcon = document.querySelector(".flex-horizontal .container-block .container img");
const sections = document.querySelectorAll("section");

let isClicked = false

const menuButtonClick = () => {
  isClicked = !isClicked;
  if (isClicked) {
    headerLinks.style.left = "0";
    closeIcon.src = "./assets/-black-hamsvg_1682276852_24826.svg";
  } else {
    headerLinks.style.left = "-100%";
    closeIcon.src = "./assets/-white-hamsvg_1682276852_24826.svg";
  }
}

const backgroundImages = [
  "../assets/img/home-page-bg.jpg",
  "../assets/img/testimage.jpg",
  "../assets/img/photo_1869265_1680541394_51783.jpg",
  "../assets/img/home-780px.jpg"
];

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  const flexHorizontal = document.querySelector('.flex-horizontal');
  flexHorizontal.style.backgroundImage = `linear-gradient(270deg, rgba(0, 0, 0, 0.384) 0%, rgba(0, 0, 0, 0.548) 100%), url("${randomImage}")`;
}

// setRandomBackground();

// window.onscroll = () => {
//   sections.forEach((section) => {
//     let top = window.scrollY;
//     let offsetTop = section.offsetTop - 500;
//     let offsetHeight = section.offsetHeight;

//     if (top >= offsetTop && top < offsetTop + offsetHeight) {
//       section.classList.add('animate');
//     }
//   });
// }