function load2006RideMap_v3() {
    var latlng = new google.maps.LatLng(35.774511, -82);
    var mapOptions = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2006rides_v3"), mapOptions);

    renderMarker(map, 36.59795804130134, -78.29831600189209, "kerr dam, va", "weekend ride", "january 29, 2006", "http://anarchyinthetriangle.blogspot.com/2006/01/kerr-lake.html");
    renderMarker(map, 35.722864, -81.657132, "morganton, nc", "ridercoach training", "april 28-30, 2006", "http://anarchyinthetriangle.blogspot.com/2006/05/week-two-down.html");
    renderMarker(map, 35.915644, -81.518216, "lenoir, nc", "ridercoach training", "may 12-14, 2006", "http://anarchyinthetriangle.blogspot.com/2006/05/finally-done.html");
    renderMarker(map, 35.630303, -80.48378, "salisbury, nc", "smoke out vii rally", "june 24-25, 2006", "http://anarchyinthetriangle.blogspot.com/2006/06/smoke-out-vii-rally.html");
    renderMarker(map, 35.6911, -77.9447, "wilson, nc", "easyriders rodeo", "july 15, 2006", "http://anarchyinthetriangle.blogspot.com/2006/07/easyriders-rodeo.html");
    renderMarker(map, 35.50270563247501, -78.32932233810425, "smithfield, nc", "motorcycle class", "july 29, 2006", "http://anarchyinthetriangle.blogspot.com/2006/07/observing.html");
    renderMarker(map, 35.970886, -78.88206, "durham, nc", "motorcycle class", "august 25, 2006", "http://anarchyinthetriangle.blogspot.com/2006/08/friday-night.html");
    renderMarker(map, 35.466052863903506, -83.91966819763184, "deal's gap, nc", "tail of the dragon", "october 4-5, 2006", "http://anarchyinthetriangle.blogspot.com/2006/10/trip-report-tail-of-dragon.html");
    renderMarker(map, 36.622072141590955, -78.56037855148315, "clarksville, va", "saturday ride", "december 17, 2006", "http://anarchyinthetriangle.blogspot.com/2006/12/lake-ride.html");
}

load2006RideMap_v3();
