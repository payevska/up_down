function mouseAutoNew(wrapper_el,width_original,height_original,kolvo,path_image,speed) {

    var new_height_top = 0;
    var new_height_all = 0;

	var element_style = wrapper_el.find('.table');
    element_style.append('<span></span>')

    new_height_all = kolvo*new_height;

    element_style.attr('style','width:'+new_width+'px; height:'+new_height+'px; overflow: hidden; position:relative;');
    element_style.find('span').attr('style','background-image:url('+path_image+'); width:'+new_width+'px; height:'+new_height_all+'px; position:absolute; top:0; left:0; display:block; background-repeat: no-repeat; background-size: 100% 100%;');


    var new_width = parseFloat(element_style.width());
    var new_height = (parseFloat(element_style.width() / (width_original/height_original) ));


	var i = kolvo-1;
	var step = -new_height;
	var new_height_top = 0;

	function funcNew() {

        new_height_top = i * new_height;
        new_height_all = kolvo*new_height;

		element_style.attr('style','width:'+new_width+'px; height:'+new_height+'px; overflow: hidden; position:relative;');
        element_style.find('span').attr('style','background-image:url('+path_image+'); width:'+new_width+'px; height:'+new_height_all+'px; position:absolute; top:'+-new_height_top+'px; left:0; display:block; background-repeat: no-repeat; background-size: 100% 100%;');

        if(i<1) {
        	i = kolvo-1;
		} else {
            i--;
		}


	}
	clearIntervalNew = setInterval(funcNew, speed);


}