function load2011RideMap_v3() {
    var latlng = new google.maps.LatLng(36.774511, -79);
    var mapOptions = {
      zoom: 7,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2011Rides_v3"), mapOptions);

    //add markers
    renderMarker(map, 35.98748,-78.67845, "raleigh, nc", "first ride", "january 3, 2011", "http://anarchyinthetriangle.blogspot.com/2011/01/first-ride.html");
    renderMarker(map, 35.86624, -80.18103, "thomasville, nc", "update", "january 23, 2011", "http://anarchyinthetriangle.blogspot.com/2011/01/it-could-be-worse.html");

    //first ride - with contour gps
    var decodedPath = google.maps.geometry.encoding.decodePath("gsa{Ejfk~MmK~EgAFa@Cg@Gc@M_@Qc@WuK{HiGcIsAoA_@Qa@QgASe@Ce@A{MP{A?M@WVYh@oClDaBjAg@Ng@Ji@DoACg@Gg@QgAk@uKcF_Lg@cJt@yLxCyHnAaIxE_MdJsNfLc@Pe@LkANwNzBwJ|DkJ~CmTxEqL`@gTfDuGrAYLs@j@i@l@g@x@c@bAMb@SnAGvA?zQ[xM]xAoBjE[`@_@ZeAl@cMdFa@Z_@`@[b@yDfIoD`_@yDfUaErOsAxDkCfJuElXkChQ?rBDz@TrBjCtNx@|AdAlApA`AvHbHf@lBLx@Fv@Dz@B~LDt@ZfBPr@|BjH|@rAnJjKjDfHxEtQ|DxT`FxVfA|Mz@pMvGvRzEpRvAbNo@zLsCr]?~MRba@RbUAzPBbKbCvM^lMGx@g@nGFt@jAvKt@dWQr@yA`CsHpOwBlJ{AhSw@zNOn@Un@Yh@_@d@oHlHuG~IgAh@oHvBuCfAWXUZQ`@Qb@mFbPkFnNmD|HuAhH_@jCBPPPf@?~DXdNhAlqCvUxj@tEdr@`GlXnCrSxBpGz@|K~AfOzBzMvB~QrC|Pl@plApBjQVxMXtSDfQ{BxNeFlLqFpR}JbVgLnRyI~ReHnKkDpL_D~LaCdPwBbPkAtMWzSHxLl@`P~@zH^l@HRJNRJx@?dASlBIb@Q`@g@v@q@l@u@^YD[@UASEOIMMIQMu@?gA`@m\\C{T?iADMJGf@UFUAOEAJEEC[BNGDEHa@A_@MIm@IKQAOAk@HyOCw@GI{Am@SQOUcDmDkF}AqI_BqCgB_@KqF]oCEa@Ic@S[UaEkD]QcAQiBMcAKa@M{@g@][W_@q@iAgEiKwBsJIq@EGIEM?i@LaDRsF{@_FyDyCgHaHyOiIeKuAk@uAWo@CeQV}Iq@oKaDaGeAi@We@[aOmLyNmIuAWk@EwAAqQ^{Io@cHyBa@a@Yi@cDaImIcKgAqCqAyGkCuNsA_EMkAAk@DyGZsAT_@ZY`@Sd@OpQkEfDAlJr@lRiAdQ{AvJuEzOsIpBgBrHqKfHqL`AiJw@eJ{D_NgDqG_C_DWm@Ss@Ou@UoBkBs^s@uLRoRAgTH}CNo@pDaOzEqNhEmH|H_KTm@Lo@Hq@FiBEoBEu@Iw@Mu@Qy@kFyPOw@cCgRoDwP{CoOkAgHNuA`@yAJo@HeBCgBEq@Mo@Om@WsC?o@d@aDxB{QzIqm@TwBAWS]SKyGqCwCs@g@A}QEoLS_@Ic@Q}@i@_FwDU]c@aAYmAwCuPM_@a@q@c@e@qCeBI@a@t@oCrCgJbGi@JuANyOHyFrBwJfHis@dg@sK~BcKhAwI}@wN_EmBWa@?]D_@HYNq@^OCIGg@m@ISCUBs@p@aHBwCGs@oA_L\\mHFuLKo@Mk@cDkLy@wM{@yXOaDMq@Si@Yi@]c@cA_AyAkBk@wAMq@UkBgBuRs@{I");
    renderPath(decodedPath, map, "#ff0000");

    //ride to thomasville
    decodedPath = google.maps.geometry.encoding.decodePath("wzozEtlk~M?DD?@l@Dd@Tf@\\l@rCzCZJpAPD@HHFd@@\\CbAc@xHyBhH}Uzi@eHdHkLvDsFdEcDfHs@jFwAn\\kA~TmPftCwHzpA}Az]j@t[jA|UzDdXbCjVzAfb@t@h^yAdLiEtLyMl[sHvSqAnMmCjf@iCd[_Gtc@iCdYOr[ZlUe@lg@wAtSiC~XPhJ`CzKlJbWlMv_@fBfNrB`ZdCpSnJtd@nCtSnAlT{@hLeK`s@SlJzIngAdMpbBpDzf@pDfe@t@dToA`PyArOoBhUuDxb@kD`e@sBfZ}BnRmD|UeElXuLdz@oJpn@kJ`o@aDhS}ChU_DzRyBzO_AvFGN_@Po@@UBQJu@|@YP[LoBPiKPmVPwYt@mL|CmNrHq^lTkDhHu@nH^dQy@d`@}A|i@kBxTkEtOyInYcKfYiFxRgGf_@_F`UgGhKkTlZ{BnGo@tJQ`[C`s@TxB`CzJnIzV`DvNrD~NfEhE|HtD`EzB\\ZBFCNMf@GHGDQIEc@QCBFCCMXLa@Vr@AVCPcF`OKPMFi@@_AAwHBoIlAQPMTqDjLuEjJqV``@oKtQeGrPyEjU_Fv\\eBhTGtVZpl@?~c@iD|jCkAvZuChOi]twAuIr_@}EtQez@~fDiId^{@bNl@fNrClMhKbh@x@rPm@vPmCvOeLxl@eA|RBp^Lll@M~RaCfKa_@taAif@`qAgFbSiCnTo@vWu@pi@_Abu@kBj^e\\tzEOdUnFrzAbCzo@nC~m@tDnT`Mve@rOhm@hKra@vD`T`@vPkCzqAm@r`@bAhUhDjTnInb@nAhPSvPeCfUsGpi@iE|c@Q|U?dpCFzo@~AlP~DfOrHfOdR~^rDfO`CpTjFjh@XvPiAjPaIln@uDh`@i@|[mArg@uH|bAaA|V~AteBb@lh@{@fNeQvy@uF~WqAnPTdQnGvq@tAtWz@nh@|@hSnKj_AfA~Tr@tZ`Bbi@nLh{AhB|_@aAd\\wEjeAk@~WdAtW~FpcA`Bt`@F~YPhf@bAj[bLbtCLhWsCrh@o@v]kBxaCe@pu@Slj@hDpu@dIdbBhDtXfVjjBjIzk@dLdh@tJnf@p@rPn@pj@b@nd@z@~TtCnIhDpMfExLhGhHjKfHlEzGtEpNbGtVbOrfAfC~StGdXlGtGnMjKtQfR`HjMrj@jzAzNf^fLxQpHxQhVtm@zLvZtNr`@lKhT`PjUlTp[zKfTnSpa@lMfZxEtUdGd[xEvZ|Gla@pFpMzMhZ~O~f@fJnPtWde@vFnOzKl[xGvI~PbNdHdIvEvK~GdUfOnf@zJ~Y`N`W`F|M`BrMZzSjA~QfD|L~FxJxNlQlLlQn^n`A|Ol_@hPp`@xLt^hKpWpOzYzQb]nJhS|FlS~ZdjAzDbTvB|UlZtiDpGvs@xDl^dExPfL~\\dMt\\hKbS|Qr\\vSd^pLnXtGdU~Ip\\rNpf@tq@jhBzHzXfGrWfJpb@nh@~~BnJh^Fh@?nACPKFW?KIIKEMGc@G}BCKOKQAa@JMLCJ?`@ZtAr@BF@LRH\\f@l@@XAl@QvAORIFM@U?cG{@_HIy@CQGMOKQGaAH}Cz@{@bAEb@s@IkEES");
    renderPath(decodedPath, map, "#00ff00");

// #0000ff
// #33ffff
// #ff3399
// #663399
// #003333
// #003366
// #00ffcc
}

load2011RideMap_v3();
