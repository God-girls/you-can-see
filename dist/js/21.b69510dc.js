webpackJsonp([21],{1125:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a,o=i(85),r=n(o),s=i(84),d=n(s),c=i(190),l=i(554),u=n(l),f=i(535),p=n(f),g=i(127),m=i(128),h=n(m),v=i(191),y=n(v);t.default={data:function(){return{avatar:"",paraData:{type:"H5"},loading:!1,loadError:"",inviterMini:"",jumpto:"/"}},components:{modalDialog:p.default},computed:(0,d.default)({},(0,g.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){this.initJumpto(),dplus.track("微信登录",{from:c.html.useragent()})},methods:(0,d.default)({},(0,g.mapActions)(["switchState","clearState"]),(a={initJumpto:function(){if(this.$route.query.search)return void(location.href=c.html.openInWechat(this.ttDomain+"/#/app/author?jumpto=/order/list"));if(this.$route.query.redirecto){var e=this.ttDomain+"/#/app/author?jumpto=",t="/prd/list?seller="+this.$route.query.seller;return this.$route.query.goodid&&(t+="&goodid="+this.$route.query.goodid),e+=encodeURIComponent(t),void(c.html.isWechat()?location.href=c.html.openInWechat(e):location.href=c.html.openInOher(e))}c.html.isWechat()&&this.getLogin()},pushHistory:function(){var e=this;window.addEventListener("popstate",function(t){location.href.indexOf("/prd/list")>-1?e.$route.push(location.href.split("#")[1]):e.$router.push("/index")},!1);var t={title:"小小麦",url:"#"};window.history.replaceState(t,"小小麦","#")},closeWindow:function(){u.default.ready(function(){u.default.closeWindow()})},getShare:function(){var e=this;h.default.post("/seller_api/v1/sessions/share_config",y.default.stringify({url:window.location.href.split("#")[0]})).then(function(t){var i=t.data;i.success&&e.shareFunc(i.result)}).catch(function(e){})},shareFunc:function(e){u.default.config((0,r.default)(e,{jsApiList:["checkJsApi","closeWindow"]}))},getCode:function(e){var t=self.location.search.substr(1),i=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),n=t.match(i);return null!=n?n[2]:null}},a.closeWindow=function(){u.default.ready(function(){u.default.closeWindow()})},a.initMSG=function(e){var t=this;this.loading=!0,this.loadError=e,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)},a.getQueryValue=function(e){var t=self.location.href.split("#")[0].split("?")[1],i=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),n=t.match(i);return null!=n?n[2]:null},a.getLogin=function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),h.default.post("/seller_api/v1/sessions/create_oauth",y.default.stringify(this.paraData)).then(function(t){var i=t.data;i.success?(window.localStorage.setItem("ttUid",i.result.id),window.localStorage.setItem("ttToken",i.result.atoken),e.switchState({TOKEN:i.result.atoken,UID:i.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):e.initMSG(i.codemsg)}).catch(function(e){console.log(e),this.initMSG("宝贝太火爆了，系统繁忙，请稍后再试~~")})},a.testToken=function(){var e=this;h.default.post("/seller_api/v1/user/info",y.default.stringify({uid:localStorage.ttUid}),{headers:{"A-Token-Header":localStorage.ttToken}}).then(function(t){t.data.success?(e.switchState({TOKEN:localStorage.ttToken,UID:localStorage.ttUid}),e.$router.push(e.jumpto)):(localStorage.clear(),e.initJumpto())}).catch(function(t){localStorage.clear(),e.initJumpto()})},a.closeDialog=function(e){this[e]=!1},a))}},1198:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,".nowLoading[data-v-e1fcdda2]{width:100%;height:80%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading dt img[data-v-e1fcdda2]{width:1.293333rem}.nowLoading dd[data-v-e1fcdda2]{padding:.266667rem 0 .933333rem}.nowLoading dd img[data-v-e1fcdda2]{height:.533333rem}.nowLoading dd span[data-v-e1fcdda2]{display:inline-block;padding:0 .066667rem}.nowLoading dd span.special[data-v-e1fcdda2]{padding-left:.4rem}.fadeIn[data-v-e1fcdda2]{animation-name:fadeIn}.k-1[data-v-e1fcdda2],.k-2[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite}.k-2[data-v-e1fcdda2]{animation-delay:.15s}.k-3[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.3s}.k-4[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.45s}.k-5[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.6s}.k-6[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.75s}.k-7[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.9s}.k-8[data-v-e1fcdda2]{animation:k-loadingP-data-v-e1fcdda2 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-e1fcdda2{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])},1241:function(e,t,i){var n=i(1198);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(479)("1eef9058",n,!0,{})},1248:function(e,t,i){e.exports=i.p+"img/a1.744aa73.png"},1249:function(e,t,i){e.exports=i.p+"img/a2.0ddba91.png"},1250:function(e,t,i){e.exports=i.p+"img/a3.f179b93.png"},1251:function(e,t,i){e.exports=i.p+"img/a4.331593c.png"},1252:function(e,t,i){e.exports=i.p+"img/a5.03bee46.png"},1253:function(e,t,i){e.exports=i.p+"img/a6.69e6154.png"},1254:function(e,t,i){e.exports=i.p+"img/a7.97d0bd2.png"},1255:function(e,t,i){e.exports=i.p+"img/a8.940cf16.png"},1256:function(e,t,i){e.exports=i.p+"img/alogo.eec4978.png"},1308:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("div",{staticClass:"nowLoading"},[n("dl",[n("dt",[n("img",{attrs:{src:i(1256),alt:""}})]),n("dd",{staticClass:"f30 redCR"},[n("span",{staticClass:"k-1"},[n("img",{attrs:{src:i(1248),alt:""}})]),n("span",{staticClass:"k-2"},[n("img",{attrs:{src:i(1249),alt:""}})]),n("span",{staticClass:"k-3"},[n("img",{attrs:{src:i(1250),alt:""}})]),n("span",{staticClass:"k-4"},[n("img",{attrs:{src:i(1251),alt:""}})]),n("span",{staticClass:"k-5 special"},[n("img",{attrs:{src:i(1252),alt:""}})]),n("span",{staticClass:"k-6"},[n("img",{attrs:{src:i(1253),alt:""}})]),n("span",{staticClass:"k-7"},[n("img",{attrs:{src:i(1254),alt:""}})]),n("span",{staticClass:"k-8"},[n("img",{attrs:{src:i(1255),alt:""}})])])])]),n("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)},staticRenderFns:[]}},488:function(e,t,i){function n(e){i(1241)}var a=i(126)(i(1125),i(1308),n,"data-v-e1fcdda2",null);e.exports=a.exports},535:function(e,t,i){function n(e){i(540)}var a=i(126)(i(538),i(541),n,"data-v-64c058d6",null);e.exports=a.exports},538:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(e){this.noClickBg||this.$emit("hide")},close:function(e){this.$emit("hide")}}}},539:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,'.footerP[data-v-64c058d6]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-64c058d6]{display:none}.dialogMask[data-v-64c058d6]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-64c058d6]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-64c058d6]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-64c058d6]{visibility:visible}.dialog-active .dialog-content[data-v-64c058d6]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-64c058d6]{opacity:1;visibility:visible}.dialog-content[data-v-64c058d6]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-64c058d6]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-64c058d6]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-64c058d6]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-64c058d6]{padding:2em}.dialog-body .error[data-v-64c058d6]{font-size:1.2em;color:salmon}.dialog-footer[data-v-64c058d6]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-64c058d6]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-64c058d6]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-64c058d6]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-64c058d6]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-64c058d6]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-64c058d6]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-64c058d6]{font-size:.533333rem}.rotate[data-v-64c058d6]{cursor:pointer}.rotate[data-v-64c058d6]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-64c058d6]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-64c058d6]{display:none}.borNone[data-v-64c058d6]{border:none!important}.dialog-active[close=false] .close[data-v-64c058d6]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-64c058d6]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-64c058d6]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-64c058d6]{display:none}@keyframes slideInDown-data-v-64c058d6{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-64c058d6]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-64c058d6}@keyframes bounceIn-data-v-64c058d6{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},540:function(e,t,i){var n=i(539);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(479)("673640fb",n,!0,{})},541:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":e.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:e.isActive}]},[i("div",{staticClass:"diaplg-border"},[e.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(t){return t.preventDefault(),e.close(t)}}},[i("span",{staticClass:"iconfont icon-close redCR"},[e._v(e._s(e.closeText))])]):e._e(),e._t("dialog-header"),e._t("dialog-body"),e._t("dialog-footer")],2)])]),e.isActive?i("div",{staticClass:"dialogMask",on:{click:function(t){return t.preventDefault(),e.closeDefault(t)}}}):e._e()]):e._e()},staticRenderFns:[]}},554:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(i),function(e){s(t,e,n)}):l(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),s(t,e,i)}):n?l(t,n):l(t,i)}function a(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=d(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function d(e,t){var i=e,n=v[i];n&&(i=n);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=i+":"+a}function c(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=h[n];a&&(e[t]=a)}return e}}function l(e,t){if(!(!A.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(x||I||A.debug||C<"6.0.2"||P.systemType<0)){var t=new Image;P.appId=A.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){_&&(e.WeixinJSBridge?"preInject"===y.__wxjsjs__isPreInject?y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1):t():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){B.invoke||(B.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(i),n)},B.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function m(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),y=e.document,k=y.title,w=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),x=!(!S.match("mac")&&!S.match("win")),I=-1!=w.indexOf("wxdebugger"),_=-1!=w.indexOf("micromessenger"),b=-1!=w.indexOf("android"),T=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),C=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:b?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},A={},L={_completes:[]},E={state:0,data:{}};p(function(){M.initEndTime=f()});var V=!1,O=[],B={config:function(e){A=e,l("config",e);var t=!1!==A.check;p(function(){if(t)i(h.config,{verifyJsApiList:c(A.jsApiList)},function(){L._complete=function(e){M.preVerifyEndTime=f(),E.state=1,E.data=e},L.success=function(e){P.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):E.state=-1};var e=L._completes;return e.push(function(){u()}),L.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();L._completes=[]},L}()),M.preVerifyStartTime=f();else{E.state=1;for(var e=L._completes,n=0,a=e.length;n<a;++n)e[n]();L._completes=[]}}),g()},ready:function(e){0!=E.state?e():(L._completes.push(e),!_&&A.debug&&e())},error:function(e){C<"6.0.2"||(-1==E.state?e(E.data):L._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var n=v[i];n&&(t[n]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:c(e.jsApiList)},(e._complete=function(e){if(b){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){n(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||k,desc:e.title||k,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||k,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||k,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||k,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||k,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(b){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(V=!1,O.length>0){var t=O.shift();B.getLocalImgData(t)}},e))):O.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}i(h.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],s={card_id:r.cardId,code:r.code};n.push(s)}i(h.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){p(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},N=1,W={};return y.addEventListener("error",function(e){if(!b){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=N++,t["wx-id"]=a),W[a])return;W[a]=!0,B.ready(function(){B.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!b){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(W[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=B),B}}(t)}(window)}});