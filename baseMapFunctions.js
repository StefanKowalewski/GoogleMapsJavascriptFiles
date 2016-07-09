//javascript code written by stefan kowalewski, february 2007

//gets default marker with default icon
function getDefaultMarker(lat, lng, location, event, date, url) {
   point = new GLatLng(lat, lng);

   var marker = createDefaultMarker(point, createInfoText(location, event, date, url));
   return marker;
}

//gets default marker with custom icon
function getDefaultMarkerWithIcon(lat, lng, location, event, date, url, image, shadow, iconWidth, iconHeight, shadowWidth, shadowHeight, anchorLeft, anchorDown) {
   point = new GLatLng(lat, lng);

   var icon = new GIcon();
   icon.image = image;
   icon.shadow = shadow;
   icon.iconSize = new GSize(iconWidth, iconHeight);
   icon.shadowSize = new GSize(shadowWidth, shadowHeight);
   icon.iconAnchor = new GPoint(anchorLeft, anchorDown);
   icon.infoWindowAnchor = new GPoint(5, 1);

   var marker = createDefaultMarkerWithIcon(point, icon, createInfoText(location, event, date, url));
   return marker;
}

//creates default marker
function createDefaultMarker(point, html) {
   var marker = new GMarker(point);
   GEvent.addListener(marker, 'click', function() { marker.openInfoWindowHtml(html); });
   return marker;
}

//creates default marker with custom icon
function createDefaultMarkerWithIcon(point, icon, html) {
   var marker = new GMarker(point,icon);
   GEvent.addListener(marker, 'click', function() { marker.openInfoWindowHtml(html); });
   return marker;
}

//creates info window for marker
function createInfoText(location, event, date, url) {
   var insertUrl = null;
   if (url != '') {
      insertUrl = "<br /><a href='" + url+ "'>check it out</a>";
   }
   else {
      insertUrl = "";
   }

   return '<div id="InfoWindow" style="color:black;font-size:small;">' +
        '<div id="InfoWindowCaption" style="font-weight:bold;color:#000">' +
        '<nobr>' + event + '</nobr></div>' +
        '<div id="InfoWindowContent">' +
        '<nobr>' + location + '</nobr>' +
        '<br /><nobr>' + date + '</nobr>' +
        '<nobr>' + insertUrl + '</nobr></div>' +
        '</div>';
}

//creates polyline from encoded values
function createPolylineFromEncoded(polylinePoints, polylineLevels, polylineColor) {
   var returnPolyline = new GPolyline.fromEncoded({
      color: polylineColor,
      weight: 4,
      opacity: 0.8,
      points: polylinePoints,
      levels: polylineLevels,
      zoomFactor: 2,
      numLevels: 18
   });

   return returnPolyline;
}

//loads scripts for maps
function loadScript(url) {
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e);
}
