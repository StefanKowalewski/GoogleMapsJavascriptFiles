function load2014RideMap_v3() {
    var sqlQuery = "SELECT DateVisited, Location, Coordinates, Title, Url, MarkerIcon, TrackColor, EncodedTrack FROM 1Vp_M35yreGxV6IcF9IjXa6v0cvsoZ27Wraq91jc";
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
    var map = new google.maps.Map(document.getElementById("2014Rides_v3"), mapOptions);

    renderFTDataWithCoords(response, map);
}

load2014RideMap_v3();
