// querySelector - szukanie elementu bazując na selektorze
const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const menu = document.querySelector(".menu");

// zwykła funkcja
function toggleMenu() {
  // classList.add - dodawanie klasy do elementu
  // classList.remove - usuwanie klasy z elementu
  // classList.toggle - dodawanie lub usuwanie klasy w zależności o tego czy ta klasa już jest czy jej nie ma
  menu.classList.toggle("menu-open");
  menuCloseButton.classList.toggle("button-open");
}

// nasłuchiwanie na zdarzenie na elemencie menuButton
menuButton.addEventListener("click", toggleMenu);
menuCloseButton.addEventListener("click", toggleMenu);
