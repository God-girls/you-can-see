webpackJsonp([29],{480:function(e,n,t){function i(e){t(632)}var a=t(122)(t(551),t(667),i,"data-v-b3d7f7dc",null);e.exports=a.exports},529:function(e,n){!function(n,t){e.exports=function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,a(t),function(e){s(n,e,i)}):u(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),s(n,e,t)}):i?u(n,i):u(n,t)}function a(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=c(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",A.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function c(e,n){var t=e,i=v[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n=t+":"+a}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=h[i];a&&(e[n]=a)}return e}}function u(e,n){if(!(!A.debug||n&&n.isInnerInvoke)){var t=v[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(S||_||A.debug||b<"6.0.2"||C.systemType<0)){var n=new Image;C.appId=A.appId,C.initTime=M.initEndTime-M.initStartTime,C.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;n.src=t}})}}function f(){return(new Date).getTime()}function p(n){T&&(e.WeixinJSBridge?"preInject"===y.__wxjsjs__isPreInject?y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",n,!1):n():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){B.invoke||(B.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,a(t),i)},B.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}function g(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),y=e.document,w=y.title,k=navigator.userAgent.toLowerCase(),I=navigator.platform.toLowerCase(),S=!(!I.match("mac")&&!I.match("win")),_=-1!=k.indexOf("wxdebugger"),T=-1!=k.indexOf("micromessenger"),x=-1!=k.indexOf("android"),P=-1!=k.indexOf("iphone")||-1!=k.indexOf("ipad"),b=function(){var e=k.match(/micromessenger\/(\d+\.\d+\.\d+)/)||k.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:P?1:x?2:-1,clientVersion:b,url:encodeURIComponent(location.href)},A={},L={_completes:[]},V={state:0,data:{}};p(function(){M.initEndTime=f()});var O=!1,E=[],B={config:function(e){A=e,u("config",e);var n=!1!==A.check;p(function(){if(n)t(h.config,{verifyJsApiList:d(A.jsApiList)},function(){L._complete=function(e){M.preVerifyEndTime=f(),V.state=1,V.data=e},L.success=function(e){C.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):V.state=-1};var e=L._completes;return e.push(function(){l()}),L.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();L._completes=[]},L}()),M.preVerifyStartTime=f();else{V.state=1;for(var e=L._completes,i=0,a=e.length;i<a;++i)e[i]();L._completes=[]}}),m()},ready:function(e){0!=V.state?e():(L._completes.push(e),!T&&A.debug&&e())},error:function(e){b<"6.0.2"||(-1==V.state?e(V.data):L._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=v[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(x){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(){t("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e))},getLocation:function(e){},previewImage:function(e){t(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(O=!1,E.length>0){var n=E.shift();wx.getLocalImgData(n)}},e))):E.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(P){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){t(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}t(h.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,code:r.code};i.push(s)}t(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){t(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){t(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){p(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},W=1,N={};return y.addEventListener("error",function(e){if(!x){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=W++,n["wx-id"]=a),N[a])return;N[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!x){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(N[i]=!1)}}},!0),n&&(e.wx=e.jWeixin=B),B}}(n)}(window)},551:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var a,o=t(83),r=i(o),s=t(81),c=i(s),d=t(184),u=t(529),l=i(u),f=t(123),p=t(124),m=i(p),g=t(185),h=i(g);n.default={data:function(){return{avatar:"",paraData:{},inviterMini:""}},computed:(0,c.default)({},(0,f.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){this.paraData.code=unescape(this.getCode("code")),this.paraData.type="mini",d.html.isWechat()&&(this.getLogin(),this.pushHistory())},methods:(0,c.default)({},(0,f.mapActions)(["switchState","clearState"]),(a={pushHistory:function(){var e=this;window.addEventListener("popstate",function(n){e.$router.push("/index")},!1);var n={title:"天天快抓",url:"#"};window.history.replaceState(n,"天天快抓","#")},closeWindow:function(){l.default.ready(function(){l.default.closeWindow()})},getShare:function(){var e=this;m.default.post("/seller_api/v1/sessions/share_config",h.default.stringify({url:window.location.href.split("#")[0]})).then(function(n){var t=n.data;t.success&&e.shareFunc(t.result)}).catch(function(e){})},shareFunc:function(e){l.default.config((0,r.default)(e,{jsApiList:["checkJsApi","closeWindow"]}))},getCode:function(e){var n=self.location.search.substr(1),t=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=n.match(t);return null!=i?i[2]:null}},a.closeWindow=function(){l.default.ready(function(){l.default.closeWindow()})},a.resolveInviter=function(){location.href.indexOf("inviter")>-1&&(this.paraData.inviter=this.getCode("inviter"),this.inviterMini="?inviter="+this.getCode("inviter"),location.href.indexOf("params")>-1&&(this.paraData.inviter=this.getCode("params"),this.inviterMini+="&params="+this.getCode("params")))},a.openWechatAPP=function(){var e=this.ttDomain+"/?redirectmini=pagelogin"+(location.href.indexOf("inviter")>-1?"&inviter="+this.getCode("inviter"):"")+"#/author";location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxce1fc643edeadfdc&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"},a.getLogin=function(){var e=this;this.paraData.code=unescape(this.getCode("code")),this.jumpto=location.href.indexOf("jumpto")>-1?unescape(this.getQueryValue("jumpto")):this.ttDomain+"?"+this.timeStamp,location.href.indexOf("icode")>-1&&(this.paraData.icode=unescape(this.getQueryValue("icode"))),m.default.post("/baby_api/v1/sessions/create_oauth",h.default.stringify(this.paraData)).then(function(n){var t=n.data;t.success?(e.buildSocket(t.result.id,t.result.atoken,t.result.nick),window.localStorage.setItem("ttUid",t.result.id),window.localStorage.setItem("ttToken",t.result.atoken),location.href=e.jumpto):alert(t.codemsg)}).catch(function(e){console.log(e),alert("邪恶的外星生物破坏了娃娃机，紧急抢救中，请您稍后再试~")})},a.testToken=function(){var e=this;m.default.post("/bonus_api/v1/user/info",h.default.stringify({uid:this.UID}),{headers:{"A-Token-Header":this.TOKEN}}).then(function(n){var t=n.data;t.success?t.result&&t.result.acc?e.$router.push(e.jumpto):e.$router.push("/app/login?firstWechatLogin=true"):(e.clearState(),l.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini}))}).catch(function(n){l.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini})})},a))}},600:function(e,n,t){n=e.exports=t(470)(!1),n.push([e.i,".nowLoading[data-v-b3d7f7dc]{width:100%;height:100%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading img[data-v-b3d7f7dc]{width:4.466667rem}.nowLoading dd[data-v-b3d7f7dc]{padding:.266667rem 0 .933333rem}.nowLoading dd span[data-v-b3d7f7dc]{display:inline-block}.fadeIn[data-v-b3d7f7dc]{animation-name:fadeIn}.k-1[data-v-b3d7f7dc],.k-2[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite}.k-2[data-v-b3d7f7dc]{animation-delay:.15s}.k-3[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.3s}.k-4[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.45s}.k-5[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.6s}.k-6[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.75s}.k-7[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.9s}.k-8[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-b3d7f7dc{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])},632:function(e,n,t){var i=t(600);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(471)("0225393a",i,!0,{})},637:function(e,n,t){e.exports=t.p+"img/author.6320be5.jpg"},667:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("Layout",[i("div",{staticClass:"nowLoading"},[i("dl",[i("dt",[i("img",{attrs:{src:t(637),alt:""}})]),i("dd",{staticClass:"f30 redCR"},[i("span",{staticClass:"k-1"},[e._v("准")]),i("span",{staticClass:"k-2"},[e._v("备")]),i("span",{staticClass:"k-3"},[e._v("购")]),i("span",{staticClass:"k-4"},[e._v("物")]),i("span",{staticClass:"k-5"},[e._v("赚")]),i("span",{staticClass:"k-6"},[e._v("钱")]),i("span",{staticClass:"k-7"},[e._v("啦!")])])])])])},staticRenderFns:[]}}});