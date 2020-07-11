$('ul a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
    targetOffset = $(id).offset().top,
    menuHeight = $('ul a').innerHeight();
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);	
});