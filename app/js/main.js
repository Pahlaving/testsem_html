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

<<<<<<< HEAD
  $('.add-phone').on('click' ,function (e) {
    e.preventDefault();
    $('#add-phone-form').toggle();
  })
=======
  hiddenFormsToggl('.add-phone', '#add-phone-form');
  hiddenFormsToggl('.add-emergency-contact', '#emergency_contact_form');
  hiddenFormsToggl('.add-shipping-address', '#add_shipping_address_form');

  function hiddenFormsToggl(trigger, target) {
    $(trigger).on('click' ,function (e) {
      e.preventDefault();
      $(target).toggle();
    });
  }


  $('#login__popup #form .log .outline__chek').click(function (e) {
    $("#login__popup #form .log input").attr('checked','checked');
  });

>>>>>>> a8b1d76344894febc042eb3209322c3bd08e116c

});
