$(document).ready(function() { 
    pageHeight();
    sideNav();
    showSmallMenu();    
    $(window).resize(function(){
        pageHeight();
        sideNav();
        showSmallMenu();
    });
    function pageHeight() {
        $('.login .page-content').css("min-height", "calc(100vh - " + $('.page-footer').outerHeight() + "px)" );
        if ((document.querySelector('.side-nav') !== null) && (document.querySelector('.content-wrapper-main') !== null)) {
            $('.side-nav, .content-wrapper-main').css("height", "calc(100vh - " + $('.custom-nav').outerHeight() + "px)" );
            $('.content-wrapper-main').css("width", "calc(100% - " + $('.side-nav').outerWidth() + "px)")
        }
        if(document.querySelector('.content-body') !== null) {
            $('.content-body').css("min-height", "calc(100vh - " + ($('.custom-nav').outerHeight() + $('.page-footer').outerHeight()) + "px)" );
        }
    }
    function sideNav() {
        $('.side-nav').css("height", "calc(100vh - " + $('.custom-nav').outerHeight() + "px)" );
    }
    $(".sidebar-toogle").click(function(){
        $('body').toggleClass('small-side-nav');
        $('.content-wrapper-main').css("width", "calc(100% - " + "72px)");
    });
    function showSmallMenu() {
        if($(window).width() < 1199) {
            $('body').addClass('small-side-nav');
            $('.content-wrapper-main').css("width", "calc(100% - " + "72px)");
        }  else {
            $('body').removeClass('small-side-nav');
            $('.content-wrapper-main').css("width", "calc(100% - " + $('.side-nav').outerWidth() + "px)")
        }
    }


   
});

