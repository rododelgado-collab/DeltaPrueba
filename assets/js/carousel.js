document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  if (carousels.length === 0) {
    return;
  }

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    if (items.length === 0) return;

    let currentIndex = 0;

    // Find initial active index
    items.forEach((item, idx) => {
      if (item.classList.contains("active")) {
        currentIndex = idx;
      }
    });

    const carouselId = carousel.id;

    // Get buttons inside carousel
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");
    const indicators = carousel.querySelectorAll(".carousel-indicators li");

    // For product pages, find pagination links
    let paginationLinks = [];
    if (indicators.length === 0 && carouselId === "carouselProduct") {
      const allPageLinks = document.querySelectorAll("a.page-link[href='#carouselProduct']");
      allPageLinks.forEach((link, idx) => {
        if (link.querySelector("img") || link.querySelector("i")) {
          paginationLinks.push(link);
        }
      });
    }

    // Update carousel display
    const goToSlide = (index) => {
      if (index >= items.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = items.length - 1;
      } else {
        currentIndex = index;
      }

      // Update items
      items.forEach((item) => item.classList.remove("active"));
      items[currentIndex].classList.add("active");

      // Update Bootstrap indicators
      if (indicators.length > 0) {
        indicators.forEach((ind) => ind.classList.remove("active"));
        if (indicators[currentIndex]) {
          indicators[currentIndex].classList.add("active");
        }
      }

      // Update pagination links
      if (paginationLinks.length > 0) {
        paginationLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
        });
        if (paginationLinks[currentIndex]) {
          paginationLinks[currentIndex].parentElement.classList.add("active");
        }
      }
    };

    // Attach click handlers to previous button
    if (prevBtn) {
      const handlePrev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      };
      prevBtn.addEventListener("click", handlePrev);
      prevBtn.addEventListener("touchend", handlePrev);
    }

    // Attach click handlers to next button
    if (nextBtn) {
      const handleNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      };
      nextBtn.addEventListener("click", handleNext);
      nextBtn.addEventListener("touchend", handleNext);
    }

    // Attach click handlers to indicators
    if (indicators.length > 0) {
      indicators.forEach((indicator, idx) => {
        const handleIndicatorClick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          goToSlide(idx);
        };
        indicator.addEventListener("click", handleIndicatorClick);
        indicator.addEventListener("touchend", handleIndicatorClick);
      });
    }

    // Attach click handlers to pagination links
    if (paginationLinks.length > 0) {
      paginationLinks.forEach((link, idx) => {
        const handleLinkClick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          goToSlide(idx);
        };
        link.addEventListener("click", handleLinkClick);
        link.addEventListener("touchend", handleLinkClick);
      });
    }

    // Handle product page prev/next buttons
    if (carouselId === "carouselProduct") {
      const prevBtnProduct = document.getElementById("prevBtn");
      const nextBtnProduct = document.getElementById("nextBtn");

      if (prevBtnProduct) {
        const handlePrevProduct = (e) => {
          e.preventDefault();
          goToSlide(currentIndex - 1);
        };
        prevBtnProduct.addEventListener("click", handlePrevProduct);
        prevBtnProduct.addEventListener("touchend", handlePrevProduct);
      }

      if (nextBtnProduct) {
        const handleNextProduct = (e) => {
          e.preventDefault();
          goToSlide(currentIndex + 1);
        };
        nextBtnProduct.addEventListener("click", handleNextProduct);
        nextBtnProduct.addEventListener("touchend", handleNextProduct);
      }
    }
  });
});
