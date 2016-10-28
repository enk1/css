$(document).ready(function() {
    $('#car-body').on('click', function(){
        $('body').toggleClass('pause');
        $('.wheel-front').toggleClass('pause');
        $('.wheel-back').toggleClass('pause');
    });
});