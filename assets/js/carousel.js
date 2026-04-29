// Carousel Manual Control
document.addEventListener("DOMContentLoaded", function () {
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
      indicators.forEach((ind) => ind.classList.remove("active"));

      // Agregar clase active al actual
      if (items[currentIndex]) {
        items[currentIndex].classList.add("active");
      }
      if (indicators[currentIndex]) {
        indicators[currentIndex].classList.add("active");
      }
    }

    // Botón anterior
    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    // Botón siguiente
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }

    // Indicadores
    indicators.forEach(function (indicator, index) {
      indicator.addEventListener("click", function (e) {
        e.preventDefault();
        showSlide(index);
      });
    });
  });
});
