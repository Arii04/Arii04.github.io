// Initialize EmailJS and other functionalities


document.addEventListener('DOMContentLoaded', function () {
 emailjs.init("X4WnKdYAKQcWyJQiy"); // Replace with your actual EmailJS public key // Hamburger menu functionality
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
      event.preventDefault(); // Prevent default form submission

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

const projects = {
  BBD: {
    title: "Brittney's Bad Day (C++ game)",
    type: "C++ Code",
    date: "December 2023",
    description: `For a university project, I created a wave-based game where the player must survive to the end of a round to receive upgrades to get to the furthest round possible.
                  This game was made using C++ and a code-based engine developed by the university. For each enemy, I had to use pointers to assign attributes such as health and speed for each enemy type and dynamically spawn new game objects such as ink projectiles using pointers.  All game assets were created by myself.For a university project, I created a wave-based game where the player must survive to the end of a round to receive upgrades to get to the furthest round possible. This game was made using C++ and a code-based engine developed by the university. For each enemy, I had to use pointers to assign attributes such as health and speed for each enemy type and dynamically spawn new game objects such as ink projectiles using pointers. All game assets were created by myself.`,
    image: "./images/BBD.jpg",
  },
  OpenGL: {
    title: "OpenGL Scene",
    type: "Graphics Programming",
    date: "January 2025",
    description: `For this project I was tasked with creating a OpenGL program with GLSL shaders. I used various techniques to help set the scene including fog, light attenuation, shadows through shadow-maps and animated characters `,
    image: "./images/OpenGL.jpg",
  },
  Sonic: {
    title: "Sonic Clone (Unity)",
    type: "Unity Game Development",
    date: "January 2025",
    description: `Sonic Clone was a game made in Unity in which I tried to recreate the physics of a Sonic player character. The main appeal for sonic is pure speed, momentum or a combination of both. For this project I tried to emulate momentum based movement.`,
    image: "./images/Sonic Cover.png",
  },
  Forsaken: {
    title: "Forsaken Wilds: Ascend (Unreal Engine)",
    type: "Unreal Engine Game Development",
    date: "January 2024",
    description: `Forsaken Wilds: Ascend is a platforming game made in Unreal Engine 5. For this project, we were tasked with going through what an actual game development cycle would be. This means creating a game proposal, design document, Trello board to keep track of development and a working prototype. 
                  I had worked in a team as the main programmer since I had some experience using the Unreal engine.  I had worked closely with the other members of my team to provide the assets I needed such as the player character, enemies and tilemap for the platforms. For a project this size it took on an object-oriented approach in which base classes were made to be inherited from to reduce redundant/ duplicated code. For example, a base projectile class was made in which the player and enemy projectiles inherited from. 
                  Below there is the game and part of the development is shown.`,
    image: "./images/Forsaken Wilds Cover.png",
  },
  Pathfinding: {
    title: "Pathfinding Algorithm (C++)",
    type: "Artificial Intelligence",
    date: "November 2024",
    description: `For this project I was tasked with creating artificial intelligence. I did this in terms of pathfinding, specifically for the enemies. The pathfinding Algorithm used was A* and allowed the players chess piece to find a way to the selected note while moving the enemy pieces to other nodes based on what piece they are. the enemies have two goals, to escape from being captured and to capture the player so their behaviour will alternate between the two based on the proximity to the player .`,
    image: "./images/Pathfinding.png",
  },
};

function showProjectDetails(projectId) {
  const project = projects[projectId];
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-type").textContent = project.type;
  document.getElementById("project-date").textContent = project.date;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("project-image").src = project.image;

  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("project-details").style.display = "block";
}

function hideProjectDetails() {
  document.getElementById("portfolio-section").style.display = "block";
  document.getElementById("project-details").style.display = "none";
}