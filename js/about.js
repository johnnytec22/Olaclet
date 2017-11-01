$(document).ready(function() {
    $('section .container .row .title-line').css('border-color', function() {
        return $(this).siblings('strong').css('background-color');
    });

    $('#team .thumbnail').on({
        'mouseenter': function() {
            $(this).find('.personal_img').css('box-shadow', '0 3px 2px 2px rgba(0,0,0, 0.3)');
        },
        'mouseleave': function() {
            $(this).find('.personal_img').css('box-shadow', 'none');
        }
    });

    //value icons
    $('#values .well h3').prepend('<i class="fa fa-dot-circle-o fa-fw gray"></i>');

    $('#values .well p').after('<i class="fa fa-diamond fa-sm green"></i>');
    $('#values .well p').after('<i class="fa fa-diamond fa-sm red"></i>');
    $('#values .well p').after('<i class="fa fa-diamond fa-sm blue"></i>');

    //team icons
    $('#team ul li .thumbnail .poster .team_icons').append('<i class="fa fa-star fa-sm blue"></i>');
    $('#team ul li .thumbnail .poster .team_icons').append('<i class="fa fa-star fa-sm red"></i>');
    $('#team ul li .thumbnail .poster .team_icons').append('<i class="fa fa-star fa-sm green"></i>');
    $('#team ul li .thumbnail .poster .team_icons').append('<i class="fa fa-star fa-sm gold"></i>');
});