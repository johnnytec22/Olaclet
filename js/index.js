$(document).ready(function() {
    
    var showcase = $('#showcase');
    showcase.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $(".owl-item .header_info").on('mouseenter', function() {
        showcase.trigger('stop.owl.autoplay')
    });
    $(".owl-item .header_info").on('mouseleave', function() {
        showcase.trigger('play.owl.autoplay')
    });

    var test = $(".testimony-carousel");
    test.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: 1000,
        autoplayTimeout: 5000,
        items: 1,
        animateOut: 'bounceOutLeft',
        animateIn: 'bounceInRight'
    });
    
    //services over-lay animation
    $('#services .thumbnail .overlay-info').addClass('animated slideInUp');
    $('#services .thumbnail .poster .overlay-info .dark_product_overlay').hide();

    $('#services .thumbnail').on({
        'mouseenter': function() {
            var dark_overlay = $(this).children('div.poster').children('div.overlay-info').find('.dark_product_overlay');
            dark_overlay.addClass('animated fadeInUp');
            $(this).find('.poster .overlay-info').css('opacity', '0.8');
            dark_overlay.show();
        },
        'mouseleave': function() {
            var dark_overlay = $(this).children('div.poster').children('div.overlay-info').find('.dark_product_overlay');
            dark_overlay.removeClass('animated fadeInUp');
            $(this).find('.poster .overlay-info').css('opacity', '0.4');
            dark_overlay.hide();
        }

    });


    $('#industries div:has(div.circle-bordered)').css({
        'margin-bottom':'50px',
        'marigin-bottom': '0px'
    });

    function whyAdeptalColumnTextAlignment() {
        if($(window).width() < 992) {
            $('.adeptal-column .content p').addClass('text-center');
        }else{
            $('.adeptal-column .content p').removeClass('text-center');
        }
    }

    //this function runs when the document is read or loaded
    whyAdeptalColumnTextAlignment();
    //this runs when the screen is resized 
    $(window).on('resize',  whyAdeptalColumnTextAlignment);

    var isToggled = false;

    $('#industries .container #industries_toggle .btn-primary').on('click', function() {
        if (isToggled) {
            $(this).html('More');
            isToggled = false;
        }else{
            $(this).html('Less');
            isToggled = true;   
        }
    });

    function alignIndustryTextAndImage() {
        if($(window).width() < 752 ) {
            $('#industries h4').addClass('text-center');
            $('#industries .circle-bordered').css('float', 'none').addClass('center-block');   
        }else{
            $('#industries h4').removeClass('text-center');
            $('#industries .circle-bordered').removeClass('text-center').css('float', 'right');
        }
    }

    //on load
    alignIndustryTextAndImage();

    //on widow resize 
    $(window).on('resize', alignIndustryTextAndImage);

    //services bullets
    $('#services .thumbnail .caption h4').prepend('<i class="fa fa-dot-circle-o fa-xs green"></i>');
    $('#services .thumbnail .caption h4').prepend('<i class="fa fa-dot-circle-o fa-xs red"></i>');
    $('#services .thumbnail .caption h4').prepend('<i class="fa fa-dot-circle-o fa-xs "></i>')
    
    //services overlay info icons
    $('#services .thumbnail .poster .dark_product_overlay p').prepend('<i class="fa fa-dot-circle-o fa-sm last"></i> <br/>');
    $('#services .thumbnail .poster .dark_product_overlay p').prepend('<i class="fa fa-dot-circle-o fa-sm green"></i> <br/>');
    $('#services .thumbnail .poster .dark_product_overlay p').prepend('<i class="fa fa-dot-circle-o fa-sm red"></i>');
    $('#services .thumbnail .poster .dark_product_overlay p').prepend('<i class="fa fa-dot-circle-o fa-sm blue"></i>');

    //services info button
    $('#services .thumbnail .poster .overlay-info').after('<button class="btn btn-primary btn-sm">info</button>');
    //testimonies providers icons
    $('#testimony .item p').prepend('<i class="fa fa-black-tie fa-fw"></i>');
});