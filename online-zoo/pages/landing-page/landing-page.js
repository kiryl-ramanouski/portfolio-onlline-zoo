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

//script for sliders
function removeMainClass(sectionName) {
  document.querySelector(`.${sectionName} .slide-main`).classList.remove("slide-main");
}

function addMainClass(slideNumber, sectionName) {
  document.querySelector(`.${sectionName} .slide-${slideNumber}`).classList.add("slide-main");
}

function updateOutput(slideNumber, sectionName) {
  document.querySelector(`.${sectionName} output`).value = `0${slideNumber}/`;
}

function updateInput(slideNumber, sectionName) {
  document.querySelector(`.${sectionName} input`).value = slideNumber;
}

function removeSlipClass(slipsSum, sectionName) {
  for (let i = 1; i <= slipsSum; i++) {
    if (document.querySelector(`.${sectionName} .pictures`).classList.contains(`slip-${i}`)) {
      document.querySelector(`.${sectionName} .pictures`).classList.remove(`slip-${i}`);
    }
  }
}

function addSlipClass(slideNumber, sectionName) {
  document.querySelector(`.${sectionName} .pictures`).classList.add(`slip-${slideNumber}`);
}

function returnCurrentInput(sectionName) {
  return +document.querySelector(`.${sectionName} input`).value;
}

function changeWelcomeButtonLink(slideNumber) {
  const links = [ "javascript:void(0)",
                  "../zoos/eagle/zoos-eagle-page.html",
                  "../zoos/panda/zoos-panda-page.html",
                  "../zoos/gorilla/zoos-gorilla-page.html",
                  "../zoos/alligator/zoos-alligator-page.html"];
  if (slideNumber > 0 && slideNumber < 5) {
    document.querySelector(".welcome-section .solid-green a").href=`${links[slideNumber]}`;
  } else {
    document.querySelector(".welcome-section .solid-green a").href="javascript:void(0)";
  }
}

function changeHowItWorksButtonLink(slideNumber) {
  const links = [ "javascript:void(0)",
                  "javascript:void(0)",
                  "../zoos/panda/zoos-panda-page.html",
                  "../zoos/gorilla/zoos-gorilla-page.html",
                  "../zoos/eagle/zoos-eagle-page.html"];
  if (slideNumber > 0 && slideNumber < 5) {
    document.querySelector(".how-it-works .solid-green a").href=`${links[slideNumber]}`;
  }
}

function processClickOnSlideButton(event, sectionName, slipsSum) {
  let slideNumber = returnCurrentInput(sectionName);

  if (event.target.classList.contains("right")) {
    slideNumber = (slideNumber < 8) ? slideNumber + 1 : 1;
  }
  if (event.target.classList.contains("left")) {
    slideNumber = (slideNumber > 1) ? slideNumber - 1 : 8;
  }
  updateOutput(slideNumber, sectionName);
  updateInput(slideNumber, sectionName);
  removeSlipClass(slipsSum, sectionName);
  addSlipClass(slideNumber, sectionName);
}

function processClickOnSlide(event, sectionName, slipsSum) {
  if (event.target.classList.contains("slide")) {
    const slideNumber = event.target.classList[1][6];
    removeMainClass(sectionName);
    addMainClass(slideNumber, sectionName);
    updateOutput(slideNumber, sectionName);
    updateInput(slideNumber, sectionName);
    removeSlipClass(slipsSum, sectionName);
    addSlipClass(slideNumber, sectionName);
    if (sectionName == "welcome-section") {
      changeWelcomeButtonLink(slideNumber);
    }
  }
}

function processClickOnSlideInput(event, sectionName, slipsSum) {
  const slideNumber = event.target.value;
  if (sectionName == "welcome-section"){
    removeMainClass(sectionName);
    addMainClass(slideNumber, sectionName);
    changeWelcomeButtonLink(slideNumber);
  }
  updateOutput(slideNumber, sectionName);
  removeSlipClass(slipsSum, sectionName);
  addSlipClass(slideNumber, sectionName);
  if (sectionName == "how-it-works") {
    changeHowItWorksButtonLink(slideNumber);
  }
}

//event listener for pets-in-zoo-section slider buttons
const petsSliderButons = document.querySelectorAll(".pets-in-zoo .slider-buttons .button");
petsSliderButons.forEach(button => button.addEventListener("click", () => processClickOnSlideButton(event, "pets-in-zoo", "8")));

//event listener for click on welcom-section slides 
const welcomeSlides = document.querySelectorAll(".welcome-section .slide");
welcomeSlides.forEach(slide => slide.addEventListener("click", () => processClickOnSlide(event, "welcome-section", "8")));

//event listener for welcom-section input change
const welcomeSliderInput = document.querySelector(".welcome-section input");
welcomeSliderInput.addEventListener("change", () => processClickOnSlideInput(event, "welcome-section", "8"));
welcomeSliderInput.addEventListener("mousemove", () => processClickOnSlideInput(event, "welcome-section", "8"));
welcomeSliderInput.addEventListener("touchmove", () => processClickOnSlideInput(event, "welcome-section", "8"), {passive: true});

//event listener for how-it-works-section input change
const howItWorksSliderInput = document.querySelector(".how-it-works input");
howItWorksSliderInput.addEventListener("change", () => processClickOnSlideInput(event, "how-it-works", "4"));
howItWorksSliderInput.addEventListener("mousemove", () => processClickOnSlideInput(event, "how-it-works", "4"));
howItWorksSliderInput.addEventListener("touchmove", () => processClickOnSlideInput(event, "how-it-works", "4"), {passive: true});

//event listener for pets-in-zoo-section input change
const petsSlidesInput = document.querySelector(".pets-in-zoo input");
petsSlidesInput.addEventListener("change", () => processClickOnSlideInput(event, "pets-in-zoo", "8"));
petsSlidesInput.addEventListener("mousemove", () => processClickOnSlideInput(event, "pets-in-zoo", "8"));
petsSlidesInput.addEventListener("touchmove", () => processClickOnSlideInput(event, "pets-in-zoo", "8"), {passive: true});
