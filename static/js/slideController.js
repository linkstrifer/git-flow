var temp_id = 0;

////

function addIDs() {
	$('.Section').each(function() {
		$(this).attr('id', temp_id);
		temp_id++;
	});
	$($('.Section')[0]).addClass('is-active');
}

function nextSlide() {
	$.scrollTo({
		top: '+=100px'
	}, 1000);
}

$(document).ready(function() {
	addIDs();
	
});

$('body').keydown(function(event) {
	if(event.which == 39 || event.which == 38) {
		event.preventDefault();
		nextSlide();
	}
	else if(event.which == 37 || event.which == 40) {
		event.preventDefault();
		nextSlide();
	}
});
