$(document).ready(function() {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.landing-page-bg-overlay').hide();
  }

  var scrollButtonVisible = false;
  var offset = window.pageYOffset;


  var landingPageBg = $(".landing-page-bg");
  var rocketRender = $(".rocket-render");
  var spaceBg = $(".rocket-render-container-bg");

  $(window).on('scroll', function() {
     window.requestAnimationFrame(scrollHandler);
  });

  function scrollHandler() {
    offset = window.pageYOffset;

    setTranslate(offset/2, landingPageBg);

    if (offset > window.innerHeight * 0.5) {
      setTranslate(-(offset - (window.innerHeight)) * 0.03, rocketRender);
      setTranslate( (offset - (window.innerHeight * 0.5)) * 0.15, spaceBg);
      setRotate( -(offset - (window.innerHeight)) * 0.05, (offset - (window.innerHeight)) * 0.01, rocketRender);
    }

    if (offset > window.innerHeight * 0.75 && scrollButtonVisible == false) {
      $('#scrollToTop').animate({
        'opacity': 1
      }, 500);
      scrollButtonVisible = true;
    } else if (offset < window.innerHeight * 0.75 && scrollButtonVisible == true) {
      $('#scrollToTop').animate({
        'opacity': 0
      }, 500);
      scrollButtonVisible = false;
    }
  }

  function setTranslate(offset, el) {
    el.css("transform","translate3d(0,"+ Math.round(offset/2) +"px,0)");
    el.css("-webkit-transform","translate3d(0,"+ Math.round(offset/2) +"px,0)");
    el.css("-moz-transform","translate3d(0,"+ Math.round(offset/2) +"px,0)");
    el.css("-ms-transform","translate3d(0,"+ Math.round(offset/2) +"px,0)");
    el.css("-o-transform","translate3d(0,"+ Math.round(offset/2) +"px,0)");
  }
  function setRotate(offset, deg, el) {
    el.css("transform","translate3d(0, " + Math.round(offset) + "px, 0) rotate(" + deg + "deg)");
  }

  $('#scrollToTop').on('click', function() {
    $('html,body').animate({'scrollTop':0},1000);
  });

  $('.request-info').on('click', function() {
    var contactScrollPos = $('#contactPage').offset();
    $('html,body').animate({'scrollTop':contactScrollPos.top},1000);
  });


});
