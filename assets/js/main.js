$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header_navbar").removeClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo_white.png");
    } else {
      $(".header_navbar").addClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo_white.png");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a link is clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").removeClass("active");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  //===== Counter Up

  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //===== Nice Select

  $("select").niceSelect();

  //===== Carousel Controls

  $(".carousel-control-prev").on("click", function (e) {
    e.preventDefault();
    const carouselId = $(this).attr("href");
    $(carouselId).carousel("prev");
  });

  $(".carousel-control-next").on("click", function (e) {
    e.preventDefault();
    const carouselId = $(this).attr("href");
    $(carouselId).carousel("next");
  });

  //=====  WOW active

  var wow = new WOW({
    boxClass: "wow", //
    mobile: false, //
  });
  wow.init();
});
//=====  slider
//===== pagination
document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".pagination .page-item");
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");
  let currentIndex = 1; // Índice inicial
  let itemsPerPage = 5; // Cuántos elementos mostrar a la vez
  let totalItems = items.length - 2; // Restamos los botones prev/next

  function updatePagination() {
    // Oculta todos los elementos de la paginación (excepto prev/next)
    items.forEach((item, index) => {
      if (index !== 0 && index !== items.length - 1) {
        item.style.display = "none";
      }
    });

    // Muestra los elementos dentro del rango actual
    for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
      if (items[i]) {
        items[i].style.display = "inline-block";
      }
    }

    // Deshabilita prevBtn si estamos al inicio y nextBtn si llegamos al final
    prevBtn.classList.toggle("disabled", currentIndex === 1);
    nextBtn.classList.toggle(
      "disabled",
      currentIndex + itemsPerPage > totalItems
    );
  }

  // Evento para botón "Siguiente"
  nextBtn.addEventListener("click", function () {
    if (currentIndex + itemsPerPage <= totalItems) {
      currentIndex += itemsPerPage;
      updatePagination();
    }
  });

  // Evento para botón "Anterior"
  prevBtn.addEventListener("click", function () {
    if (currentIndex - itemsPerPage >= 1) {
      currentIndex -= itemsPerPage;
      updatePagination();
    }
  });

  // Inicializa la paginación
  updatePagination();
});
//===========modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
