$(document).ready(function () {
  pageHeight();
  fixSidebarOnScroll();
  $(window).resize(function () {
    pageHeight();
    fixSidebarOnScroll();
  });
  function pageHeight() {
    $(".login .page-content").css(
      "min-height",
      "calc(100vh - " + $(".page-footer").outerHeight() + "px)"
    );
    if (
      document.querySelector(".side-nav") !== null &&
      document.querySelector(".content-wrapper-main") !== null
    ) {
      $(".side-nav, .content-wrapper-main").css(
        "height",
        "calc(100vh - " + $(".custom-nav").outerHeight() + "px)"
      );
      $(".content-wrapper-main").css(
        "width",
        "calc(100% - " + $(".side-nav").outerWidth() + "px)"
      );
    }
    if (document.querySelector(".content-body") !== null) {
      $(".content-body").css(
        "min-height",
        "calc(100vh - " +
          ($(".custom-nav").outerHeight() + $(".page-footer").outerHeight()) +
          "px)"
      );
    }
    $(".side-nav").css(
      "height",
      "calc(100vh - " + $(".custom-nav").outerHeight() + "px)"
    );
    $(".left-sec.sticky").css("min-height","calc(100vh - " + ($(".custom-nav").outerHeight() + $(".page-footer").outerHeight()) + "px)");


    if ($(window).width() < 1199) {
      $("body").addClass("small-side-nav");
      $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
    } else {
      $("body").removeClass("small-side-nav");
      $(".content-wrapper-main").css(
        "width",
        "calc(100% - " + $(".side-nav").outerWidth() + "px)"
      );
    }
    
  }

  $(".sidebar-toogle").click(function () {
    $("body").toggleClass("small-side-nav");
    $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
  });

  $(".leftSecLinks").click(function (e) {
    setTimeout(() => {
      var hash = window.location.hash;
      console.log("adawdawd", hash);
      $(".content-wrapper-main").animate(
        {
          scrollTop: $(hash).offset().top - $(".custom-nav").outerHeight(),
        },
        500
      );
    },50);
  });

  var $sidebar = $(".left-sec");

  var sidebarTop = $sidebar.position().top;

  var rightSec = $(".right-sec").outerHeight() - 10;

  $(".content-wrapper-main").scroll(function () {
    fixSidebarOnScroll();
  });


  function fixSidebarOnScroll() {
    var windowScrollTop = $(".content-wrapper-main").scrollTop();
    if (windowScrollTop >= rightSec || windowScrollTop <= sidebarTop) {
      // Remove when the scroll is greater than our #content.OuterHeight()
      // or when our sticky scroll is above the original position of the sidebar
      $sidebar.removeClass("sticky");
    } else if (windowScrollTop >= sidebarTop) {
      // Otherwise add the sticky if $sidebar doesnt have it already!
      if (!$sidebar.hasClass("sticky")) {
        $sidebar.addClass("sticky");
      }
    }
  }

  
});
