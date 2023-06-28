$(document).ready(function () {
  $(this).scrollTop(0);
  pageHeight();
  //   fixSidebarOnScroll();
  $(window).resize(function () {
    pageHeight();
    //   fixSidebarOnScroll();
  });

  function pageHeight() {
    $(".login .page-content").css(
      "min-height",
      "calc(100vh - " + $(".page-footer").outerHeight() + "px)"
    );
    if (document.querySelector(".side-nav") !== null) {
      $(".side-nav").css(
        "height",
        "calc(100vh - " + $(".custom-nav").outerHeight() + "px)"
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
  }

  if ($(window).width() < 1199) {
    $("body").addClass("small-side-nav");
    $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
  } else {
    $("body").removeClass("small-side-nav");
    //   $(".content-wrapper-main").css(
    //       "width",
    //       "calc(100% - " + $(".side-nav").outerWidth() + "px)"
    //   );
    $(".content-wrapper-main").css("width", "calc(100% - " + "260px)");
  }
  setTimeout(() => {
    $(".userPageHeading").css("top", $(".custom-nav").outerHeight());
    $(".left-sec").css(
      "top",
      $(".custom-nav").outerHeight() + $(".userPageHeading").outerHeight() + 4
    );
  }, 220);
  $(".sidebar-toogle").click(function () {
    $("body").toggleClass("small-side-nav");
    if ($("body").hasClass("small-side-nav")) {
      console.log("adaw");
      $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
    } else {
      console.log("dwrf");
      $(".content-wrapper-main").css("width", "calc(100% - " + "260px)");
    }
    setTimeout(() => {
      if (document.querySelector(".left-sec") !== null) {
        if ($(".left-sec").hasClass("sticky")) {
          $(".left-sec").css({
            bottom: $(".page-footer").outerHeight() + 36 + "px",
            width: $(".left-sec-parent").innerWidth() - 28 + "px",
            left: $(".side-nav").outerWidth() + 28 + "px",
          });
        }
      }
      $(".userPageHeading").css("top", $(".custom-nav").outerHeight());
      $(".left-sec").css(
        "top",
        $(".custom-nav").outerHeight() + $(".userPageHeading").outerHeight() + 4
      );
    }, 220);
  });

  $(".leftSecLinks").click(function (e) {
    e.preventDefault();

    var href = $(this).attr("href");
    var hash = href.substr(href.indexOf("#"));
    $("html, body").animate(
      {
        scrollTop:
          $(hash).offset().top -
          $(".custom-nav").outerHeight() -
          $(".userPageHeading").outerHeight(),
      },
      40
    );
  });

  
  

  // Data retrieved from https://netmarketshare.com/
  // Make monochrome colors
  const colors = Highcharts.getOptions().colors.map((c, i) =>
    // Start out with a darkened base color (negative brighten), and end
    // up with a much brighter color
    Highcharts.color(Highcharts.getOptions().colors[0])
      .brighten((i - 3) / 7)
      .get()
  );

  // Build the chart
  Highcharts.chart("container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors,
        borderRadius: 1,
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f} %",
          distance: -50,
          filter: {
            property: "percentage",
            operator: ">",
            value: 4,
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Share",
        colorByPoint: true,
        data: [
          { name: "Low Opportunity", y: 42 },
          { name: "Low Opportunity", y: 40 },
          { name: "Low Opportunity", y: 18 },
        ],
      },
    ],
  });

  $(window).scroll(function () {
    //   fixSidebarOnScroll();
    $(".side-nav").css({
      "height ": "calc(100vh - " + $(".custom-nav").outerHeight() + "px)",
      top: +$(".custom-nav").outerHeight() + "px",
    });
  });

  //   function fixSidebarOnScroll() {
  //       if (document.querySelector(".left-sec") !== null) {
  //           var $sidebar = $(".left-sec");
  //           var sidebarTop = $sidebar.position().top;
  //           var rightSec = $(".right-sec").outerHeight() - 10;
  //           var windowScrollTop = $(window).scrollTop();
  //           if (windowScrollTop >= rightSec || windowScrollTop <= sidebarTop) {
  //               $sidebar.removeClass("sticky");
  //               $(".left-sec").css({"bottom": ($(".page-footer").outerHeight() + 36) + "px" , "width" : "auto"});

  //           } else if (windowScrollTop >= sidebarTop) {
  //             setTimeout(() => {
  //               $(".left-sec").css({"bottom": ($(".page-footer").outerHeight() + 36) + "px" , "width" : ($('.left-sec-parent').innerWidth() - 28 )+ "px", "left": ($(".side-nav").outerWidth() + 28)});
  //             },50);
  //               if (!$sidebar.hasClass("sticky")) {
  //                 $sidebar.addClass("sticky");
  //               }
  //           }
  //       }
  //   }
});
