$(document).ready(function(){   

    /* for active a ... http://jsfiddle.net/sdLs7urp/1/
      https://toster.ru/q/136525*/ 

    var links = $('.link-active');
    
    links.last().addClass('active');
    
    links.on('click', function(){
        links.removeClass('active');
        $(this).addClass('active');
    });



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
        
        
        $(".portfolio-right__project-big-foto_fotoProject-big").remove(); // Удаляем разметку всплывающего окна


        $(".portfolio-right__project-big-foto").append("<img src='"+src+"' class='portfolio-right__project-big-foto_fotoProject-big'>"); // Само увеличенное фото
                          
        $(".portfolio-right__project-big-foto").fadeIn(800); // Медленно выводим изображение
        
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
    

    //for portfolio select

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("portfolio-price__price-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
        }
    }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);


});