$(document).ready(function(){   

    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    var links = $('.link-active');
    
    links.last().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
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






 