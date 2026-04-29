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
    } else {
      $(".header_navbar").addClass("sticky");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var target = $(this.hash);
      if (target.length === 0) return;
      var sectionOffset = target.offset().top - 73;

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

  //===== Carousel - Controlado por carousel.js

  //=====  WOW active

  var wow = new WOW({
    boxClass: "wow", //
    mobile: false, //
  });
  wow.init();
});
//===========modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

if (myModal && myInput) {
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}
