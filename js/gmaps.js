var wolvega = new google.maps.LatLng(52.880287, 6.014583);
var oldeberkoop = new google.maps.LatLng(52.938998, 6.127945);
var katlijk = new google.maps.LatLng(52.947370, 6.012435);
var starter = new google.maps.LatLng(52.918041,6.040421);
var map;
var marker;

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,    
    center: starter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }


  map = new google.maps.Map(mapCanvas, mapOptions);

  wolvegamarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: wolvega,    
  });

  oldeberkoopmarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: oldeberkoop,
    });

  katlijkmarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: katlijk,
    });
  // google.maps.event.addListener(wolvegamarker, 'click', location.href='https://www.google.nl/maps/dir//52.880287,+6.014583/@52.8802016,6.0100575,16z/data=!3m1!4b1!4m6!4m5!1m0!1m3!2m2!1d6.014583!2d52.880287?hl=nl');


}

function toggleBounce(locationmarker) {

  if (locationmarker.getAnimation() != null) {
    locationmarker.setAnimation(null);
  } else {
    locationmarker.setAnimation(google.maps.Animation.BOUNCE);
    // gotolocation(katlijk);
  }
}


$('#wolvega').click(function() {
  map.setCenter(wolvega);
  map.setZoom(16);
});

$('#oldeberkoop').click(function() {
  map.setCenter(oldeberkoop);
  map.setZoom(16);
});

$('#katlijk').click(function() {
  map.setCenter(katlijk);
  map.setZoom(16);
});

$('#wolvega').hover(function() {
  wolvegamarker.setAnimation(google.maps.Animation.BOUNCE);;
},
function() {
  wolvegamarker.setAnimation(null);
});

$('#oldeberkoop').hover(function() {
  oldeberkoopmarker.setAnimation(google.maps.Animation.BOUNCE);;
},
function() {
  oldeberkoopmarker.setAnimation(null);
});

$('#katlijk').hover(function() {
  katlijkmarker.setAnimation(google.maps.Animation.BOUNCE);;
},
function() {
  katlijkmarker.setAnimation(null);
});

function gotolocation(location)  {
  map.setCenter(location);
}

google.maps.event.addDomListener(window, 'load', initialize);
