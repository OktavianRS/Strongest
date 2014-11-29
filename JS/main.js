jQuery(function($){
     $(".stats > .container > .ba-grid > .ba-width-1-2:first-child >div> div").click(function(){
        $(".stats > .container > .ba-grid > .ba-width-1-2:first-child >div>p").toggleClass("open");
    });
    $(".content-slider").cycle({
        prev:'.left-slide',
        next:'.right-slide'
    })
});

