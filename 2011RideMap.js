function load2011RideMap() {
   var map = new GMap2(document.getElementById("2011rides"));
   map.setCenter(new GLatLng(36.774511, -79), 6, map.getMapTypes()[0]);
   //get default map ui controls
   var uiOptions = map.getDefaultUI();
   //turn off map default map type control
   uiOptions.controls.maptypecontrol = false;
   map.setUI(uiOptions);
   //add satellite/show labls control
   map.addControl(new GHierarchicalMapTypeControl());

   var myMarker = null;

   var myPolyline = null;
   var myPoints = null;
   var myLevels = null;

   //add markers
   myMarker = getDefaultMarker(35.98748,-78.67845, "raleigh, nc", "first ride", "january 3, 2010", "http://anarchyinthetriangle.blogspot.com/2011/01/first-ride.html");
   map.addOverlay(myMarker);


   //lake loop
   myPoints = "gsa{Ejfk~MmK~EgAFa@Cg@Gc@M_@Qc@WuK{HiGcIsAoA_@Qa@QgASe@Ce@A{MP{A?M@WVYh@oClDaBjAg@Ng@Ji@DoACg@Gg@QgAk@uKcF_Lg@cJt@yLxCyHnAaIxE_MdJsNfLc@Pe@LkANwNzBwJ|DkJ~CmTxEqL`@gTfDuGrAYLs@j@i@l@g@x@c@bAMb@SnAGvA?zQ[xM]xAoBjE[`@_@ZeAl@cMdFa@Z_@`@[b@yDfIoD`_@yDfUaErOsAxDkCfJuElXkChQ?rBDz@TrBjCtNx@|AdAlApA`AvHbHf@lBLx@Fv@Dz@B~LDt@ZfBPr@|BjH|@rAnJjKjDfHxEtQ|DxT`FxVfA|Mz@pMvGvRzEpRvAbNo@zLsCr]?~MRba@RbUAzPBbKbCvM^lMGx@g@nGFt@jAvKt@dWQr@yA`CsHpOwBlJ{AhSw@zNOn@Un@Yh@_@d@oHlHuG~IgAh@oHvBuCfAWXUZQ`@Qb@mFbPkFnNmD|HuAhH_@jCBPPPf@?~DXdNhAlqCvUxj@tEdr@`GlXnCrSxBpGz@|K~AfOzBzMvB~QrC|Pl@plApBjQVxMXtSDfQ{BxNeFlLqFpR}JbVgLnRyI~ReHnKkDpL_D~LaCdPwBbPkAtMWzSHxLl@`P~@zH^l@HRJNRJx@?dASlBIb@Q`@g@v@q@l@u@^YD[@UASEOIMMIQMu@?gA`@m\\C{T?iADMJGf@UFUAOEAJEEC[BNGDEHa@A_@MIm@IKQAOAk@HyOCw@GI{Am@SQOUcDmDkF}AqI_BqCgB_@KqF]oCEa@Ic@S[UaEkD]QcAQiBMcAKa@M{@g@][W_@q@iAgEiKwBsJIq@EGIEM?i@LaDRsF{@_FyDyCgHaHyOiIeKuAk@uAWo@CeQV}Iq@oKaDaGeAi@We@[aOmLyNmIuAWk@EwAAqQ^{Io@cHyBa@a@Yi@cDaImIcKgAqCqAyGkCuNsA_EMkAAk@DyGZsAT_@ZY`@Sd@OpQkEfDAlJr@lRiAdQ{AvJuEzOsIpBgBrHqKfHqL`AiJw@eJ{D_NgDqG_C_DWm@Ss@Ou@UoBkBs^s@uLRoRAgTH}CNo@pDaOzEqNhEmH|H_KTm@Lo@Hq@FiBEoBEu@Iw@Mu@Qy@kFyPOw@cCgRoDwP{CoOkAgHNuA`@yAJo@HeBCgBEq@Mo@Om@WsC?o@d@aDxB{QzIqm@TwBAWS]SKyGqCwCs@g@A}QEoLS_@Ic@Q}@i@_FwDU]c@aAYmAwCuPM_@a@q@c@e@qCeBI@a@t@oCrCgJbGi@JuANyOHyFrBwJfHis@dg@sK~BcKhAwI}@wN_EmBWa@?]D_@HYNq@^OCIGg@m@ISCUBs@p@aHBwCGs@oA_L\\mHFuLKo@Mk@cDkLy@wM{@yXOaDMq@Si@Yi@]c@cA_AyAkBk@wAMq@UkBgBuRs@{I";
   myLevels = "PD?A?F?@CAD?A@G???E@@CB?@FA?C?DFCBIBA@F@?CACDCA@H@AC?AE@BBFB?D@AD?AKCDA@D@BH?AEAB@E?A?C@D?AEACFCAD?DBHDAEA?A?EDC?C?CIAACEAB?F?ABEAAB?F?@ABDA@LA?@A??E?C?@??FB?@IDFCAA@E@CAHCBEC??@F@AC@D?@B@L?A?@C?AE?B?D?@BA@AD@C?A@C@B@C?A@HB??DAC@D@@D?A@D@?B@G?@BC??E?A@CDF?DGA@CCDBF?ACFA?BDCG@ACEB?BJ?ADAC@?FDBDAEFBEAICECBB?@EA?GABAFBDBD?A@G?A?C@C?BA@G@?ADA@?A@D@AA@J@ABE?AB?G@AD@B@D@BH@@CE@BDE@GBECAD?A?@AJ?A?C@AD?CAE?@DA?D@?B?@BE?A?P";
   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
   map.addOverlay(myPolyline);

   //ride to marion
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#ff0000");
   
   //ride with michelle
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#00ff00");
   
   //ride to annapolis
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#33ffff");
  
   //ride to milwaukee
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#ff3399");

   //rolling thunder
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#663399");

   //smoke out
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#003333");

   //ss1000
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#003366");

   //ride with alex
//   myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#00ffcc");

}

load2011RideMap();
