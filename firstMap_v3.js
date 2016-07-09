function loadFirstMap_v3() {
    var latlng = new google.maps.LatLng(35.774511, -78.632755);
    var mapOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("testMap_v3"), mapOptions);

    renderMarker(map, 35.774511, -78.632755, "raleigh, nc", "test point", "january 13, 2006", "");
}

loadFirstMap_v3();
