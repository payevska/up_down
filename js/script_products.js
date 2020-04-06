$(document).ready(function(){   

    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    /*var links = $('.link-active');
    
    links.last().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });*/

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length;

    for(let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    /*carousel....  https://www.youtube.com/watch?v=casgv9Y8I1w&t=28s*/

    document.getElementById('slider-top').onclick = sliderTop;
    var top = -360;

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

    $(".carousel-foto__fotoProject").click(function(){   // Событие клика на маленькое изображение
        var img = $(this);  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        
        
        $(".portfolio-right__project-big-foto").remove(); // Удаляем разметку всплывающего окна


        $(".portfolio-right").append("<img src='"+src+"' class='portfolio-right__project-big-foto'>"); // Само увеличенное фото
                          
        $(".portfolio-right").fadeIn(800); // Медленно выводим изображение
        
    });


   
    // burger-menu in header-page
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


/*$(".carousel-foto__fotoProject").click(function(){   // Событие клика на маленькое изображение
        var img = $(this);  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        
        
        $(".portfolio-right__project-big-foto_fotoProject-big").remove(); // Удаляем разметку всплывающего окна


        $(".portfolio-right__project-big-foto").append("<img src='"+src+"' class='portfolio-right__project-big-foto_fotoProject-big'>"); // Само увеличенное фото
                          
        $(".portfolio-right__project-big-foto").fadeIn(800); // Медленно выводим изображение
        
    });*/