function loadSCGT12_v3() {
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + 
        encodeURIComponent("SELECT DateVisited, StopNumber, Coordinates, Location, Image FROM 2821647")
    );
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(38.080384499999994,-78.40707);
    var mapOptions = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("SCGT12_v3"), mapOptions);
    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');

    renderGTData(response, map, markerIcon);
}

loadSCGT12_v3();
