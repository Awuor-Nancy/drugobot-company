const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarLinks = document.getElementById('navbar-links');

hamburgerBtn.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
});
