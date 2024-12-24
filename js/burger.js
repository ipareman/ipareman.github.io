
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__menu-vertical");

hamburger.addEventListener("click", function (event) {
  event.preventDefault();
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("header__menu-vertical-active");
});

const burgerClose = () => {
  if (hamburger.classList.contains("hamburger--active")) {
    hamburger.click();
  }
};

document.addEventListener("wheel", (e) => {
  burgerClose();
});

document.addEventListener("touchmove", (e) => {
  burgerClose();
});