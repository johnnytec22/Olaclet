
//the following controls the background changing functionality attached to the navbar both on-scroll and at the top
$(document).ready(function() {

    function determineNavBarBackground() {
        if ($(document).scrollTop() < 70) {
            $('nav .navbar-toggle .icon-bar').css('background', 'white');
            $('nav').css('background', 'transparent').css('box-shadow', 'none').css('color', 'white');
            $('nav a').css('color', 'white');
            $('nav .navbar-brand h3').css('color', 'white');
        }else {
            $('nav .navbar-toggle .icon-bar').css('background', '#09c924');
            $('nav .navbar-brand h3').css('color', 'purple');
            $('nav .navbar-nav a').css('color', 'rgba(0, 0, 0, 0.6)');
            $('nav').css('background', 'white').css('box-shadow', '0px 6px 10px rgba(0, 0, 0, 0.2)');
        }
    }
    /**runs on load */
    determineNavBarBackground();

    $('.navbar-toggle').click(function() {
        $('nav .navbar-collapse').toggleClass('nav-dropdown-background');
        $('nav .navbar-collapse ul li a').toggleClass('nav-link-dropdown-color');
    });

    
    $(window).scroll( function () {
        determineNavBarBackground();
    });

    //for hidding and showing page-icons
    function determinePageIconVisibility() {
        if ( $(window).width() < 769) {
            $('header i.page-icon').hide();
        }else{
            $('header i.page-icon').show();
        }
    }
    //on load call
    determinePageIconVisibility();
    //on resize call
    $(window).on('resize', function() {
        determinePageIconVisibility();
    })
})
