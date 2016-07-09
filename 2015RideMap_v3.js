function load2015RideMap_v3() {
    var sqlQuery = "SELECT DateVisited, Location, Coordinates, Title, Url, MarkerIcon, TrackColor, EncodedTrack FROM 1tseV5qMtjTPiG_951ENA0d0p4sZ_cgKF4koAKW4D";
    sqlQuery = encodeURIComponent(sqlQuery);
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + sqlQuery);
        
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(36.5, -80);
    var mapOptions = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2015Rides_v3"), mapOptions);

    renderFTDataWithCoords(response, map);
}

load2015RideMap_v3();
