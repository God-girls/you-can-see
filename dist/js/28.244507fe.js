webpackJsonp([28],{1096:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=i(82),o=a(n),r=i(81),s=a(r),c=(i(562),i(522)),d=a(c),l=i(528),u=a(l),f=i(184),p=i(123),m=i(550),h=(a(m),i(124)),g=(a(h),i(185));a(g);t.default={data:function(){return{show1:!0,header:{name:"其它设置",link:"/prd/create"},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,showNumber:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"my",profile:{},isWechat:!1,other:{show_comment:!0,show_sell:!0,sell_base:0},isIosWechat:!1}},components:{loading:d.default,myhead:u.default},computed:(0,s.default)({},(0,p.mapState)(["UID","TOKEN","PROFILE","STATUSBARH","CART"])),created:function(){f.html.isIosWechat()&&(this.isIosWechat=!0)},mounted:function(){this.$route.query.id&&(this.header.link="/prd/create?id="+this.$route.query.id),dplus.track("我的",{from:f.html.useragent()}),document.body.addEventListener("touchstart",function(){}),this.other=this.CART.other},methods:(0,s.default)({},(0,p.mapActions)(["switchState"]),{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},goto:function(e){this.switchState({CART:(0,o.default)(this.CART,{other:this.other})}),this.$router.push(e)},closeDialog:function(e){this[e]=!1}})}},1138:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".my-set[data-v-7f0a1a2c]{position:relative;padding:0}.my-set ul[data-v-7f0a1a2c]{background:#fff;color:#908384}.my-set ul li[data-v-7f0a1a2c]{padding:0;border-bottom:1px solid #dedede}.my-set ul li dl[data-v-7f0a1a2c]{padding:0 .4rem}.my-set ul li dt[data-v-7f0a1a2c]{width:.933333rem}.my-set ul li dd[data-v-7f0a1a2c]{line-height:2rem;height:2rem;color:#000}.my-set ul li dd input[data-v-7f0a1a2c]{bottom:0;margin:auto}.my-set ul li p[data-v-7f0a1a2c]{padding:.4rem .4rem .4rem 0;margin-left:.8rem;border-top:1px solid #dedede}.my-set ul li p input[data-v-7f0a1a2c]{border:1px solid #acacac;width:2.666667rem;line-height:.533333rem;padding:.106667rem .133333rem;border-radius:.066667rem;text-align:center;margin-left:.133333rem}.footer[data-v-7f0a1a2c]{padding:.4rem}.footer p[data-v-7f0a1a2c]{width:100%}",""])},1180:function(e,t,i){var a=i(1138);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("7338666e",a,!0,{})},1248:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[e.isIosWechat?e._e():i("myhead",{attrs:{slot:"header",hval:e.header},slot:"header"}),i("div",{staticClass:"my-set"},[i("ul",{staticClass:"blackCR f30"},[i("li",[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"flex1"},[e._v("允许评论")]),i("dd",{staticClass:"tR posiR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.other.show_comment,expression:"other.show_comment"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(e.other.show_comment)?e._i(e.other.show_comment,null)>-1:e.other.show_comment},on:{change:function(t){var i=e.other.show_comment,a=t.target,n=!!a.checked;if(Array.isArray(i)){var o=e._i(i,null);a.checked?o<0&&(e.other.show_comment=i.concat([null])):o>-1&&(e.other.show_comment=i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.other,"show_comment",n)}}}),i("span",{staticClass:"lbl"})])])]),i("li",{staticClass:"special"},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"flex1"},[e._v("显示商品售出数量")]),i("dd",{staticClass:"tR posiR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.other.show_sell,expression:"other.show_sell"}],staticClass:"ace ace-switch",attrs:{id:"deLock",type:"checkbox"},domProps:{checked:Array.isArray(e.other.show_sell)?e._i(e.other.show_sell,null)>-1:e.other.show_sell},on:{change:function(t){var i=e.other.show_sell,a=t.target,n=!!a.checked;if(Array.isArray(i)){var o=e._i(i,null);a.checked?o<0&&(e.other.show_sell=i.concat([null])):o>-1&&(e.other.show_sell=i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.other,"show_sell",n)}}}),i("span",{staticClass:"lbl"})])]),e.other.show_sell?i("p",{staticClass:"f24"},[e._v("显示数量基数 "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.other.sell_base,expression:"other.sell_base"}],attrs:{type:"number",name:""},domProps:{value:e.other.sell_base},on:{input:function(t){t.target.composing||e.$set(e.other,"sell_base",t.target.value)}}})]):e._e()])])]),i("div",{staticClass:"footer tC f30",attrs:{slot:"footer"},slot:"footer"},[i("p",{staticClass:"btn btn-green",on:{click:function(t){t.preventDefault(),e.goto(e.header.link)}}},[e._v("设置完成")])])],1)},staticRenderFns:[]}},499:function(e,t,i){function a(e){i(1180)}var n=i(122)(i(1096),i(1248),a,"data-v-7f0a1a2c",null);e.exports=n.exports},518:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(e,t,i){var a=i(519);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("ae8afd90",a,!0,{})},522:function(e,t,i){function a(e){i(521)}var n=i(122)(i(518),i(523),a,"data-v-b60b2388",null);e.exports=n.exports},523:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},524:function(e,t,i){"use strict";t.__esModule=!0;var a=i(81),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(184),r=i(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,i){e.goback()})},computed:(0,n.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},525:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(e,t,i){var a=i(525);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("504d8d1d",a,!0,{})},528:function(e,t,i){function a(e){i(527)}var n=i(122)(i(524),i(529),a,"data-v-a5c1fd86",null);e.exports=n.exports},529:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[i("ul",[e.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),e.goback(t)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[e.hval.subname?i("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),e.goto(t)}}},[e.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),i("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},550:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=B.appId,e.verifyAppId=B.appId,e.verifySignType="sha1",e.verifyTimestamp=B.timestamp+"",e.verifyNonceStr=B.nonceStr,e.verifySignature=B.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",B.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=g[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");n=t.substring(o+1),"confirm"==n&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),n=n.replace(/_/g," "),n=n.toLowerCase(),("access denied"==n||"no permission to execute"==n)&&(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function d(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!B.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||S||B.debug||"6.0.2">T||A.systemType<0)){var t=new Image;A.appId=B.appId,A.initTime=C.initEndTime-C.initStartTime,A.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){A.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+A.version+"&o="+A.isPreVerifyOk+"&s="+A.systemType+"&c="+A.clientVersion+"&a="+A.appId+"&n="+A.networkType+"&i="+A.initTime+"&p="+A.preVerifyTime+"&u="+A.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){k&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){E.invoke||(E.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},E.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),v=e.document,b=v.title,_=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),w=!(!y.match("mac")&&!y.match("win")),S=-1!=_.indexOf("wxdebugger"),k=-1!=_.indexOf("micromessenger"),I=-1!=_.indexOf("android"),x=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),T=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},A={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:I?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},B={},M={_completes:[]},R={state:0,data:{}};p(function(){C.initEndTime=f()});var V=!1,L=[],E={config:function(e){B=e,l("config",e);var t=!1!==B.check;p(function(){if(t)i(h.config,{verifyJsApiList:d(B.jsApiList)},function(){M._complete=function(e){C.preVerifyEndTime=f(),R.state=1,R.data=e},M.success=function(e){A.isPreVerifyOk=0},M.fail=function(e){M._fail?M._fail(e):R.state=-1};var e=M._completes;return e.push(function(){u()}),M.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();M._completes=[]},M}()),C.preVerifyStartTime=f();else{R.state=1;for(var e=M._completes,a=0,n=e.length;n>a;++a)e[a]();M._completes=[]}}),B.beta&&m()},ready:function(e){0!=R.state?e():(M._completes.push(e),!k&&B.debug&&e())},error:function(e){"6.0.2">T||(-1==R.state?e(R.data):M._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(I){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(I){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(V=!1,L.length>0){var t=L.shift();wx.getLocalImgData(t)}},e}())):L.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:B.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},P=1,W={};return v.addEventListener("error",function(e){if(!I){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=P++,t["wx-id"]=n),W[n])return;W[n]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!I){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(W[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=E),E}}(t)}(window)},562:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a}});