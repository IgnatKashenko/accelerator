$(document).on('click', '.video__controll__img', function() {
	var $video = $('#video'),
		src = $video.attr('src');

	$video.attr('src', src + '&autoplay=1');
	$('#video').addClass('show').removeClass('hide');
	$('.video__preview__img').addClass('hide').removeClass('show');
	$('.video__controll').addClass('hide').removeClass('show');
});
