webpackJsonp([23],{484:function(e,t,i){function a(e){i(628)}var n=i(122)(i(555),i(663),a,"data-v-99cd9594",null);e.exports=n.exports},503:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},504:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},505:function(e,t,i){var a=i(504);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("ae8afd90",a,!0,{})},506:function(e,t,i){function a(e){i(505)}var n=i(122)(i(503),i(507),a,"data-v-b60b2388",null);e.exports=n.exports},507:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},508:function(e,t,i){"use strict";t.__esModule=!0;var a=i(81),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(184),r=i(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,i){e.goback()})},computed:(0,n.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},509:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.106667rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},510:function(e,t,i){var a=i(509);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("504d8d1d",a,!0,{})},511:function(e,t,i){function a(e){i(510)}var n=i(122)(i(508),i(512),a,"data-v-a5c1fd86",null);e.exports=n.exports},512:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[i("ul",[e.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),e.goback(t)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[e.hval.subname?i("a",{staticClass:"f24 greenCR",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),e.goto(t)}}},[e.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),i("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},519:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a},525:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=d(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function d(e,t){var i=e,a=g[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");n=t.substring(o+1),"confirm"==n&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),n=n.replace(/_/g," "),n=n.toLowerCase(),("access denied"==n||"no permission to execute"==n)&&(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function c(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!A.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(_||S||A.debug||"6.0.2">x||M.systemType<0)){var t=new Image;M.appId=A.appId,M.initTime=C.initEndTime-C.initStartTime,M.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=i}})}}function p(){return(new Date).getTime()}function f(t){I&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){V.invoke||(V.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},V.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),v=e.document,b=v.title,y=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),_=!(!w.match("mac")&&!w.match("win")),S=-1!=y.indexOf("wxdebugger"),I=-1!=y.indexOf("micromessenger"),T=-1!=y.indexOf("android"),k=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),x=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:T?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},R={_completes:[]},B={state:0,data:{}};f(function(){C.initEndTime=p()});var E=!1,L=[],V={config:function(e){A=e,l("config",e);var t=!1!==A.check;f(function(){if(t)i(h.config,{verifyJsApiList:c(A.jsApiList)},function(){R._complete=function(e){C.preVerifyEndTime=p(),B.state=1,B.data=e},R.success=function(e){M.isPreVerifyOk=0},R.fail=function(e){R._fail?R._fail(e):B.state=-1};var e=R._completes;return e.push(function(){u()}),R.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();R._completes=[]},R}()),C.preVerifyStartTime=p();else{B.state=1;for(var e=R._completes,a=0,n=e.length;n>a;++a)e[a]();R._completes=[]}}),A.beta&&m()},ready:function(e){0!=B.state?e():(R._completes.push(e),!I&&A.debug&&e())},error:function(e){"6.0.2">x||(-1==B.state?e(B.data):R._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:c(e.jsApiList)},function(){return e._complete=function(e){if(T){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(E=!1,L.length>0){var t=L.shift();wx.getLocalImgData(t)}},e}())):L.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(k){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},D=1,O={};return v.addEventListener("error",function(e){if(!T){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=D++,t["wx-id"]=n),O[n])return;O[n]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!T){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(O[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=V),V}}(t)}(window)},555:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=i(125),o=a(n),r=i(82),s=a(r),d=i(81),c=a(d),l=(i(519),i(506)),u=a(l),p=i(511),f=a(p),m=i(184),h=i(123),g=i(525),v=a(g),b=i(124),y=a(b),w=i(185),_=a(w);t.default={data:function(){return{show1:!0,header:{name:"我的",link:"/"},headImg:"",isCur:1,isSlider:0,token:"",begin_seconds:!1,statusBar:{},historyTotalPN:1,bottomBarH:[],loading:!1,loadError:"",leftTime:"00:00:00",paraData:{price:{},imgs:[]},isApp:"",navType:"my",profile:{},imgUrl:[],imgFile:[],isWechat:!1}},components:{loading:u.default,myhead:f.default},computed:(0,c.default)({},(0,h.mapState)(["UID","TOKEN","PROFILE","STATUSBARH","CART"])),mounted:function(){console.log(this.CART),this.TOKEN&&(this.profile=this.PROFILE,this.paraData.uid=this.UID,this.token=this.TOKEN),this.autoTextarea(document.getElementById("text"),"",400),dplus.track("我的",{from:m.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},getShare:function(){var e=this;y.default.post("/seller_api/v1/sessions/share_config",_.default.stringify({url:window.location.href.split("#")[0]})).then(function(t){var i=t.data;i.success&&e.shareFunc(i.result)}).catch(function(e){})},shareFunc:function(e){var t=this;v.default.config((0,s.default)(e,{debug:!0,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","closeWindow","chooseImage","previewImage","uploadImage","downloadImage","scanQRCode"]})),v.default.ready(function(){var e={title:"小小麦",desc:"小小卖家最爱的小小麦~",link:t.ttDomain+"?"+t.timeStamp,imgUrl:t.ttLogoImg,success:function(){}};v.default.onMenuShareAppMessage(e),v.default.onMenuShareQQ(e),v.default.onMenuShareWeibo(e),v.default.onMenuShareQZone(e),v.default.onMenuShareTimeline(e)})},chooseImg:function(){var e=this;v.default.chooseImage({count:9,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var i=t.localIds;e.showImg(i[0])}})},showImg:function(e){var t=this;v.default.getLocalImgData({localId:e,success:function(e){var i=e.localData;0!=i.indexOf("data:image")&&(i="data:image/jpeg;base64,"+i),i=i.replace(/\r|\n/g,"").replace("data:image/jgp","data:image/jpeg"),t.imgUrl.push(i),t.modifyImg(i)}})},previewImage:function(e){v.default.previewImage({current:e,urls:this.imgUrl})},initMSG:function(e){var t=this;this.loading=!0,this.loadError=e,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)},modifyImg:function(e){var t=this;y.default.post("/seller_api/v1/seller/upload_image",_.default.stringify({uid:this.paraData.uid,image_b64:e}),{headers:{"A-Token-Header":this.token}}).then(function(e){t.loading=!1;var i=e.data;i.success?t.imgFile.push(i.result):"403"==i.code||"250"==i.code||t.initMSG(i.codemsg)}).catch(function(e){})},onFileChange:function(e){var t=window.URL||window.webkitURL,i=e.target.files||e.dataTransfer.files,a=(Number(e.target.dataset.type),"");if(i&&i.length){a=/^image\/\w+$/;for(var n=0;n<i.length;n++)a.test(i[n].type)?(this.imgUrl.push(t.createObjectURL(i[n])),this.modifyImg(i[n])):this.initMsg("请选择图片")}},autoTextarea:function(e,t,i){t=t||0;var a=!!document.getBoxObjectFor||"mozInnerScreenX"in window,n=!!window.opera&&!!window.opera.toString().indexOf("Opera"),o=function(t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)},r=e.currentStyle?function(t){var i=e.currentStyle[t];if("height"===t&&1!==i.search(/px/i)){var a=e.getBoundingClientRect();return a.bottom-a.top-parseFloat(r("paddingTop"))-parseFloat(r("paddingBottom"))+"px"}return i}:function(t){return getComputedStyle(e,null)[t]},s=parseFloat(r("height"));e.style.resize="none";var d=function(){var o,d,c=0,l=e.style;e._length!==e.value.length&&(e._length=e.value.length,a||n||(c=parseInt(r("paddingTop"))+parseInt(r("paddingBottom"))),o=document.body.scrollTop||document.documentElement.scrollTop,e.style.height=s+"px",e.scrollHeight>s&&(i&&e.scrollHeight>i?(d=i-c,l.overflowY="auto"):(d=e.scrollHeight-c,l.overflowY="hidden"),l.height=d+t+"px",o+=parseInt(l.height)-e.currHeight,document.body.scrollTop=o,document.documentElement.scrollTop=o,e.currHeight=parseInt(l.height)))};o("propertychange",d),o("input",d),o("focus",d),d()},created:function(){var e=this,t={};return t.spec_name=this.CART.priceSet.spec_name,t.def_price=this.CART.priceSet.def_price,t.price=this.CART.priceSet.list,this.paraData.imgs=(0,o.default)(this.imgFile),this.paraData.price=(0,o.default)(t),this.paraData.spec=(0,o.default)(this.CART.specs),this.paraData.show_comment=this.CART.other.show_comment,this.paraData.show_sell=this.CART.other.show_sell,this.paraData.sell_base=this.CART.other.sell_base,this.paraData.ext=(0,o.default)(this.CART.priceSet),this.paraData.desc?this.imgUrl.length?t.spec_name?(this.loading=!0,void y.default.post("/seller_api/v1/seller/create_goods",_.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){e.loading=!1;var i=t.data;i.success?e.loading=!1:"403"==i.code||"250"==i.code||e.initMSG(i.codemsg)}).catch(function(e){})):void this.initMSG("请设置定价"):void this.initMSG("请选择图片"):void this.initMSG("添加商品描述")},goto:function(e){this.$router.push(e)},closeDialog:function(e){this[e]=!1}}}},596:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".myHeader[data-v-99cd9594]{padding:.4rem .4rem 0}.publish[data-v-99cd9594]{padding:.666667rem .8rem 0}.publish div[data-v-99cd9594]{outline:0;line-height:.533333rem;overflow-y:auto;padding-bottom:.266667rem}.publish div textarea[data-v-99cd9594]{width:100%;border:none}.modifyImg[data-v-99cd9594]{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0}.publish ul[data-v-99cd9594]{display:-ms-flexbox;display:flex;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.publish ul li[data-v-99cd9594]{width:2.6rem;height:2.6rem;line-height:0;margin-right:.133333rem}.publish ul li img[data-v-99cd9594]{width:100%;height:100%}.publish ul li.special[data-v-99cd9594]{line-height:2.6rem;background:#d7d7d7;text-align:center}.publish ul li.special[data-v-99cd9594]:active{background:#c5c4c4}.icon-add[data-v-99cd9594]{font-size:1.2rem}.my-set[data-v-99cd9594]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-99cd9594]{background:#fff;line-height:1.6rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-99cd9594]{padding:0 .8rem}.my-set ul li dl[data-v-99cd9594]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-99cd9594]{width:.933333rem}.my-set ul li dd[data-v-99cd9594]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-99cd9594]{color:#7f7f7f}.my-set ul li:last-child dl[data-v-99cd9594]{border-bottom:none}.my-set ul li[data-v-99cd9594]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-99cd9594]{opacity:0}.my-set ul li dd i[data-v-99cd9594]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-99cd9594]{display:block}.footer[data-v-99cd9594]{width:100%;padding:.4rem}.footer p[data-v-99cd9594]{width:100%}",""])},628:function(e,t,i){var a=i(596);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("1bef839a",a,!0,{})},663:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("myhead",{attrs:{slot:"header",hval:e.header},slot:"header"}),i("div",{staticClass:"publish f30"},[i("div",{staticClass:"blackCR"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.paraData.desc,expression:"paraData.desc"}],attrs:{placeholder:"商品描述...",id:"text"},domProps:{value:e.paraData.desc},on:{input:function(t){t.target.composing||e.$set(e.paraData,"desc",t.target.value)}}})]),i("ul",[e._l(e.imgUrl,function(t,a){return i("li",{staticClass:"posiR imgs",on:{touchend:function(t){t.preventDefault(),e.previewImage(e.imgUrl[a])}}},[i("img",{attrs:{src:e.imgUrl[a],alt:""}})])}),i("li",{staticClass:"special posiR",on:{touchend:function(t){t.preventDefault(),e.chooseImg(t)}}},[i("i",{staticClass:"iconfont icon-add"})])],2)]),i("div",{staticClass:"my-set f30"},[i("ul",{staticClass:"blackCR"},[i("router-link",{attrs:{tag:"li",to:"/prd/spec"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-guigecanshu f30"})]),i("dd",{staticClass:"flex1"},[e._v("规格")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f30"})])])]),i("router-link",{attrs:{tag:"li",to:"/prd/price"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-jin f30"})]),i("dd",{staticClass:"flex1"},[e._v("价格")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f30"})])])]),i("router-link",{attrs:{tag:"li",to:"/prd/other"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-qita f36"})]),i("dd",{staticClass:"flex1"},[e._v("其它")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f30"})])])])],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"footer tC f30"},[i("p",{staticClass:"btn btn-green",on:{click:function(t){t.preventDefault(),e.created(t)}}},[e._v("发布")])]),i("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)],1)},staticRenderFns:[]}}});