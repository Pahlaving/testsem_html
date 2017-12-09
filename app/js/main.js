$(document).ready(function(){

	// $('.registr').click(function (e) {
 //    e.preventDefault();
 //    $("#myModalBox").modal('show');
 //  });
 //  $('.login').click(function (e) {
 //    e.preventDefault();
 //    $("#myModal").modal('show');
 //  });

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
    loop:true,
    items : 1, 
    autoplay: 3000,
    nav:false,
    pagination: true,
  });

  $('.tov').owlCarousel({
    loop:true,
    //autoplay: 3000,
    nav:true,
    navText : ["<img src='images/15.png' class='navlef' />","<img src='images/16.png' class='navrig hi' />"],
    pagination: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        767:{
          items:3
        },
        1000:{
            items:5
        }
    }
  });

  $('.nav-tabs a').click(function(e){
       e.preventDefault();
       $('.nav-tabs a').removeClass('actives');
     $(this).addClass('actives');
  });

  function inboxTableTool(taretTable) {
    var inboxTable = $(taretTable);
    var titledCells = $(inboxTable).find('[data-title]');
    if ($(window).width() < 768) {
      titledCells.each(function () {
        if (!$(this).hasClass('added-title')) {
          $(this).prepend('<div class="title">' + $(this).data('title') + '</div>');
        }
        $(this).addClass('added-title');
      });
    }
    else {
      titledCells.each(function () {
        $(this).find('.title').remove();
        $(this).removeClass('added-title');
      });
    }
  }

  inboxTableTool('.inbox-table');
  $(window).resize(function () {
    inboxTableTool('.inbox-table');
  });

});
