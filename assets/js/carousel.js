document.addEventListener("DOMContentLoaded", function () {
  const allCarousels = document.querySelectorAll(".carousel");

  allCarousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");
    const indicators = carousel.querySelectorAll(".carousel-indicators li");

    if (items.length === 0) return;

    let current = 0;

    // Find initial active item
    items.forEach((item, idx) => {
      if (item.classList.contains("active")) {
        current = idx;
      }
    });

    const updateCarousel = (newIndex) => {
      // Wrap around
      if (newIndex >= items.length) {
        current = 0;
      } else if (newIndex < 0) {
        current = items.length - 1;
      } else {
        current = newIndex;
      }

      // Remove active from all items and indicators
      items.forEach((item) => item.classList.remove("active"));
      indicators.forEach((indicator) => indicator.classList.remove("active"));

      // Add active to current item and indicator
      items[current].classList.add("active");
      if (indicators[current]) {
        indicators[current].classList.add("active");
      }
    };

    // Previous button
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(current - 1);
      });
      prevBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(current - 1);
      });
    }

    // Next button
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(current + 1);
      });
      nextBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(current + 1);
      });
    }

    // Indicator dots
    indicators.forEach((indicator, idx) => {
      indicator.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(idx);
      });
      indicator.addEventListener("touchend", (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateCarousel(idx);
      });
    });
  });
});
