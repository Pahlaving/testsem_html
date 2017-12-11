$(document).ready(function(){

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
    pagination: true
  });

  $('#recent__carusel .tov').owlCarousel({
    loop:true,
    autoplay: 3000,
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

  $('#similar-list .tov').owlCarousel({
    loop:true,
    autoplay: 3000,
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
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  var detail_head_carouser = $(".detail-head-carouser");
  detail_head_carouser.find('.item').each(function () {
    var bg_image = $(this).find('.bg-image');
    $(this).css('background-image', 'url('+bg_image.attr('src')+')');
    bg_image.hide();
  });

  detail_head_carouser.owlCarousel({
    loop: true,
    items : 1,
    // autoplay: 3000,
    nav: true,
    dots: false,
    pagination: false,
    navContainer: '#detail-head-carouser-nav'
  });

  $('.nav-tabs a').click(function(e){
       e.preventDefault();
       $('.nav-tabs a').removeClass('actives');
     $(this).addClass('actives');
  });

  function inboxTableTool(taretTable, resolution) {
    var inboxTable = $(taretTable);
    var titledCells = $(inboxTable).find('[data-title]');
    if ($(window).outerWidth() < resolution) {
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

  function notificMenuProcessor() {

    if ($(window).outerWidth() < 768) {
      $('.nav-notific ul').hide();
      $('.page-content')
        .prepend($('.nav-notific')).not(':has(.notific-hamburger)')
        .prepend('<div class="notific-hamburger">Hamburger</div>');
    }else{
      $('.sidebar').prepend($('.nav-notific'));
      $('.nav-notific ul').show();
    }
  }

  $('.page-content').prepend('<div class="notific-hamburger">Hamburger</div>');

  $('.notific-hamburger').on('click', function () {
    $('.nav-notific ul').slideToggle();
  });

  notificMenuProcessor();
  inboxTableTool('.inbox-table', 768);

  $(window).resize(function () {
    notificMenuProcessor();
    inboxTableTool('.inbox-table', 768);
  });

  $('#date, #check_in_date, #check_out_date').datetimepicker({
    timepicker: false
  });
  $('#time, #check_in_time, #check_out_time').datetimepicker({
    datepicker:false,
    format:'H:i'
  });
  
  $('.sectright a').click(function(e){
    e.preventDefault();
    $('.sectright a').removeClass('actives');
     $(this).addClass('actives');
  });
  if ($(window).width() < 768) {
    $('.drop').click(function(){
      $('.lang').toggle();
   });
    $('.dropdown').click(function(e){
      e.preventDefault();
      $(this).find('.ul').toggle();
   });
  }
  $('.sel select').each(function(){
    $(this).siblings('p').text( $(this).children('option:selected').text() );
  });
  $('.sel select').change(function(){
    $(this).siblings('p').text( $(this).children('option:selected').text() );
  });
  $('.sel div:after').click(function(){
    $(this).parent().find('select').click();
  });

  $('#slider').slider({
    values: [ 500 ]
  });

  $( "#slider" ).slider({
    change: function( event, ui ) {
      var options = $( "#slider" ).slider( "value" );
      console.log(options);
      $("section#search__section #search .s_d .s_l .s_ic .price").html(options);
    }
  });

  $('.tool-switcher-slider').on('click', function (e) {
    e.preventDefault();
    var $switcherSlider = $(this);

    $switcherSlider.toggleClass('checked');
    console.log('Check! Place here your ajax.');

  });

  $( function() {
    $( "#check_home, #private_room" ).checkboxradio();
    $("#v_cent2 input").checkboxradio();
    $("#v_cent3 input").checkboxradio();

  });


  $('.sidebar-gallery .image-link')
  .magnificPopup(
  {
    type:'image',
    disableOn: "400",
    key: 'some-key',
    gallery: {
      enabled: true,
      preload: [0,2],
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    },
    image: {
      titleSrc: 'title'
    }
  }
  );

});

