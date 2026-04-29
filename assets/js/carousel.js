// Carousel Manual Control - Mejorado para mobile
(function () {
  function initCarousels() {
    // Inicializar todos los carousels
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function (carousel) {
      const carouselId = carousel.getAttribute("id");
      if (!carouselId) return;

      // Botones de control
      const prevBtn = carousel.querySelector(".carousel-control-prev");
      const nextBtn = carousel.querySelector(".carousel-control-next");
      const items = carousel.querySelectorAll(".carousel-item");
      const indicators = carousel.querySelectorAll(".carousel-indicators li");

      if (!items.length) return;

      let currentIndex = 0;

      // Encontrar índice inicial active
      items.forEach(function (item, index) {
        if (item.classList.contains("active")) {
          currentIndex = index;
        }
      });

      // Función para mostrar una imagen específica
      function showSlide(index) {
        // Ajustar índice si está fuera de rango
        if (index >= items.length) {
          currentIndex = 0;
        } else if (index < 0) {
          currentIndex = items.length - 1;
        } else {
          currentIndex = index;
        }

        // Remover clase active de todos
        items.forEach((item) => item.classList.remove("active"));
        if (indicators.length > 0) {
          indicators.forEach((ind) => ind.classList.remove("active"));
        }

        // Agregar clase active al actual
        if (items[currentIndex]) {
          items[currentIndex].classList.add("active");
        }
        if (indicators.length > 0 && indicators[currentIndex]) {
          indicators[currentIndex].classList.add("active");
        }
      }

      // Botón anterior
      if (prevBtn) {
        prevBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          showSlide(currentIndex - 1);
          return false;
        });
      }

      // Botón siguiente
      if (nextBtn) {
        nextBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          showSlide(currentIndex + 1);
          return false;
        });
      }

      // Indicadores
      if (indicators.length > 0) {
        indicators.forEach(function (indicator, index) {
          indicator.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            showSlide(index);
            return false;
          });
        });
      }
    });
  }

  // Inicializar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCarousels);
  } else {
    initCarousels();
  }

  // También inicializar después de un pequeño delay
  setTimeout(initCarousels, 100);
})();
