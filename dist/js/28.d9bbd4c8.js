webpackJsonp([28],{1088:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=i(81),a=n(o),r=i(184),s=i(549),d=n(s),c=i(123),l=i(533),u=n(l),f=i(124),p=n(f),g=i(185),m=n(g);t.default={data:function(){return{avatar:"",loading:!1,loadError:"",paraData:{type:"H5"},inviterMini:""}},components:{modalDialog:u.default},computed:(0,a.default)({},(0,c.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){this.initJumpto(),dplus.track("qq登录",{from:r.html.useragent()})},methods:(0,a.default)({},(0,c.mapActions)(["switchState","clearState"]),{initJumpto:function(){if(this.$route.query.redirecto){var e=this.ttDomain+"/#/app/login?jumpto=",t="/prd/list?seller="+this.$route.query.seller;return this.$route.query.goodid&&(t+="&goodid="+this.$route.query.goodid),e+=encodeURIComponent(t),void(r.html.isWechat()?location.href=r.html.openInWechat(e):r.html.isInqq()?location.href=r.html.openInOher(e):this.goto(t))}r.html.isWechat()?this.getLogin():r.html.isInqq()?(this.paraData.oatype="qq",this.getLogin2()):this.goto(this.$route.query.jumpto)},getCode:function(e){var t=self.location.search.substr(1),i=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),n=t.match(i);return null!=n?n[2]:null},closeWindow:function(){d.default.ready(function(){d.default.closeWindow()})},getQueryValue:function(e){var t=self.location.href.split("#")[0].split("?")[1],i=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),n=t.match(i);return null!=n?n[2]:null},getLogin:function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),p.default.post("/seller_api/v1/sessions/create_oauth",m.default.stringify(this.paraData)).then(function(t){var i=t.data;i.success?(window.localStorage.setItem("ttUid",i.result.id),window.localStorage.setItem("ttToken",i.result.atoken),e.switchState({TOKEN:i.result.atoken,UID:i.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):e.initMSG(i.codemsg)}).catch(function(e){console.log(e),this.initMSG("宝贝太火爆了，系统繁忙，请稍后再试~~")})},getLogin2:function(){var e=this;this.$route.query.code&&(this.paraData.code=this.$route.query.code),p.default.post("/seller_api/v1/sessions/create_oauth2",m.default.stringify(this.paraData)).then(function(t){var i=t.data;i.success?(window.localStorage.setItem("ttUid",i.result.id),window.localStorage.setItem("ttToken",i.result.atoken),e.switchState({TOKEN:i.result.atoken,UID:i.result.id}),e.$route.query.jumpto?e.goto(e.$route.query.jumpto):e.goto("/")):e.initMSG(i.codemsg)}).catch(function(e){console.log(e),this.initMSG("宝贝太火爆了，系统繁忙，请稍后再试~")})},testToken:function(){var e=this;p.default.post("/seller_api/v1/user/info",m.default.stringify({uid:localStorage.ttUid}),{headers:{"A-Token-Header":localStorage.ttToken}}).then(function(t){t.data.success?(e.switchState({TOKEN:localStorage.ttToken,UID:localStorage.ttUid}),e.goto(e.jumpto)):(localStorage.clear(),e.initJumpto())}).catch(function(t){localStorage.clear(),e.initJumpto()})},closeDialog:function(e){this[e]=!1},goto:function(e){this.$router.push(e)}})}},1128:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".nowLoading[data-v-0d3236d0]{width:100%;height:80%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading dt img[data-v-0d3236d0]{width:2.906667rem}.nowLoading dd[data-v-0d3236d0]{padding:.266667rem 0 .933333rem}.nowLoading dd img[data-v-0d3236d0]{width:.4rem;height:.4rem}.nowLoading dd span[data-v-0d3236d0]{display:inline-block}.fadeIn[data-v-0d3236d0]{animation-name:fadeIn}.k-1[data-v-0d3236d0],.k-2[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite}.k-2[data-v-0d3236d0]{animation-delay:.15s}.k-3[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.3s}.k-4[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.45s}.k-5[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.6s}.k-6[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.75s}.k-7[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.9s}.k-8[data-v-0d3236d0]{animation:k-loadingP-data-v-0d3236d0 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-0d3236d0{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])},1171:function(e,t,i){var n=i(1128);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(475)("f46c3494",n,!0,{})},1225:function(e,t,i){e.exports=i.p+"img/l1.adf1428.png"},1226:function(e,t,i){e.exports=i.p+"img/l2.bb7740c.png"},1227:function(e,t,i){e.exports=i.p+"img/l3.bed5a25.png"},1228:function(e,t,i){e.exports=i.p+"img/l4.9e54166.png"},1229:function(e,t,i){e.exports=i.p+"img/l5.f253c60.png"},1230:function(e,t,i){e.exports=i.p+"img/l6.1dcc2b4.png"},1231:function(e,t,i){e.exports=i.p+"img/load.c913530.png"},1242:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("div",{staticClass:"nowLoading"},[n("dl",[n("dt",[n("img",{attrs:{src:i(1231),alt:""}})]),n("dd",{staticClass:"f30 redCR"},[n("span",{staticClass:"k-1"},[n("img",{attrs:{src:i(1225),alt:""}})]),n("span",{staticClass:"k-2"},[n("img",{attrs:{src:i(1226),alt:""}})]),n("span",{staticClass:"k-3"},[n("img",{attrs:{src:i(1227),alt:""}})]),n("span",{staticClass:"k-4"},[n("img",{attrs:{src:i(1228),alt:""}})]),n("span",{staticClass:"k-5"},[n("img",{attrs:{src:i(1229),alt:""}})]),n("span",{staticClass:"k-6"},[n("img",{attrs:{src:i(1230),alt:""}})])])])]),n("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)},staticRenderFns:[]}},485:function(e,t,i){function n(e){i(1171)}var o=i(122)(i(1088),i(1242),n,"data-v-0d3236d0",null);e.exports=o.exports},533:function(e,t,i){function n(e){i(536)}var o=i(122)(i(534),i(537),n,"data-v-369b7310",null);e.exports=o.exports},534:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(e){this.noClickBg||this.$emit("hide")},close:function(e){this.$emit("hide")}}}},535:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-369b7310]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},536:function(e,t,i){var n=i(535);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(475)("425b9258",n,!0,{})},537:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":e.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:e.isActive}]},[i("div",{staticClass:"diaplg-border"},[e.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(t){t.preventDefault(),e.close(t)}}},[i("span",{staticClass:"iconfont icon-close redCR"})]):e._e(),e._t("dialog-header"),e._t("dialog-body"),e._t("dialog-footer")],2)])]),e.isActive?i("div",{staticClass:"dialogMask",on:{click:function(t){t.preventDefault(),e.closeDefault(t)}}}):e._e()]):e._e()},staticRenderFns:[]}},549:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){s(t,e,n)}):l(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),s(t,e,i)}):n?l(t,n):l(t,i)}function o(e){return e=e||{},e.appId=P.appId,e.verifyAppId=P.appId,e.verifySignType="sha1",e.verifyTimestamp=P.timestamp+"",e.verifyNonceStr=P.nonceStr,e.verifySignature=P.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=d(e,n),t.errMsg=n),i=i||{},i._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",P.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function d(e,t){var i=e,n=h[i];n&&(i=n);var o="ok";if(t){var a=t.indexOf(":");o=t.substring(a+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=i+":"+o}function c(e){if(e){for(var t=0,i=e.length;i>t;++t){var n=e[t],o=m[n];o&&(e[t]=o)}return e}}function l(e,t){if(!(!P.debug||t&&t.isInnerInvoke)){var i=h[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||S||P.debug||"6.0.2">T||M.systemType<0)){var t=new Image;M.appId=P.appId,M.initTime=C.initEndTime-C.initStartTime,M.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,O.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){I&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){O.invoke||(O.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),n)},O.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),v=e.document,y=v.title,b=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),w=!(!k.match("mac")&&!k.match("win")),S=-1!=b.indexOf("wxdebugger"),I=-1!=b.indexOf("micromessenger"),x=-1!=b.indexOf("android"),_=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),T=function(){var e=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:_?1:x?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},P={},L={_completes:[]},V={state:0,data:{}};p(function(){C.initEndTime=f()});var A=!1,E=[],O={config:function(e){P=e,l("config",e);var t=!1!==P.check;p(function(){if(t)i(m.config,{verifyJsApiList:c(P.jsApiList)},function(){L._complete=function(e){C.preVerifyEndTime=f(),V.state=1,V.data=e},L.success=function(e){M.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):V.state=-1};var e=L._completes;return e.push(function(){u()}),L.complete=function(t){for(var i=0,n=e.length;n>i;++i)e[i]();L._completes=[]},L}()),C.preVerifyStartTime=f();else{V.state=1;for(var e=L._completes,n=0,o=e.length;o>n;++n)e[n]();L._completes=[]}}),P.beta&&g()},ready:function(e){0!=V.state?e():(L._completes.push(e),!I&&P.debug&&e())},error:function(e){"6.0.2">T||(-1==V.state?e(V.data):L._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var n=h[i];n&&(t[n]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:c(e.jsApiList)},function(){return e._complete=function(e){if(x){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){n(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(m.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(x){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(A=!1,E.length>0){var t=E.shift();wx.getLocalImgData(t)}},e}())):E.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),o=t.substring(n+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(_){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(m.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;a>o;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}i(m.addCard,{card_list:n},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,n=t.length;n>i;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:P.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;a>o;++o){var r=t[o],s={card_id:r.cardId,code:r.code};n.push(s)}i(m.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(m.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){i(m.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){i(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(m.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},D=1,N={};return v.addEventListener("error",function(e){if(!x){var t=e.target,i=t.tagName,n=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=D++,t["wx-id"]=o),N[o])return;N[o]=!0,wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!x){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(N[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=O),O}}(t)}(window)}});