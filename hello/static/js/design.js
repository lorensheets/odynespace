

window.onscroll = scroll;

function scroll() {
  $('.fade').each(function() {

    if ( window.pageYOffset + window.innerHeight > $(this).offset().top ) {
      $(this).css('opacity', 1);
    }

  });
}
