var wolvega = new google.maps.LatLng(52.880287, 6.014583);
var oldeberkoop = new google.maps.LatLng(52.938998, 6.127945);
var katlijk = new google.maps.LatLng(52.947370, 6.012435);
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
    center: wolvega,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }


  map = new google.maps.Map(mapCanvas, mapOptions);

  wolvegamarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: wolvega
  });

  oldeberkoopmarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: oldeberkoop
  });

  katlijkmarker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: katlijk
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);


}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    // gotolocation(katlijk);
  }
}


$('#wolvega').hover(function() {
  map.setCenter(wolvega);
});

$('#oldeberkoop').hover(function() {
  map.setCenter(oldeberkoop);
});

$('#katlijk').hover(function() {
  map.setCenter(katlijk);
});

function gotolocation(location)  {
  map.setCenter(location);
}

google.maps.event.addDomListener(window, 'load', initialize);
