$(function() {
  var itms = {
  media   : ($("#tt-media li").length)
  };

 $.each( itms, function( i, val ) {
   $( "#tt-" + i ).addClass('tt-nav__itemcount-'+val);
 });

});

  var pushbar = new Pushbar({
    blur:true,
    overlay:true,
  });

$(document).ready(function() {
      $(document).scroll(function(event) {
        var scroll=$(this).scrollTop();
        if($(this).scrollTop()>450){
            $('header').addClass('fixed');
        }
        else{
            $('header').removeClass('fixed');
        }
      });


       AOS.init();
});


$(document).ready(function($) {

  $(".owl-carousela").owlCarousel({
 nav:false,
 loop:true,
 autoplay:true,
 responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
  });

    $(".owl-carousell").owlCarousel({
 nav:false,
 loop:true,
 autoplay:true,
 responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});


