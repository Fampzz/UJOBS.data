const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropdown-button');

button.addEventListener('click', function() {
  const menu = dropdown.querySelector('.dropdown-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
