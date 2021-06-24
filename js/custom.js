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
    if (scroll > 1600) {
      $("#nbnext").addClass("indexz");
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1800) {
      $("#nbnext").removeClass("indexz");
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 3000) {
      $("#nbnext").removeClass("indexz");
    }
  });





  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".compheaddefault").removeClass("newsticky");
    } else {
      $(".compheaddefault").addClass("newsticky");
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
    if (scroll > 5200) {
      $(".stickprice").hide();
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 5200) {
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

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll <10 ) {
      $(".maincompare").removeClass("sticked");
    }
  });

  $('[data-aos]').parent().addClass('hideOverflowOnMobile');



  

  //   $(window).on("scroll", function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 800) {
  //       $(".stickprice").removeClass("sticky");
  //     }
  //   });
})(jQuery);

$("#submit").click(function () {
  var name = $("#firstName").val();
  var email = $("#email").val();
  var company = $("#compname").val();
  var phone = $("#phone").val();

  if (name == "" || email == "" || company == "" || phone == "") {
    swal({
      title: "Fields Empty!",
      text: "Please check the missing fields!",
      icon: "warning"
    });
  } else {
    $(".modal").addClass("hide");
    swal({
      title: "That’s great!",
      text: "Thank you for the information. Welcome aboard, we will be right there with you in a moment!",
      icon: "success"
    });
    $("#firstName").val("");
    $("#email").val("");
    $("#compname").val("");
    $("#phone").val("");
  }
});


$("#partnersubmit1").click(function () {
  var name = $("#PfName").val();
  var email = $("#Pemail").val();
  var company = $("#Pcompname").val();
  var phone = $("#Pphone").val();
  var monthly = $("#Pmonthly").val();
  var target = $("#Ptarget").val();
  
  

  if (name == "" || email == "" || phone == "" || monthly == "" || target == "" ) {
    swal({
      title: "Fields Empty!",
      text: "Please check the missing fields!",
      icon: "warning"
    });
  } else {
    $(".modal").addClass("hide");
    swal({
      title: "That’s great!",
      text: "Thank you for showing interest on LeoSquad Referral Program. Our Representatives will get in touch shortly",
      icon: "success"
    });
    $("#PfName").val("");
    $("#Pemail").val("");
    $("#Pcompname").val("");
    $("#Pphone").val("");
    $("#Pmonthly").val("");
    $("#Ptarget").val("");
  }
});

$("#partnersubmit2").click(function () {
  var nameone = $("#newPfName").val();
  var emailone = $("#newPemail").val();
  var companyone = $("#newPcompname").val();
  var phoneone = $("#newPphone").val();
  var monthlyone = $("#newPmonthly").val();
  var targetone = $("#newPtarget").val();
  
  

  if (nameone == "" || emailone == "" || phoneone == "" || monthlyone == "" || targetone == "" ) {
    swal({
      title: "Fields Empty!",
      text: "Please check the missing fields!",
      icon: "warning"
    });
  } else {
    $(".modal").addClass("hide");
    swal({
      title: "That’s great!",
      text: "Thank you for showing interest on LeoSquad Affiliate Program. Our Representatives will get in touch shortly",
      icon: "success"
    });
    $("#PfName").val("");
    $("#Pemail").val("");
    $("#Pcompname").val("");
    $("#Pphone").val("");
    $("#Pmonthly").val("");
    $("#Ptarget").val("");
  }
});

$("#partnersubmit3").click(function () {
  var name = $("#resPfName").val();
  var email = $("#resPemail").val();
  var company = $("#resPcompname").val();
  var phone = $("#resPphone").val();
  var monthly = $("#resPmonthly").val();
  var target = $("#resPtarget").val();
  
  

  if (name == "" || email == "" || phone == "" || monthly == "" || target == "" ) {
    swal({
      title: "Fields Empty!",
      text: "Please check the missing fields!",
      icon: "warning"
    });
  } else {
    $(".modal").addClass("hide");
    swal({
      title: "That’s great!",
      text: "Thank you for showing interest on LeoSquad Reseller Program. Our Representatives will get in touch shortly",
      icon: "success"
    });
    $("#PfName").val("");
    $("#Pemail").val("");
    $("#Pcompname").val("");
    $("#Pphone").val("");
    $("#Pmonthly").val("");
    $("#Ptarget").val("");
  }
});

$(".hamburger-menu").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").toggleClass("show");
  $("body").addClass("on-side");
  $(".body-overlay").addClass("active");
  $(".headersmalldevice").addClass("index");
  $(this).addClass("active");
});

$(".close-mobile-menu > a").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").removeClass("show");
  $("body").removeClass("on-side");
  $(".body-overlay").removeClass("active");
  $(".hamburger-menu > a").removeClass("active");
});

$(".body-overlay").on("click", function () {
  $(this).removeClass("active");
  $(".slide-bar").removeClass("show");
  $("body").removeClass("on-side");
  $(".hamburger-menu").removeClass("active");
  $(".toggle").removeClass("open");
  // $(".headersmalldevice").removeClass("index");
});
