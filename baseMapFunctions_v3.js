//javascript code written by stefan kowalewski, january 2011
//last modified: january 2014
//  - updating to use google maps refresh

// Enable the visual refresh
google.maps.visualRefresh = true;

//global veriable to hold the current info window
//this is used to close the window when another one is opened
var curr_infw;

//creates marker with green motorcycle icon and info window
function renderMarker(map, lat, lng, location, event, date, url){
    var latlng = new google.maps.LatLng(lat, lng);
    var image = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');
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

//creates default marker with default icon and info window
function renderDefaultGoogleMarker(map, lat, lng, location, event, date, url){
    var latlng = new google.maps.LatLng(lat, lng);
    var myMarker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: location
    });

    createInfoWindow(map, myMarker, location, event, date, url);
}

//renders marker and InfoWindow for gran tour points
function renderGTData(response, map, markerIcon) {
    var numRows = response.getDataTable().getNumberOfRows();

    for (i = 0; i < numRows; i++) {
        // Get row data for the info window
        var date = response.getDataTable().getValue(i, 0);
        var store = response.getDataTable().getValue(i, 1);
        var location = response.getDataTable().getValue(i, 3);
        var string_coordinates = response.getDataTable().getValue(i, 2);
        var image = response.getDataTable().getValue(i, 4);

        var split_coordinates = string_coordinates.split(",");
        var lat = split_coordinates[0];
        var lng = split_coordinates[1];
        var coordinate = new google.maps.LatLng(lat, lng);

        createGTMarker(map, date, store, coordinate, location, image, markerIcon);
    }
}

//creates marker for grand tour points
function createGTMarker(map, date, store, coordinate, location, image, markerIcon) {
//    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/whicon.png');
    var gtMarker = new google.maps.Marker({
        position: coordinate,
        map: map,
        icon: markerIcon,
        title: location
    });
    createGTInfoWindow(map, gtMarker, location, store, date, image);
}

//creates InfoWindow for grand tour points
function createGTInfoWindow(map, marker, location, storeNumber, date, image){
    var contentString = '<div id="InfoWindow" style="margin:7px;color:black;">' +
        '<img src="' + image + '" width="192" style="float:left;margin:0px 10px 0px 0px;" />' +
        date + '<br />' +
        location + '<br />' +
        '# ' + storeNumber + '</div>';
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

//renders marker and InfoWindow for fusion table points
function renderFTData(response, map) {
    var numRows = response.getDataTable().getNumberOfRows();

    for (i = 0; i < numRows; i++) {
        // Get row data for the info window
        var date = response.getDataTable().getValue(i, 0);
        var location = response.getDataTable().getValue(i, 1);
        var string_coordinates = response.getDataTable().getValue(i, 2);
        var title = response.getDataTable().getValue(i, 3);
        var url = response.getDataTable().getValue(i, 4);
        var markerIcon = response.getDataTable().getValue(i, 5);

        var split_coordinates = string_coordinates.split(',');
        var lat = split_coordinates[0];
        var lng = split_coordinates[1];
        var coordinate = new google.maps.LatLng(lat, lng);

        createFTMarker(map, date, location, coordinate, title, url, markerIcon);
    }
}

//renders marker and InfoWindow for fusion table points
function renderFTDataWithCoords(response, map) {
    var numRows = response.getDataTable().getNumberOfRows();

    for (i = 0; i < numRows; i++) {
        // Get row data for the info window
        var date = response.getDataTable().getValue(i, 0);
        var location = response.getDataTable().getValue(i, 1);
        var string_coordinates = response.getDataTable().getValue(i, 2);
        var title = response.getDataTable().getValue(i, 3);
        var url = response.getDataTable().getValue(i, 4);
        var markerIcon = response.getDataTable().getValue(i, 5);
        var trackColor = response.getDataTable().getValue(i, 6);
        var encodedTrack = response.getDataTable().getValue(i, 7);
        var decodedPath = google.maps.geometry.encoding.decodePath(encodedTrack);
        
        var split_coordinates = string_coordinates.split(',');
        var lat = split_coordinates[0];
        var lng = split_coordinates[1];
        var coordinate = new google.maps.LatLng(lat, lng);

        //put marker on map
        createFTMarker(map, date, location, coordinate, title, url, markerIcon, i + 1);
        
        //add track
        renderPath(decodedPath, map, trackColor);
    }
}

//creates marker for fusion table points
function createFTMarker(map, date, location, coordinate, title, url, markerIcon, displayOrder) {
    var icon = null;
    var shadow = null;
    if (markerIcon != '') {
        markerIcon = new google.maps.MarkerImage(markerIcon);
        markerShadow = new google.maps.MarkerImage('http://www.smallparadise.com/images/shadow.png');
    }
    else {
        markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');
        markerShadow = new google.maps.MarkerImage('http://www.smallparadise.com/images/shadow.png');
    }
    var ftMarker = new google.maps.Marker({
        position: coordinate,
        map: map,
        shadow: markerShadow,
        icon: markerIcon,
        title: location,
        zIndex: displayOrder
    });

    createFTInfoWindow(map, ftMarker, date, location, title, url);
}

//creates InfoWindow for fusion table points
function createFTInfoWindow(map, marker, date, location, title, url) {
    var insertUrl = null;
    if (url != '') {
       insertUrl = "<a href='" + url + "'>check it out</a>";
    }
    else {
       insertUrl = "";
    }

    var contentString = '<div id="InfoWindow" style="color:black;font-size:80%;">' +
        '<div id="InfoWindowCaption" style="font-weight:bold">' +
        '<nobr>' + title + '</nobr></div>' +
        '<div id="InfoWindowContent">' +
        '<nobr>' + location + '</nobr>' +
        '<br /><nobr>' + date + '</nobr>' +
        '<br /><nobr>' + insertUrl + '</nobr></div>' +
        '</div>';

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

//creates info window for marker
function createInfoWindow(map, marker, location, event, date, url){
    var insertUrl = null;
    if (url != '') {
       insertUrl = "<a href='" + url+ "'>check it out</a>";
    }
    else {
       insertUrl = "";
    }

    var contentString = '<div id="InfoWindow" style="color:black;font-size:80%;">' +
        '<div id="InfoWindowCaption" style="font-weight:bold">' +
        '<nobr>' + event + '</nobr></div>' +
        '<div id="InfoWindowContent">' +
        '<nobr>' + location + '</nobr>' +
        '<br /><nobr>' + date + '</nobr>' +
        '<br /><nobr>' + insertUrl + '</nobr></div>' +
        '</div>';

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

//renders the path on the map
function renderPath(decodedPath, map, color){
    var latlngs = new google.maps.MVCArray();
    for (var i = 0; i < decodedPath.length; ++i) {
        var newLocation = new google.maps.LatLng(decodedPath[i].lat(), decodedPath[i].lng());
        latlngs.push(newLocation);
    }

    var displayPath = createDisplayPath(map, color);
    displayPath.setPath(latlngs);
}

//create new display path
function createDisplayPath(map, color){
  var displayPath = new google.maps.Polyline({
	map: map,
	strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 2,
    path: new google.maps.MVCArray()
  });
  return displayPath;
}

//renders marker and InfoWindow for Scooter's Road Trip points
function renderSRTData(response, map, markerIcon) {
    var numRows = response.getDataTable().getNumberOfRows();

    for (i = 0; i < numRows; i++) {
        // Get row data for the info window
        var date = response.getDataTable().getValue(i, 0);
        var store = response.getDataTable().getValue(i, 1);
        var string_coordinates = response.getDataTable().getValue(i, 2);
        var location = response.getDataTable().getValue(i, 3);
        var image = response.getDataTable().getValue(i, 4);

        var split_coordinates = string_coordinates.split(",");
        var lat = split_coordinates[0];
        var lng = split_coordinates[1];
        var coordinate = new google.maps.LatLng(lat, lng);

        createSRTMarker(map, date, store, coordinate, location, image, markerIcon);
    }
}

//creates marker for Scooter's Road Trip points
function createSRTMarker(map, date, store, coordinate, location, image, markerIcon) {
//    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/whicon.png');
    var gtMarker = new google.maps.Marker({
        position: coordinate,
        map: map,
        icon: markerIcon,
        title: location
    });
    createSRTInfoWindow(map, gtMarker, location, store, date, image);
}

//creates InfoWindow for Scooter's Road Trip points
function createSRTInfoWindow(map, marker, location, storeNumber, date, image){
    var contentString = '<div id="InfoWindow" style="margin:7px;color:black;">' +
        '<img src="' + image + '" width="192" style="float:left;margin:0px 10px 0px 0px;" />' +
        date + '<br />' +
        location + '<br />' +
        '# ' + storeNumber + '</div>';
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
    if  (document.getElementById("2016AlaskaTrip") != null) loadScript("http://smallparadise.com/scripts/2016AlaskaTrip.js");
    if  (document.getElementById("2015Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2015RideMap_v3.js");
    if  (document.getElementById("2014Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2014RideMap_v3.js");
    if  (document.getElementById("2014hog_abc_v3") != null) loadScript("http://smallparadise.com/scripts/2014hog_abc.js");
    if  (document.getElementById("2013RFK_v3") != null) loadScript("http://smallparadise.com/scripts/2013RFK_v3.js");
    if  (document.getElementById("2013CF1K_v3") != null) loadScript("http://smallparadise.com/scripts/2013cf1k_v3.js");
    if  (document.getElementById("SCGT13_v3") != null) loadScript("http://smallparadise.com/scripts/scgt13_v3.js");
    if  (document.getElementById("2013Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2013RideMap_v3.js");
    if  (document.getElementById("2012CF1K_v3") != null) loadScript("http://smallparadise.com/scripts/2012cf1k_v3.js");
    if  (document.getElementById("SCGT12_v3") != null) loadScript("http://smallparadise.com/scripts/scgt12_v3.js");
    if  (document.getElementById("WHGT12_v3") != null) loadScript("http://smallparadise.com/scripts/whgt12_v3.js");
    if  (document.getElementById("2012Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2012RideMap_v3.js");
    if  (document.getElementById("2011Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2011RideMap_v3.js");
    if  (document.getElementById("2010Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2010RideMap_v3.js");
    if  (document.getElementById("2009Rides_v3") != null) loadScript("http://smallparadise.com/scripts/2009RideMap_v3.js");
    if  (document.getElementById("2008rides_v3") != null) loadScript("http://smallparadise.com/scripts/2008RideMap_v3.js");
    if  (document.getElementById("2008blueridge_v3") != null) loadScript("http://smallparadise.com/scripts/2008BlueRidgeParkway_v3.js");
    if  (document.getElementById("2007rides_v3") != null) loadScript("http://smallparadise.com/scripts/2007RideMap_v3.js");
    if  (document.getElementById("2007tailofthedragon_v3") != null) loadScript("http://smallparadise.com/scripts/2007TailOfTheDragonMap_v3.js");
    if  (document.getElementById("2006rides_v3") != null) loadScript("http://smallparadise.com/scripts/2006RideMap_v3.js");
    if  (document.getElementById("sturgis2006PlannedMap_v3") != null) loadScript("http://smallparadise.com/scripts/sturgis2006PlannedMap_v3.js");
    if  (document.getElementById("2005rides_v3") != null) loadScript("http://smallparadise.com/scripts/2005RideMap_v3.js");
    if  (document.getElementById("testMap_v3") != null) loadScript("http://smallparadise.com/scripts/firstMap_v3.js");
}
