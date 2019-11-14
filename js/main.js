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

// Add mouseover event listeners to skill-card items
document.querySelectorAll('.skills-card').forEach(card => {
  card.addEventListener('mouseenter', e => {
    e.target.style.backgroundColor = '#f94f5b';
    document.querySelector('#' + e.target.id + ' .skills-card-title').style.color = '#fff';
    document.querySelector('#' + e.target.id + ' .skills-card-description').style.color = '#fff';
    document.querySelector('#' + e.target.id + ' .skills-card-link').style.color = '#fff';

    if (e.target.id !== 'html') {
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg path').setAttribute('fill', '#fff');
    }

    if (e.target.id === 'react') {
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg path').setAttribute('fill', '#fff');
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg g').setAttribute('fill', '#fff');
    }
  });
  card.addEventListener('mouseleave', e => {
    e.target.style.backgroundColor = '#fff';
    document.querySelector('#' + e.target.id + ' .skills-card-title').style.color = '#000';
    document.querySelector('#' + e.target.id + ' .skills-card-description').style.color = '#000';
    document.querySelector('#' + e.target.id + ' .skills-card-link').style.color = '#000';

    if (e.target.id !== 'html') {
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg path').setAttribute('fill', '#000');
    }

    if (e.target.id === 'react') {
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg path').setAttribute('fill', '#000');
      document.querySelector('#' + e.target.id + ' .skills-card-icon svg g').setAttribute('fill', '#000');
    }
  })
})