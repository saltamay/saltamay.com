// Adds onclick event listener to the hamburger menu
const menuBar = document.querySelector('.bar-container');

function toogleMenu() {
  menuBar.classList.toggle('change');
}

menuBar.addEventListener('click', toogleMenu);

