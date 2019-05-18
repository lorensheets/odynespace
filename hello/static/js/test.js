
$(document).ready(function() {

  var browser = true;

  function detectmob() {
    if(window.innerWidth >= 768 && window.innerHeight >= 600) {

     if (browser == false) {
       browser = true;
       $('.arrow, .content').fadeOut(0);
       $('.quad').css({
         'height' : '50vh',
         'width' : '50vw'
       });
       $('.name > h2').css('display', 'none');
       $('.bio > p').css('display', 'none');
      }

    } else {

     browser = false;
     $('.quad').css({
       'height' : 'auto',
       'width' : '100vw'
     });
     $('.arrow, .content').fadeIn(0);
     $('.name > h2').css('display', 'block');
     $('.bio > p').css('display', 'block');
    }
  }

  detectmob();

  $(window).resize(function() {
    detectmob();
  });


  mapboxgl.accessToken = 'pk.eyJ1IjoibG9yZW5zaGVldHMiLCJhIjoiY2p2c2FoaHZ3MnhxaDQ4cGIyZWpyeHhvMiJ9.Mtc1AEMttKptyg7HDZsOEA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
    center: [-122.663882, 45.522583],
    zoom: 13,

  });
  var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.663882, 45.522583]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  }]
};
// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});



  var time = 700;
  var fast = 400;
  var easing = 'easeOutCirc';
  var height_open = '88vh';
  var height_close = '12vh';
  var width_open = '93vw';
  var width_close = '7vw';



    $('.quad').mouseenter(function() {

      if (browser) {
        $('.quad').clearQueue();

        $('.quad ').not(this).children('.content').fadeOut(200);
        $(this).children('.content').delay(300).fadeIn(300);

        $(this).animate({
          'height' : height_open,
          'width' : width_open
        }, {
          queue: false,
          duration: time,
          easing: easing
        });

        if ( $(this).attr('id') == 'br' ) {
          $(this).animate({
            'background-color' : '#39383f;'
          }, {
            queue: false,
            duration: time,
            easing: easing
          });

        } else {

          $('#br').animate({
            'background-color' : '#29282f'
          }, {
            queue: false,
            duration: time,
            easing: easing
          });

        }
        if ($(this).attr('id') == 'tr') {
          $('#br > .arrow').fadeIn();
        } else {
          $('#br > .arrow').fadeOut();
        }
        if ($(this).attr('id') == 'tl') {
          $('#bl > .arrow').fadeIn();
          $('#tr > .arrow').fadeIn();
        } else {
          $('#bl > .arrow').fadeOut();
          $('#tr > .arrow').fadeOut();
        }


        $(this).siblings().animate({
          'height' : height_open,
          'width' : width_close
        }, time, easing);

        i = $('.quad').index(this);

        if ( i > 1 ) {
         i = i - 2;
        }

        $(this).parent().siblings().children(":eq(" + i + ")").animate({
         'height' : height_close,
         'width' : width_open
        }, time, easing);

        $(this).parent().siblings().children(":eq(" + i + ")").siblings().animate({
          'height' : height_close,
          'width' : width_close
        }, time, easing);

      }

    });


    $('.person').mouseenter(function() {

      if (browser) {
        $(this).css({
          'filter' : 'grayscale(0) brightness(100%)',
          '-webkit-filter' : 'grayscale(0) brightness(100%)',
        });
        $('img', this).css({
          'transform' : 'scale(1.03)',
          '-webkit-transform' : 'scale(1.03)'
        });
        $('.person').not(this).css({
          'filter' : 'grayscale(0.5) brightness(70%)',
          '-webkit-filter' : 'grayscale(0.5) brightness(70%)',
        });
        $('.person').not(this).children('img').css({
          'transform' : 'scale(1.0)',
          '-webkit-transform' : 'scale(1.0)'
        });

        person = $(this).attr('id');

        $('.name > h2').css('display', 'none');
        $('.bio > p').css('display', 'none');

        $('.name > .' + person +'').css('display', 'block');
        $('.bio > .' + person +'').css('display', 'block');
      }
    });







});
