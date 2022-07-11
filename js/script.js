// $('.close').click(function () {
//     $('.notification').slideUp(500);
// })

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        nav: false,
        dots:false,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1030:{
                items:1
            }
        }
    });



});

