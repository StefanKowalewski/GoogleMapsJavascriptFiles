//javascript code written by stefan kowalewski, may 2015
//last modified: 

// Enable the visual refresh
google.maps.visualRefresh = true;

//global veriable to hold the current info window
//this is used to close the window when another one is opened
var curr_infw;

//creates marker with red motorcycle icon and info window
function renderMotorcycleMarker(map, lat, lng, location, event, date, url){
    var latlng = new google.maps.LatLng(lat, lng);
    var image = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_red.png');
    var shadow = new google.maps.MarkerImage('http://www.smallparadise.com/images/shadow.png');
    var myMarker = new google.maps.Marker({
        position: latlng,
        map: map,
        shadow: shadow,
        icon: image,
        title: location
    });

    createInfoWindow(map, myMarker, location, event, date, url);
}

//renders marker and InfoWindow for Scooter's Road Trip points
function renderSRTData(response, map, markerIcon) {
    var numRows = response.getDataTable().getNumberOfRows();

    for (i = 0; i < numRows; i++) {
        // Get row data for the info window
        var date = response.getDataTable().getValue(i, 0);
        var event = response.getDataTable().getValue(i, 1);
        var location = response.getDataTable().getValue(i, 2);
        var string_coordinates = response.getDataTable().getValue(i, 3);
        var image = response.getDataTable().getValue(i, 4);
        var url = response.getDataTable().getValue(i, 5);

        var split_coordinates = string_coordinates.split(",");
        var lat = split_coordinates[0];
        var lng = split_coordinates[1];
        var coordinate = new google.maps.LatLng(lat, lng);

        createSRTMarker(map, date, event, location, coordinate, image, url, markerIcon);
    }
}

//creates marker for Scooter's Road Trip points
function createSRTMarker(map, date, event, location, coordinate, image, url, markerIcon) {
    var gtMarker = new google.maps.Marker({
        position: coordinate,
        map: map,
        icon: markerIcon,
        title: location
    });
    createSRTInfoWindow(map, gtMarker, location, date, image, event, url);
}

//creates InfoWindow for Scooter's Road Trip points
function createSRTInfoWindow(map, marker, location, date, image, event, url){
    var insertUrl = null;
    if (url != '') {
       insertUrl = "<a href='" + url+ "'>See More</a>";
    }
    else {
       insertUrl = "";
    }

    var contentString = '<div id="InfoWindow" style="width:240px;color:black;">' +
        '<img src="' + image + '" style="width:125px;float:left;margin:0px 10px 0px -5px;" />' +
        '<div id="InfoWindowCaption" style="font-weight:bold">' +
        '<nobr>' + event + '</nobr></div>' +
        date + '<br />' +
        '<nobr>' + location + '</nobr><br />' +
        insertUrl + '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

	google.maps.event.addListener(infowindow, 'domready', function() {
		document.getElementById('InfoWindow').parentNode.style.overflow='';
		document.getElementById('InfoWindow').parentNode.parentNode.style.overflow='';
    });

    google.maps.event.addListener(marker, 'click', function() {
  		//close previosly opened window if opened at all
		if(curr_infw) { curr_infw.close();} 
		// save info about opened window 
		curr_infw = infowindow;	
        infowindow.open(map, marker);
    });
}

//loads scripts for maps
function loadScript(url) {
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e);
}

//loads the maps if the element is on the page
function loadMaps() {
    if  (document.getElementById("2015_SRT") != null) loadScript("http://smallparadise.com/scripts/2015_SRT.js");
}
