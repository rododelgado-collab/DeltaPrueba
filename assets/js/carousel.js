// Simple carousel control - works on both index and product pages
document.addEventListener("DOMContentLoaded", function() {
  // Get all carousels on the page
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(function(carousel) {
    // Get carousel items
    const items = carousel.querySelectorAll(".carousel-item");
    if (items.length === 0) return;

    let currentIndex = 0;

    // Find which item is currently active
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains("active")) {
        currentIndex = i;
        break;
      }
    }

    // Function to change slide
    function showSlide(index) {
      // Handle wrapping
      if (index >= items.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = items.length - 1;
      } else {
        currentIndex = index;
      }

      // Remove active from all items
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }

      // Add active to current item
      items[currentIndex].classList.add("active");

      // Update indicators if they exist
      const indicators = carousel.querySelectorAll(".carousel-indicators li");
      if (indicators.length > 0) {
        for (let i = 0; i < indicators.length; i++) {
          indicators[i].classList.remove("active");
        }
        if (indicators[currentIndex]) {
          indicators[currentIndex].classList.add("active");
        }
      }

      // Update pagination links if they exist (product pages)
      const paginationLinks = carousel.parentElement.querySelectorAll(".pagination a.page-link");
      if (paginationLinks.length > 0) {
        for (let i = 0; i < paginationLinks.length; i++) {
          paginationLinks[i].parentElement.classList.remove("active");

          // Check if this is an image thumbnail link
          if (paginationLinks[i].querySelector("img")) {
            if (i === currentIndex) {
              paginationLinks[i].parentElement.classList.add("active");
            }
          }
        }
      }
    }

    // Setup prev/next button handlers
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", function(e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function(e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }

    // Setup indicator clicks
    const indicators = carousel.querySelectorAll(".carousel-indicators li");
    indicators.forEach(function(indicator, idx) {
      indicator.addEventListener("click", function(e) {
        e.preventDefault();
        showSlide(idx);
      });
    });

    // Setup pagination link clicks (product pages)
    const container = carousel.parentElement;
    const paginationLinks = container.querySelectorAll(".pagination a.page-link");

    let imageCount = 0;
    paginationLinks.forEach(function(link, idx) {
      // Only count links with images (not prev/next buttons)
      if (link.querySelector("img")) {
        const linkIndex = imageCount;
        imageCount++;

        link.addEventListener("click", function(e) {
          e.preventDefault();
          showSlide(linkIndex);
        });
      }
    });

    // Handle separate product page prev/next buttons
    const prevBtnProduct = document.getElementById("prevBtn");
    const nextBtnProduct = document.getElementById("nextBtn");

    if (prevBtnProduct && carousel.id === "carouselProduct") {
      prevBtnProduct.addEventListener("click", function(e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtnProduct && carousel.id === "carouselProduct") {
      nextBtnProduct.addEventListener("click", function(e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }
  });
});
