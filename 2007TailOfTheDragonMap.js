function load2007TailOfTheDragonMap() {
   var map = new GMap2(document.getElementById("2007tailofthedragon"));
   map.setCenter(new GLatLng(35.525701, -83.870876), 10, map.getMapTypes()[0]);
   //get default map ui controls
   var uiOptions = map.getDefaultUI();
   //turn off map default map type control
   uiOptions.controls.maptypecontrol = false;
   map.setUI(uiOptions);
   //add satellite/show labls control
   map.addControl(new GHierarchicalMapTypeControl());

   var myPolyline = null;
   var myPoints = null;
   var myLevels = null;

    myPoints = "y}mwEnpe_Od@U`CW|BaAr@cA[_CiN_PcB}I]kDEkBL_AsDiH|BsFMsCzAmKP_A~BiFvAqC^cBbAoBEiCeCcFz@yAhCuDrBu@`BeCA@bDgK`DiOcCiMoBoTcBqBi@aFTwOCqAy@cGs@m@}CgDcEsKQ_BbMfDfA_AxAgBdAkDXgBtHyRxFsMrA{AjBmCp@iAnD_FpCwCfGuEhGgFnFw@xLZ|EeDfFm@h@wB{AuEwDkZiAaIwEaT_CeQqAiRcCcLo@yMjBkSnByCzRwLYaIeDiJ{CoHWsa@f@sITmCQaDpA_a@`AsDbGqHp@WhCCn@XfGnH`C|CDtJrCHn@IpYj`@rEg@dCATQ|IaC^U`DeJj@_I|B{M[mn@}TrCyBsB`@kBFyAw@u@d@qGcDgFmAeCkFkAdF_QEO";
    myLevels = "PABDCFEC@BDGCC?D@AAECE@CCE?BGCCCDCAE@DBHDFCABAEA?@AD@FCECDIC@CDBCCGFCGD@FD@BBHCDAGB?EEAEGACA@ICBEGDGACCEADFAP";
    myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
    map.addOverlay(myPolyline);

    myPoints = "caiwEvzn~NHup@";
    myLevels = "PP";
    myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
    map.addOverlay(myPolyline);

    myPoints = "y`iwE`im~N[eJxEuJJqR`AkJjBmM`AGdNe@d@qCk@cCg@_A[eF~@qL_@gDy@aK@}EzAyPSyBSoAX{Df@_ApAeAhD[pA`AdJbJfDCr@i@pCmBtBcAlA{CaAuCwBmC{EoPY{BFcHtFqDvCdEtCVbB{ApB{Ep@Y`^rDAeGXuEGm@rAoK?Dk@}Eo@iAg@wDFsAs@{FtA{HNkCMeAwIyHIg@G{AvAwJg@}C}@gCc@}DkAgCsDkHUeFfAwCrCqDpGy[w@cBmAaES{BsB{Dy@o@{@iD^sB`KqKlEOnD|AxEUlCaDVwCl@uJn@kIl@_@pDsBlDp@|ApEhCtAbAM|MgCpGsAdEyGFyA?}EvAiFrDqA`E]tKuHbHiCnDwCpAmIpGgIT\\jI|MnDp@pJo@vDr@jJlFrJKlGo@zHh@hOf@|CaAbAoBtDcGbI{AdEiEhLwFpFaGp@y@lCcAbCQrC`BlBl@`KxFdC`AhDQlJwDzHeDrC{CpAaBlEkAjAXzLpGjCdFL`Bj@jF`D~DpCh@jBNdDlBpEjFlErDhGhDdBvDw@pDyBbAc@B{MFwFwBmGSkA?sGmBwGeAyAVoB|D`@tEpFhLlGxF|A~CjC|HdDdDtIrBpATrDnC|HvJ`E|ArU~C`UtDnH`EbGlHjN`TnLxMxD|JbCzOtEj[hDhGnH`GtR~OvD~HvDzPdRn|@zB~EbFrDhL|HnD~G\\jGw@`W@xCx@tFlI`SjAbEHvHwCvSkF~ZoBfQb@jGfBbFrAxCEvBeATWYFHkChCuChDkGdI_FfHo@lBE^D|JM`EmCbGaBnAeFhB{C?}BE_Ge@wPgAsGdA_IpEaOP}IdCiCnDiBdQf@nUdAvP[nEgC`GkGrDyBv@aDjDkAzBaB`ByHt@aAi@kEoDgJk@mBjAoGrH_D|IgBjN{A`VmAdLaD|E}Dr@yDs@uCkDi@gCBkJc@wGiA}BaFmCoE^_@PwKhJoDzLaBpEeH`GkBhL|CzQd@~SvEj[jFjVGzGcGfS{KfHcH[oGlB}UnLwA_@uDyGaA{MwBmHgNgGiEPqEp@yHbEuFb@gHE_LjHkA|AqFp@cGcBqE^}[zKkBlDFnDLj@dEhN?rGyAnKTrFJ`@@pF{G~GuDnHeKtJsDdHw@xBsDtCg@DwJ|A{QlF}AnAiC`BuCvC_FtAaLUwHxAqBZcIW}F`CcHjP{BpH_AnAgFnAcHtCsAdBmAxEf@zEjEtFjE`ClApAFbJ}EfHeEzIqEzCoBCoKg@wHvAsD|CaB~@uCjDcBxNs@xB_AhAiGlB{JdFeElIoBtGq@hE}@rM^vFpAnI@tCoBxKuB|ByChCaA|Ci@vMt@fLLbNwBnFuAlAcA`@gHdA_CfBeB`AeA`@cGXkApAeCzDc@VEAFBgAjAgFhDsEnA_De@\\gAhE}ILoDf@oCo@uAN}EO{@yD}JiB{GB_FTsA?oA}@wCaQ_UuAkA}DcByCcF}AwAcAk@cCaAcCq@oEuCiHfCyCoEgAEsBu@W}@[mBs@}@gMx@gCwBe@A{@_@Yn@w@K";
    myLevels = "PDEDAF?DGABDD?DBC@CHACEAED?AGDBCBFEGDEBBFHAACE@ABBBDAFCE@CEABC?CFBDFABCBDCJECCFD??E?GDCF?@GD@CFBDCFDDH?DFECEBDAHD@DDCC@CGDAAADG?C@CKAEC?DEACDBCCHCE?FC@CBCGDEHDACE@EBFCADFBCHD@FD?FD@FD@DGCAECBLDABFC@CGBDA@A@F@CADIBE@B?ECDDHDEBECGADAAFDADFBGDBBDHCDFBBECHADEADIEDEBFDIDEBHCDCFDGCDBEBECCEIDC?ECC@AGCCDAHD@CD@BCFC?DDHBECBEBGDCBFEBGD@DFABECBEBHCBEDBBEDACECBDJACCA@DEAC@AAAECHACAFCADBDAACHCBCCAF@BEEDBD@BEDDACCP";
    myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
    map.addOverlay(myPolyline);

    myPoints = "uanwEvse_O?q@PD|@KYP[DqKhAsJlH^{EoDeAeBUsLfCgJqByCiD_C|IaDtXo@rANJ|@jFwFlXDxAg@vCw@rBiANk@OiAu@yCx@iABiA`@wJ^sB}BzBeJoG_IsBdOoDaA?jCcDDcAuAcA@qBkBaDaAx@TUCcAgBqCiAwHeB}A}AOGkA_AmAd@_BJMQq@gCeEuBgEqEu@[yDlEOn@Hv@xBtE?fAJbCVhC@vFGfBCx@H`EnBl@r@d@rAhBa@zAoB`@yBW_GIiKiEZbAjCbLdAZhCa@x@RZTb@lA]rGCNi@nAI|@Zr@?|AgBlGiCn@wAATdAXh@Jj@w@bAMByH_@HvA|AXt@j@E~A_CB_@|AFvBm@n@]Ho@n@d@zAjBh@vDrDPlA?nBc@dGyBHiAoDu@{@{@f@i@LkAg@{@`@Uh@qAf@o@_A[{@y@BQJy@OKW_@m@y@No@j@gBZu@Iu@VKv@}@rBu@N{@ScDgAq@fAnBxGtAnIw@fBsCvCvGLFdBb@~@PFtA|@bBJnD~Ac@jCj@hBsAzETn@j@vFqBt@iAs@CoA}AI{By@uAoAoBsAIXiEfLZ~AxAzFDpGvAfEFz@jBfCrFzBX`@b@zAdBtAPp@dAvC`EMjArBI|@oBrCYh@DbBKjBStAu@r@cAl@MnGTlF|AnIDjBWfDk@vOp@`EDpC[xG_@|A}GbB`@`B{@bByBpAeAZqCNeDg@qAc@{D?eAjAo@dDgCj@iNyGm@CX`B|C|Fp@fFg@nA{@Eg@Ii]hAkIzEu\\tSoGBwBy@qM}GkJwAc@?gMtCoPlGoObJaJtEwGSkCyAoJaKiKeIkHiAg@?{L|ByMvIsGpGeEdIiEnOkAv^kCvLeBjHxAhTlKzUxGpIlKrMdBtHH~JwApTd@`KxBzHlFpGfFrE|KzP`ItOpErNt@nFu@hGyC~BmDvB_F~GeD~LuAbMPtOfBzRfAzW_AlOqB|TCxKTtFr@zDnDjLxBdQ~BlJlEfG|HpMjAhFHfH}@tDeBpEcDfEcLlGyCj@uKbCkKnEsGbFkG|FuA@c@e@}@sBuNqH[UyGyCiAiBuAsAm@[yBs@qIUcM|DoObq@c@xAoDd@oMoIaE}D_DEsNf@eLlB[LgAlAwBzEq@t@sBjAqCHiGm@yHmDgD@kCe@YWsDiEuCeAeMsAeKSiBAcEh@cM`FqW~EgEn@uEO}D|@kPlMoBbAgDcE}DoGqMyLgKiJgN}KgSsFeQ_I}JiD{LiCgLq@yBL_EcCU]sBgKc@iBcBeAgEiAqDkC_Bm@mEe@}PrAmZ}NeL{MmJ}MoBaDcE_LaBkDa@cFg@qC_BaBmBqEmGyLgAcD}A{BkBeBaCaGgBeC_JaE{R{F}LqF_N}EuIYeBM{EuCaSoMkPeL_HaHkIyKqPoU_GoCwRkHuSqHiRsGcBc@cCHgIhDiK~DuTfG}LhEkIbFgBrA[DiIsKeIuMmK{RoJoMkQmT_OoR}GyMoWks@JZx@yCKEFC?@";
    myLevels = "PC@D@ADFDECEDHCBDADBBBHCADAACGDEFEDDGCCBCCACBC@?DAE@CBBFJACD@ABA?AEABGCDAEG@EBBDAFB?ACACFBE@@CE@FCBCEDBD@AECBEABHDBE@CCAAEACAAC?FABBADADB@DHBEBFDBD?BBECGDADFCCBC@F?E@CGADCDABB?DDGB?DA@D@EBCBD@CACFCDCJACDACEBDFBGBDCG?BF@GDAD@GCDAGDBBEAGDECKDD@EHD?GCDDCFBCEDBGDACECGCBEACGCBCBEAECIACFD@CEALCAD?ACB@ECHF@HDBDGCEABADCFCCBD?CEC?GCD@CCEBJAD?BGCBECBFAD?EBBAFCEHB@EADAEBABCACBGBCBD@DGAEC@IABA@HC@CBD@AICADAAFCBD@@?P";
    myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
    map.addOverlay(myPolyline);

    myPoints = "kr~xExpx_O{@HYPm@w@w@aCLpD?EVe@vAzC~GbRo@pAiFfD_LpImIbLsDzEwE|EyEbAmQdAuGhCaKdIqLtJoIpGaIlDuLrCuNlEuEhEcBhC{B|FcAzGq@rGcClFkExAgABcID{D?[q@f@p@[?OSj@R~E?NgAo@cIcCoGwGyK{CqCmA_AmA{@cB_@cFEeHoB}OkFqFyAqA{BUiBd@mb@r@aZPmC`Au@^Cd@TNVBXC?c@_Af@PC?BLMOC?OQs@Eu@@AsAn@gGpA_MhBkXPyDd@qGtAoLlC}P~Iki@|BkOrByJx@qEf@aALI~@GhG?~IcAhH{C`HuFdE{F~AcDfCyCRMzCIn@PvDhBzDxB`DzBvC|BtGlF|HtGvEhDbDvBvEtCvXrPhLlIjExHxJpTvWxl@nExKt@rB|BbH`AkCOUF?";
    myLevels = "PADAEC?CAGBAD?BGBDE?@ECAGBECACEI??CCBFBBEBFBD@?FBCDADKBADCDAB@E?CB?A??C@CE?B??FAB@B@H@C@BDFCBB@JBD@E?A?AC?@BGB?CA?EA@P";
    myPolyline = createPolylineFromEncoded(myPoints, myLevels, "#0000ff");
    map.addOverlay(myPolyline);
}

load2007TailOfTheDragonMap();