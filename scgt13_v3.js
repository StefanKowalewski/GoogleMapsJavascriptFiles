function loadSCGT13_v3() {
    var sqlQuery = "SELECT DateVisited, StopNumber, Coordinates, Location, Image FROM 1rfA-qTM0x1tb8ngFGzDO2Dtm3VcDw8KGgmwMCNI";
    sqlQuery = encodeURIComponent(sqlQuery);
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + sqlQuery);
        
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(37, -79);
    var mapOptions = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("SCGT13_v3"), mapOptions);
    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');

    renderGTData(response, map, markerIcon);
}

loadSCGT13_v3();
