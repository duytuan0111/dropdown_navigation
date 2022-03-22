$(document).ready(function() {
    $('.bx-search').on('click', function(e) {
        $('.navbar').toggleClass('showInput');
        if ($('.navbar').hasClass('showInput')) {
            $('.bx').removeClass('bx-search').addClass('bx-x');
        } else {
            $('.bx').removeClass('bx-x').addClass('bx-search');
        }
    });
});