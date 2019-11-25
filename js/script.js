$(document).ready(function(){

   /* // byrger 

    
    (function($){
        $(function() {
            $('.byrger-menu__byrger-icon').on('click', function() {
                $(this).closest('.byrger-menu').toggleClass('byrger-menu_state_open');
            });
        });
    })(jQuery);

    // for Read more in Blog page

    $('.block-blog__info-blog_link1-blog').click(function () {
    $('#span1').show();

    });

    $('.block-blog__info-blog_link2-blog').click(function () {
    $('#span2').show();

    });

    $('.block-blog__info-blog_link3-blog').click(function () {
    $('#span3').show();
    
    });*/

/*scroll-home......https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2*/

$('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });




/*carousel....  https://www.youtube.com/watch?v=casgv9Y8I1w&t=28s*/

document.getElementById('slider-top').onclick = sliderTop;
var top = 0;

function sliderTop(){
    var polosa = document.getElementById('polosa');
    top = top - 130;
    if(top < -520) {
        top = -520;
    }
    polosa.style.top = top + 'px';
}

document.getElementById('slider-bottom').onclick = sliderBottom;


function sliderBottom(){
    var polosa = document.getElementById('polosa');
    top = top + 130;
    if(top > 0) {
        top = 0;
    }
    polosa.style.top = top + 'px';
}

/*function myFunction() {
  document.getElementById('demo').innerHTML = document.getElementById('imgs').img;
}*/

});

