webpackJsonp([34],{1139:function(e,a,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(84),o=i(n),d=t(533),l=i(d),s=t(190),r=t(527),c=i(r),f=t(127),p=t(128),u=i(p),h=t(191),m=i(h);a.default={components:{myhead:l.default,loading:c.default},data:function(){return{header:{name:"性别",link:"/my/profile"},loading:!1,profile:{},loadError:"",paraData:{},isIosWechat:!1}},computed:(0,o.default)({},(0,f.mapState)(["UID","TOKEN","PROFILE"])),created:function(){s.html.isIosWechat()&&(this.isIosWechat=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,dplus.track("性别",{from:s.html.useragent()}))},methods:(0,o.default)({},(0,f.mapActions)(["switchState"]),{modifySex:function(e){var a=this;this.paraData.sex=e,this.profile.sex=e,u.default.post("/seller_api/v1/user/upd_profile",m.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){a.loading=!1;var t=e.data;t.success?(a.profile.sex=a.paraData.sex,a.switchState({PROFILE:a.profile}),a.$router.push("/my/profile")):"403"==t.code||"250"==t.code?location.href="/":a.initMSG(t.codemsg)}).catch(function(e){})},closeDialog:function(e){this[e]=!0},initMSG:function(e){var a=this;this.loadError=e,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},2e3)}})}},1172:function(e,a,t){a=e.exports=t(478)(!1),a.push([e.i,".my-detail dl dt img[data-v-2829d33b]{width:100%}.my-detail dl dd[data-v-2829d33b]{color:#fff;padding-top:.4rem}.my-detail ul[data-v-2829d33b]{display:-ms-flexbox;display:flex;padding:.133333rem 0 .533333rem}.my-detail ul li[data-v-2829d33b]{-ms-flex:1;flex:1;width:0}.my-set dl[data-v-2829d33b]{line-height:.666667rem;padding:.333333rem .4rem;border-bottom:1px solid #dcdcdd}",""])},1216:function(e,a,t){var i=t(1172);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(479)("fbd9d022",i,!0,{})},1284:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Layout",[e.isIosWechat?e._e():t("myhead",{attrs:{slot:"header",hval:e.header},slot:"header"}),t("div",{staticClass:"my-set f30"},[t("dl",{staticClass:"flexBox",on:{click:function(a){a.preventDefault(),e.modifySex("男")}}},[t("dt",[e._v("男")]),t("dd",{staticClass:"flex1 tR"},["男"==e.profile.sex?t("i",{staticClass:"iconfont icon-duihao1 redCR f40"}):e._e()])]),t("dl",{staticClass:"flexBox",on:{click:function(a){a.preventDefault(),e.modifySex("女")}}},[t("dt",[e._v("女")]),t("dd",{staticClass:"flex1 tR"},["女"==e.profile.sex?t("i",{staticClass:"iconfont icon-duihao1 redCR f40"}):e._e()])])]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(a){e.closeDialog("loading")}}})],1)],1)},staticRenderFns:[]}},500:function(e,a,t){function i(e){t(1216)}var n=t(126)(t(1139),t(1284),i,"data-v-2829d33b",null);e.exports=n.exports},524:function(e,a,t){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(e,a,t){a=e.exports=t(478)(!1),a.push([e.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(e,a,t){var i=t(525);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(479)("c38d91e8",i,!0,{})},527:function(e,a,t){function i(e){t(526)}var n=t(126)(t(524),t(528),i,"data-v-4c82f682",null);e.exports=n.exports},528:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.loading?t("div",{staticClass:"newLoad animated2dot zoomIn"},[t("div",{on:{touchend:function(a){return a.preventDefault(),e.closeLoading(a)}}},[t("dl",[e.loadError?t("dd",[e._v(e._s(e.loadError))]):t("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"loader"},[t("div",{staticClass:"loader-inner ball-spin-fade-loader"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])])}]}},530:function(e,a,t){"use strict";a.__esModule=!0;var i=t(84),n=function(e){return e&&e.__esModule?e:{default:e}}(i),o=t(190),d=t(127);a.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,t){e.goback()})},computed:(0,n.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},531:function(e,a,t){a=e.exports=t(478)(!1),a.push([e.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},532:function(e,a,t){var i=t(531);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(479)("21d3127e",i,!0,{})},533:function(e,a,t){function i(e){t(532)}var n=t(126)(t(530),t(534),i,"data-v-d3e6e34c",null);e.exports=n.exports},534:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[t("ul",[e.hval.noBack?t("li",{staticClass:"special opacity"},[t("i",{staticClass:"iconfont icon-fanhui f36"})]):t("li",{staticClass:"special",on:{click:function(a){return a.preventDefault(),e.goback(a)}}},[t("i",{staticClass:"iconfont icon-fanhui f36"})]),t("li",{staticClass:"midli"},[e.hval.subname?t("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),e.goto(a)}}},[e.hval.share?t("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):t("span",[t("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),t("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});