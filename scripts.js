// Initialize EmailJS and other functionalities
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("X4WnKdYAKQcWyJQiy"); // Replace with your EmailJS user ID

  // Hamburger menu functionality
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinksContainer = document.getElementById('nav-links-container');
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  if (hamburgerMenu && navLinksContainer) {
    hamburgerMenu.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    // Hide navbar on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden'); // Hide navbar
      } else {
        navbar.classList.remove('hidden'); // Show navbar
      }
      lastScrollY = window.scrollY;
    });
  }

  // EmailJS functionality (only on pages with the contact form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const timeInput = document.getElementById('time');
      const currentTime = new Date().toLocaleString();
      timeInput.value = currentTime;

      emailjs.sendForm('service_kd4mq3i', 'template_0pjef82', this)
        .then(() => {
          alert('Message sent successfully!');
          contactForm.reset();
        })
        .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        });
    });
  }
});