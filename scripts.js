// Initialize EmailJS and other functionalities

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("X4WnKdYAKQcWyJQiy"); // Replace with your actual EmailJS public key

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

const projects = [
  {
    id: "BBD",
    title: "Brittney's Bad Day (C++ game)",
    type: "C++ Code",
    date: "December 2023",
    description: `For a university project, I created a wave-based game where the player must survive to the end of a round to receive upgrades to get to the furthest round possible.This game was made using C++ and a code-based engine developed by the university. For each enemy, I had to use pointers to assign attributes such as health and speed for each enemy type and dynamically spawn new game objects such as ink projectiles using pointers.  All game assets were created by myself.For a university project, I created a wave-based game where the player must survive to the end of a round to receive upgrades to get to the furthest round possible.`,
    github: "https://github.com/Arii04/Brittneys-Bad-Day",
    media: [
      { type: "image", src: "./images/BBD.jpg" },
      { type: "video", src: "./videos/Brittney's Bad Day.mp4" },
    ],
  },
  {
    id: "OpenGL",
    title: "OpenGL Scene",
    type: "Graphics Programming",
    date: "January 2025",
    description: `For this project, I was tasked with creating an OpenGL program with GLSL shaders. I used various techniques to help set the scene, including fog, light attenuation, shadows through shadow maps, and animated characters.`,
    github: "https://github.com/Arii04/OpenGL-scence",
    media: [
      { type: "image", src: "./images/OpenGL.jpg" },
      { type: "video", src: "./videos/OpenGL.mp4" },
    ],
},
      {
    id: "Sonic",
    title: "Sonic Clone (Unity)",
    type: "Unity Game Development",
    date: "January 2025",
    description: `Sonic Clone was a game made in Unity in which I tried to recreate the physics of a Sonic player character. The main appeal for Sonic is pure speed, momentum, or a combination of both. For this project, I tried to emulate momentum-based movement.`,
    github: "https://github.com/Arii04/sonic-clone",
    media: [
      { type: "image", src: "./images/Sonic Cover.png" },
      { type: "video", src: "./videos/Sonic Clone (Unity).mp4" },
      { type: "image", src: "./images/Sonic End.png" },
    ],
  },
  {
    id: "Forsaken",
    title: "Forsaken Wilds: Ascend (Unreal Engine)",
    type: "Unreal Engine Game Development",
    date: "January 2024",
    description: `Forsaken Wilds: Ascend is a platforming game made in Unreal Engine 5. For this project, we were tasked with going through what an actual game development cycle would be. This means creating a game proposal, design document, Trello board to keep track of development, and a working prototype.`,
    github: "https://github.com/Arii04/ForsakenWildsRemade",
    media: [
      { type: "image", src: "./images/Forsaken Wilds Cover.png" },
      { type: "video", src: "./videos/Forsaken Wilds Final.mp4" },
      { type: "video", src: "./videos/Forsaken Wilds Prototype.mp4" },
    ],
  },
  {
    id: "Pathfinding",
    title: "Pathfinding Algorithm (C++)",
    type: "Artificial Intelligence",
    date: "November 2024",
    description: `For this project, I was tasked with creating artificial intelligence. I did this in terms of pathfinding, specifically for the enemies. The pathfinding algorithm used was A* and allowed the player's chess piece to find a way to the selected node while moving the enemy pieces to other nodes based on what piece they are.`,
    github: "https://github.com/Arii04/Pathfinding-Algorithm",
    media: [
      { type: "image", src: "./images/Pathfinding.png" },
      { type: "video", src: "./videos/Pathfinding Algorithm.mp4" },
   
    ],
  },
  {
    id: "Nova",
    title: "Nova Passage (Unreal Engine)",
    type: "Unreal Engine Game Development",
    date: "April 2025",
    description: `This was a group project in which we were tasked to create an Unreal Engine game. We had settled on a parkour with a large emphasis on movement. I had implemented the movement mechanics such as wall running and wall jumping, as well as the dah ability. I also created a Niagara VFX system for the meteors. \n I approached this project through making it as modular as possible so that values such as speed and jump height can be tweaked later if needed.`,
    github: "xyz.com",
    media: [
      { type: "image", src: "./images/Nova.png" },
      { type: "video", src: "./videos/Nova.mp4" },
      { type: "image", src: "./images/Nova_IG.png" },
   
    ],
  },
];

let currentProjectIndex = 0;

function showProjectDetails(projectId) {
  currentProjectIndex = projects.findIndex((project) => project.id === projectId);
  updateProjectDetails();
}

function updateProjectDetails() {
  const project = projects[currentProjectIndex];
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-type").textContent = project.type;
  document.getElementById("project-date").textContent = project.date;
  document.getElementById("project-description").textContent = project.description;

  const galleryItems = document.getElementById("gallery-items");
  galleryItems.innerHTML = ""; // Clear previous gallery items

  project.media.forEach((item) => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = project.title;

      // Add click event listener to enlarge the image (only in project details)
      img.addEventListener("click", () => openImageModal(img.src));

      galleryItems.appendChild(img);
    } else if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.innerHTML = "Your browser does not support the video tag.";
      galleryItems.appendChild(video);
    }
  });

  // Add GitHub link
  const githubLinkContainer = document.getElementById("github-link");
  if (project.github) {
    githubLinkContainer.innerHTML = `<a href="${project.github}" target="_blank" class="github-link">View on GitHub</a>`;
  } else {
    githubLinkContainer.innerHTML = ""; // Clear if no GitHub link
  }

  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("project-details").style.display = "block";

  // Enable/disable navigation buttons
  document.getElementById("prev-project").disabled = currentProjectIndex === 0;
  document.getElementById("next-project").disabled = currentProjectIndex === projects.length - 1;
}

function navigateProject(direction) {
  currentProjectIndex += direction;
  updateProjectDetails();
}

function openImageModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");

  modalImage.src = imageSrc; // Set the source of the modal image
  modal.style.display = "block"; // Show the modal
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none"; // Hide the modal
}

function hideProjectDetails() {
  document.getElementById("project-details").style.display = "none"; // Hide project details
  document.getElementById("portfolio-section").style.display = "block"; // Show portfolio grid
}

// Remove event listeners for portfolio grid images
document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.removeEventListener("click", () => openImageModal(img.src));
});

