function load2016AlaskaTrip() {
    var sqlQuery = "SELECT DateVisited, Location, Coordinates, Title, Url, MarkerIcon, TrackColor, EncodedTrack FROM 1sRSKdqYTn30Sd0D28sOd0xGpygS9uIwlHD-cZVXC ORDER BY Title ASC";
    sqlQuery = encodeURIComponent(sqlQuery);
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + sqlQuery);
        
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(44.6713733, -110);
    var mapOptions = {
        zoom: 2,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2016AlaskaTrip"), mapOptions);

    renderFTDataWithCoords(response, map);
}

load2016AlaskaTrip();
