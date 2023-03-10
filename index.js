let toggleMenu = document.querySelector(".active");
let dropDownMenu = document.querySelector(".dropMenu ul:nth-child(2)");
let toggleMainMenu = document.querySelector("nav div:nth-child(1) i");
let toggleAbout = document.querySelector(".menu .dropMenu .active");
let mainMenu = document.querySelector(".menu");
let header = document.querySelector("header");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let is_menu = false;
toggleMenu.onclick = function () {
  dropDownMenu.classList.toggle("dropMenu__List");
  toggleAbout.classList.toggle("toggleAbout");
  // header.classList.toggle("headerToggle__height");
};
// toggle either with classes or elements:

// toggle with classes
toggleMainMenu.onclick = function () {
  is_menu = !is_menu;
  if (is_menu) {
    header.classList.add("headerToggle");
    toggleMainMenu.classList.add("hide");
    toggleMainMenu.addEventListener("transitionend", () => {
        toggleMainMenu.classList.remove('hide');
        toggleMainMenu.classList.remove('fa-bars');
        toggleMainMenu.classList.add('fa-xmark');
    })
  } else {
    toggleMainMenu.classList.add("hide");
    toggleMainMenu.addEventListener("transitionend", function() {
        toggleMainMenu.classList.remove('hide');
        toggleMainMenu.classList.remove('fa-xmark');
        toggleMainMenu.classList.add('fa-bars');
    })
    dropDownMenu.classList.remove("dropMenu__List");
    toggleAbout.classList.remove("toggleAbout");
    header.classList.remove("headerToggle");
  }
};
// toggle with elements

// $(bars).on("click", function () {
//   header.classList.add("headerToggle");
//   bars.style.display = "none";
//   $(".fa-xmark").fadeIn(1000);
// });
// $(xmark).on("click", function () {
//   $(".fa-bars").fadeIn(2500);
//   xmark.style.display = "none";
//   dropDownMenu.classList.remove("dropMenu__List");
//   toggleAbout.classList.remove("toggleAbout");
//   header.classList.remove("headerToggle");
// });
