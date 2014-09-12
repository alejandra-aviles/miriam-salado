jQuery("audio").each(function(index, audioElement){
	audiojs.create(audioElement, {
		imageLocation: "/imagenes/vendor/audio/player-graphics.gif"
	});
});