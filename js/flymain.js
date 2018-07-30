 $(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
    });
});
$(document).ready(function(){
  var length = $("#text-carousel").width();
  $(".part2 li").css({'width': length });
  $('.menu ul li a').click(function(){
    $('.menu-checkbox').click();
  });
    $(window).scroll( function(){
            var st = $(this).scrollTop();     
            var article1 = $("#article1").offset().top - 1000;
            var article2 = $("#article2").offset().top - 800;
            var article3 = $("#article3").offset().top - 600;
            var article4 = $("#article4").offset().top - 400;      
            if( st >= article1 ){                
               $('.photo1').addClass('fadeInLeft');
               $('.photo2').addClass('fadeInRight');   
            }
            if( st >= article2 ){                
               $('.photo3').addClass('fadeInLeft');
               $('.photo4').addClass('fadeInRight');   
            }
            if( st >= article3 ){                
               $('.photo5').addClass('fadeInLeft');
               $('.photo6').addClass('fadeInRight');   
            }             
            if( st >= article4 ){                
               $('.photo7').addClass('fadeInLeft');
               $('.photo8').addClass('fadeInRight');   
            } 
    });



  var $window = $(window);
  function checkWidth() {
          var windowsize = $window.width();
    if (windowsize > 768) {
      location.reload();
    }      
  }
  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(checkWidth, 0); 
  });


});



(function($, Modernizr) {
    $(function() {
        $('#text-carousel').jcarousel({
            wrap: 'circular',
            transitions: Modernizr.csstransitions ? {
                transforms:   Modernizr.csstransforms,
                transforms3d: Modernizr.csstransforms3d,
                easing:       'ease'
            } : true
        });

$('#text-carousel').jcarouselAutoscroll({
    autostart: true,
    interval: 8000
});

        $('#right').jcarouselControl({
            target: '-=1'
        });

        $('#left').jcarouselControl({
            target: '+=1'
        });
    });
})(jQuery, Modernizr);


  $("#right").click(function() {
    var length = $("#text-carousel").width();
    $(".part2 li").css({'width': length });
  });

  $("#left").click(function() {
    var length = $("#text-carousel").width();
    $(".part2 li").css({'width': length });
  });    

$(function() {
  $(".hastag0").click(function(){
    $("html,body").animate({scrollTop:$('.choice').offset().top - 20}, 900);
    return false;
  });
});
$(function() {
  $(".hastag1").click(function(){
    $("html,body").animate({scrollTop:$('.part2').offset().top - 20}, 900);
    return false;
  });
});
$(function() {
  $(".hastag2").click(function(){
    $("html,body").animate({scrollTop:$('.part4').offset().top - 20 }, 900);
    return false;
  });
});
$(function() {
  $(".hastag3").click(function(){
    $("html,body").animate({scrollTop:$('.part3').offset().top - 20}, 900);
    return false;
  });
});

$(function() {
  $("#hastag0").click(function(){
    $("html,body").animate({scrollTop:$('.choice').offset().top}, 900);
    return false;
  });
});
$(function() {
  $("#hastag1").click(function(){
    $("html,body").animate({scrollTop:$('.part2').offset().top}, 900);
    return false;
  });
});
$(function() {
  $("#hastag2").click(function(){
    $("html,body").animate({scrollTop:$('.part4').offset().top}, 900);
    return false;
  });
});
$(function() {
  $("#hastag3").click(function(){
    $("html,body").animate({scrollTop:$('.part3').offset().top}, 900);
    return false;
  });
});