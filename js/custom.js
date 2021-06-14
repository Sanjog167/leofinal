(function ($) {
  "use strict";

  $(window).on("load", function () {
    "use strict";
    /*=========================================================================
            Preloader
    =========================================================================*/
    $(".preloader").delay(1).fadeOut("slow");
  });

  $(document).ready(function () {
    // REMOVE # FROM URL
    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    // LOGOS SLIDER
    $("#bxslider").bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 200,
      slideMargin: 30,
      ticker: true,
      speed: 30000
    });

    // BACK TO TOP
    $("#back-top a").on("click", function () {
      $("body,html").stop(false, false).animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });

    // BUTTON ICON ANIMATION
    var btn_hover = "";
    $(".custom-button").each(function () {
      var btn_text = $(this).text();
      $(this)
        .addClass(btn_hover)
        .empty()
        .append("<span data-hover='" + btn_text + "'>" + btn_text + "</span>");
    });

    // SINGLE PAGE SCROLL
    $("#singlepage-nav").singlePageNav({
      offset: 0,
      filter: ":not(.nav-external)",
      updateHash: 0,
      currentClass: "current",
      easing: "swing",
      speed: 750
    });

    const mainNav = document.querySelector(".main-nav");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });

    // HAMBURGER ICON ANIMATION
    $(".link-menu").on("click", function () {
      $("#icon-toggler").removeClass("open");
    });
    $("#icon-toggler").on("click", function () {
      $(this).toggleClass("open");
    });
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".navbar").removeClass("sticky");
    } else {
      $(".navbar").addClass("sticky");
    }
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".stickprice").addClass("sticky");
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".stickprice").removeClass("sticky");
	}
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1400) {
      $(".stickprice").hide();
	}
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1400) {
      $(".stickprice").show();
	}
  });


  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 0) {
      $(".maincompare").removeClass("sticked");
    } else {
      $(".maincompare").addClass("sticked");
    }
  });

//   $(window).on("scroll", function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 800) {
//       $(".stickprice").removeClass("sticky");
//     }
//   });
})(jQuery);
