$(document).ready(function() {
    $(".fancybox").fancybox({
        helpers: {
            buttons: {}
        }
    });

    $('.filter').on('click', function(){
        if(!($(this).hasClass('active'))) {
            $('.filter').removeClass('active');
            $(this).addClass('active');
            
            var filter = $(this).data('rel');
            
            'all' == filter ?
                $('.fancybox')
                .attr('data-fancybox-group','gallery')
                .not(':visible')
                .fadeIn()
                :
                $('.fancybox')
                .fadeOut(0)
                .filter(function(){
                    return $(this).data('filter') == filter;
                })
                .attr('data-fancybox-group',filter)
                .fadeIn(1000);
            
        }
    });
});
