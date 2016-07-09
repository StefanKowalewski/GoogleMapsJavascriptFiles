function load2013RideMap_v3() {
    var sqlQuery = "SELECT DateVisited, Location, Coordinates, Title, Url, MarkerIcon FROM 1bL4LJT_wC9jBBt-bFmtcUb0ucKwOgMjKdsgCCsY";
    sqlQuery = encodeURIComponent(sqlQuery);
    var query = new google.visualization.Query(
        'http://www.google.com/fusiontables/gvizdata?tq=' + sqlQuery);
        
    query.send(getResponseData);
}

function getResponseData(response) {
    var latlng = new google.maps.LatLng(35.48247, -78.447965);
    var mapOptions = {
        zoom: 7,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("2013Rides_v3"), mapOptions);

    renderFTData(response, map);

    //ride with michelle
    var decodedPath = google.maps.geometry.encoding.decodePath("{ir~Ejak~MFSO_@SIM?SBWLc@DM]BMHOl@m@bEmCpGqAvGn@pH|C|NvH~UvLdc@`UvEhGnBbJdDlZxDvQ~EbJfIvH~ZjU`F~EPXLZLx@?^Mx@K\\e@l@UL[JYD]A[GYMq@y@O]OcAA_@Dc@V{@TYp@k@xGkE|FoH`EmLxGsS~FeQvHyS~E}FfIoDpJkAtTgBfUgAbi@jAla@t@bKo@zI{CdMkIrUoOfKgCxTiBdVuBrkAmKdTiBdV{CjPeFrLsCvVwC|t@qIjJApUx@hPrDhSjFxh@nU~ZxMd^|JvRbGrGbGnO`PhJjJfHtC`[rIzTlGnRvFbMzF`~@lf@vXzNpM`GrJdDnj@jVlKhGzEnHhKzPzFtGvGnCf]nHde@nKjNnEhf@lYbH|Alf@hEbfAzJxOj@pPh@hRbA~UxBj_@~CbHUhMo@pRsA|SmCjXiJ|I{@rSkBrTwAfeAMnHH~GnBzc@tP|FPxUkEbGIfGfBpNfGtBdArFpAxT[bI]XMXM|GmElGkEjImFfLuHhDiCPCDFJBHFbC`Gp@vAVTTGbEgCtFqDbHmGbGuDrH_FnJ{Gv]_Vpj@s_@~KyH`LiFn@GlI@rKhBtM`CrOrDtn@xTtMnHlMvLbOjP`S|TpL`KfIhBbN^xRn@bKm@`I}B~L}IhIcJ`KgJ~HuBbKCfWx@pXn@zMc@`MgEpQmFbNy@~SeBzQcF|Q{DrOEtUr@fJdEfIjBhXnEpMrBjIErJkCzVwJpToGnNeF|O}FnI@hk@bKpVzEhHrDtU|MjI|@lj@qEdJoDdc@eWzDyB|AiAb@k@jBaDhCwC^Y~LqGxGiCj@AtAHj@HvAb@h@Xf@Xb@b@dAhAxItGzL|DzGUlJoC|GMhXpCnFLl@G~QkDzF{@lD@ZBN[dEyOhDiS|E}c@Ri@rEcH`@]`@Wb@QbNwF^]Ve@n@mAjAiDPaBBaB@sQTqL\\yAl@mAx@aA^Y`@Yb@SlAYnVuDrLw@~Iy@pUkGnK{E`KsB|I}AfG{ExQiNtJcGfGgA~JyBhL}AdOz@tFvCzEzBb@Hf@@f@Ab@E");
    renderPath(decodedPath, map, "#ff0000");

    //ride to d and q for new tires
    var decodedPath = google.maps.geometry.encoding.decodePath("ojyzEfdf~MjFjCnD`BhEjB`JfDlOhFnn@|SpQfGxOnHpLnIbMpMpFfH`PrTbIlJdJtGbMfE`RvBvyAjOlPTtK}@xK}BbYuGfLoBpHk@jEKlEAr@BC@nFPjHn@dOvCrMnEvRfFjT`CjRXbRm@dMp@~JpCfGfDbCfBjDrCpNtKbb@|[dZfUxJdFlK|Axd@vBpK`AnCl@hAZzDdBvEhDfIdJ|V|ZzJrLnJvIlHbGnDpCl`@l[lLdJbFrDpGzDfK`DrJdApKQxH]dQgAv_AaF|Jc@nQ}@|Qe@jLnAlK~CdPdJ|M`HlMxCjR`EzFpBrEhC~GzF`FjGpFjLrFvOfDdKhDdJbFxNtElLtBlJt@pHE|@GXMVSPWJ]EWKUQOQMYE[Dc@J]P_@l@y@`Au@tGuErOeLfM{Lf]{^bTmVzWsb@rSs\\lWw`@xHuFtK_DjLWbb@hAtm@tA|h@pArOzA~LxEfKnIzG`KrEfMlCrPHlMyAvJyDtMU|HjArHfD|FfFxChGf@`G_AfC_CnAyArIoHph@kPzfAu[dWiH|P_CtMa@dz@k@zR[jOuBdOoF|MyIfL}LrM_NvLoHdh@kU~R{KxXgQfOoGrPsCzNYh_AbD|`AdDzd@`B|nA`EnwApEtOg@pOsCfV_IrTkGbLa@xOnB|LhFpMfJ`[nVr`@nXxNhFtOxBbPLpl@}@|s@aApSj@fKpD|_@hPxKbBbLm@hKoDdOeKz[cU~SsNl|AgeA|GeD|F_AzAALBJFHL_@nOb@xIrCbL`ApJ}Ave@}@jRsAbHkDlJwCtJgAjKw@dKkAjQ[`PBpNY~N}E~ZiAfKYzLi@tg@H`Rt@vUv@rTxErwAv@zSxHdjBr@hRCdNkA|UyC|NoFbViCzMMhL@`V`AxMbAvJvClGvIvNxHbIhEnHfFxLdAlLxBtW`CdNlEpH|FxKvAhK|AzIhIzb@bE`ULpIeDncB_@xPCHQLg@Cy@IBE");
    renderPath(decodedPath, map, "#00ff00");

    //ride to wilmington for cf1k
    var decodedPath = google.maps.geometry.encoding.decodePath("ilyzEvbf~MlHtDfBx@nGnCtJxDpu@`Wbb@bOpOdJ|JnInFdGr@dAdXp^nIfJ`J|FtLpDv`@dE~`AzJpRhAvLa@|OsClSyErWmElQ_@lKl@fIbAdRxEzWxHrSlCnTb@fTk@pNnA~KbEhHxEdF|DN^~BjB`r@ph@~XlSzJtCnNx@rYpA~Kp@lCd@`ATdA`@dDzA|GlFjFbGvZd_@vJ|KlL`Kfe@j_@zFxEfOnLfKrGbJhCvK~@jNg@ne@gChQaAzFYvHQrJy@ze@gCfNA`KxAzJnDbFdC~J|F`KdFbK|BfNvCnL~C|HrExH`IjFvIfG`PpEjM~ErNlEfMxGdQt@vC|@fILfB?`@GZIXOTWL[FY?k@UMWK]C]@[Fa@P_@V]X]ZYfGwEtOcLvNaN~VgXbXcZfMaSxVka@jN{T|QyXzHuF`JqCvJe@jVj@``@`Ad[n@|]|@jVrAzKxCzK`HzIlKhG~MzCbNt@dMm@dK{CzKeBhHG~@E~BH~BV|Bh@tBr@lB^p@b@n@d@j@h@h@h@b@l@`@n@Zp@VdB`@jBNjBAt@OhBc@`Bq@l@c@j@i@nAyA`J}Hdf@mO|kA{]pZ{HhQ_B`WSjTIvXQbYwA~OeExN_IvKwJ`PaRjNgJl_@sP|VaMnZoRtP}HdPkDnPk@t\\tAlxApEvj@lBj]nAd~BtHb[`@|OqBdQoF|[eK`LaA`Nr@hMzD`LtHt^rXd]|VpN|GvOhDdPx@~[m@|kA{AzQf@lKnDh`@bQhLxAlLu@nK_EbLeIl^}VxfBamAt\\qTxTcH~S}Bp|AsN|UyBnlBuQbRuCxLuEbMgIb|@_w@tTqQ`K_DhKU|OrAlRjB~Qp@`P_Cd[}Elf@kHdYqFzw@q[hOcElYyBle@gDj]iD~LeFpKoIbVySv]}ZzMyPxSiVjV}RdJgK`M_UpLiRhMiNzTkQ~`Amu@vQuNlJ}JpIeOhJgWdIqO~LuN|TaQnJ{JpFcLbE{OzCcKrC_GjAcBLKXCJBVPzKjNpHhGtLdFnIxCvBbAPEN]fM{d@xEiNtGoJfg@ui@lHeIBMIg@_@k@s@w@qC}G}BoMEgBx@wOHYHGh@EjFP`KTh@GhK}AfBUVAV_@fGgN~H{P`LoThQeYrKoRlMsMzQqQbNsLjNcGjQiH|OkFlVsHbLgHrRiKfIaHfLmKpMiJdmAex@jDsBDGDa@OgAMe@MGk@CEEYg@YLEFEKB\\FGA?[gAKWCAJ@RW\\@TTFDb@MDQ?U]{G?YBWJSPOlAo@\\YZ]rEuG|FeEtPoH~O_JlPyMvQiSzK}P`LmVhKk\\fa@qsAhIaS~LoR|[ya@dKkQnGaQlHqXbN_j@pPop@tHsXrJoW`NiWbPkUbVo[zS{ZnM}W|Usg@nYem@bPi[|NmShRqRx[yVrOaOnK_QbQo`@nf@ogApRwa@fNiTdP}Qv_@{_@beAueAf[y[zQeOxVcN`XaKvd@{Pfl@iT~b@uOfWwFt[mDnWcFnV}Ip\\aQna@iT|UwLzh@uX~d@}Up[kMry@gWle@eNr}Bir@~a@mLfUgDnMq@tHFzE`B|CnAn@FjA?TBDDFf@?TDfCDJHDh@AJQJGAIIGKRi@@MSCS@yBDQNQVIZA~AChAMhAc@vHsDdKyBrPwEtQgHlTcMhRuOlNiPdL}RhOa\\lVeg@vKkMpMuJ~LuKbIeM`IeSdUin@tN_b@rGuXlEsYnGoj@rFk^zFyNrQuY|Yqf@lMmZfMsZzN_YxRi[~U{ZxTqU|ZsWhbAeu@fYkTpXoS|SyNbRcIhSgE|ScA~Sp@`e@zCh_@|A`RcAfWqElUiErk@_Kv[eEpT?jT|Ble@lGjPRbPcBpQaFj^wKl^}Kdm@oQrVwIfUmMpSyPlYwW~MqIhOaFr^iJ~PgG|McJ~PyP`bByaBlZiY`PqJfQwFfRaChRKjrApBrcBbChVXfXoArg@{BfX~@rWxD~XjHlWdFlN@fNuB~PmGz]_MvUiExoDc`@nY{E|TuHlS_LbRiOx`AaaAhScQbRsJrnAij@z`@kPhUuFv`@sIj\\wJza@}M``@oL|`@aIt]yDx_@aBvdAAdViBtUwExTyHpS{KzSePp\\_ZvO}JbQwGxSyDhRo@fTt@hm@zCdgBpIv_@pB|[t@fVgA|W_EftAeW~`@yHpf@eJvf@aJ`XsBdXHvW`C`uBtZhUxFjTvI~]pRft@d`@dObGrSfEfTbAlRw@xS}DvV}I|oCsbArZuI|U{CzYqAzWiBlUeE`UyH|SuKzUaQ~OiJhL}ApJd@xKjD`JlHxM`NbItDxJxAde@jAxYl@`Sr@lb@fDvg@pEtKdAnPxAvIp@nABzE?jJa@xL}@fH]T@^`@HZBXCZKXQPWJ[@uECe@@GLCRBt@JhBxCdZvDr`@ING@GASm@IEODKL?HF`@F?Ul@a@^w@`@c@z@BDB?EA");
    renderPath(decodedPath, map, "#0000ff");

    //ride to ride for kids
    var decodedPath = google.maps.geometry.encoding.decodePath("ii~zEdvb~M?WVy@ZYH?h@VpkAhw@||@dl@bSfL~UjKh^~Lz_@nMf[zKnQbK|NtMnO~RfVzZzJxGlM~D||@dJxb@dEvRzAfOi@lP}Cl]}H|RoB`KQfBDrG`@rKvAhO|DlVtHvSvCvRd@nWm@tL|@hLjDfLvHvu@pl@`XpS~JlFhLdBzSz@dWjAtGfAdCz@`DzAvGjFpNzP`W`[nNjNjQxN`MlLxCzG~@lI_@hLyBzQwDxLoGlJuIhG_P`Gea@pNwIpGmGrJ}DxLaJp[}Pdf@aJbYuAnN?rUK~i@yBbN}EhLsRf\\qXpe@eFtNwCbRaJvu@cFfk@_@bQ^je@q@lUmEzq@qDfr@Kbc@j@xi@dC`UpHjj@|Edd@vPhiBpBx[o@zPyEld@aBnWr@rNtCxM`\\jfA`Mt^`h@hhAlEfPnBhQXzSJto@rAvQlDrPfG|NjHjKtLxK`cCfnBrPhOpHtM`E`NhFn[fKdk@xE`KjJvKz_@x`@nMtPrD~KjFh[bKtj@dGjQxG|LrDdF`BdCDTDn@?VEXETMT]d@i@XUFc@Kw@[SSSWM[I]E_@?_@Ha@H[`@u@RUhIyGvg@ca@bLyIbF_E`KuGnMkFtFuAbCc@~Ca@pEa@jKs@jm@yEjuAgJx\\k@vWXfFPfJf@pNfAlzB|UnUhC|S|BbOxAhN~@zJq@|DqAz@]HIB_@_@oAY}A?aAD_@L[RUVQ\\I|@HZLZVR^PvABl@?r@fBdh@~@`Ux@dXhAfZh\\naHxFfiAbSf{BdDza@hFvr@r@pSkAdSiC|`@q@|IIn@GPIJ[JShBDjATVFL?f@sBx\\]|MTjQ?rAEJOLUDWAiD}@u@QM@MFWZ[|@aAfD[pCY^SJwA\\EC[{Bg@kFAS`@q@C?");
    renderPath(decodedPath, map, "#33ffff");

    //ride to roxboro with michelle
    var decodedPath = google.maps.geometry.encoding.decodePath("sh~zEjvb~M]k@uA}@OE[TW^mBrD{LbU_MnUoHrM}FfFsHbC_IFuN@c@PwHr@cRw@sFFyFvB_GdD{LzKyIzIcBnFgAdNoAlRBdGTpAd@fAn@dArD|E`@fALf@TdC@|Aq@xG}CbOQlBjAnYQjDoAtDqF~IaClBgA`@kAHe@?e@Ee@Ke@Me@SgAo@yJmEuLk@sIv@_OfDyHjByL`IkJtHkLpIc@LaNfByJhD{JxDyUpF{KZyTlDsIjB_@T]Zs@`Ai@nAQl@WtACn@E|AC|UW~G]zAmBhE_@^cAp@e@T}JtDgBjA{@bAwD|HwDh`@mFbZgBpGc@tAKNQHk@Hu@AsEF{I~AeQxBcNoAyT{A{IdCyHf@uHoBwJgFwIgHcC_@{A@k@FuAb@wAx@wLvGoEnD}FpH{IjFob@fVuCdAmEz@qKx@uZdBeIq@cHyDsRsL{H{B_OeC{YgFaVgDoIx@iJfEoNpF{TnGeUvIiNlD}J_@oi@{I{IiDuHqB}TK_Rd@wQdFaSlEwNv@uKv@kMhDoTdHuIJc_@}@{Yo@kIdAcHbE}JbLoJbI{M~GqKz@aM]kTy@_JaBoHoFuIwJ_a@uc@gMiKqMiGgg@eQkJ{C}OwCwRgDcJLqHlCwg@r]{IzF}U`Pgd@~ZwJdHkFrEyAt@oHpEMBKKW_@mDsIKGM?[NoHdF}WjQ_LfHmFj@iHHq@FGHq@zD}@vDQRc@ZKRBA@XLN@F?L_ApE_AtI]dQYjPt@zNxDhn@h@tGtAfTv@nVR|[gBvo@uAlfAk@`b@Ff]z@zZfEnr@dCpYvEj_@nE`VnKrc@rIr^hIb]~@fKp@xfBgAn}AQ`HkArEmElH}GxG}I|DgHlC{C~@[NYTkE~EkSj]cLhNsWxS}ErHyBhJoCbZaCz[^hGCr@El@k@hCQ|A?r@V`Df@`PwBdQ_BzSb@rKi@zZwAtJEp@?r@PfBLt@h@dBXp@dDhLvBjTnA`RkAzJyHlWcE`L_@f@}LbNsD~EQj@MdB?t@HnBjB`SbDlWbAt[`A~Vz@dVMzImEfSyDnIgClFQt@Mx@wBfTu@xPTpBLt@rIvYb@vIMtQsC`UmFj[qAjK?v@Bt@TjBNt@xHlYrCtNQpLm@jS}@`ViCrMiFrKuBzHaCnQwFvc@kAvEeL`VoFzLiDnKcNpQa@rA}AhKsDjOsDlLsA`JuBzK{EnIiK|PyDhJuGhWgErMiF|Pc@nH^|P^zAl@rAbIhOJj@dEjY^vDAbEmAfHmEpOyA~DaEfGiHdKaDbFcB|EqAxG}BlM_EjTq@dDmAbFoGvTgCdIeH`W[f@KH[P]JaDLcG|@iJlEoI~EwG`EyCzDg@rA[XmDjBeJzDcFjDqJnFqMdCgNdC{JLeFw@m@O{@[yDmBuDeD}CaDqCgFaFwH_GuDcLmGq@c@GI@_@DUCK]c@C?B@EDDPXV@JENKLSBMCyEkC_c@sVo@e@}BkCaBoFa@wEsCe_@y@{MS}GeAgKeMqo@mBiL}@}MiEiQqCsL_DaOwD_OaHuMeKyM_LqO_FyMeIaK_F_J{IcS_ByKaBmZ}A{SwBuIeGcRkF{No@gHUyJcCaI_GeKc[oc@yCsDuDmDgEmCg@Ki@Gk@?g@DwATmMbAyGcCcEoFcI_MyFyBkO_E_G{E_EuHyGmOsA{JuBuUqD{IuF_GyZcTgKcImJ{I{LqOyGaEkA_Ac@g@oIeKgFwBgNyBiKQwFaAyDyDiJoMqG}LgFyLqA_LMk@Qk@e@sAWe@w@gA_@a@gAw@oAk@coAog@yL_HyFaKkIiN}KoM}K{Jsb@_WcBmB_@k@q@_Be@gBOu@OoBcA_TN_ArBaPc@_Kg@uNm@aI}D}MiH{KiB}FO_J`@aa@hAwNpAsOeAgIa@k@yA}Bc@g@qQsQ{NgMiWoKoOsFmQoKiKoGEIHYHOTAf@DxDEtGaBtG_FfNkPnNqP|GoEvScL|e@qWnRyJ~PoMxRsQbPsOrJoLvHoHvHoC`R}ExPeHjLkFhJ}ClTsB`NmBfGcE~U}VtRkQjLiIhHm@lZh@`W^zLi@xMoA|HcCtGyFfE}InJoS~CsCl@Yj@W|GiAfVu@`VgAjIkCbPaOxGuAlQkBxH_ElQ}IbTmJhKaGlF_I`Qq[hPsY`IqM~GgQjNeWbH_QnI}LpG}FbImChXwGdKyGjIuJrNcTrKwLlQqMdXgRpZ_U~HaKrGaOlJsUz\\cc@bPmU~MwOvo@kt@xKwI`QuMb[yYdLeJzH_E`JeGxH_D`OgDxI}FjGkH~GgKrFmNfFsJ`I}H`L}IrIyHjIyHjEuCtCiCzGuGdMmMFKDUFm@PwIb@aPz@kGjDmNl@{BNWZSRGXAxAC~Km@nFiDhLyHdLoHpI_GhBeA\\^rDdJJFHBLCNG~JqGvEcE|GcFnFoDlIaGnJsGxHcFdAk@j@a@j^qVzh@g^xGcCzHYjK~Ah[hGlExAlFnBb\\fLtSfJxLxJ~^ra@bO`PtH|DtIz@nTp@`P?fL_CjMuInIaJnLoKbIoBtLHzu@nBlIwAvXkJ`NqA|XeCdY}HpLyAlWRrLdAtKrE~M`CdWbEvM|@rIuAbPkGbZ{JjP_FzRyHrI@dKhBd[pFj[zFp_@|S`Hl@zOeAv[yCvK_F`d@{W`FsEjE{FbOeI`GoBnBLlDjAdEvD~GxE|KvDlG?nIiCpHg@nMrAvQ|AtAMhW}E`EI`A@TBDARYnAkEzB_JzA{IfCuQ~BkWLs@To@p@aB|@yAjCcDn@]rN}F^]t@iAVi@Xm@x@oCHs@Fu@BgB?{YLgBFo@^uAl@iAv@_A^Yb@[f@Sf@MbS_DtPyAzKiAzVoH");
    renderPath(decodedPath, map, "#ff3399");

    //ride to va - smoke chasing
    var decodedPath = google.maps.geometry.encoding.decodePath("of{zEzqd~MQKc@IQ?[FG?u@I}Ak@@C[GI?e@JSCg@W_SyMeuAi~@e`@eWmWgOc\\wL}U}IsXaMgOqEsRgD_IcDa^wOmRyEia@}JyQkGigAof@}VoLuKeJaZsXuV_T{JiCeZyFqf@}Hcb@}FsTk@eSpAqhAhLy]`DmNUaNkCca@uLqTkIoPkEg_@uEmNNcNfCoWnJ__@vMyIf@sIcAo^eJsUqD{]wCiTuCc[aKuS_F}a@qJqPoEsXwKg`@eO{n@wOqMyE{PwJaO}M}iA{jAmOmReIeQ{ZwcA}GkMkJsJeLeGiMoCuc@gHq`@iGwb@gEaa@iE{h@kFg[aE{K_E}CuCkAqAK?k@fAsDlIcMnWgA~BeC~CiRdLaBvAMj@gBdJ}BpJmB`E_@n@KDI?UU}CaF}FyEwKoG}GeDsEI_Mp@uK^_Ea@sAWqBq@yFgDqFoGaBoDkB_G[mAAYBUFMHMFAFHAHMLAD?J@@F@?B?E?BBADO?QEKCCG@EBGLKFMKGM}AiFgN_b@_C_KC[By@@C?HB@HK?OEWGGICM@UGGIyAoEoD}HqFaHkMwLiOcOeMaMgOiOoFmJmMaWkSaVsh@wm@eJ{HmJgDaRwEeXyKgOcMqLsKgFwI{Mcb@_Rie@gIcTIKe@NoGlEeLjGoO|FyNvDcLpEmKzFg@Li@FwO\\gU\\aLuAuIQi@J{KnDyFIqGwCmPqImAeAc@g@}@}AaJoSoIcQyDgDgYeKgLkCaKI{Io@gH{CmLwGeWiOiIuEaI{B_GwAoOuCoIi@oLq@eO}AkHp@}H~CwH`B{NxBqN|DyJdAaY_@kGyAmJoGmOkGiOaA{MeD_SkIaEmAyEu@cHQwFAa@@o@PHAEGQ?cASqDk@mG_DePwJkLkC}IwEiJeIwDeJ{CcQgBuI]u@_AyAoAiAgLmHmHUuLvBuU|CiK`@s@Io@Om@Sm@WuAy@qBwB]q@o@kBsJy`@iIsXqGgQ_@m@kAqAg@c@kHyHwHmPwR{YwOaPsIwF{TiHgHEkF`BmMbGsLnHkK`K{LrK_MnCcXnFeMbAwAc@i@Wg@YoHgGqAm@gDg@m@@k@FuAf@g@TqM|GaP|I}HxHiL|N_DhKqEdUmFvRiLf^eArB[`@]Za@Xa@VgAZg@H{QhBmRbC}@h@[XY^U\\g@bA_@jAuNxl@gC`KMXSPWJYB]GwAq@cDiAgAIwKe@]UWa@Om@UuAOe@Sc@W_@[Y]Sc@Mc@Ig@Ae@@cKz@}F|Cwc@v_@{EdIsBvDa@\\c@Rg@Ni@Bi@A{ASmVyFoH_EiEoGgQq]gOe[yN_`@qF}JiS}XoGqCmNqAyT}@yW^kG~CoTbRkQzLwF?oLqCuR{Cog@}@aIQgCKYGEm@?YBaAhBobJ?ue@Fa_@Qo\\wB_IuEmFuK_Fy^gPwYmLiIqFwH{Jk{@{tAaOmUsW_b@iP_YuBcK[aHDiAGUGEG?_AJiE?aFyBgFmHsJuOqVk`@oL}SkCiLmBkJ");
    renderPath(decodedPath, map, "#663399");

    //ride to 
//    var decodedPath = google.maps.geometry.encoding.decodePath("");
//    renderPath(decodedPath, map, "#ff0000");

}
    

// #ff0000
// #00ff00
// #0000ff
// #33ffff
// #ff3399
// #663399
// #003333
// #003366
// #00ffcc
//}

load2013RideMap_v3();
