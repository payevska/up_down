$(document).ready(function(){   

    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    var links = $('.link-active');
    
    links.last().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });


   

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


   /* $('.gambyrger-menu__toggler').on('click', function() {
      document.getElementById("gambyrger-close").style.visibility = "visible";
    });
  
    $('.gambyrger-link').on('click', function() {
      document.getElementById("gambyrger-close").style.visibility = "hidden";
      document.getElementById("gambyrger-close").style.visibility = "visible";
    });*/
    
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__burger-button');
        let links = menu.find('.burger-menu__burger-link');
        let overlay = menu.find('.burger-menu__overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger-menu__active');

            if  (menu.hasClass('burger-menu__active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }

    }
  
    burgerMenu('.burger-menu');


});









/*function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__button');
        let links = menu.find('.burger-menu__link');
        let overlay = menu.find('.burger-menu__overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger-menu__active');

            if  (menu.hasClass('burger-menu__active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }

    }
  
    burgerMenu('.burger-menu');*/