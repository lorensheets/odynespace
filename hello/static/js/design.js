function scroll() {
  $('.fade').each(function() {

    if ( window.pageYOffset + window.innerHeight / 1.75 > $(this).offset().top ) {
      $(this).css('opacity', 1);
    }

  });
}

window.onload = scroll;
window.onscroll = scroll;
