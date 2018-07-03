

window.onscroll = scroll;

function scroll() {
  $('.fade').each(function() {

    if ( window.pageYOffset > $(this).offset() ) {
      $(this).css('opacity', 1);
    }

  })
}
