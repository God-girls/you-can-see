webpackJsonp([18],{1104:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var n=e(81),o=i(n),s=e(522),d=i(s),r=e(527),l=i(r),c=e(581),f=i(c),h=e(123),u=e(184),p=e(124),m=i(p),v=e(185),b=i(v);a.default={data:function(){return{show1:!0,header:{name:"我的钱包",link:"/my"},token:"",loading:!1,noData:!1,isCur:1,statusBar:{},loadError:"",bottomBarH:[],isApp:"",noDataText:"-----我是有底线的-----",tabs:[{name:"昨日",type:"0"},{name:"今日",type:"1"},{name:"7天",type:null},{name:"30天",type:null}],totalPageCount:-1,paraData:{begin_time:"",end_time:"",ps:50,pn:1},minDate:"2018-1-01",profile:{},listData:[]}},components:{loading:d.default,nodate:f.default,myhead:l.default},computed:(0,o.default)({},(0,h.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),created:function(){u.html.isWechat()&&(this.header.opacity=!0)},mounted:function(){u.html.isWebAndroid()&&(this.isAndroid=!0),this.TOKEN&&(this.profile=this.PROFILE,this.paraData.uid=this.UID,this.token=this.TOKEN),this.getBonus(),dplus.track("收入分析",{from:u.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,o.default)({},(0,h.mapActions)(["switchState","clearState"]),{changeType:function(t){this.isCur=t,this.typeFormat(),this.getList()},typeFormat:function(){switch(this.isCur){case 0:this.dataTime.start=u.html.timeForMat(1),this.dataTime.end=u.html.timeForMat(1);break;case 1:this.dataTime.start=u.html.timeForMat(0),this.dataTime.end=u.html.timeForMat(0);break;case 2:this.dataTime.start=u.html.timeForMat(6),this.dataTime.end=u.html.timeForMat(0);break;case 3:this.dataTime.start=u.html.timeForMat(29),this.dataTime.end=u.html.timeForMat(0)}},getBonus:function(){var t=this;m.default.post("/seller_api/v1/seller/goods_stat",b.default.stringify({uid:this.paraData.uid}),{headers:{"A-Token-Header":this.token}}).then(function(a){var e=a.data;e.success?t.saleData=e.result:"403"!=e.code&&"250"!=e.code||(t.needLogin=!0,t.noToken=!0)}).catch(function(t){})},getList:function(t){var a=this;if(this.totalPageCount+1==this.paraData.pn||0==this.totalPageCount||1==this.totalPageCount)return void(t&&t(!0));m.default.post("/seller_api/v1/seller/withdraw_log",b.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){var i=e.data;if(i.success){var n=i.result;a.totalPageCount=n.totalPageCount,1==a.paraData.pn?(a.listData=n.items,a.listData.length<6&&(a.noDataText=""),0==a.listData.length&&(a.noData=!0)):a.listData=a.listData.concat(n.items),a.loading=!1,a.paraData.pn=a.paraData.pn+1}else"403"!=i.code&&"250"!=i.code||a.$router.push("/");t&&t()}).catch(function(a){t&&t(t)})},onRefresh:function(t){var a=this;setTimeout(function(){a.totalPageCount=-1,a.paraData.pn=1,a.getList(t)},1e3)},onInfinite:function(t){this.indexDone=t,this.getList(t)},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},goto:function(t){this.$router.push(t)},goBack:function(){this.$router.push("/")}}),beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.timeout),clearInterval(this.timerTree)}}},1137:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,'.wrap[data-v-7cff7f4c]{background:#fff}.header[data-v-7cff7f4c]{background:#696f77;height:4.666667rem;padding:.666667rem 0 0}.header dl[data-v-7cff7f4c]{padding:.666667rem 0 0;text-align:center}.header dl span[data-v-7cff7f4c]{padding:0 .8rem;font-size:.373333rem}.header ul[data-v-7cff7f4c]{-ms-flex-align:start;align-items:start}.header li[data-v-7cff7f4c]:first-child:before{position:absolute;right:0;top:.266667rem;bottom:.266667rem;content:" ";width:.013333rem;border-right:1px solid #e7a8d6}.header li p[data-v-7cff7f4c]{font-size:.8rem;text-shadow:0 0 0 rgba(0,0,0,.16),0 0 .066667rem rgba(0,0,0,.16),0 0 .133333rem rgba(0,0,0,.16)}.balance[data-v-7cff7f4c]{border-top:.2rem solid #efeff3;padding:.133333rem 0 0;line-height:1.2rem}.balance dl dt[data-v-7cff7f4c]{border-bottom:1px solid #dedede;padding-left:.4rem}.balance dl dd[data-v-7cff7f4c]{padding-left:.4rem}.index-wrap[data-v-7cff7f4c]{margin:.133333rem .4rem .4rem;position:relative;z-index:2}.index-wrap table[data-v-7cff7f4c]{width:100%;color:#4e4e4e;text-align:center;table-layout:fixed}.index-wrap table tr th[data-v-7cff7f4c]{border-bottom:1px solid #a3a4b5;padding:.2rem 0;font-weight:400}.index-wrap table tr td[data-v-7cff7f4c]{border-bottom:1px solid #c1c1cc;padding:.24rem 0}',""])},1179:function(t,a,e){var i=e(1137);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("c983529c",i,!0,{})},1247:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{attrs:{slot:"header"},slot:"header"},[e("myhead",{attrs:{hval:t.header}}),e("div",{staticClass:"header posiR whiteCR"},[e("ul",{staticClass:"flexBox1 tC"},[e("li",{staticClass:"posiR"},[t._v("\n          余额（元）\n          "),e("p",[t._v(t._s(t.profile.balance?t.profile.balance:"0.00"))])])]),e("dl",{staticClass:"f30"},[e("dd",[e("span",{staticClass:"btn btn-green",on:{click:function(a){a.preventDefault(),t.goto("/my/withdraw")}}},[t._v("提现")])])])])],1),e("scroller",{ref:"my_scroller",attrs:{"on-infinite":t.onInfinite,"on-refresh":t.onRefresh,noDataText:t.noDataText,loadingLayerColor:"#b0abbd"}},[e("div",{staticClass:"balance f30"},[e("dl",[e("dt",[t._v("累计收入："+t._s(t.profile.total_income?t.profile.total_income:"0.00")+" 元")]),e("dd",[t._v("提现记录")])])]),e("div",{staticClass:"index-wrap whiteCR  fadeIn animateds"},[e("table",{},[e("thead",[e("tr",[e("th",[t._v("时间")]),e("th",[t._v("金额(元)")]),e("th",[t._v("余额(元)")]),e("th",[t._v("状态")])])]),e("tbody",t._l(t.listData,function(a,i){return e("tr",[e("td",[t._v("\n              "+t._s(a.updated_at)+"\n            ")]),e("td",[t._v("\n              "+t._s(a.amount)+"\n            ")]),e("td",[t._v("\n              "+t._s(a.amount)+"\n            ")]),e("td",[t._v("\n              "+t._s(a.transtype_desc)+"\n            ")])])}))]),t.noData?e("div",{staticClass:"tC noDataDiv"},[e("nodate",{attrs:{noText:"暂无记录"}})],1):t._e()])])],1)},staticRenderFns:[]}},505:function(t,a,e){function i(t){e(1179)}var n=e(122)(e(1104),e(1247),i,"data-v-7cff7f4c",null);t.exports=n.exports},518:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(t,a,e){var i=e(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("ae8afd90",i,!0,{})},522:function(t,a,e){function i(t){e(521)}var n=e(122)(e(518),e(523),i,"data-v-b60b2388",null);t.exports=n.exports},523:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},524:function(t,a,e){"use strict";a.__esModule=!0;var i=e(81),n=function(t){return t&&t.__esModule?t:{default:t}}(i),o=e(184),s=e(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,n.default)({},(0,s.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},525:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},526:function(t,a,e){var i=e(525);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("504d8d1d",i,!0,{})},527:function(t,a,e){function i(t){e(526)}var n=e(122)(e(524),e(528),i,"data-v-a5c1fd86",null);t.exports=n.exports},528:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},573:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["noText"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){console.log(t),this.$emit("hide")},close:function(t){this.$emit("hide")}}}},574:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".nodata[data-v-39535ac2]{padding-top:.4rem;text-align:center;color:#a8a8aa}.nodata p i[data-v-39535ac2]{font-size:1.146667rem}",""])},579:function(t,a,e){var i=e(574);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("521cc39c",i,!0,{})},581:function(t,a,e){function i(t){e(579)}var n=e(122)(e(573),e(582),i,"data-v-39535ac2",null);t.exports=n.exports},582:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"nodata"},[t._m(0),t._v("\n  "+t._s(t.noText)+"\n")])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("i",{staticClass:"iconfont icon-jilu"})])}]}}});