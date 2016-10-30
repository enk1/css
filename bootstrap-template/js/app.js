$(document).ready(function(){
    $('.imac').addClass("animate");
    $(window).scroll(function(){
        let y = $(this).scrollTop();
        if(y >= 200) {
            $('.mobile').addClass("animate");
            $('.laptop').addClass("animate");
        }
        if(y < 200) {
            $('.mobile').removeClass("animate");
            $('.laptop').removeClass("animate");
        }
    });
});