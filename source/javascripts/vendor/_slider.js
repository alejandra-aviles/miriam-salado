$(document).ready(function(){
	$('.slider').each(function(index, sliderEl){
		var slider = $(sliderEl);
		var triggerId = $(this).data('slider-trigger');
		var trigger = $("#" + triggerId);

		trigger.on('click', function(event){
			slider.slideDown('slide');
			event.preventDefault();
		});

		slider.on('mouseleave', function(){
			slider.slideUp('slide');
		});
	});
});
