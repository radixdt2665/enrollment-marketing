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
    // $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
  } else {
    $("body").removeClass("small-side-nav");
    //   $(".content-wrapper-main").css(
    //       "width",
    //       "calc(100% - " + $(".side-nav").outerWidth() + "px)"
    //   );
    // $(".content-wrapper-main").css("width", "calc(100% - " + "260px)");
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
      // $(".content-wrapper-main").css("width", "calc(100% - " + "72px)");
    } else {
      console.log("dwrf");
      // $(".content-wrapper-main").css("width", "calc(100% - " + "260px)");
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

//   // Build the chart
//   if (document.querySelector(".container1") !== null) {
//     Highcharts.chart("container1", {
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: "pie",
//       },
//       title: {
//         text: "",
//         align: "left",
//       },
//       tooltip: {
//         pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
//       },
//       accessibility: {
//         point: {
//           valueSuffix: "%",
//         },
//       },
//       plotOptions: {
//         pie: {
//           lineWidth: 4,
//           allowPointSelect: true,
//           cursor: "pointer",
//           colors: ["#ffd100", "#b1b3b4", "#b1e4e3"],
//           // borderRadius: 1,
//           dataLabels: {
//             enabled: true,
//             format: "{point.percentage:.1f} %",
//             distance: -50,
//             filter: {
//               property: "percentage",
//               operator: ">",
//               value: 4,
//             },
//           },
//           showInLegend: true,
//         },
//       },
//       series: [
//         {
//           name: "Share",
//           colorByPoint: true,
//           data: [
//             { name: "Low Opportunity", y: 42 },
//             { name: "Moderate Opportunity", y: 40 },
//             { name: "High Opportunity", y: 18 },
//           ],
//         },
//       ],
//     });
//   }

//   // degree conferred chart
//   // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
//   if (document.querySelector(".container2") !== null) {
//   Highcharts.chart("container2", {
//     chart: {
//       type: "line",
//     },
//     title: {
//       text: "",
//     },
//     subtitle: {
//       text: "",
//     },
//     legend: {
//       enabled: false,
//     },
//     // line: {
//     //   point: {
//     //     events: {
//     //       click: function (event) {
//     //         this.series.data.forEach(function (point) {
//     //           if (point.color == "#2caffe") {
//     //             point.update({ color: "#434348" });
//     //           }
//     //         });
//     //         this.update({ color: "#1a1aff" });
//     //       },
//     //     },
//     //   },
//     // },
//     xAxis: {
//       categories: [
//         "100",
//         "120",
//         "140",
//         "160",
//         "180",
//         "200",
//         "220",
//         "240",
//         "260",
//         "280",
//       ],
//     },
//     yAxis: {
//       title: {
//         text: "",
//       },
//     },
//     plotOptions: {
//       line: {
//         dataLabels: {
//           enabled: true,
//         },
//         enableMouseTracking: false,
//       },
//     },
//     series: [

//         {
  
//           name: "",
  
//           data: [
  
//             {
  
             
  
//               y: 16,
  
//               y: 20,
  
//               y: 30,
  
//               y: 40,
  
//               color: "#63666a" /* color of the unfilled part of the bar */,
  
//             },
  
//           ],
  
//         },
  
//       ],
//   });
// }

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
