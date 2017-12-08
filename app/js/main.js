$(document).ready(function(){

	$('.registr').click(function (e) {
    e.preventDefault();
    $("#myModalBox").modal('show');
  });
  $('.login').click(function (e) {
    e.preventDefault();
    $("#myModal").modal('show');
  });

	$('.slider').click(function() {
	  $(this).toggleClass('slider__toggle');
	  $('.receive__guests__text').toggleClass('receive__guests__toggle');
	  $('.receive__guests span').toggleClass('receive__guests__toggle');
	});

	// Show FileInput field as Button
  // Apply this way:
	// <input type="file" title="Add Photo from PC">
	$('input[type=file]').bootstrapFileInput();
  $('.file-inputs').bootstrapFileInput();

});
