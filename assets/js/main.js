// load more logic

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".music-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let visibleCount = 8;

  function updateVisibleCards() {
    cards.forEach((card, index) => {
      card.style.display = index < visibleCount ? "block" : "none";
    });

    if (visibleCount >= cards.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 4; // Load 4 more on each click
    updateVisibleCards();
  });

  updateVisibleCards(); // Initial load
});

// Highlight active nav link
// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop(); // e.g., 'about.html'
console.log("Current Page:", currentPage);

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  console.log("Comparing with link:", linkPage);
  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.getElementById("navLinks");

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("show");
  });

  // Close menu when a nav link is clicked (on small screens)
  const navLinks = navLinksContainer.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Only close if it's visible (mobile)
      if (window.innerWidth <= 768) {
        navLinksContainer.classList.remove("show");
      }
    });
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

