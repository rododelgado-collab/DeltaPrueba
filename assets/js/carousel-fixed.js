// Carousel Control - Simple y Directo
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los carousels
  const allCarousels = document.querySelectorAll(".carousel");

  if (allCarousels.length === 0) {
    console.log("No carousels found");
    return;
  }

  allCarousels.forEach((carousel, carouselIndex) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");
    const indicators = carousel.querySelectorAll(".carousel-indicators li");

    if (items.length === 0) return;

    let current = 0;

    // Encontrar item active inicial
    items.forEach((item, idx) => {
      if (item.classList.contains("active")) {
        current = idx;
      }
    });

    const goToSlide = (index) => {
      // Normalizar índice
      if (index >= items.length) current = 0;
      else if (index < 0) current = items.length - 1;
      else current = index;

      // Remover active
      items.forEach((item) => {
        item.classList.remove("active");
      });
      indicators.forEach((indicator) => {
        indicator.classList.remove("active");
      });

      // Añadir active
      items[current].classList.add("active");
      if (indicators[current]) {
        indicators[current].classList.add("active");
      }
    };

    // Eventos para botones
    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        goToSlide(current - 1);
      };
      prevBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        goToSlide(current - 1);
      });
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        goToSlide(current + 1);
      };
      nextBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        goToSlide(current + 1);
      });
    }

    // Eventos para indicadores
    indicators.forEach((indicator, idx) => {
      indicator.onclick = (e) => {
        e.preventDefault();
        goToSlide(idx);
      };
      indicator.addEventListener("touchstart", (e) => {
        e.preventDefault();
        goToSlide(idx);
      });
    });
  });
});

// Ejecutar también después de un delay
setTimeout(() => {
  const allCarousels = document.querySelectorAll(".carousel");
  allCarousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    if (items.length > 0) {
      console.log("Carousel initialized:", carousel.id);
    }
  });
}, 500);
