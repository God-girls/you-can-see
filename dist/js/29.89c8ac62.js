webpackJsonp([29],{1080:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(81),o=i(a),r=n(184),s=n(545),c=i(s),d=n(123),l=n(124),u=i(l),p=n(185),f=i(p);t.default={data:function(){return{avatar:"",paraData:{type:"H5"},inviterMini:""}},computed:(0,o.default)({},(0,d.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){if(this.$route.query.redirecto){var e=this.ttDomain+"/#/app/login?jumpto=",t="/prd/list?seller="+this.$route.query.seller;return this.$route.query.goodid&&(t+="&goodid="+this.$route.query.goodid),e+=encodeURIComponent(t),void(r.html.isWechat()?location.href=r.html.openInWechat(e):location.href=r.html.openInOher(e))}r.html.isWechat()?this.getLogin():(this.getLogin2(),this.paraData.oatype="qq")},methods:(0,o.default)({},(0,d.mapActions)(["switchState","clearState"]),{initJumpto:function(){},getCode:function(e){var t=self.location.search.substr(1),n=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(n);return null!=i?i[2]:null},closeWindow:function(){c.default.ready(function(){c.default.closeWindow()})},resolveInviter:function(){location.href.indexOf("inviter")>-1&&(this.paraData.inviter=this.getCode("inviter"),this.inviterMini="?inviter="+this.getCode("inviter"),location.href.indexOf("params")>-1&&(this.paraData.inviter=this.getCode("params"),this.inviterMini+="&params="+this.getCode("params")))},openWechat:function(){var e=this.ttDomain+"/?&goodid="+this.$route.query.goodid+"&seller="+this.$route.query.seller+"#/app/author";location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx357ca89ca431b3ca&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"},getQueryValue:function(e){var t=self.location.href.split("#")[0].split("?")[1],n=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(n);return null!=i?i[2]:null},getLogin:function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),u.default.post("/seller_api/v1/sessions/create_oauth",f.default.stringify(this.paraData)).then(function(t){var n=t.data;n.success?(window.localStorage.setItem("ttUid",n.result.id),window.localStorage.setItem("ttToken",n.result.atoken),e.switchState({TOKEN:n.result.atoken,UID:n.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):alert(n.codemsg)}).catch(function(e){console.log(e),alert("宝贝太火爆了，系统繁忙，请稍后再试~~")})},getLogin2:function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),u.default.post("/seller_api/v1/sessions/create_oauth2",f.default.stringify(this.paraData)).then(function(t){var n=t.data;n.success?(window.localStorage.setItem("ttUid",n.result.id),window.localStorage.setItem("ttToken",n.result.atoken),e.switchState({TOKEN:n.result.atoken,UID:n.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):alert(n.codemsg)}).catch(function(e){console.log(e),alert("宝贝太火爆了，系统繁忙，请稍后再试~")})},testToken:function(){var e=this;u.default.post("/seller_api/v1/user/info",f.default.stringify({uid:localStorage.ttUid}),{headers:{"A-Token-Header":localStorage.ttToken}}).then(function(t){t.data.success?e.goto("/prd/list?seller="+e.$route.query.seller):(e.clearState(),c.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini}))}).catch(function(t){c.default.miniProgram.redirectTo({url:"/pages/login/login"+e.inviterMini})})},goto:function(e){this.$router.push(e)}})}},1116:function(e,t,n){t=e.exports=n(472)(!1),t.push([e.i,".nowLoading[data-v-0d3236d0]{width:100%;height:80%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading dt img[data-v-0d3236d0]{width:1.293333rem}.nowLoading dd[data-v-0d3236d0]{padding:.266667rem 0 .933333rem}.nowLoading dd img[data-v-0d3236d0]{height:.533333rem}.nowLoading dd span[data-v-0d3236d0]{display:inline-block;padding:0 .066667rem}.nowLoading dd span.special[data-v-0d3236d0]{padding-left:.4rem}.fadeIn[data-v-0d3236d0]{animation-name:fadeIn}.k-1[data-v-0d3236d0],.k-2[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite}.k-2[data-v-0d3236d0]{animation-delay:.15s}.k-3[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.3s}.k-4[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.45s}.k-5[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.6s}.k-6[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.75s}.k-7[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.9s}.k-8[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-0d3236d0{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])},1158:function(e,t,n){var i=n(1116);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(473)("f46c3494",i,!0,{})},1199:function(e,t,n){e.exports=n.p+"img/a1.744aa73.png"},1200:function(e,t,n){e.exports=n.p+"img/a2.0ddba91.png"},1201:function(e,t,n){e.exports=n.p+"img/a3.f179b93.png"},1202:function(e,t,n){e.exports=n.p+"img/a4.331593c.png"},1203:function(e,t,n){e.exports=n.p+"img/a5.03bee46.png"},1204:function(e,t,n){e.exports=n.p+"img/a6.69e6154.png"},1205:function(e,t,n){e.exports=n.p+"img/a7.97d0bd2.png"},1206:function(e,t,n){e.exports=n.p+"img/a8.940cf16.png"},1207:function(e,t,n){e.exports=n.p+"img/alogo.eec4978.png"},1224:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"nowLoading"},[i("dl",[i("dt",[i("img",{attrs:{src:n(1207),alt:""}})]),i("dd",{staticClass:"f30 redCR"},[i("span",{staticClass:"k-1"},[i("img",{attrs:{src:n(1199),alt:""}})]),i("span",{staticClass:"k-2"},[i("img",{attrs:{src:n(1200),alt:""}})]),i("span",{staticClass:"k-3"},[i("img",{attrs:{src:n(1201),alt:""}})]),i("span",{staticClass:"k-4"},[i("img",{attrs:{src:n(1202),alt:""}})]),i("span",{staticClass:"k-5 special"},[i("img",{attrs:{src:n(1203),alt:""}})]),i("span",{staticClass:"k-6"},[i("img",{attrs:{src:n(1204),alt:""}})]),i("span",{staticClass:"k-7"},[i("img",{attrs:{src:n(1205),alt:""}})]),i("span",{staticClass:"k-8"},[i("img",{attrs:{src:n(1206),alt:""}})])])])])])},staticRenderFns:[]}},483:function(e,t,n){function i(e){n(1158)}var a=n(122)(n(1080),n(1224),i,"data-v-0d3236d0",null);e.exports=a.exports},545:function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(n),function(e){s(t,e,i)}):l(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),s(t,e,n)}):i?l(t,i):l(t,n)}function a(e){return e=e||{},e.appId=P.appId,e.verifyAppId=P.appId,e.verifySignType="sha1",e.verifyTimestamp=P.timestamp+"",e.verifyNonceStr=P.nonceStr,e.verifySignature=P.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",P.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,i=h[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");a=t.substring(o+1),"confirm"==a&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),a=a.replace(/_/g," "),a=a.toLowerCase(),("access denied"==a||"no permission to execute"==a)&&(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=n+":"+a}function d(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],a=m[i];a&&(e[t]=a)}return e}}function l(e,t){if(!(!P.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(I||k||P.debug||"6.0.2">C||L.systemType<0)){var t=new Image;L.appId=P.appId,L.initTime=M.initEndTime-M.initStartTime,L.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){L.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+L.version+"&o="+L.isPreVerifyOk+"&s="+L.systemType+"&c="+L.clientVersion+"&a="+L.appId+"&n="+L.networkType+"&i="+L.initTime+"&p="+L.preVerifyTime+"&u="+L.url;t.src=n}})}}function p(){return(new Date).getTime()}function f(t){_&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){E.invoke||(E.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(n),i)},E.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),v=e.document,y=v.title,S=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),I=!(!w.match("mac")&&!w.match("win")),k=-1!=S.indexOf("wxdebugger"),_=-1!=S.indexOf("micromessenger"),T=-1!=S.indexOf("android"),x=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),C=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},L={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:T?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},P={},V={_completes:[]},O={state:0,data:{}};f(function(){M.initEndTime=p()});var b=!1,A=[],E={config:function(e){P=e,l("config",e);var t=!1!==P.check;f(function(){if(t)n(m.config,{verifyJsApiList:d(P.jsApiList)},function(){V._complete=function(e){M.preVerifyEndTime=p(),O.state=1,O.data=e},V.success=function(e){L.isPreVerifyOk=0},V.fail=function(e){V._fail?V._fail(e):O.state=-1};var e=V._completes;return e.push(function(){u()}),V.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();V._completes=[]},V}()),M.preVerifyStartTime=p();else{O.state=1;for(var e=V._completes,i=0,a=e.length;a>i;++i)e[i]();V._completes=[]}}),P.beta&&g()},ready:function(e){0!=O.state?e():(V._completes.push(e),!_&&P.debug&&e())},error:function(e){"6.0.2">C||(-1==O.state?e(O.data):V._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(T){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(m.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(m.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(m.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(m.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(m.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===b?(b=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(b=!1,A.length>0){var t=A.shift();wx.getLocalImgData(t)}},e}())):A.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(m.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){n(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}n(m.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:P.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],s={card_id:r.cardId,code:r.code};i.push(s)}n(m.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(m.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(m.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(m.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},N=1,R={};return v.addEventListener("error",function(e){if(!T){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=N++,t["wx-id"]=a),R[a])return;R[a]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!T){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(R[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=E),E}}(t)}(window)}});