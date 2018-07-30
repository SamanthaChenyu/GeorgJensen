function moveToSelected(element) {



  if (element == 'next') {
    var selected = $('.selected').next();

  } else if (element == 'prev') {
    var selected = $('.selected').prev();

  } else {
    var selected = element;

  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass('selected');

  $(prev).removeClass().addClass('prev');
  $(next).removeClass().addClass('next');

  $(nextSecond).removeClass().addClass('nextRightSecond');
  $(prevSecond).removeClass().addClass('prevLeftSecond');

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

// $('#carousel div').click(function() {
//   moveToSelected($(this)); 
// });



$(function(){
      var carousel = $('#carousel ul');

      var carouselChild = carousel.find('li');

      var clickCount = 0;
      var width = $(window).width();

      if( width > 1191 ) {
        itemWidth = carousel.find('li:first').width()-40; //Including margin
      } else if ( width < 1190 && width > 769 ) {
        itemWidth = carousel.find('li:first').width()-68;
      } else if ( width < 769 && width > 415 ){
        itemWidth = carousel.find('li:first').width()-110;
      } else if ( width < 415 && width > 376 ) {
        itemWidth = carousel.find('li:first').width()-170;
      } else if ( width < 376 && width > 321 ) {
        itemWidth = carousel.find('li:first').width()-175;        
      } else if ( width < 321 ) {
        itemWidth = carousel.find('li:first').width()-185; 
      } else {
        // add
      }


      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);
      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 

          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        carousel.finish().animate({
          left : '-='+itemWidth
        },300);

      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);
        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);

      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });



function myFunction() {
   setInterval(function(){
    $('#next').click();
  },8000);
}
$(document).ready(function () {
    myFunction();
});



$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
