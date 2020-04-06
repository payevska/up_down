$(document).ready(function(){   

    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    /*var links = $('.header-nav li a');
    
    links.last().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });*/


    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.header-nav li a');
    const menuLength = menuItem.length;

    for(let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    } 

       
    var links = $('.header-nav li a');
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });


    /*scroll-home......https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2*/

    /*$('a').on('click', function(event) {

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
      });*/




    

    /*image portfolio-left.... http://www.web.cofp.ru/vse-o-sajtakh/
    sozdanie-sajta/javascript/jquery/154-uvelichenie-izobrazheniya-pri-nazhatii-na-nego*/ 

    /*$(".carousel-foto__project_fotoProject").click(function(){   // Событие клика на маленькое изображение
        var img = $(this);  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        
        
        $(".portfolio-right__project-big-foto_fotoProject-big").remove(); // Удаляем разметку всплывающего окна


        $(".portfolio-right__project-big-foto").append("<img src='"+src+"' class='portfolio-right__project-big-foto_fotoProject-big'>"); // Само увеличенное фото
                          
        $(".portfolio-right__project-big-foto").fadeIn(800); // Медленно выводим изображение
        
    });*/


   
    // burger-menu in header-page
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__burger-button');
        let links = menu.find('.burger-list li a');
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


    //for form
    $('form').submit(function(event) {
        event.preventDefault();
        var name = $('#mail-name').val();
        var email = $('#mail-email').val();
        var message = $('#mail-message').val();
        var submit = $('#mail-submit').val();
        $('.form-message').load('mail.php', {
            name: name,
            email: email,
            message: message,
            submit: submit
        });
    });
    

    


});






 