// Carousel control for both index and product pages
document.addEventListener("DOMContentLoaded", function() {
  var carousels = document.querySelectorAll(".carousel");

  for (var c = 0; c < carousels.length; c++) {
    var carousel = carousels[c];
    var items = carousel.querySelectorAll(".carousel-item");

    if (items.length === 0) continue;

    // Create closure to preserve carousel context
    (function(carousel, items) {
      var currentIndex = 0;

      // Find active item
      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("active")) {
          currentIndex = i;
          break;
        }
      }

      // Change slide function
      var changeSlide = function(index) {
        // Wrap around
        if (index >= items.length) {
          currentIndex = 0;
        } else if (index < 0) {
          currentIndex = items.length - 1;
        } else {
          currentIndex = index;
        }

        // Update items
        for (var i = 0; i < items.length; i++) {
          if (items[i].classList.contains("active")) {
            items[i].classList.remove("active");
          }
        }
        items[currentIndex].classList.add("active");

        // Update indicators
        var indicators = carousel.querySelectorAll(".carousel-indicators li");
        if (indicators.length > 0) {
          for (var i = 0; i < indicators.length; i++) {
            if (indicators[i].classList.contains("active")) {
              indicators[i].classList.remove("active");
            }
          }
          if (currentIndex < indicators.length) {
            indicators[currentIndex].classList.add("active");
          }
        }

        // Update pagination for products
        var parent = carousel.parentElement;
        if (parent) {
          var pageLinks = parent.querySelectorAll(".pagination a.page-link");
          var imgIndex = 0;
          for (var i = 0; i < pageLinks.length; i++) {
            var link = pageLinks[i];
            if (link.querySelector("img")) {
              if (link.parentElement.classList.contains("active")) {
                link.parentElement.classList.remove("active");
              }
              if (imgIndex === currentIndex) {
                link.parentElement.classList.add("active");
              }
              imgIndex++;
            }
          }
        }
      };

      // Add click handler to prev button
      var prevBtn = carousel.querySelector(".carousel-control-prev");
      if (prevBtn) {
        var handlePrev = function(e) {
          e.preventDefault();
          changeSlide(currentIndex - 1);
        };
        prevBtn.addEventListener("click", handlePrev);
        prevBtn.addEventListener("touchend", handlePrev);
      }

      // Add click handler to next button
      var nextBtn = carousel.querySelector(".carousel-control-next");
      if (nextBtn) {
        var handleNext = function(e) {
          e.preventDefault();
          changeSlide(currentIndex + 1);
        };
        nextBtn.addEventListener("click", handleNext);
        nextBtn.addEventListener("touchend", handleNext);
      }

      // Add click handlers to indicators
      var indicators = carousel.querySelectorAll(".carousel-indicators li");
      for (var i = 0; i < indicators.length; i++) {
        (function(idx) {
          var handleIndicator = function(e) {
            e.preventDefault();
            changeSlide(idx);
          };
          indicators[idx].addEventListener("click", handleIndicator);
          indicators[idx].addEventListener("touchend", handleIndicator);
        })(i);
      }

      // Handle product page pagination
      if (carousel.id === "carouselProduct") {
        var parent = carousel.parentElement;
        if (parent) {
          var pageLinks = parent.querySelectorAll(".pagination a.page-link");
          var imgIndex = 0;
          for (var i = 0; i < pageLinks.length; i++) {
            (function(idx, link) {
              if (link.querySelector("img")) {
                var handlePagination = function(e) {
                  e.preventDefault();
                  changeSlide(idx);
                };
                link.addEventListener("click", handlePagination);
                link.addEventListener("touchend", handlePagination);
                imgIndex++;
              }
            })(imgIndex, pageLinks[i]);
          }
        }

        // Handle separate prev/next buttons
        var prevBtnProd = document.getElementById("prevBtn");
        var nextBtnProd = document.getElementById("nextBtn");

        if (prevBtnProd) {
          var handlePrevProd = function(e) {
            e.preventDefault();
            changeSlide(currentIndex - 1);
          };
          prevBtnProd.addEventListener("click", handlePrevProd);
          prevBtnProd.addEventListener("touchend", handlePrevProd);
        }

        if (nextBtnProd) {
          var handleNextProd = function(e) {
            e.preventDefault();
            changeSlide(currentIndex + 1);
          };
          nextBtnProd.addEventListener("click", handleNextProd);
          nextBtnProd.addEventListener("touchend", handleNextProd);
        }
      }
    })(carousel, items);
  }
});
