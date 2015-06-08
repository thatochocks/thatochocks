// JavaScript Document
///////////link scroll effect//////////////////////////////
$('.menu ul a, .next a, .back2top a, .about a, .contact-me a').click(function(e) {
    e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($.attr(this, 'href') ).offset().top},1000, 'easeOutQuad');
});

/////////////menu hide////////////////////////////////
$('.menu ul li').stop().animate({height:'0', opacity: '0'},2000);
  var menuhidden = true;
  $('.menu .nav').click(function(e){
  e.preventDefault();
  if(menuhidden){
        $('.menu ul li').stop().animate({height:'50px'},400).css({
    opacity: '1'
    }, 400);
    menuhidden=false;
  }
  else
  {
    $('.menu ul li').stop().animate({height:'0', opacity: '0'},600);
    menuhidden = true;
 ; }
  });

///////////////////////tweens///////////////////////////////
$(document).ready(function(){
  $( "<div class='loading'><img src='images/loader.gif' /></div>" ).prependTo( "body" );
	window.addEventListener("keydown", function(e) {
    $('#captcha').realperson();
    // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
    }, false);
    
  $( "<style>.left{margin-left:-10%; position:relative;}.right{margin-left:10%;position:relative;}</style>" ).appendTo( "head" );
  $('.skills li, #spic, #tpic, #lpic, .slides').addClass('ease animate'); 

  $('.ease').bind('inview', function(event, visible) {
    if (visible === true) {
      var offset = $(this).offset();
      $(this).removeClass('animate right left');
       
    }
    else
    {
      var offset = $(this).offset();
      $(this).addClass('animate');
    }
  });
  $('.footer').bind('inview', function(event, visible) {
    if (visible === true) {
      var offset = $(this).offset();
      $("#footer-content-wrapper").addClass('footer-fix');
    }
    else
    {
      var offset = $(this).offset();
      $("#footer-content-wrapper").removeClass('footer-fix');
    }
  });
    $('.hide-progress').bind('inview', function(event, visible) {
      if (visible === true) {
        var offset = $(this).offset();
        $(this).removeClass('hide-progress');
      }
    });
///////////////////infinity slider/////////////////////////////////////
infinitySlider(
    infinitySliderId = 'slide1',
    infinitySliderCommandsClass = 'iS-Commands',
    infinitySliderPreviousButtonClass = 'iS-Previous',
    infinitySliderNextButtonClass = 'iS-Next',
    infinitySliderDotsClass = 'iS-Dots',
    infinitySliderDotClass = 'iS-Dot',
    infinitySliderDotActiveClass = 'iS-Dotactive',
    infinitySliderPlayButtonClass ='iS-Play',
    infinitySliderPlayButtonActiveClass ='iS-Playactive',
    infinitySliderStopButtonClass ='iS-Stop',
    infinitySliderStopButtonActiveClass ='iS-Stopactive',
    infinitySliderLoopIndicator ='iS-Loopline',
    infinitySliderContentClass ='iS-Content',  
    infinitySliderItemsClass = 'iS-Items',
    infinitySliderItemClass = 'iS-Item',
    infinitySliderKeyboardNavigation = true
  );
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
       $('.loading').css({visibility:'hidden'})
    }
}, 10);
});	
/////////////////////////loader/////////////

//////////////////////////////////////////