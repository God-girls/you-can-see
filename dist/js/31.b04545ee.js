webpackJsonp([31],{1113:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(84),o=i(n),d=a(189),r=a(533),l=i(r),s=a(527),c=i(s),f=a(127),u=a(128),p=i(u),h=a(190),m=i(h);t.default={components:{myhead:l.default,loading:c.default},data:function(){var e;return e={header:{name:"修改个性签名",link:"/my/profile"},profile:{usr:{}},loading:!1},e.profile={},e.loadError="",e.myNick="",e.paraData={uid:7,signature:""},e.token="",e.isIosWechat=!1,e},computed:(0,o.default)({},(0,f.mapState)(["UID","TOKEN","PROFILE"])),created:function(){d.html.isIosWechat()&&(this.isIosWechat=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.paraData.signature=this.profile.signature),dplus.track("修改个性签名",{from:d.html.useragent()})},methods:(0,o.default)({},(0,f.mapActions)(["switchState","clearState"]),{checkChar:function(e){for(var t=0,a=e.length,i=0;i<a;i++)t=e.charCodeAt(i)<=256?t+1:t+2;return t},modifyNick:function(){var e=this;if(this.checkChar(this.paraData.signature)>30||this.checkChar(this.paraData.signature)<1)return void this.initMSG("个性签名长度1-16位");this.loading=!0,p.default.post("/seller_api/v1/user/upd_profile",m.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){e.loading=!1;var a=t.data;a.success?(e.profile.signature=e.paraData.signature,e.switchState({PROFILE:e.profile}),e.$router.push("/my/profile")):"403"==a.code||"250"==a.code?e.goto("/"):e.initMSG(a.codemsg)}).catch(function(e){})},goto:function(e){this.$router.push(e)},initMSG:function(e){var t=this;this.loadError=e,this.loading=!0,setTimeout(function(){t.loadError="",t.loading=!1},3e3)},closeDialog:function(e){this[e]=!0},clearNick:function(){this.paraData.signature=""}})}},1175:function(e,t,a){t=e.exports=a(479)(!1),t.push([e.i,".my-set ul[data-v-ddcfc4e6]{padding:0 .4rem;color:#7b7b7b}.my-set ul li[data-v-ddcfc4e6]{padding-right:1.066667rem;border-bottom:1px solid #dcdcdd}.my-set ul li input[data-v-ddcfc4e6]{width:100%;padding:.44rem 0;display:inline-block}.my-set ul li img[data-v-ddcfc4e6]{width:.933333rem;height:.933333rem;border-radius:.666667rem;border:1px solid #dcdcdd;vertical-align:middle;margin-right:.133333rem;position:relative;top:-.026667rem}.my-set a[data-v-ddcfc4e6]{margin:0 .4rem;height:1.066667rem;line-height:1.066667rem;display:block;text-align:center}.my-set>p[data-v-ddcfc4e6]{padding:.453333rem 0 1.533333rem .4rem;font-size:.293333rem}.icon-close[data-v-ddcfc4e6]{width:.533333rem;height:.533333rem;background-position:-1.36rem 0;position:absolute;right:.4rem;top:.4rem}.my-set dl[data-v-ddcfc4e6]{width:100%;padding:.4rem}.my-set dl p[data-v-ddcfc4e6]{width:90%}.my-set dl dt p[data-v-ddcfc4e6]{background:#fff;border:.013333rem solid #51aa38!important}.my-set dl dt p[data-v-ddcfc4e6]:active{background:#b9ddaf}",""])},1217:function(e,t,a){var i=a(1175);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(480)("f8bb0932",i,!0,{})},1289:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("div",{staticClass:"my-set f30"},[a("ul",[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.paraData.signature,expression:"paraData.signature"}],ref:"myNick",attrs:{type:"text",placeholder:"请输入个性签名"},domProps:{value:e.paraData.signature},on:{input:function(t){t.target.composing||e.$set(e.paraData,"signature",t.target.value)}}}),a("i",{staticClass:"iconfont icon-close f40",on:{touchend:function(t){return t.preventDefault(),e.clearNick(t)}}})])]),a("p",{staticClass:"grayCR"},[e._v("最多30个字符,一个汉字为两个字符")]),a("dl",{staticClass:"flexBox1"},[a("dt",{staticClass:"f21 grayCR"},[a("p",{staticClass:"btn btn-green greenCR",on:{click:function(t){t.preventDefault(),e.goto(e.header.link)}}},[e._v("取消")])]),a("dd",[a("p",{staticClass:"btn btn-green",on:{click:function(t){return t.preventDefault(),e.modifyNick(t)}}},[e._v("确定")])])])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)])},staticRenderFns:[]}},501:function(e,t,a){function i(e){a(1217)}var n=a(126)(a(1113),a(1289),i,"data-v-ddcfc4e6",null);e.exports=n.exports},524:function(e,t,a){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(e,t,a){t=e.exports=a(479)(!1),t.push([e.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(e,t,a){var i=a(525);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(480)("c38d91e8",i,!0,{})},527:function(e,t,a){function i(e){a(526)}var n=a(126)(a(524),a(528),i,"data-v-4c82f682",null);e.exports=n.exports},528:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(t){return t.preventDefault(),e.closeLoading(t)}}},[a("dl",[e.loadError?a("dd",[e._v(e._s(e.loadError))]):a("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},529:function(e,t,a){"use strict";t.__esModule=!0;var i=a(84),n=function(e){return e&&e.__esModule?e:{default:e}}(i),o=a(189),d=a(127);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,a){e.goback()})},computed:(0,n.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},530:function(e,t,a){t=e.exports=a(479)(!1),t.push([e.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},532:function(e,t,a){var i=a(530);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(480)("21d3127e",i,!0,{})},533:function(e,t,a){function i(e){a(532)}var n=a(126)(a(529),a(534),i,"data-v-d3e6e34c",null);e.exports=n.exports},534:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[a("ul",[e.hval.noBack?a("li",{staticClass:"special opacity"},[a("i",{staticClass:"iconfont icon-fanhui f36"})]):a("li",{staticClass:"special",on:{click:function(t){return t.preventDefault(),e.goback(t)}}},[a("i",{staticClass:"iconfont icon-fanhui f36"})]),a("li",{staticClass:"midli"},[e.hval.subname?a("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){return t.preventDefault(),e.goto(t)}}},[e.hval.share?a("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):a("span",[a("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),a("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});