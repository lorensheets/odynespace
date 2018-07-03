

window.onscroll = scroll;

function scroll() {
  $('.fade').each(function() {

    if ( window.pageYOffset + window.innerHeight / 2 > $(this).offset().top ) {
      $(this).css('opacity', 1);
    }

  });
}
