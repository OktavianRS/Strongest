jQuery(function($){

    $(".content-slider").cycle({
        prev:'.left-slide',
        next:'.right-slide'
    })

    $(".toggle").click(function(){
        $(".toggle-menu").toggleClass("open");
    });

});

