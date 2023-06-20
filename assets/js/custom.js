$(document).ready(function() { 
    pageHeight();
    $(window).resize(function(){
        pageHeight();
    });
    function pageHeight() {
        $('.page-content').css("min-height", "calc(100vh - " + $('.page-footer').outerHeight() + "px)" );
    }

   
});

