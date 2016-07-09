function load2013RFK_v3() {
    var sqlQuery = "SELECT DateVisited, StopNumber, Coordinates, Location, Image FROM 1sl3zK4bznYWAq_8jR5IvZCQXsYrCQ-QLi0rHIBU";
    sqlQuery = encodeURIComponent(sqlQuery);
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + sqlQuery);
        
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(35.716665,-79.08886);
    var mapOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2013RFK_v3"), mapOptions);
    var markerIcon = new google.maps.MarkerImage('http://www.smallparadise.com/images/motorcycle_green.png');

    renderGTData(response, map, markerIcon);

    //ride for kids
    var decodedPath = google.maps.geometry.encoding.decodePath("mscyExagaN^iBp@I`BfAfArANDFEHI^w@ZQP?d@?t@VjEz@JJFPBXz@p\\MnRaCnzAqCjiB_Ap`@_B~a@]rU\\pHtAfKpFf[jAfJPbEl@`[FtGGJIJa@HgG^aKvA_NrEkUnHaHbB{Ee@uU_E}FWgIv@_DlCwEzIaB|BWRs@`@u@X_@Ha@Fe@?mAK}KcAa@B}Ad@kUxKkD~AiEdAcb@rFcPpBiH_@kGuC{F}AsUgB_Jc@]Ds@R[Nk@d@UTUZc@|@M^uD~KiErIcBjBoCtBqClAgMnEgBj@Q?QEQKy@eAyPsWaGaFcH_Bec@i@oJ_BqHkDqHqG}DkIcEgNaC_EqEeE{C{AsC{@cBUSQEQAm@h@eIz@iRzA_a@@{J{@sEc@aA{EaIMg@Gg@QqAaAgXqA_JSwGVwMNg@j@eAr@gAnJcNlE}HjA_HZcHFoNUcG_@kEs@_E?OBMFMJItQcHdG}DV_@~BwGPoHmAoLs@wP\\gCNg@b@uAn@oAt@gA^a@|@{@fAs@jRqHvHgBbMyAdFoCbMwHrGw@pFRbFtAfErChGlHjHzJdHdGlM~GnGxFhFtInInObEvGfElFrOjQbK~I|IbElXjL~HbC`GbAxJrAbWzBtN~AzXjHtGMvKuA|G`@pw@vUjEtAbAb@FL@PiArWy@|SL|OdBpO|DnUhBfLb@vGLtEdAfg@~@jThBdZxB|SdDvRbEbQbB|F`BjFjd@zrA|BfH`CbIj@pHe@vL^~HxBdG`EjEhH`GhEhFnCxHx@lFdJl}@^xKm@|JoDrb@YrE_@dIYlLiAr}@s@`o@KtAYh@IHIXCV?LFVVVTFTCTWHKDYA_@c@qAIo@?q@zBsgB\\eR~@{QfEoh@PyCFeCFQZKPQbAcHr@_Lm@gOcCii@k@kPJoAHe@Lc@lOgc@hF_LdI}JtD}Gz@uGd@sFn@qFbBcGtB}HbBwLbAgKvAyIRa@|FoHbFqBpFCtEdBlMtHnFjAxGu@hPoJfKiFlFcAjAJhDp@^B`@?~@[|@i@fCgAhAGjAF~Fx@f@RxHnCxEGbAk@xHyGrGsJ`GgI|EeGxNiGpDmF`EiGbBqAZMzH}A`JaB`GXbEdCl@x@rErIjBhH`@pBb@bAj@|@lHxJ|Q`WxEpDhGnAdIx@~EjCpFhDdEdDpE`G~U|_@|BfHt@~Gd@|C|@xCx@|BRb@NDLGZa@tZiWnKmJtDoGnGuNhFyGhJ{EpDaDl@iAbTat@hEcRzCcF`FoCpLaGdJaE|HsCxEoDdCwBzB}AfBgADGBIC[Uo@kAyFkB{LoCoHqDkJa@aH[cL@gLbBwGtR_l@nDeGrGaH|BqHt@mKtBo\\X{DBw@CIOQ[GiNgAuNoAkHl@oNnDaL`B{NJwSX}IAkJk@ii@mJoQgDgJiBkH{A_]oH{WgGsJeDwFcDgEwFsEyEYOcGcBmC]qN{@aGJcG|ByI|DyFvBcFHkFkBiGoFwHcHgImHsj@qg@qF}CcN}CeH}C}DkFwB_IMiJjAuSc@}Gk@aCaBaE{AiDk@eBGEGAqEpDeJ~FcHrAgIYkHoCgQsKcI{BePiDaFyDwF_HsFcNyEmGmGuEqDoAuF}AyHq@aIm@iXsBuHmAaF_DiHyEoJgFuQeHcG{BoD]K@YROf@E\\cBfYy@rPG~JXtNY|@cAK}Ac@aB]_@DKBED_@p@y@pCMj@SbCEPGLSTQJmAb@QEUo@a@uDYwB?[PY^w@A@");
    renderPath(decodedPath, map, "#ff0000");
}

load2013RFK_v3();
