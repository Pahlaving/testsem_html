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

  // $('.add-phone').on('click' ,function (e) {
  //   e.preventDefault();
  //   $('#add-phone-form').toggle();
  // });
  // $('.add-emergency-contact').on('click' ,function (e) {
  //   e.preventDefault();
  //   $('#emergency_contact_form').toggle();
  // });

  hiddenFormsToggl('.add-phone', '#add-phone-form');
  hiddenFormsToggl('.add-emergency-contact', '#emergency_contact_form');

  function hiddenFormsToggl(trigger, target) {
    $(trigger).on('click' ,function (e) {
      e.preventDefault();
      $(target).toggle();
    });
  }


  $('#login__popup #form .log .outline__chek').click(function (e) {
    $("#login__popup #form .log input").attr('checked','checked');
  });


});
