webpackJsonp([30],{1062:function(e,a,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(81),o=i(n),d=t(184),s=t(524),r=i(s),l=t(517),c=i(l),p=t(123),h=t(124),u=i(h),m=t(185),f=i(m);a.default={components:{myhead:r.default,loading:c.default},data:function(){var e;return e={header:{name:"修改个性签名",link:"/my/profile"},profile:{usr:{}},loading:!1},e.profile={},e.loadError="",e.myNick="",e.paraData={uid:7,service_mobileno:"",weixin:"",qq:""},e.token="",e.guideType=0,e.serviceInput="",e.serviceShow=!0,e.nameType=[{name:"客服手机号",type:"service_mobileno",show:"show_mobileno"},{name:"客服微信号",type:"weixin",show:"show_weixin"},{name:"客服QQ号",type:"qq",show:"show_qq"}],e.placeholder="",e},computed:(0,o.default)({},(0,p.mapState)(["UID","TOKEN","PROFILE"])),created:function(){d.html.isWechat()&&(this.header.opacity=!0),this.guideType=Number(this.$route.query.type),document.title=this.nameType[this.guideType].name,this.header.name=this.nameType[this.guideType].name,this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.paraData[this.nameType[this.guideType].type]=this.profile[this.nameType[this.guideType].type],this.paraData[this.nameType[this.guideType].show]=this.profile[this.nameType[this.guideType].show],this.placeholder="请输入"+this.header.name)},mounted:function(){dplus.track("修改个性签名",{from:d.html.useragent()})},methods:(0,o.default)({},(0,p.mapActions)(["switchState","clearState"]),{checkChar:function(e){for(var a=0,t=e.length,i=0;i<t;i++)a=e.charCodeAt(i)<=256?a+1:a+2;return a},modifyNick:function(){var e=this,a=this.paraData[this.nameType[this.guideType].type];if(!a||this.checkChar(a)<1)return void this.initMSG(this.placeholder);this.loading=!0,u.default.post("/seller_api/v1/user/upd_profile",f.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){e.loading=!1;var i=t.data;i.success?(e.profile[e.nameType[e.guideType].type]=a,e.profile[e.nameType[e.guideType].show]=e.paraData[e.nameType[e.guideType].show],e.switchState({PROFILE:e.profile}),e.$router.push("/my/profile")):"403"==i.code||"250"==i.code?e.goto("/"):e.initMSG(i.codemsg)}).catch(function(e){})},goto:function(e){this.$router.push(e)},initMSG:function(e){var a=this;this.loadError=e,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},closeDialog:function(e){this[e]=!0},clearNick:function(){var e=this;this.$nextTick(function(){e.paraData[e.nameType[e.guideType].type]=""}),console.log(this.paraData[this.nameType[this.guideType].type])}})}},1094:function(e,a,t){a=e.exports=t(471)(!1),a.push([e.i,".my-set ul[data-v-3eccc026]{padding:0 .4rem;color:#7b7b7b}.my-set ul li[data-v-3eccc026]{padding-right:1.066667rem;border-bottom:1px solid #dcdcdd}.my-set ul li input[data-v-3eccc026]{width:100%;padding:.44rem 0;display:inline-block}.my-set ul li img[data-v-3eccc026]{width:.933333rem;height:.933333rem;border-radius:.666667rem;border:1px solid #dcdcdd;vertical-align:middle;margin-right:.133333rem;position:relative;top:-.026667rem}.my-set a[data-v-3eccc026]{margin:0 .4rem;height:1.066667rem;line-height:1.066667rem;display:block;text-align:center}.my-set dl[data-v-3eccc026]{padding:.453333rem 0 1.533333rem}.my-set dd input[data-v-3eccc026]{top:0;bottom:0;margin:auto}.icon-close[data-v-3eccc026]{width:.533333rem;height:.533333rem;background-position:-1.36rem 0;position:absolute;right:.4rem;top:.4rem}",""])},1132:function(e,a,t){var i=t(1094);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(472)("064caa86",i,!0,{})},1197:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Layout",[t("myhead",{attrs:{slot:"header",hval:e.header},slot:"header"}),t("div",{staticClass:"my-set f30"},[t("ul",[t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paraData[e.nameType[e.guideType].type],expression:"paraData[nameType[guideType].type]"}],ref:"myNick",staticClass:"blackCR",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.paraData[e.nameType[e.guideType].type]},on:{input:function(a){a.target.composing||e.$set(e.paraData,e.nameType[e.guideType].type,a.target.value)}}}),t("i",{staticClass:"iconfont icon-close f40",on:{touchend:function(a){a.preventDefault(),e.clearNick(a)}}})])]),t("dl",{staticClass:"dls"},[t("dt",{staticClass:"blackCR"},[e._v("是否显示：")]),t("dd",{staticClass:"posiR"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paraData[e.nameType[e.guideType].show],expression:"paraData[nameType[guideType].show]"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(e.paraData[e.nameType[e.guideType].show])?e._i(e.paraData[e.nameType[e.guideType].show],null)>-1:e.paraData[e.nameType[e.guideType].show]},on:{change:function(a){var t=e.paraData[e.nameType[e.guideType].show],i=a.target,n=!!i.checked;if(Array.isArray(t)){var o=e._i(t,null);i.checked?o<0&&(e.paraData[e.nameType[e.guideType].show]=t.concat([null])):o>-1&&(e.paraData[e.nameType[e.guideType].show]=t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.paraData,e.nameType[e.guideType].show,n)}}}),t("span",{staticClass:"lbl"})])]),t("a",{staticClass:"btn btn-green",attrs:{href:"javascript:;"},on:{touchend:function(a){a.preventDefault(),e.modifyNick(a)}}},[e._v("提交")])]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(a){e.closeDialog("loading")}}})],1)],1)},staticRenderFns:[]}},487:function(e,a,t){function i(e){t(1132)}var n=t(122)(t(1062),t(1197),i,"data-v-3eccc026",null);e.exports=n.exports},514:function(e,a,t){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},515:function(e,a,t){a=e.exports=t(471)(!1),a.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},516:function(e,a,t){var i=t(515);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(472)("ae8afd90",i,!0,{})},517:function(e,a,t){function i(e){t(516)}var n=t(122)(t(514),t(518),i,"data-v-b60b2388",null);e.exports=n.exports},518:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.loading?t("div",{staticClass:"newLoad animated2dot zoomIn"},[t("div",{on:{touchend:function(a){a.preventDefault(),e.closeLoading(a)}}},[t("dl",[e.loadError?t("dd",[e._v(e._s(e.loadError))]):t("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"loader"},[t("div",{staticClass:"loader-inner ball-spin-fade-loader"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])])}]}},521:function(e,a,t){"use strict";a.__esModule=!0;var i=t(81),n=function(e){return e&&e.__esModule?e:{default:e}}(i),o=t(184),d=t(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,t){e.goback()})},computed:(0,n.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},522:function(e,a,t){a=e.exports=t(471)(!1),a.push([e.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},523:function(e,a,t){var i=t(522);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(472)("504d8d1d",i,!0,{})},524:function(e,a,t){function i(e){t(523)}var n=t(122)(t(521),t(525),i,"data-v-a5c1fd86",null);e.exports=n.exports},525:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[t("ul",[e.hval.noBack?t("li",{staticClass:"special opacity"},[t("i",{staticClass:"iconfont icon-fanhui f36"})]):t("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),e.goback(a)}}},[t("i",{staticClass:"iconfont icon-fanhui f36"})]),t("li",{staticClass:"midli"},[e.hval.subname?t("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),e.goto(a)}}},[e.hval.share?t("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):t("span",[t("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),t("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});