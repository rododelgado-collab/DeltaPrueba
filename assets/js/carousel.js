// Ultra-simple carousel - handles both index and product pages
document.addEventListener("DOMContentLoaded", function() {
  initializeCarousels();
});

function initializeCarousels() {
  var allCarousels = document.querySelectorAll(".carousel");

  for (var c = 0; c < allCarousels.length; c++) {
    initializeCarousel(allCarousels[c]);
  }
}

function initializeCarousel(carouselElement) {
  if (!carouselElement) return;

  var items = carouselElement.querySelectorAll(".carousel-item");
  if (items.length === 0) return;

  // Find current slide index
  var currentSlide = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("active")) {
      currentSlide = i;
      break;
    }
  }

  // Create navigator object for this carousel
  var nav = {
    carousel: carouselElement,
    items: items,
    indicators: carouselElement.querySelectorAll(".carousel-indicators li"),
    prevBtn: carouselElement.querySelector(".carousel-control-prev"),
    nextBtn: carouselElement.querySelector(".carousel-control-next"),
    currentSlide: currentSlide,

    goToSlide: function(index) {
      // Calculate new index
      if (index >= this.items.length) {
        this.currentSlide = 0;
      } else if (index < 0) {
        this.currentSlide = this.items.length - 1;
      } else {
        this.currentSlide = index;
      }

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
          self.goToSlide(self.currentSlide - 1);
        };
      }

      if (this.nextBtn) {
        this.nextBtn.onclick = function(e) {
          e.preventDefault();
          self.goToSlide(self.currentSlide + 1);
        };
      }
    },

    setupIndicators: function() {
      var self = this;

      for (var i = 0; i < this.indicators.length; i++) {
        (function(index) {
          self.indicators[index].onclick = function(e) {
            e.preventDefault();
            self.goToSlide(index);
          };
        })(i);
      }
    },

    setupProductPagination: function() {
      var self = this;
      var carouselId = this.carousel.id;

      // Find pagination container
      var paginationNav = this.carousel.parentElement;
      if (!paginationNav) return;

      // Find all pagination links with images
      var paginationLinks = paginationNav.querySelectorAll(".pagination a.page-link");
      var imageIndex = 0;

      for (var i = 0; i < paginationLinks.length; i++) {
        var link = paginationLinks[i];
        if (link.querySelector("img")) {
          (function(idx) {
            link.onclick = function(e) {
              e.preventDefault();
              self.goToSlide(idx);
            };
          })(imageIndex);
          imageIndex++;
        }
      }

      // Handle prevBtn and nextBtn if this is carouselProduct
      if (carouselId === "carouselProduct") {
        var prevBtnSep = document.getElementById("prevBtn");
        var nextBtnSep = document.getElementById("nextBtn");

        if (prevBtnSep) {
          prevBtnSep.onclick = function(e) {
            e.preventDefault();
            self.goToSlide(self.currentSlide - 1);
          };
        }

        if (nextBtnSep) {
          nextBtnSep.onclick = function(e) {
            e.preventDefault();
            self.goToSlide(self.currentSlide + 1);
          };
        }
      }
    }
  };

  // Initialize
  nav.setupButtons();
  nav.setupIndicators();
  nav.setupProductPagination();
}
