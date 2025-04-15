// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("X4WnKdYAKQcWyJQiy"); // Replace with your EmailJS user ID

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Set the current time in the hidden time field
      const timeField = document.getElementById('time');
      const currentTime = new Date().toLocaleString(); // Get current date and time
      timeField.value = currentTime;

      // Send form data using EmailJS
      emailjs.sendForm('service_kd4mq3i', 'template_0pjef82', this)
        .then(function () {
          alert('Message sent successfully!');
          contactForm.reset(); // Clear the form after submission
        }, function (error) {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
        });
    });
  }
});