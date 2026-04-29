// Debug script to check carousel setup
console.log("=== CAROUSEL DEBUG ===");

document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded");

  // Check carousels
  const carousels = document.querySelectorAll(".carousel");
  console.log("Found " + carousels.length + " carousels");

  carousels.forEach(function(carousel, idx) {
    console.log("\nCarousel " + idx + " (id: " + carousel.id + "):");

    const items = carousel.querySelectorAll(".carousel-item");
    console.log("  Items: " + items.length);

    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");
    console.log("  Prev button: " + (prevBtn ? "EXISTS" : "MISSING"));
    console.log("  Next button: " + (nextBtn ? "EXISTS" : "MISSING"));

    const indicators = carousel.querySelectorAll(".carousel-indicators li");
    console.log("  Indicators: " + indicators.length);

    if (carousel.id === "carouselProduct") {
      const paginationLinks = carousel.parentElement.querySelectorAll(".pagination a.page-link img");
      console.log("  Pagination image links: " + paginationLinks.length);
    }
  });

  // Check navbar
  console.log("\n=== NAVBAR DEBUG ===");
  const navbarToggler = document.querySelector(".navbar-toggler");
  console.log("Navbar toggler: " + (navbarToggler ? "EXISTS" : "MISSING"));
  if (navbarToggler) {
    console.log("  data-toggle: " + navbarToggler.getAttribute("data-toggle"));
    console.log("  data-target: " + navbarToggler.getAttribute("data-target"));
  }

  const navbarCollapse = document.querySelector(".navbar-collapse");
  console.log("Navbar collapse: " + (navbarCollapse ? "EXISTS" : "MISSING"));
  if (navbarCollapse) {
    console.log("  id: " + navbarCollapse.getAttribute("id"));
  }

  console.log("=== DEBUG END ===");
});
