webpackJsonp([36],{1056:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a,o=n(82),r=i(o),s=n(81),c=i(s),d=n(184),u=n(544),l=i(u),f=n(123),p=n(124),m=i(p),g=n(185),h=i(g);t.default={data:function(){return{avatar:"",paraData:{type:"H5"},inviterMini:""}},computed:(0,c.default)({},(0,f.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){if(this.$route.query.redirecto){var e=this.ttDomain+"/#/app/author?jumpto=",t="/prd/list?seller="+this.$route.query.seller;return this.$route.query.goodid&&(t+="&goodid="+this.$route.query.goodid),e+=encodeURIComponent(t),void(d.html.isWechat()?location.href=d.html.openInWechat(e):location.href=d.html.openInOher(e))}d.html.isWechat()?this.getLogin():(this.getLogin2(),this.paraData.oatype="qq")},methods:(0,c.default)({},(0,f.mapActions)(["switchState","clearState"]),(a={pushHistory:function(){var e=this;window.addEventListener("popstate",function(t){location.href.indexOf("/prd/list")>-1?e.$route.push(location.href.split("#")[1]):e.$router.push("/index")},!1);var t={title:"小小麦",url:"#"};window.history.replaceState(t,"小小麦","#")},closeWindow:function(){l.default.ready(function(){l.default.closeWindow()})},getShare:function(){var e=this;m.default.post("/seller_api/v1/sessions/share_config",h.default.stringify({url:window.location.href.split("#")[0]})).then(function(t){var n=t.data;n.success&&e.shareFunc(n.result)}).catch(function(e){})},shareFunc:function(e){l.default.config((0,r.default)(e,{jsApiList:["checkJsApi","closeWindow"]}))},getCode:function(e){var t=self.location.search.substr(1),n=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(n);return null!=i?i[2]:null}},a.closeWindow=function(){l.default.ready(function(){l.default.closeWindow()})},a.resolveInviter=function(){location.href.indexOf("inviter")>-1&&(this.paraData.inviter=this.getCode("inviter"),this.inviterMini="?inviter="+this.getCode("inviter"),location.href.indexOf("params")>-1&&(this.paraData.inviter=this.getCode("params"),this.inviterMini+="&params="+this.getCode("params")))},a.openWechat=function(){var e=this.ttDomain+"/?&goodid="+this.$route.query.goodid+"&seller="+this.$route.query.seller+"#/app/author";location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx357ca89ca431b3ca&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"},a.getQueryValue=function(e){var t=self.location.href.split("#")[0].split("?")[1],n=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(n);return null!=i?i[2]:null},a.getLogin=function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),m.default.post("/seller_api/v1/sessions/create_oauth",h.default.stringify(this.paraData)).then(function(t){var n=t.data;n.success?(window.localStorage.setItem("ttUid",n.result.id),window.localStorage.setItem("ttToken",n.result.atoken),e.switchState({TOKEN:n.result.atoken,UID:n.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):alert(n.codemsg)}).catch(function(e){console.log(e),alert("宝贝太火爆了，系统繁忙，请稍后再试~~")})},a.getLogin2=function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),m.default.post("/seller_api/v1/sessions/create_oauth2",h.default.stringify(this.paraData)).then(function(t){var n=t.data;n.success?(window.localStorage.setItem("ttUid",n.result.id),window.localStorage.setItem("ttToken",n.result.atoken),e.switchState({TOKEN:n.result.atoken,UID:n.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):alert(n.codemsg)}).catch(function(e){console.log(e),alert("邪恶的外星生物破坏了娃娃机，紧急抢救中，请您稍后再试~")})},a.testToken=function(){var e=this;m.default.post("/bonus_api/v1/user/info",h.default.stringify({uid:this.UID}),{headers:{"A-Token-Header":this.TOKEN}}).then(function(t){var n=t.data;n.success?n.result&&n.result.acc?e.$router.push(e.jumpto):e.$router.push("/app/login?firstWechatLogin=true"):(e.clearState(),l.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini}))}).catch(function(t){l.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini})})},a))}},1118:function(e,t,n){t=e.exports=n(472)(!1),t.push([e.i,".nowLoading[data-v-b3d7f7dc]{width:100%;height:80%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading dt img[data-v-b3d7f7dc]{width:2.906667rem}.nowLoading dd[data-v-b3d7f7dc]{padding:.266667rem 0 .933333rem}.nowLoading dd img[data-v-b3d7f7dc]{width:.4rem;height:.4rem}.nowLoading dd span[data-v-b3d7f7dc]{display:inline-block}.fadeIn[data-v-b3d7f7dc]{animation-name:fadeIn}.k-1[data-v-b3d7f7dc],.k-2[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite}.k-2[data-v-b3d7f7dc]{animation-delay:.15s}.k-3[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.3s}.k-4[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.45s}.k-5[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.6s}.k-6[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.75s}.k-7[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.9s}.k-8[data-v-b3d7f7dc]{animation:k-loadingP-data-v-b3d7f7dc 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-b3d7f7dc{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])},1159:function(e,t,n){var i=n(1118);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(473)("0225393a",i,!0,{})},1191:function(e,t,n){e.exports=n.p+"img/l1.adf1428.png"},1192:function(e,t,n){e.exports=n.p+"img/l2.bb7740c.png"},1193:function(e,t,n){e.exports=n.p+"img/l3.bed5a25.png"},1194:function(e,t,n){e.exports=n.p+"img/l4.9e54166.png"},1195:function(e,t,n){e.exports=n.p+"img/l5.f253c60.png"},1196:function(e,t,n){e.exports=n.p+"img/l6.1dcc2b4.png"},1197:function(e,t,n){e.exports=n.p+"img/load.c913530.png"},1231:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"nowLoading"},[i("dl",[i("dt",[i("img",{attrs:{src:n(1197),alt:""}})]),i("dd",{staticClass:"f30 redCR"},[i("span",{staticClass:"k-1"},[i("img",{attrs:{src:n(1191),alt:""}})]),i("span",{staticClass:"k-2"},[i("img",{attrs:{src:n(1192),alt:""}})]),i("span",{staticClass:"k-3"},[i("img",{attrs:{src:n(1193),alt:""}})]),i("span",{staticClass:"k-4"},[i("img",{attrs:{src:n(1194),alt:""}})]),i("span",{staticClass:"k-5"},[i("img",{attrs:{src:n(1195),alt:""}})]),i("span",{staticClass:"k-6"},[i("img",{attrs:{src:n(1196),alt:""}})])])])])])},staticRenderFns:[]}},482:function(e,t,n){function i(e){n(1159)}var a=n(122)(n(1056),n(1231),i,"data-v-b3d7f7dc",null);e.exports=a.exports},544:function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(n),function(e){s(t,e,i)}):u(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)}):i?u(t,i):u(t,n)}function a(e){return e=e||{},e.appId=L.appId,e.verifyAppId=L.appId,e.verifySignType="sha1",e.verifyTimestamp=L.timestamp+"",e.verifyNonceStr=L.nonceStr,e.verifySignature=L.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",L.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,i=h[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");a=t.substring(o+1),"confirm"==a&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),a=a.replace(/_/g," "),a=a.toLowerCase(),("access denied"==a||"no permission to execute"==a)&&(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=n+":"+a}function d(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],a=g[i];a&&(e[t]=a)}return e}}function u(e,t){if(!(!L.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(e){if(!(I||k||L.debug||"6.0.2">b||M.systemType<0)){var t=new Image;M.appId=L.appId,M.initTime=C.initEndTime-C.initStartTime,M.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=n}})}}function f(){return(new Date).getTime()}function p(t){_&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){E.invoke||(E.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(n),i)},E.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),v=e.document,y=v.title,w=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),I=!(!S.match("mac")&&!S.match("win")),k=-1!=w.indexOf("wxdebugger"),_=-1!=w.indexOf("micromessenger"),T=-1!=w.indexOf("android"),x=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),b=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:T?2:-1,clientVersion:b,url:encodeURIComponent(location.href)},L={},P={_completes:[]},V={state:0,data:{}};p(function(){C.initEndTime=f()});var O=!1,A=[],E={config:function(e){L=e,u("config",e);var t=!1!==L.check;p(function(){if(t)n(g.config,{verifyJsApiList:d(L.jsApiList)},function(){P._complete=function(e){C.preVerifyEndTime=f(),V.state=1,V.data=e},P.success=function(e){M.isPreVerifyOk=0},P.fail=function(e){P._fail?P._fail(e):V.state=-1};var e=P._completes;return e.push(function(){l()}),P.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();P._completes=[]},P}()),C.preVerifyStartTime=f();else{V.state=1;for(var e=P._completes,i=0,a=e.length;a>i;++i)e[i]();P._completes=[]}}),L.beta&&m()},ready:function(e){0!=V.state?e():(P._completes.push(e),!_&&L.debug&&e())},error:function(e){"6.0.2">b||(-1==V.state?e(V.data):P._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(T){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(g.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(g.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(g.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(g.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(g.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(O=!1,A.length>0){var t=A.shift();wx.getLocalImgData(t)}},e}())):A.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(g.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){n(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}n(g.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:L.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,code:r.code};i.push(s)}n(g.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(g.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(g.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(g.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},N=1,W={};return v.addEventListener("error",function(e){if(!T){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=N++,t["wx-id"]=a),W[a])return;W[a]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!T){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(W[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=E),E}}(t)}(window)}});