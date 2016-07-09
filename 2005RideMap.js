function load2005RideMap() {
   var map = new GMap2(document.getElementById("2005rides"));
   map.setCenter(new GLatLng(35.774511, -82), 5, map.getMapTypes()[0]);
   //get default map ui controls
   var uiOptions = map.getDefaultUI();
   //turn off map default map type control
   uiOptions.controls.maptypecontrol = false;
   map.setUI(uiOptions);
   //add satellite/show labls control
   map.addControl(new GHierarchicalMapTypeControl());

   var myMarker = null;
   myMarker = getDefaultMarker(38.78332752456782, -77.511870861053475, "manassas, va", "july 4th weekend", "july 1-5, 2005", "http://anarchyinthetriangle.blogspot.com/2005/07/its-little-things-in-life.html");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(36.544121, -79.198518, "alton, va", "ama suzuki big kahuna nationals", "august 28, 2005", "http://anarchyinthetriangle.blogspot.com/2005/08/race-day.html");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(35.70752, -79.811699, "asheboro, nc", "ridercoach screening", "december 3, 2005", "http://anarchyinthetriangle.blogspot.com/2005/12/msf-ridercoach-screening-part-2.html");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(32.77644, -79.931511, "charleston, sc", "bike week cookout", "may 15, 2005", "");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(33.69920777465873, -78.89041900634766, "myrtle beach, sc", "bike week", "may 14-21, 2005", "");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(37.270168, -79.940596, "roanoke, va", "college friends reunion", "august 13-14, 2005", "http://anarchyinthetriangle.blogspot.com/2005/08/roanoke.html");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(35.670929, -80.474037, "salisbury, nc", "smoke out vi", "june 25-26, 2005", "");
   map.addOverlay(myMarker);

   myMarker = getDefaultMarker(36.51843150010327, -77.96072244644165, "lake gaston, nc", "sunday ride", "september 25, 2005", "http://anarchyinthetriangle.blogspot.com/2005/09/200-miles-there-and-back.html");
   map.addOverlay(myMarker);
}

load2005RideMap();