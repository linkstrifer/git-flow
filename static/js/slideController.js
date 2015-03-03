'use strict';

var temp_id = 0;
var $ = function(query) {
	return document.querySelector(query);
};

////

function nextSlide() {
	animate($('#step-' + temp_id))
	temp_id++;
}

function prevSlide() {
	if(temp_id > 0) {
		temp_id--;
	}
	$('#step-' + temp_id).beginElement();
}

function keyPress(event) {
	if(event.keyCode == 39 || event.keyCode == 40) {
		nextSlide();
	} else if(event.keyCode == 38 || event.keyCode == 37) {
		prevSlide();
	}
}

function animate(element) {
	if(element.childElementCount) {
		for(var i = 0; i < element.childElementCount; i++) {
			element.children[i].beginElement();
		}
	} else {
		element.beginElement();
	}
}

window.addEventListener('keydown', keyPress)