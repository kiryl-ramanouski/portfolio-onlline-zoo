//script for header toggle
const reColorableItems = Array.from(document.querySelectorAll(".light"));
document.querySelector(".toggle").addEventListener("click", changeTheme);
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
window.addEventListener("resize", hideBurgerMenu);
headerNavbar.addEventListener("click", hideBurgerMenu);

function changeNavVisibility() {
  burger.classList.contains("burger-active") ? burger.classList.remove("burger-active") : burger.classList.add("burger-active");
  headerNavbar.classList.contains("visibility-vis") ? headerNavbar.classList.replace("visibility-vis", "visibility-hid") : headerNavbar.classList.replace("visibility-hid", "visibility-vis");
}

function hideBurgerMenu() {
  burger.classList.remove("burger-active");
  headerNavbar.classList.contains("visibility-vis") ? headerNavbar.classList.replace("visibility-vis", "visibility-hid") : headerNavbar;
}

//script for video slider
//process clicks on slider video-frames
const iframes = document.querySelectorAll(".video-section .iframe");
iframes.forEach(slide => slide.addEventListener("click", processClickOnSlide));

function processClickOnSlide(event) {
  const slideNumber = event.target.classList[1][6];
  swapSlidesClases(slideNumber);
  updateIframeSrcs();
}

function swapSlidesClases(slideNumber) {
  const mainIframe = document.querySelector(".video-section .main-video.iframe");
  const chosenIframe = document.querySelector(`.iframe-${slideNumber}`);
  const mainIframeClass = document.querySelector(".video-section .iframe").classList[1];
  const chosenIframeClass = document.querySelector(`.iframe-${slideNumber}`).classList[1];
  mainIframe.classList.replace(mainIframeClass, chosenIframeClass);
  chosenIframe.classList.replace(chosenIframeClass, mainIframeClass);
}

function updateIframeSrcs() {
  const srcs = ["https://www.youtube.com/embed/EnxRJii_dp8",
                "https://www.youtube.com/embed/X5Im4mMFK4A",
                "https://www.youtube.com/embed/gPemqtULd2c",
                "https://www.youtube.com/embed/k7tOjhm_NTw",
                "https://www.youtube.com/embed/A3Nneq4wCVw",
                "https://www.youtube.com/embed/aBUNT0b0g80",
                "https://www.youtube.com/embed/qJQCWYrfsso",
                "https://www.youtube.com/embed/nJCk-4Ojqaw"];
  for (let i = 0; i < srcs.length; i++) {
    document.querySelector(`.video-section .slide-${[i]} iframe`).src = srcs[i];
  }
}

//process clicks on slider buttons
const sliderButtons = document.querySelectorAll(".video-section .buttons-pack .solid-green");
sliderButtons.forEach(button => button.addEventListener("click", processClickOnSliderButtons));

function removeChosenClass() {
  document.querySelector(".choosen-button").classList.remove("choosen-button");
}

function addChosenClass(buttonNumber) {
  document.querySelector(`.button-${buttonNumber}`).classList.add("choosen-button");
}

function removeSlipClass() {
  for (let i = 1; i <= 3; i++) {
    if (document.querySelector(".pictures").classList.contains(`slip-${i}`)) {
      document.querySelector(".pictures").classList.remove(`slip-${i}`);
    }
  }
}

function addSlipClass(buttonNumber) {
  document.querySelector(".pictures").classList.add(`slip-${buttonNumber}`);
}

function processClickOnSliderButtons(event) {
  const buttonNumber = event.target.classList[1][7];
  removeSlipClass();
  addSlipClass(buttonNumber);
  removeChosenClass();
  addChosenClass(buttonNumber);
}
