document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  