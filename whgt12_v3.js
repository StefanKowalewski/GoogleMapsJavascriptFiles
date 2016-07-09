function loadWHGT12_v3() {
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + 
        encodeURIComponent("SELECT DateVisited, StoreNumber, Coordinates, Location, Image FROM 2821108")
    );
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(37,-78.49847);
    var mapOptions = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("WHGT12_v3"), mapOptions);
    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/whicon.png');

    renderGTData(response, map, markerIcon);
}

loadWHGT12_v3();
