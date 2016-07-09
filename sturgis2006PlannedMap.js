function sturgis2006PlannedMap() {
   var map = new GMap2(document.getElementById("sturgis2006PlannedMap"));
   map.setCenter(new GLatLng(40.78054143186031, -94.21875), 4, map.getMapTypes()[0]);
   //get default map ui controls
   var uiOptions = map.getDefaultUI();
   //turn off map default map type control
   uiOptions.controls.maptypecontrol = false;
   map.setUI(uiOptions);
   //add satellite/show labls control
   map.addControl(new GHierarchicalMapTypeControl());

   var myMarker = null;
   myMarker = getDefaultMarkerWithIcon(36.041326309894316, -78.497142791748059, "08-03-2006 depart youngsville, nc", "08-03-2006<br />youngsville, nc to manassas, va", "236 miles / 4h 13m", "", "http://www.google.com/mapfiles/dd-start.png", "http://www.google.com/mapfiles/shadow50.png", 12, 20, 22, 20, 6, 20);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(36.025084548793714, -78.50898742675781, "08-18-2006 arrive in youngsville, nc", "08-18-2006<br />back home", "", "", "http://www.google.com/mapfiles/dd-end.png", "http://www.google.com/mapfiles/shadow50.png", 12, 20, 22, 20, 6, 20);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(38.78316025746863, -77.51214981079102, "08-03-2006 overnight manassas, va", "08-04-2006<br />manassas, va to gary, in", "681 miles / 10h 40m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(41.593189, -87.34507822, "08-04-2006 overnight gary, in", "08-05-2006<br />gary, in to albert lea, mn", "431 miles / 6h 46m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(43.64793, -93.368698, "08-05-2006 overnight albert lea, mn", "08-06-2006<br />albert lea, mn to hot springs, sd", "568 miles / 8h 49m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(43.42248, -103.48292, "08-06-2006 - 08-09-2006<br />hot springs, sd", "08-10-2006<br />hot springs, sd to cody, wy", "395 miles / 7h 33m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(44.52491, -109.056473, "08-10-2006 overnight cody, wy", "08-11-2006<br />cody, wy to idaho falls, id", "244 miles / 5h 4m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(43.466869, -112.033318, "08-11-2006 overnight idaho falls, id", "08-12-2006<br />idaho falls, id to provo, ut", "256 miles / 3h 58m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(40.233761, -111.65863, "08-12-2006 overnight provo, ut", "08-13-2006<br />provo, ut to denver, co", "482 miles / 8h 28m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(39.739109, -104.983917, "08-13-2006 overnight denver, co", "08-14-2006<br />denver, co to salina, ks", "432 miles / 6h 32m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(38.840549, -97.610703, "08-14-2006 overnight salina, ks", "08-15-2006<br />salina, ks to st. louis, mo", "423 miles / 6h 25m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(38.62648, -90.198647, "08-15-2006 overnight st. louis, mo", "08-16-2006<br />st. louis, mo to paducah, ky", "174 miles / 2h 43m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(37.082863, -88.6004337, "08-16-2006 overnight paducah, ky", "08-17-2006<br />paducah, ky to knoxville, tn", "313 miles / 5h 10m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   myMarker = getDefaultMarkerWithIcon(35.96064, -83.921623, "08-17-2006 overnight knoxville, tn", "08-18-2006<br />knoxville, tn to youngsville, nc", "377 miles / 6h 14m", "", "http://maps.google.com/mapfiles/kml/pal2/icon27.png", "http://maps.google.com/mapfiles/kml/pal2/icon27s.png", 16, 16, 28, 16, 8, 16);
   map.addOverlay(myMarker);

   var sturgisPolyline = createPolylineFromEncoded("gi~zEdnb~MoovOgk_EsycPxn_{@eipKrnwc@``k@zlv|@eivEvq_a@xsmEfldQzmvRydhArr_B}svg@~nnDqa_l@zxh@ktfl@rnlHycwHzdzEqyp[wqK_d``@", "PPPPPPPPPPPOPP", "#336699");
   map.addOverlay(sturgisPolyline);
}

sturgis2006PlannedMap();