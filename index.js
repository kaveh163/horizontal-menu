let toggleMenu = document.querySelector(".active");
let dropDownMenu = document.querySelector(".dropMenu ul:nth-child(2)");
let toggleMainMenu = document.querySelector("nav div:nth-child(1) i");
let mainMenu = document.querySelector(".menu");
let header  = document.querySelector("header");
let is_menu = false;
toggleMenu.onclick = function() {
    dropDownMenu.classList.toggle('dropMenu__List');
    // header.classList.toggle("headerToggle__height");
}
toggleMainMenu.onclick = function() {
    is_menu = !is_menu;
    // mainMenu.classList.toggle('menu__Toggle');
    header.classList.toggle("headerToggle");
    // header.classList.toggle("headerToggle__height");
    if(is_menu) {
        header.classList.add("headerToggle");
    } else {
       
        dropDownMenu.classList.remove("dropMenu__List");
        header.classList.remove("headerToggle");
    }
}