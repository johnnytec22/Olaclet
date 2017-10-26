$(document).ready(function() {
    $('section .container .row .title-line').css('border-color', function() {
        return $(this).siblings('strong').css('background-color');
    });
});