webpackJsonp([8],{1034:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(81),n=i(o),d=e(569),s=i(d),r=e(514),l=i(r),c=e(521),f=i(c),h=e(184),u=e(529),p=i(u),b=e(123),m=e(124),v=i(m),g=e(185),x=i(g);a.default={data:function(){return{show1:!0,header:{name:"商品管理",link:"/admin/list"},qiimgs:"",isCur:0,isSlider:0,token:"",noDataText:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,submit:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],tabs:["托管"],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"shop",paraData:{pn:1},totalTrade:"0.00000",earthData:{},checked:[],myWallet:{},storeList:[],checkboxModel:[],withDrawWids:""}},components:{loading:l.default,myhead:f.default,nodate:s.default,modalDialog:p.default},computed:(0,n.default)({},(0,b.mapState)(["PROFILE","TOKEN","UID","RECORDPRD"])),watch:{checkboxModel:{handler:function(t,a){this.checkboxModel.length===this.storeList.length?this.checked=!0:this.checked=!1},deep:!0}},mounted:function(){h.html.isPc()&&document.body.setAttribute("class","pcBody"),this.TOKEN&&(this.token=this.TOKEN,this.profile=this.PROFILE,this.paraData.uid=this.UID),dplus.track("我的托管",{from:h.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,n.default)({},(0,b.mapActions)(["switchState"]),{getStatusBar:function(){if(localStorage.bottomBarH){var t=JSON.parse(localStorage.bottomBarH);this.bottomBarH=t["padding-bottom"]}localStorage.statusBarH&&(this.isApp=JSON.parse(localStorage.statusBarH))},onRefresh:function(t){var a=this;this.totalPageCount=-1,this.paraData.pn=1,setTimeout(function(){a.fetchStore(t)},1e3)},onInfinite:function(t){this.indexDone=t,this.fetchStore(t)},fetchStore:function(t){var a=this;if(this.noData=!1,this.totalPageCount+1==this.paraData.pn||0==this.totalPageCount||1==this.totalPageCount)return void(t&&t(!0));v.default.post("/bonus_api/v1/console/list_goods",x.default.stringify({uid:this.paraData.uid,pn:this.paraData.pn,ps:50}),{headers:{"A-Token-Header":this.token}}).then(function(e){var i=e.data;i.success?(1==a.paraData.pn?(a.storeList=i.result.items,a.storeList.length||(a.noData=!0)):a.storeList=a.storeList.concat(i.result.items),console.log(a.storeList),a.paraData.pn=a.paraData.pn+1,a.historyTotalPN=i.result.totalPageCount,a.totalPageCount=i.result.totalPageCount):("403"==i.code||"250"==i.code?a.goto("/"):a.initMSG(i.codemsg),a.totalPageCount=1),t&&t()}).catch(function(t){})},single:function(t){this.withDrawWids=t,this.submit=!0},double:function(){this.withDrawWids=this.checkboxModel.join(","),this.submit=!0},accept:function(t){var a=this;v.default.post("/bonus_api/v1/console/audit_withdraw",x.default.stringify({uid:this.paraData.uid,wid:this.withDrawWids}),{headers:{"A-Token-Header":this.token}}).then(function(t){var e=t.data;e.success?(a.onRefresh(),a.initMSG("审核通过"),a.submit=!1):("403"==e.code||"250"==e.code?a.goto("/"):a.initMSG(e.codemsg),a.totalPageCount=1),done&&done()}).catch(function(t){})},checkedAll:function(){var t=this;this.checked?(this.checkboxModel=[],this.storeList.forEach(function(a){t.checkboxModel.push(a.id)})):this.checkboxModel=[]},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},goto:function(t){this.$router.push(t)},goRecord:function(t){this.switchState({RECORDPRD:t}),this.$router.push("/admin/edit?id="+t.id)},tabChange:function(t){this.paraData.pn=1,this.isCur=t,this.fetchBack()}})}},1068:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,'.tabs[data-v-3f728268]{padding:.4rem .4rem 0}.tabs ul li.space[data-v-3f728268]{width:.666667rem}.tabs ul li.flex1[data-v-3f728268]{border-radius:.133333rem;height:.933333rem;line-height:.933333rem;color:#d66167;border:1px solid #d66167;text-align:center}.tabs ul li.flex1.current[data-v-3f728268]{background:#d66167;color:#fff;border:1px solid #d66167}.header dl[data-v-3f728268]{padding:0 .4rem}.header dl img[data-v-3f728268]{vertical-align:middle;margin-right:.066667rem;width:.453333rem}.header dl dd i.icon-qianbao[data-v-3f728268]{position:relative;top:-.04rem}.header ul li[data-v-3f728268]:first-child{border-right:1px solid #fff}.prdList[data-v-3f728268]{padding:.4rem .4rem 1.2rem}.prdList table[data-v-3f728268]{width:100%;text-align:center;table-layout:fixed}.prdList table tr th[data-v-3f728268]{border-bottom:1px solid #a3a4b5;padding:.2rem 0;background:#f3f3f3}.prdList table tr td[data-v-3f728268]{border-bottom:1px solid #c1c1cc;padding:.24rem 0}.footer dl[data-v-3f728268]{width:100%;padding:.4rem}.footer dl p[data-v-3f728268]{width:100%}.chk_1[data-v-3f728268]{width:.48rem;height:.48rem;border:1px solid #a8a8a8;border-radius:50%}.chk_1[data-v-3f728268]:checked{background:#d66167;border:none;text-align:center;line-height:.48rem}.chk_1[data-v-3f728268]:before{color:#fff;content:"\\E631";font-family:iconfont!important;font-size:.32rem;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:middle}',""])},1100:function(t,a,e){var i=e(1068);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("9a1a005c",i,!0,{})},1141:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{attrs:{slot:"header"},slot:"header"},[e("myhead",{attrs:{hval:t.header}})],1),e("scroller",{ref:"my_scroller",attrs:{"on-infinite":t.onInfinite,"on-refresh":t.onRefresh,noDataText:t.noDataText,loadingLayerColor:"#b0abbd"}},[e("div",{staticClass:"prdList"},[e("table",[e("thead",[e("tr",[e("th",{attrs:{width:"10%"}},[t._v("排序")]),e("th",{attrs:{width:"30%"}},[t._v("商品")]),e("th",[t._v("开始时间")]),e("th",[t._v("结束时间")]),e("th",{attrs:{width:"10%"}},[t._v("状态")]),e("th",{attrs:{width:"10%"}},[t._v("操作")])])]),e("tbody",t._l(t.storeList,function(a,i){return e("tr",[e("td",[t._v(t._s(a.seq))]),e("td",[t._v("\n              "+t._s(a.title)+"\n            ")]),e("td",[t._v(t._s(a.begin_time))]),e("td",[t._v(t._s(a.end_time))]),e("td",{staticClass:"blueCR"},[t._v("\n              "+t._s(a.status?"正常":"下架")+"\n              "),e("p",{staticClass:"grayCR"},[t._v(t._s((new Date).getTime()>new Date(a.end_time.split("-").join("/")).getTime()?"已过期":""))])]),e("td",{staticClass:"redCR",on:{click:function(e){e.preventDefault(),t.goRecord(a)}}},[t._v("\n              编辑\n            ")])])}))]),t.storeList.length?t._e():e("div",{staticClass:"tC"},[e("nodate",{attrs:{noText:"暂无数据"}})],1)])]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"footer tC f30"},[e("dl",[e("dd",[e("p",{staticClass:"btn btn-default",on:{click:function(a){a.preventDefault(),t.goto("/admin/edit")}}},[t._v("添加商品")])])])])])],1)},staticRenderFns:[]}},479:function(t,a,e){function i(t){e(1100)}var o=e(122)(e(1034),e(1141),i,"data-v-3f728268",null);t.exports=o.exports},510:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},511:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},513:function(t,a,e){var i=e(511);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("ae8afd90",i,!0,{})},514:function(t,a,e){function i(t){e(513)}var o=e(122)(e(510),e(515),i,"data-v-b60b2388",null);t.exports=o.exports},515:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},518:function(t,a,e){"use strict";a.__esModule=!0;var i=e(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=e(184),d=e(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},519:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},520:function(t,a,e){var i=e(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("504d8d1d",i,!0,{})},521:function(t,a,e){function i(t){e(520)}var o=e(122)(e(518),e(522),i,"data-v-a5c1fd86",null);t.exports=o.exports},522:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},525:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},526:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},528:function(t,a,e){var i=e(526);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("425b9258",i,!0,{})},529:function(t,a,e){function i(t){e(528)}var o=e(122)(e(525),e(530),i,"data-v-369b7310",null);t.exports=o.exports},530:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:t.isActive}]},[e("div",{staticClass:"diaplg-border"},[t.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[e("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?e("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}},561:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["noText"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){console.log(t),this.$emit("hide")},close:function(t){this.$emit("hide")}}}},562:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".nodata[data-v-39535ac2]{padding-top:.4rem;text-align:center;color:#a8a8aa}.nodata p i[data-v-39535ac2]{font-size:1.146667rem}",""])},568:function(t,a,e){var i=e(562);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("521cc39c",i,!0,{})},569:function(t,a,e){function i(t){e(568)}var o=e(122)(e(561),e(570),i,"data-v-39535ac2",null);t.exports=o.exports},570:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"nodata"},[t._m(0),t._v("\n  "+t._s(t.noText)+"\n")])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("i",{staticClass:"iconfont icon-jilu"})])}]}}});