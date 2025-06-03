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