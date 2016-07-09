    function loadMapFromFile() {
      var map = new GMap2(document.getElementById("mapFromFile"));
      map.setCenter(new GLatLng(35.774511, -82), 5, map.getMapTypes()[0]);
      //get default map ui controls
      var uiOptions = map.getDefaultUI();
      //turn off map default map type control
      uiOptions.controls.maptypecontrol = false;
      map.setUI(uiOptions);
      //add satellite/show labls control
      map.addControl(new GHierarchicalMapTypeControl());

      //initialize variables
      var point = null;
      var location = null;
      var event = null;
      var date = null;
      var url = null;

      point = new GLatLng(36.59795804130134, -78.29831600189209);
      location = "kerr dam, va";
      event = "week end ride";
      date = "january 29, 2006";
      url = "http://anarchyinthetriangle.blogspot.com/2006/01/kerr-lake.html";
      var marker = createMarker(point, createMapInfoText(location, event, date, url));
      map.addOverlay(marker);

      point = new GLatLng(35.722864, -81.657132);
      location = "morganton, nc";
      event = "ridercoach training";
      date = "april 28-30, 2006";
      url = "http://anarchyinthetriangle.blogspot.com/2006/05/week-two-down.html";
      var marker = createMarker(point, createMapInfoText(location, event, date, url));
      map.addOverlay(marker);

      point = new GLatLng(35.915644, -81.518216);
      location = "lenoir, nc";
      event = "ridercoach training";
      date = "may 12-14, 2006";
      url = "http://anarchyinthetriangle.blogspot.com/2006/05/finally-done.html";
      var marker = createMarker(point, createMapInfoText(location, event, date, url));
      map.addOverlay(marker);
    }

loadMapFromFile();


//        if  (document.getElementById("mapFromFile") != null) //loadScript("http://stinkeefeet.googlepages.com/testmap.js")


function loadScript(url) {
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e);
}

function includeScript(scriptFilename) {
    var html_doc = document.getElementsByTagName('head').item(0);
    var js = document.createElement('script');
    js.setAttribute('language', 'javascript');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', scriptFilename);
    html_doc.appendChild(js);
    return false;
}