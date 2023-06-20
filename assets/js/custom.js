$(document).ready(function() { 
    pageHeight();
    sideNav();
    $(window).resize(function(){
        pageHeight();
        sideNav();
    });
    function pageHeight() {
        $('.page-content').css("min-height", "calc(100vh - " + $('.page-footer').outerHeight() + "px)" );
    }
    function sideNav() {
        $('.side-nav').css("height", "calc(100vh - " + $('.custom-nav').outerHeight() + "px)" );
    }

   
});

