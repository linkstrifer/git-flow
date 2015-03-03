$(document).ready(function() {
	var controller = $.superscrollorama({
		triggetAtCenter: true,
		playoutAnimations: true
	});

	controller.pin($('.Section--1'), 1000, {
		anim: (new TimelineLite())
			.append(
				TweenMax.fromTo($('.Section--1 i.Repo--git'), .5, {
					css: {
						opacity: 0,
						top: -100,
						left: 300
					},
					immediateRender:true
				}, 
		        {
		        	css: {
		        		opacity: 1,
		        		top: 100
		        	}
		        })
			)
			.append(
				TweenMax.to($('.Section--1 i.Repo--git'), .5, {
					css: {
					}
				})
		    )
		}
	)
});