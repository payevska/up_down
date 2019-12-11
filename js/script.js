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
        top = top - 90;
        if(top < -360) {
            top = -360;
        }
        polosa.style.top = top + 'px';
    }

    document.getElementById('slider-bottom').onclick = sliderBottom;


    function sliderBottom(){
        var polosa = document.getElementById('polosa');
        top = top + 90;
        if(top > 0) {
            top = 0;
        }
        polosa.style.top = top + 'px';
    }

    /*image portfolio-left.... http://www.web.cofp.ru/vse-o-sajtakh/
    sozdanie-sajta/javascript/jquery/154-uvelichenie-izobrazheniya-pri-nazhatii-na-nego*/ 

    $(".carousel-foto__project_fotoProject").click(function(){   // Событие клика на маленькое изображение
        var img = $(this);  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        
        
        $(".portfolio-left__project-big-foto_fotoProject-big").remove(); // Удаляем разметку всплывающего окна


        $(".portfolio-left__project-big-foto").append("<img src='"+src+"' class='portfolio-left__project-big-foto_fotoProject-big'>"); // Само увеличенное фото
                          
        $(".portfolio-left__project-big-foto").fadeIn(800); // Медленно выводим изображение
        
    });


    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    var links = $('.link-active');
    
    links.first().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });


    /*instead vh ----   https://css-tricks.com/the-trick-to-viewport-units-on-mobile/*/
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    

});


