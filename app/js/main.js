$(document).ready(function(){
	$('.slider').click(function() {
	  $(this).toggleClass('slider__toggle');
	  $('.receive__guests__text').toggleClass('receive__guests__toggle');
	  $('.receive__guests span').toggleClass('receive__guests__toggle');
	});
  $('input[type=file]').bootstrapFileInput();
  $('.file-inputs').bootstrapFileInput();
});
