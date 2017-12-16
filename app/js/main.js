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

  $('.partners').owlCarousel({
    loop:true,
    items : 4, 
    autoplay: 3000,
    nav:false,
    pagination: true,
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
        items:4
      }
    }
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

  /* Detail Head Carouser */

  // var detail_head_carouser = $(".detail-head-carouser");

  detail_head_carouser(".detail-head-carouser");

  function detail_head_carouser(detail_head_class){

    var detail_head_carouser = $(detail_head_class);



    detail_head_carouser.find('.item').each(function () {
      var bg_image = $(this).find('.bg-image');
      $(this).css('background-image', 'url('+bg_image.attr('src')+')');
      bg_image.hide();
    });

    detail_head_carouser.owlCarousel({
      loop: true,
      items : 1,
      startPosition: 0,
      //autoplay: 3000,
      video:true,
      lazyLoad:true,
      nav: true,
      dots: false,
      pagination: false,
      navContainer: '#detail-head-carouser-nav'
    });

    $('.tool-switcher-slider').on('click', function (e) {
      e.preventDefault();
      var $switcherSlider = $(this);
      $switcherSlider.toggleClass('checked');

      if($(this).hasClass( "checked" )){
        detail_head_carouser.trigger('destroy.owl.carousel');
        console.log("Checked");
        $('.detail-head-carouser .item-image').hide();
        $('.detail-head-carouser .item-video').show();
        // $('.detail-head-carouser .item-image').appendTo('.hidden-carousel-elements .images');
        // $('.hidden-carousel-elements .videos .item-video').appendTo('.detail-head-carouser');
        detail_head_carouser.owlCarousel({
          loop: true,
          items : 1,
          startPosition: 0,
          //autoplay: 3000,
          video:true,
          lazyLoad:true,
          nav: true,
          dots: false,
          pagination: false,
          navContainer: '#detail-head-carouser-nav'
        });
      }else{
        console.log("unChecked");
        detail_head_carouser.trigger('destroy.owl.carousel');
        $('.detail-head-carouser .item-image').show();
        $('.detail-head-carouser .item-video').hide();
        // $('.detail-head-carouser .item-video').appendTo('.hidden-carousel-elements .videos');
        // $('.hidden-carousel-elements .images .item-image').appendTo('.detail-head-carouser');
        detail_head_carouser.owlCarousel({
          loop: true,
          items : 1,
          startPosition: 0,
          //autoplay: 3000,
          video:true,
          lazyLoad:true,
          nav: true,
          dots: false,
          pagination: false,
          navContainer: '#detail-head-carouser-nav'
        });
      }
      // console.log('Check! Place here your ajax.');

    });

  }

  $('.nav-tabs a').click(function(e){
      e.preventDefault();
      $('.nav-tabs a').removeClass('actives');
    $(this).addClass('actives');
  });

  $('.list_style__list').click(function(e){
    e.preventDefault();
    $('.products__plits').removeClass('actives__products');
    $('.products__lists').removeClass('actives__products');
    $('.products__lists').addClass('actives__products');
  });

  $('.list_style__plits').click(function(e){
    e.preventDefault();
    $('.products__plits').removeClass('actives__products');
    $('.products__lists').removeClass('actives__products');
    $('.products__plits').addClass('actives__products');
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

        if($('.sidebar').has('.sidebar-menu').length) {

          console.log('Has sidebar menu');

          $('.page-content').prepend('<div class="notific-hamburger">Hamburger</div>');

          $('.notific-hamburger').on('click', function () {
            $('.sidebar-menu ul').slideToggle();
          });

          $('.page-content')
            .prepend($('.nav-notific')).not(':has(.notific-hamburger)')
            .prepend('<div class="notific-hamburger">Hamburger</div>');
        }
        $('.nav-notific ul').hide();
      }else{
        $('.sidebar').prepend($('.nav-notific'));
        $('.nav-notific ul').show();
      }
    }


  notificMenuProcessor();

  inboxTableTool('.inbox-table', 768);

  $(window).resize(function () {
    notificMenuProcessor();
    inboxTableTool('.inbox-table', 768);
  });

  // Pricing checkbox

  $('#date, #check_in_date, #check_out_date, #start, #end, #op_start_date, #op_end_date').datetimepicker({
    timepicker: false
  });

  $( function() {
    $( "#check_home, #private_room, #check_individual, #check_group" ).checkboxradio({
      icon: false
    });
    $('#v_cent2 input[type="checkbox"]').checkboxradio({
      icon: false
    });
    $('#v_cent3 input[type="checkbox"]').checkboxradio({
      icon: false
    });
    $('#v_cent4 input[type="checkbox"]').checkboxradio({
      icon: false
    });
  });

  $('#time, #check_in_time, #check_out_time, #tstart, #tend').datetimepicker({
    datepicker:false,
    format:'H:i'
  });

  $('.sectright a').click(function(e){
    $('.sectright a').removeClass('actives');
    $(this).addClass('actives');
  });

  // Kalendar

  //$( "#datepicker" ).datepicker();


  $('.sectright a').click(function(e){
    e.preventDefault();
    $('#set_price_for_particular_dates').css('display', 'block !important');
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

  $('.close-notification').on('click', function (e) {
    e.preventDefault();
    $(this).parent().remove();
  });


  // Slider

  $('#slider').slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 100, 500 ],
    step: 50,
    slide: function( event, ui ) {
      $( "section#search__section .price" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });





 

  // Search button LOAD MORE

  $('.products__wrapper .load__more').click(function(){
    var count = 0;
    $('.products__wrapper .items').each(function(e){
      var th = $(this);
        if (!th.hasClass('active__item')){
          th.addClass('active__item');
          count++;
        }
        if (count === 6){
          return false;
        }
    });
  });

//   function drop_handler(ev) {
//     console.log("Drop");
//     ev.preventDefault();
//     // If dropped items aren't files, reject them
//     var dt = ev.dataTransfer;
//     if (dt.items) {
//       // Use DataTransferItemList interface to access the file(s)
//       for (var i=0; i < dt.items.length; i++) {
//         if (dt.items[i].kind == "file") {
//           var f = dt.items[i].getAsFile();
//           console.log("... file[" + i + "].name = " + f.name);
//         }
//       }

//     } else {
//       // Use DataTransfer interface to access the file(s)
//       for (var i=0; i < dt.files.length; i++) {
//         console.log("... file[" + i + "].name = " + dt.files[i].name);
//       }  
//     }
//   }

//   function dragover_handler(ev) {
//     console.log("dragOver");
//     // Prevent default select and drag behavior
//     ev.preventDefault();
//   }

//   function dragend_handler(ev) {
//     console.log("dragEnd");
//   // Remove all of the drag data
//   var dt = ev.dataTransfer;
//   if (dt.items) {
//     // Use DataTransferItemList interface to remove the drag data
//     for (var i = 0; i < dt.items.length; i++) {
//       dt.items.remove(i);
//     }
//   } else {
//     // Use DataTransfer interface to remove the drag data
//     ev.dataTransfer.clearData();
//   }
// }

  var notifications = $('.site-notifications .notification');
  notifications.each(function () {
    // $this = $(this);
    // console.log($this);
    $(this).find('.br-close')
      .on('click', function (e) {
        e.preventDefault();
        console.log($('.site-notifications').has('.notification').length);
        $(this).parent().remove();
        if($('.site-notifications').has('.notification').length == 0) {
          console.log($('.site-notifications').has('.notification').length);
          $('.site-notifications').remove();
        }
      });
  });

//Гамбургер меню

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }

  $(".hamburger").click(function(){
    $("section#search .sear").slideToggle(300);
  });

  $('select.star-select').barrating({
    theme: 'bootstrap-stars',
    initialRating: null,
    onSelect: function(value, text, event) {
      if (typeof(event) !== 'undefined') {
        // rating was selected by a user
        console.log(event.target);
      } else {
        // rating was selected programmatically
        // by calling `set` method
      }
    }
  });
  $('select.star-readonly').barrating({
    theme: 'bootstrap-stars',
    readonly: true,
    initialRating: null,
    showSelectedRating: true
  });

  $('.modal-footer__btn input').click(function(){
    var value_chek = $('#add_pricing_options input:checked').length;
    var addblock = '<div class="p_over"><div class="npr2"><input name="inp2" type="text" placeholder="Enter your addititional pricing name"></div><div class="p_sel3"><p>-</p><select name="sel3"><option value="-">-</option><option value="-">-</option><option value="-">-</option><option value="-">-</option></select></div><div class="p_sel4"><p>-</p><select name="sel4"><option value="-">-</option><option value="-">-</option><option value="-">-</option><option value="-">-</option></select></div><div class="npr3"><input name="inp3" type="text" placeholder="0"></div><div class="pp_med"></div></div>';
    var ar = "";
    for(var i = 0; i < value_chek; i++){
      ar = ar + addblock;
    }
    document.getElementById("insert__block").innerHTML = ar;
  });

  $('#my-awesome-dropzone .btn__submit').click(function(){
    var addblock = '<input name="add__media__link" id="add__media__link" placeholder="Add media link"></input>';
    $('#my-awesome-dropzone .pricing__input__whith').append(addblock);
  });

  // Calendar 
  
  $('.calender_box').click(function(){
    var calendar__day = $(this).attr('data-day');
    var calendar__month = $(this).attr('data-month');
    var calendar__year = $(this).attr('data-year');
    var price = $(this).attr('data-price');
    $('#op_start_date').attr('value', calendar__year + '/' + calendar__month + '/' + calendar__day); 
    $('#op_end_date').attr('value', calendar__year + '/' + calendar__month + '/' + calendar__day);
    $('#op_price').attr('value', price);
  });

  $('.month-nav-previous').click(function(){
    $('.current-month-selection').removeClass('calendar__active__month');
    $('.current-month-selection-prev ').addClass('calendar__active__month');
    $('.calenBox').removeClass('calendar__active');
    $('#prev__manth').addClass('calendar__active')
  });

  $('.month-nav-next').click(function(){
    $('.current-month-selection').removeClass('calendar__active__month');
    $('.current-month-selection-next').addClass('calendar__active__month');
    $('.calenBox').removeClass('calendar__active');
    $('#next__manth').addClass('calendar__active')
  });

});

