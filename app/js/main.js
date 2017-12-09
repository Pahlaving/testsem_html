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

  hiddenFormsToggl('.add-phone', '#add-phone-form');
  hiddenFormsToggl('.add-emergency-contact', '#emergency_contact_form');
  hiddenFormsToggl('.add-shipping-address', '#add_shipping_address_form');

  function hiddenFormsToggl(trigger, target) {
    $(trigger).on('click' ,function (e) {
      e.preventDefault();
      $(target).toggle();
    });
  }

  $(".starrr").starrr();

  $('#login__popup #form .log .outline__chek').click(function (e) {
    $("#login__popup #form .log input").attr('checked','checked');
  });

  $('.car').owlCarousel({
    loop:true,
    autoplay: 3000,
    margin:10,
    nav:true,
    navText : ["<img src='images/9.png' class='navlef' />","<img src='images/10.png' class='navrig' />"],
    pagination: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  $('.owls').owlCarousel({
    items : 1, 
    autoplay: 3000,
    nav:false,
    pagination: true,
  });

  $('.nav-tabs a').click(function(e){
       e.preventDefault();
       $('.nav-tabs a').removeClass('actives');
     $(this).addClass('actives');
  });

});
