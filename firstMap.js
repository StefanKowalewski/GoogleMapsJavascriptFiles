function loadFirstMap() {
   var map = new GMap2(document.getElementById("testMap"));
   map.setCenter(new GLatLng(35.774511, -78.632755), 14, map.getMapTypes()[0]);
   //get default map ui controls
   var uiOptions = map.getDefaultUI();
   //turn off map default map type control
   uiOptions.controls.maptypecontrol = false;
   map.setUI(uiOptions);
   //add satellite/show labls control
   map.addControl(new GHierarchicalMapTypeControl());

   var raleighTestMapMarker = getDefaultMarker(35.774511, -78.632755, "raleigh, nc", "test point", "january 13, 2006", "");
   map.addOverlay(raleighTestMapMarker);
}

loadFirstMap();