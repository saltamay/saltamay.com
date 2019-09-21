// Adds onclick event listener to the hamburger menu
const menuBar = document.querySelector('.bar-container');

function toogleMenu() {
  menuBar.classList.toggle('change');
}

menuBar.addEventListener('click', toogleMenu);

// Display menu vertically when hamburger menu clicked
const navi = document.querySelector('.site-navigation');

function displayMenu() {
  navi.classList.toggle('open');
}

menuBar.addEventListener('click', displayMenu);