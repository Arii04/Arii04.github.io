// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("X4WnKdYAKQcWyJQiy"); // Replace with your EmailJS user ID

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      // Prevent default form submission
      event.preventDefault();

      // Set the current time
      const timeInput = document.getElementById('time');
      const currentTime = new Date().toLocaleString(); // Format the current time as a readable string
      timeInput.value = currentTime;

      // Send form data using EmailJS
      emailjs.sendForm('service_kd4mq3i', 'template_0pjef82', this)
        .then(function () {
          alert('Message sent successfully!');
          contactForm.reset(); // Reset the form after successful submission
        }, function (error) {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        });
    });
  }
});