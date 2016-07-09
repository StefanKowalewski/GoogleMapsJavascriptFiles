function load2015_SRT() {
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + 
        encodeURIComponent("SELECT DateVisited, Title, Location, Coordinates, Image, URL FROM 1sFvLhLcp5tSYgr-hQCibiUesa8D7KfoeNlGVmK6S")
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
    var map = new google.maps.Map(document.getElementById("2015_SRT"), mapOptions);
    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');

    renderSRTData(response, map, markerIcon);
}

load2015_SRT();
