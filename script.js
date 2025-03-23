$(document).ready(function () {

  const menuBtn = $("#menu-btn");
  const closeBtn = $("#close-menu");
  const menu = $("#mobile-menu");
  const overlay = $("#menu-overlay");

  // Mobile Menu Toggle
  menuBtn.click(function () {
    $("body").toggleClass("stop-scroll");
    menu.toggleClass("open");
    overlay.show();
  });

  // Toggle Dropdown on Click
  $(".nav-arrow").on("click", function (e) {
    e.preventDefault();
    let dropdown = $(this).parent().siblings(".dropdown-menu");
    $(".dropdown-menu").not(dropdown).slideUp();
    $(dropdown).slideToggle();
  });

  // Close menu when clicking the close button
  closeBtn.click(function () {
    $("body").removeClass("stop-scroll");
    menu.removeClass("open");
    overlay.hide();
  });

  // Close menu when clicking outside the menu
  overlay.click(function () {
    menu.removeClass("open");
    overlay.hide();
  });

  // Search Toggle
  $("#search-btn").click(function () {
    $(".nav-right").addClass("search-active");
    if ($(window).width() < 768) {
      $(".nav-right").css({ gap: "0" });
      $(".nav-left").css("display", "none");
    }
  });

  $("#close-search").click(function () {
    $(".nav-right").removeClass("search-active");
    if ($(window).width() < 768) {
      $(".nav-right").css({ width: "auto", gap: "10px" });
      $(".nav-left").css("display", "flex");
    }
  });

  // Hero Section Slick Slider
  $(".hero-slider").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Testimonial Section Slick Slider
  $(".testimonial-slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
  });

  // Featured Product Slick Slider
  $(".product-slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
