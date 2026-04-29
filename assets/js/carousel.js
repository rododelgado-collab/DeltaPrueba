document.addEventListener("DOMContentLoaded", function () {
  // Handle all carousel elements
  const carousels = document.querySelectorAll(".carousel");

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

    // Get carousel ID for finding related pagination
    const carouselId = carousel.id;
    let indicators = null;
    let paginationLinks = null;

    // Check for standard Bootstrap indicators
    indicators = carousel.querySelectorAll(".carousel-indicators li");

    // Check for pagination-based indicators (product pages)
    if (indicators.length === 0 && carouselId) {
      const pagination = document.querySelector(`nav ul.pagination a.page-link[href="#${carouselId}"]`);
      if (pagination) {
        const paginationNav = pagination.closest("nav");
        if (paginationNav) {
          paginationLinks = paginationNav.querySelectorAll("a.page-link[href='#" + carouselId + "']");
        }
      }
    }

    const goToSlide = (index) => {
      // Wrap around
      if (index >= items.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = items.length - 1;
      } else {
        currentIndex = index;
      }

      // Update carousel items
      items.forEach((item) => item.classList.remove("active"));
      items[currentIndex].classList.add("active");

      // Update standard indicators
      if (indicators && indicators.length > 0) {
        indicators.forEach((indicator) => indicator.classList.remove("active"));
        if (indicators[currentIndex]) {
          indicators[currentIndex].classList.add("active");
        }
      }

      // Update pagination indicators
      if (paginationLinks && paginationLinks.length > 0) {
        paginationLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
        });
        if (paginationLinks[currentIndex]) {
          paginationLinks[currentIndex].parentElement.classList.add("active");
        }
      }
    };

    // Setup prev/next buttons
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
      prevBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
      nextBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }

    // Setup standard indicator clicks
    if (indicators && indicators.length > 0) {
      indicators.forEach((indicator, idx) => {
        indicator.addEventListener("click", (e) => {
          e.preventDefault();
          goToSlide(idx);
        });
        indicator.addEventListener("touchend", (e) => {
          e.preventDefault();
          goToSlide(idx);
        });
      });
    }

    // Setup pagination indicator clicks
    if (paginationLinks && paginationLinks.length > 0) {
      paginationLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          goToSlide(idx);
        });
        link.addEventListener("touchend", (e) => {
          e.preventDefault();
          goToSlide(idx);
        });
      });
    }

    // Handle separate prev/next buttons (product pages)
    const prevBtnProduct = document.getElementById("prevBtn");
    const nextBtnProduct = document.getElementById("nextBtn");

    if (prevBtnProduct && carouselId === "carouselProduct") {
      prevBtnProduct.addEventListener("click", (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtnProduct && carouselId === "carouselProduct") {
      nextBtnProduct.addEventListener("click", (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }
  });
});
