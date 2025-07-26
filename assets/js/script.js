// script.js

// Highlight the active navigation link based on the current page
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('header nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
});