webpackJsonp([32],{1090:function(a,e,t){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}e.__esModule=!0;var o=t(81),s=i(o),n=t(184),r=t(528),l=i(r),d=t(522),c=i(d),p=t(123),h=t(124),f=i(h),m=t(185),u=i(m);e.default={components:{myhead:l.default,loading:c.default},data:function(){var a;return a={header:{name:"客服方式",link:"/my"},profile:{usr:{}},loading:!1},a.profile={},a.loadError="",a.myNick="",a.paraData={uid:7,service_mobileno:"",weixin:"",qq:"",show_mobileno:!0,show_weixin:!0,show_qq:!0},a.token="",a.guideType=0,a.serviceInput="",a.serviceShow=!0,a.nameType=[{name:"客服手机号",type:"service_mobileno",show:"show_mobileno"},{name:"客服微信号",type:"weixin",show:"show_weixin"},{name:"客服QQ号",type:"qq",show:"show_qq"}],a.placeholder="",a.isIosWechat=!1,a},computed:(0,s.default)({},(0,p.mapState)(["UID","TOKEN","PROFILE"])),created:function(){n.html.isWechat()&&(this.header.opacity=!0),this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.paraData.service_mobileno=this.profile.service_mobileno,this.paraData.weixin=this.profile.weixin,this.paraData.qq=this.profile.qq,this.paraData.show_mobileno=this.profile.show_mobileno,this.paraData.show_weixin=this.profile.show_weixin,this.paraData.show_qq=this.profile.show_qq),n.html.isIosWechat()&&(this.isIosWechat=!0),"index"==this.$route.query.from&&(this.header.link="/")},mounted:function(){dplus.track("修改个性签名",{from:n.html.useragent()})},methods:(0,s.default)({},(0,p.mapActions)(["switchState","clearState"]),{checkChar:function(a){for(var e=0,t=a.length,i=0;i<t;i++)e=a.charCodeAt(i)<=256?e+1:e+2;return e},modify:function(){var a=this;this.loading=!0,f.default.post("/seller_api/v1/user/upd_profile",u.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){a.loading=!1;var t=e.data;t.success?(a.profile.service_mobileno=a.paraData.service_mobileno,a.profile.weixin=a.paraData.weixin,a.profile.qq=a.paraData.qq,a.profile.show_mobileno=a.paraData.show_mobileno,a.profile.show_weixin=a.paraData.show_weixin,a.profile.show_qq=a.paraData.show_qq,a.switchState({PROFILE:a.profile}),a.initMSG("修改成功"),setTimeout(function(){"index"==a.$route.query.from?a.header.link="/":a.$router.push("/my")},2e3)):"403"==t.code||"250"==t.code?a.goto("/"):a.initMSG(t.codemsg)}).catch(function(a){})},goto:function(a){this.$router.push(a)},initMSG:function(a){var e=this;this.loadError=a,this.loading=!0,setTimeout(function(){e.loadError="",e.loading=!1},3e3)},closeDialog:function(a){this[a]=!0},clearNick:function(){var a=this;this.$nextTick(function(){a.paraData[a.nameType[a.guideType].type]=""}),console.log(this.paraData[this.nameType[this.guideType].type])}})}},1126:function(a,e,t){e=a.exports=t(473)(!1),e.push([a.i,".my-set[data-v-3eccc026]{position:relative;padding:0}.my-set ul[data-v-3eccc026]{background:#fff;color:#908384}.my-set ul li[data-v-3eccc026]{padding:0;border-bottom:1px solid #dedede}.my-set ul li[data-v-3eccc026]:last-child{border-bottom:none}.my-set ul li dl[data-v-3eccc026]{padding:0 .4rem}.my-set ul li dt[data-v-3eccc026]{width:.933333rem}.my-set ul li dd[data-v-3eccc026]{line-height:2rem;height:2rem;color:#000}.my-set ul li dd input[data-v-3eccc026]{bottom:0;margin:auto}.my-set ul li p[data-v-3eccc026]{padding:0 .4rem .533333rem 0;margin-left:.8rem}.my-set ul li p input[data-v-3eccc026]{border:1px solid #acacac;width:98%;line-height:.533333rem;padding:.106667rem .133333rem;border-radius:.066667rem;margin-left:.133333rem}.footer dl[data-v-3eccc026]{width:100%;padding:.4rem}.footer dl dt[data-v-3eccc026]{padding-bottom:.266667rem}.footer dl p[data-v-3eccc026]{width:100%}.footer dl dt p[data-v-3eccc026]{background:#fff;border:.013333rem solid #51aa38!important}.footer dl dt p[data-v-3eccc026]:active{background:#b9ddaf}",""])},1168:function(a,e,t){var i=t(1126);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t(474)("064caa86",i,!0,{})},1236:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Layout",[a.isIosWechat?a._e():t("myhead",{attrs:{slot:"header",hval:a.header},slot:"header"}),t("div",{staticClass:"my-set"},[t("ul",{staticClass:"blackCR f30"},[t("li",{staticClass:"special"},[t("dl",{staticClass:"flexBox"},[t("dd",{staticClass:"flex1"},[a._v("客服电话")]),t("dd",{staticClass:" posiR"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.show_mobileno,expression:"paraData.show_mobileno"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(a.paraData.show_mobileno)?a._i(a.paraData.show_mobileno,null)>-1:a.paraData.show_mobileno},on:{change:function(e){var t=a.paraData.show_mobileno,i=e.target,o=!!i.checked;if(Array.isArray(t)){var s=a._i(t,null);i.checked?s<0&&(a.paraData.show_mobileno=t.concat([null])):s>-1&&(a.paraData.show_mobileno=t.slice(0,s).concat(t.slice(s+1)))}else a.$set(a.paraData,"show_mobileno",o)}}}),t("span",{staticClass:"lbl"})])]),a.paraData.show_mobileno?t("p",{staticClass:"f24"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.service_mobileno,expression:"paraData.service_mobileno"}],attrs:{type:"number",placeholder:"请输入客服手机号",name:""},domProps:{value:a.paraData.service_mobileno},on:{input:function(e){e.target.composing||a.$set(a.paraData,"service_mobileno",e.target.value)}}})]):a._e()]),t("li",{staticClass:"special"},[t("dl",{staticClass:"flexBox"},[t("dd",{staticClass:"flex1"},[a._v("客服微信")]),t("dd",{staticClass:" posiR"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.show_weixin,expression:"paraData.show_weixin"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(a.paraData.show_weixin)?a._i(a.paraData.show_weixin,null)>-1:a.paraData.show_weixin},on:{change:function(e){var t=a.paraData.show_weixin,i=e.target,o=!!i.checked;if(Array.isArray(t)){var s=a._i(t,null);i.checked?s<0&&(a.paraData.show_weixin=t.concat([null])):s>-1&&(a.paraData.show_weixin=t.slice(0,s).concat(t.slice(s+1)))}else a.$set(a.paraData,"show_weixin",o)}}}),t("span",{staticClass:"lbl"})])]),a.paraData.show_weixin?t("p",{staticClass:"f24"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.weixin,expression:"paraData.weixin"}],attrs:{type:"text",placeholder:"请输入客服微信号",name:""},domProps:{value:a.paraData.weixin},on:{input:function(e){e.target.composing||a.$set(a.paraData,"weixin",e.target.value)}}})]):a._e()]),t("li",{staticClass:"special"},[t("dl",{staticClass:"flexBox"},[t("dd",{staticClass:"flex1"},[a._v("客服QQ")]),t("dd",{staticClass:" posiR"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.show_qq,expression:"paraData.show_qq"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(a.paraData.show_qq)?a._i(a.paraData.show_qq,null)>-1:a.paraData.show_qq},on:{change:function(e){var t=a.paraData.show_qq,i=e.target,o=!!i.checked;if(Array.isArray(t)){var s=a._i(t,null);i.checked?s<0&&(a.paraData.show_qq=t.concat([null])):s>-1&&(a.paraData.show_qq=t.slice(0,s).concat(t.slice(s+1)))}else a.$set(a.paraData,"show_qq",o)}}}),t("span",{staticClass:"lbl"})])]),a.paraData.show_qq?t("p",{staticClass:"f24"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.qq,expression:"paraData.qq"}],attrs:{type:"text",placeholder:"请输入客服QQ",name:""},domProps:{value:a.paraData.qq},on:{input:function(e){e.target.composing||a.$set(a.paraData,"qq",e.target.value)}}})]):a._e()])])]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("div",{staticClass:"footer tC f30"},[t("dl",[t("dd",[t("p",{staticClass:"btn btn-green",on:{click:function(e){e.preventDefault(),a.modify(e)}}},[a._v("确定")])])])]),t("loading",{attrs:{loading:a.loading,loadError:a.loadError},on:{closePop:function(e){a.closeDialog("loading")}}})],1)],1)},staticRenderFns:[]}},492:function(a,e,t){function i(a){t(1168)}var o=t(122)(t(1090),t(1236),i,"data-v-3eccc026",null);a.exports=o.exports},518:function(a,e,t){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(a,e,t){e=a.exports=t(473)(!1),e.push([a.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(a,e,t){var i=t(519);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t(474)("ae8afd90",i,!0,{})},522:function(a,e,t){function i(a){t(521)}var o=t(122)(t(518),t(523),i,"data-v-b60b2388",null);a.exports=o.exports},523:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.loading?t("div",{staticClass:"newLoad animated2dot zoomIn"},[t("div",{on:{touchend:function(e){e.preventDefault(),a.closeLoading(e)}}},[t("dl",[a.loadError?t("dd",[a._v(a._s(a.loadError))]):t("dt",[a._m(0)])])])]):a._e()},staticRenderFns:[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"loader"},[t("div",{staticClass:"loader-inner ball-spin-fade-loader"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])])}]}},524:function(a,e,t){"use strict";e.__esModule=!0;var i=t(81),o=function(a){return a&&a.__esModule?a:{default:a}}(i),s=t(184),n=t(123);e.default={props:{hval:{}},mounted:function(){},created:function(){var a=this;s.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(e,t){a.goback()})},computed:(0,o.default)({},(0,n.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(s.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},525:function(a,e,t){e=a.exports=t(473)(!1),e.push([a.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(a,e,t){var i=t(525);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t(474)("504d8d1d",i,!0,{})},528:function(a,e,t){function i(a){t(527)}var o=t(122)(t(524),t(529),i,"data-v-a5c1fd86",null);a.exports=o.exports},529:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{class:["my-header",{noBg:a.hval.isNobg}],style:a.isApp},[t("ul",[a.hval.noBack?t("li",{staticClass:"special opacity"},[t("i",{staticClass:"iconfont icon-fanhui f36"})]):t("li",{staticClass:"special",on:{click:function(e){e.preventDefault(),a.goback(e)}}},[t("i",{staticClass:"iconfont icon-fanhui f36"})]),t("li",{staticClass:"midli"},[a.hval.subname?t("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(e){e.preventDefault(),a.goto(e)}}},[a.hval.share?t("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):t("span",[t("i",{staticClass:"iconfont icon-add"}),a._v(a._s(a.hval.subname))])]):a._e(),t("span",{class:{opacity0:a.hval.opacity}},[a._v("\n          "+a._s(a.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});