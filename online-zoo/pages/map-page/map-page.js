//script for header toggle
const toggle = document.querySelector(".toggle");
const reColorableItems = Array.from(document.querySelectorAll(".light"));
toggle.addEventListener("click", changeTheme);
localStorage.theme = (!localStorage.theme) ? "light" : localStorage.theme;

reColorableItems.forEach(item => {
    if (!item.classList.contains(localStorage.theme)) {
        localStorage.theme == "light" ? item.classList.replace("dark", "light") : item.classList.replace("light", "dark");
    }
});
function changeTheme() {
    reColorableItems.forEach(item => {
        item.classList.contains("light") ? item.classList.replace("light", "dark") : item.classList.replace("dark", "light");
    });
    localStorage.theme = document.body.className;
}

//script for burger (mob-menu)
const burger = document.querySelector(".mob-menu");
const headerNavbar = document.querySelector(".navbar-burger");
burger.addEventListener("click", changeNavVisibility);
function changeNavVisibility() {
    burger.classList.contains("burger-active") ? burger.classList.remove("burger-active") : burger.classList.add("burger-active");
    headerNavbar.classList.contains("visibility-vis") ? headerNavbar.classList.replace("visibility-vis", "visibility-hid") : headerNavbar.classList.replace("visibility-hid", "visibility-vis");
}
window.addEventListener("resize", hideBurgerMenu);
headerNavbar.addEventListener("click", hideBurgerMenu);
function hideBurgerMenu() {
    burger.classList.remove("burger-active");
    headerNavbar.classList.contains("visibility-vis") ? headerNavbar.classList.replace("visibility-vis", "visibility-hid") : headerNavbar;
}

const slides = document.querySelectorAll(".slide");
const sliderButons = document.querySelectorAll(".slider-buttons .button");
const sliderInput = document.querySelector("input");
const placeholders = document.querySelectorAll(".placeholder");
slides.forEach(slide => slide.addEventListener("click", processClickOnSlide));
sliderButons.forEach(slide => slide.addEventListener("click", processClickOnSlideButton));
sliderInput.addEventListener("change", processClickOnSlideInput);
sliderInput.addEventListener("mousemove", processClickOnSlideInput);
sliderInput.addEventListener("touchmove", processClickOnSlideInput, {passive: true});
placeholders.forEach(placeholder => placeholder.addEventListener("click", processClickOnPlaceholder));

function removeChosenClass() {
  document.querySelector(".chosen-slide").classList.remove("chosen-slide");
  document.querySelector(".chosen-wrap").classList.remove("chosen-wrap");
  if (document.querySelector(".placeholder-selected")) {
    document.querySelector(".placeholder-selected").classList.remove("placeholder-selected");
  }
}

function addChosenClass(slideNumber) {
  document.querySelector(`.slide-${slideNumber}`).classList.add("chosen-slide");
  document.querySelector(`.wrap-${slideNumber}`).classList.add("chosen-wrap");
}

function updateOutput(slideNumber) {
  document.querySelector("output").value = `0${slideNumber}/`;
}

function updateInput(slideNumber) {
  document.querySelector("input").value = slideNumber;
}

function removeSlipClass() {
  for (let i = 1; i <= 8; i++) {
    if (document.querySelector(".pictures").classList.contains(`slip-${i}`)) {
      document.querySelector(".pictures").classList.remove(`slip-${i}`);
    }
  }
}

function addSlipClass(slideNumber) {
  document.querySelector(".pictures").classList.add(`slip-${slideNumber}`);
}

function returnCurrentInput() {
  return +document.querySelector("input").value;
}

function addChosenPlaceholderClass(slideNumber) {
  if (slideNumber > 0 && slideNumber < 5) {
    document.querySelector(`.placeholder-${slideNumber}`).classList.add("placeholder-selected");
  }
}

function changeButtonLink(slideNumber) {
  const links = [ "javascript:void(0)",
                  "../zoos/gorilla/zoos-gorilla-page.html",
                  "../zoos/panda/zoos-panda-page.html",
                  "../zoos/alligator/zoos-alligator-page.html",
                  "../zoos/eagle/zoos-eagle-page.html"];
  if (slideNumber > 0 && slideNumber < 5) {
    document.querySelector(`.map-section .solid-green a`).href=`${links[slideNumber]}`;
  } else {
    document.querySelector(`.map-section .solid-green a`).href="javascript:void(0)";
  }
}

function processClickOnSlide(event) {
  const slideNumber = event.target.classList[1][6];
  removeChosenClass();
  addChosenClass(slideNumber);
  updateOutput(slideNumber);
  updateInput(slideNumber)
  removeSlipClass();
  addSlipClass(slideNumber);
  addChosenPlaceholderClass(slideNumber);
  changeButtonLink(slideNumber);
}

function processClickOnSlideButton(event) {
  let slideNumber = returnCurrentInput();
  if (event.target.classList.contains("right")) {
    slideNumber = (slideNumber < 8) ? slideNumber + 1 : 1;
  }
  if (event.target.classList.contains("left")) {
    slideNumber = (slideNumber > 1) ? slideNumber - 1 : 8;
  }
  removeChosenClass();
  addChosenClass(slideNumber);
  updateOutput(slideNumber);
  updateInput(slideNumber);
  removeSlipClass();
  addSlipClass(slideNumber);
  addChosenPlaceholderClass(slideNumber);
  changeButtonLink(slideNumber);
}

function processClickOnSlideInput(event) {
  const slideNumber = event.target.value;
  removeChosenClass();
  addChosenClass(slideNumber);
  updateOutput(slideNumber);
  removeSlipClass();
  addSlipClass(slideNumber);
  addChosenPlaceholderClass(slideNumber);
  changeButtonLink(slideNumber);
}

function processClickOnPlaceholder(event) {
  const slideNumber = event.target.classList[1][12];
  removeChosenClass();
  addChosenClass(slideNumber);
  updateOutput(slideNumber);
  updateInput(slideNumber);
  removeSlipClass();
  addSlipClass(slideNumber);
  addChosenPlaceholderClass(slideNumber);
  changeButtonLink(slideNumber);
}
