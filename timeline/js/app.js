$(document).ready(function() {
    $('.wrapper').prepend('<div class="menuTrigger">Menu</div>');
    $('.menuTrigger').on('click', function() {
        $('.menu').slideToggle();
    });
});