// Carousel control - with debugging for troubleshooting
console.log("carousel.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded fired - initializing carousels");
  initializeCarousels();
});

function initializeCarousels() {
  var allCarousels = document.querySelectorAll(".carousel");
  console.log("Found " + allCarousels.length + " carousels");

  for (var c = 0; c < allCarousels.length; c++) {
    console.log("Initializing carousel " + c);
    initializeCarousel(allCarousels[c]);
  }
}

function initializeCarousel(carouselElement) {
  if (!carouselElement) {
    console.log("Carousel element is null");
    return;
  }

  var carouselId = carouselElement.id || "unnamed";
  console.log("Initializing carousel: " + carouselId);

  var items = carouselElement.querySelectorAll(".carousel-item");
  console.log("  Items found: " + items.length);

  if (items.length === 0) {
    console.log("  No carousel items found, skipping");
    return;
  }

  // Find current slide
  var currentSlide = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("active")) {
      currentSlide = i;
      break;
    }
  }
  console.log("  Current slide: " + currentSlide);

  // Get all elements
  var indicators = carouselElement.querySelectorAll(".carousel-indicators li");
  var prevBtn = carouselElement.querySelector(".carousel-control-prev");
  var nextBtn = carouselElement.querySelector(".carousel-control-next");

  console.log("  Indicators: " + indicators.length);
  console.log("  Prev button: " + (prevBtn ? "FOUND" : "NOT FOUND"));
  console.log("  Next button: " + (nextBtn ? "FOUND" : "NOT FOUND"));

  // Create navigation object
  var nav = {
    carousel: carouselElement,
    carouselId: carouselId,
    items: items,
    indicators: indicators,
    prevBtn: prevBtn,
    nextBtn: nextBtn,
    currentSlide: currentSlide,

    goToSlide: function(index) {
      console.log("  goToSlide called with index: " + index);

      // Calculate new index
      if (index >= this.items.length) {
        this.currentSlide = 0;
      } else if (index < 0) {
        this.currentSlide = this.items.length - 1;
      } else {
        this.currentSlide = index;
      }

      console.log("  New slide: " + this.currentSlide);

      // Update active item
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].classList.remove("active");
      }
      this.items[this.currentSlide].classList.add("active");

      // Update indicators
      for (var i = 0; i < this.indicators.length; i++) {
        this.indicators[i].classList.remove("active");
      }
      if (this.currentSlide < this.indicators.length) {
        this.indicators[this.currentSlide].classList.add("active");
      }
    },

    setupButtons: function() {
      var self = this;

      if (this.prevBtn) {
        this.prevBtn.onclick = function(e) {
          e.preventDefault();
          console.log("[" + self.carouselId + "] Prev clicked");
          self.goToSlide(self.currentSlide - 1);
        };
        this.prevBtn.addEventListener("click", function(e) {
          console.log("[" + self.carouselId + "] Prev addEventListener click");
        });
        console.log("  Prev button handler attached");
      }

      if (this.nextBtn) {
        this.nextBtn.onclick = function(e) {
          e.preventDefault();
          console.log("[" + self.carouselId + "] Next clicked");
          self.goToSlide(self.currentSlide + 1);
        };
        console.log("  Next button handler attached");
      }
    },

    setupIndicators: function() {
      var self = this;

      for (var i = 0; i < this.indicators.length; i++) {
        (function(index) {
          self.indicators[index].onclick = function(e) {
            e.preventDefault();
            console.log("[" + self.carouselId + "] Indicator " + index + " clicked");
            self.goToSlide(index);
          };
          console.log("  Indicator " + i + " handler attached");
        })(i);
      }
    },

    setupProductPagination: function() {
      var self = this;

      if (this.carouselId !== "carouselProduct") {
        console.log("  Not a product carousel, skipping pagination setup");
        return;
      }

      console.log("  Setting up product pagination");

      // Find pagination
      var paginationNav = this.carousel.parentElement;
      if (!paginationNav) {
        console.log("  Parent element not found");
        return;
      }

      var paginationLinks = paginationNav.querySelectorAll(".pagination a.page-link");
      console.log("  Pagination links found: " + paginationLinks.length);

      var imageIndex = 0;
      for (var i = 0; i < paginationLinks.length; i++) {
        var link = paginationLinks[i];
        if (link.querySelector("img")) {
          (function(idx) {
            link.onclick = function(e) {
              e.preventDefault();
              console.log("[" + self.carouselId + "] Pagination " + idx + " clicked");
              self.goToSlide(idx);
            };
          })(imageIndex);
          imageIndex++;
        }
      }
      console.log("  Pagination image links: " + imageIndex);

      // Handle separate prev/next buttons
      var prevBtnSep = document.getElementById("prevBtn");
      var nextBtnSep = document.getElementById("nextBtn");

      console.log("  Separate prevBtn: " + (prevBtnSep ? "FOUND" : "NOT FOUND"));
      console.log("  Separate nextBtn: " + (nextBtnSep ? "FOUND" : "NOT FOUND"));

      if (prevBtnSep) {
        prevBtnSep.onclick = function(e) {
          e.preventDefault();
          console.log("[" + self.carouselId + "] Separate prev clicked");
          self.goToSlide(self.currentSlide - 1);
        };
      }

      if (nextBtnSep) {
        nextBtnSep.onclick = function(e) {
          e.preventDefault();
          console.log("[" + self.carouselId + "] Separate next clicked");
          self.goToSlide(self.currentSlide + 1);
        };
      }
    }
  };

  // Initialize
  console.log("  Setting up carousel handlers");
  nav.setupButtons();
  nav.setupIndicators();
  nav.setupProductPagination();
  console.log("Carousel " + carouselId + " initialized successfully");
}

console.log("carousel.js ready");
