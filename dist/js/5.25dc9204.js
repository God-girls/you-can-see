webpackJsonp([5],{1004:function(e,t,a){var i=a(732);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(478)("7ec61e0a",i,!0,{})},1006:function(e,t,a){e.exports=a.p+"img/a1.744aa73.png"},1007:function(e,t,a){e.exports=a.p+"img/a2.0ddba91.png"},1008:function(e,t,a){e.exports=a.p+"img/a3.f179b93.png"},1009:function(e,t,a){e.exports=a.p+"img/a4.331593c.png"},1010:function(e,t,a){e.exports=a.p+"img/a5.03bee46.png"},1011:function(e,t,a){e.exports=a.p+"img/a6.69e6154.png"},1012:function(e,t,a){e.exports=a.p+"img/a7.97d0bd2.png"},1013:function(e,t,a){e.exports=a.p+"img/a8.940cf16.png"},1014:function(e,t,a){e.exports=a.p+"img/alogo.eec4978.png"},1038:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"nowLoading"},[i("dl",[i("dt",[i("img",{attrs:{src:a(1014),alt:""}})]),i("dd",{staticClass:"f30 redCR"},[i("span",{staticClass:"k-1"},[i("img",{attrs:{src:a(1006),alt:""}})]),i("span",{staticClass:"k-2"},[i("img",{attrs:{src:a(1007),alt:""}})]),i("span",{staticClass:"k-3"},[i("img",{attrs:{src:a(1008),alt:""}})]),i("span",{staticClass:"k-4"},[i("img",{attrs:{src:a(1009),alt:""}})]),i("span",{staticClass:"k-5 special"},[i("img",{attrs:{src:a(1010),alt:""}})]),i("span",{staticClass:"k-6"},[i("img",{attrs:{src:a(1011),alt:""}})]),i("span",{staticClass:"k-7"},[i("img",{attrs:{src:a(1012),alt:""}})]),i("span",{staticClass:"k-8"},[i("img",{attrs:{src:a(1013),alt:""}})])])])]),i("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)},staticRenderFns:[]}},480:function(e,t,a){function i(e){a(1004)}var n=a(126)(a(705),a(1038),i,"data-v-abc95cba",null);e.exports=n.exports},503:function(e,t,a){function i(e){a(507)}var n=a(126)(a(505),a(508),i,"data-v-2e8cd7ee",null);e.exports=n.exports},505:function(e,t,a){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(e){this.noClickBg||this.$emit("hide")},close:function(e){this.$emit("hide")}}}},506:function(e,t,a){t=e.exports=a(477)(!1),t.push([e.i,'.footerP[data-v-2e8cd7ee]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-2e8cd7ee]{display:none}.dialogMask[data-v-2e8cd7ee]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-2e8cd7ee]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-2e8cd7ee]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-2e8cd7ee]{visibility:visible}.dialog-active .dialog-content[data-v-2e8cd7ee]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-2e8cd7ee]{opacity:1;visibility:visible}.dialog-content[data-v-2e8cd7ee]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-2e8cd7ee]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-2e8cd7ee]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-2e8cd7ee]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-2e8cd7ee]{padding:2em}.dialog-body .error[data-v-2e8cd7ee]{font-size:1.2em;color:salmon}.dialog-footer[data-v-2e8cd7ee]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-2e8cd7ee]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-2e8cd7ee]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-2e8cd7ee]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-2e8cd7ee]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-2e8cd7ee]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-2e8cd7ee]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-2e8cd7ee]{font-size:.533333rem}.rotate[data-v-2e8cd7ee]{cursor:pointer}.rotate[data-v-2e8cd7ee]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-2e8cd7ee]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-2e8cd7ee]{display:none}.borNone[data-v-2e8cd7ee]{border:none!important}.dialog-active[close=false] .close[data-v-2e8cd7ee]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-2e8cd7ee]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-2e8cd7ee]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-2e8cd7ee]{display:none}@keyframes slideInDown-data-v-2e8cd7ee{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-2e8cd7ee]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-2e8cd7ee}@keyframes bounceIn-data-v-2e8cd7ee{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-2e8cd7ee]{text-align:center}',""])},507:function(e,t,a){var i=a(506);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(478)("0f07796a",i,!0,{})},508:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isActive?a("div",{staticClass:"dialogs",class:{"dialog-active":e.isActive}},[a("div",{staticClass:"dialog"},[a("div",{class:["dialog-content",{slideInDown:e.isActive},{noCloseText_tc:e.noCloseText}]},[a("div",{staticClass:"diaplg-border"},[e.dialogClose?a("div",{staticClass:"close rotate",on:{click:function(t){return t.preventDefault(),e.close(t)}}},[a("span",{staticClass:"iconfont icon-close redCR"},[e._v(e._s(e.closeText))])]):e._e(),e._t("dialog-header"),e._t("dialog-body"),e._t("dialog-footer")],2)])]),e.isActive?a("div",{staticClass:"dialogMask",on:{click:function(t){return t.preventDefault(),e.closeDefault(t)}}}):e._e()]):e._e()},staticRenderFns:[]}},512:function(e,t,a){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},513:function(e,t,a){t=e.exports=a(477)(!1),t.push([e.i,".newLoad[data-v-21dcd2cb]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-21dcd2cb]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-21dcd2cb]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-21dcd2cb]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-21dcd2cb]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-21dcd2cb]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-21dcd2cb]{position:relative}.ball-spin-fade-loader>div[data-v-21dcd2cb]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-21dcd2cb 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-21dcd2cb]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-21dcd2cb{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},516:function(e,t,a){var i=a(513);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(478)("4e239dd4",i,!0,{})},517:function(e,t,a){function i(e){a(516)}var n=a(126)(a(512),a(518),i,"data-v-21dcd2cb",null);e.exports=n.exports},518:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(t){return t.preventDefault(),e.closeLoading(t)}}},[a("dl",[e.loadError?a("dd",[e._v(e._s(e.loadError))]):a("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},534:function(e,t){!function(t,a){e.exports=function(e,t){function a(t,a,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(a),function(e){d(t,e,i)}):l(t,i)}function i(t,a,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),d(t,e,a)}):i?l(t,i):l(t,a)}function n(e){return e=e||{},e.appId=L.appId,e.verifyAppId=L.appId,e.verifySignType="sha1",e.verifyTimestamp=L.timestamp+"",e.verifyNonceStr=L.nonceStr,e.verifySignature=L.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function d(e,t,a){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),(a=a||{})._complete&&(a._complete(t),delete a._complete),i=t.errMsg||"",L.debug&&!a.isInnerInvoke&&alert(JSON.stringify(t));var n=i.indexOf(":");switch(i.substring(n+1)){case"ok":a.success&&a.success(t);break;case"cancel":a.cancel&&a.cancel(t);break;default:a.fail&&a.fail(t)}a.complete&&a.complete(t)}function c(e,t){var a=e,i=v[a];i&&(a=i);var n="ok";if(t){var o=t.indexOf(":");"confirm"==(n=t.substring(o+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==a&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=a+":"+n}function s(e){if(e){for(var t=0,a=e.length;t<a;++t){var i=e[t],n=h[i];n&&(e[t]=n)}return e}}function l(e,t){if(!(!L.debug||t&&t.isInnerInvoke)){var a=v[e];a&&(e=a),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(x||_||L.debug||C<"6.0.2"||P.systemType<0)){var t=new Image;P.appId=L.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,W.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var a="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=a}})}}function f(){return(new Date).getTime()}function p(t){I&&(e.WeixinJSBridge?"preInject"===b.__wxjsjs__isPreInject?b.addEventListener&&b.addEventListener("WeixinJSBridgeReady",t,!1):t():b.addEventListener&&b.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){W.invoke||(W.invoke=function(t,a,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(a),i)},W.on=function(t,a){e.WeixinJSBridge&&WeixinJSBridge.on(t,a)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],a=e.split("?")[1];return t+=".html",void 0!==a?t+"?"+a:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),b=e.document,y=b.title,w=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),x=!(!k.match("mac")&&!k.match("win")),_=-1!=w.indexOf("wxdebugger"),I=-1!=w.indexOf("micromessenger"),S=-1!=w.indexOf("android"),T=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),C=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:S?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},L={},A={_completes:[]},E={state:0,data:{}};p(function(){M.initEndTime=f()});var V=!1,O=[],W={config:function(e){L=e,l("config",e);var t=!1!==L.check;p(function(){if(t)a(h.config,{verifyJsApiList:s(L.jsApiList)},function(){A._complete=function(e){M.preVerifyEndTime=f(),E.state=1,E.data=e},A.success=function(e){P.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):E.state=-1};var e=A._completes;return e.push(function(){u()}),A.complete=function(t){for(var a=0,i=e.length;a<i;++a)e[a]();A._completes=[]},A}()),M.preVerifyStartTime=f();else{E.state=1;for(var e=A._completes,i=0,n=e.length;i<n;++i)e[i]();A._completes=[]}}),m()},ready:function(e){0!=E.state?e():(A._completes.push(e),!I&&L.debug&&e())},error:function(e){C<"6.0.2"||(-1==E.state?e(E.data):A._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var a in t){var i=v[a];i&&(t[i]=t[a],delete t[a])}return e};a("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(S){var a=e.checkResult;a&&(e.checkResult=JSON.parse(a))}e=t(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){a("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(){a("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){a("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){a("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){a("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){a("startRecord",{},e)},stopRecord:function(e){a("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){a("playVoice",{localId:e.localId},e)},pauseVoice:function(e){a("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){a("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){a("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){a("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){a("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){a("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(S){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e))},getLocation:function(e){},previewImage:function(e){a(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){a("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){a("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,a("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(V=!1,O.length>0){var t=O.shift();W.getLocalImgData(t)}},e))):O.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var a=e.subtype;if(delete e.subtype,a)e.networkType=a;else{var i=t.indexOf(":"),n=t.substring(i+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};a("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){a("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},a(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){a("hideOptionMenu",{},e)},showOptionMenu:function(e){a("showOptionMenu",{},e)},closeWindow:function(e){a("closeWindow",{},e=e||{})},hideMenuItems:function(e){a("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){a("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){a("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){a("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){a("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var t=e.resultStr;if(t){var a=JSON.parse(t);e.resultStr=a&&a.scan_code&&a.scan_code.scan_result}}},e))},openAddress:function(e){a(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){a(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],n=0,o=t.length;n<o;++n){var r=t[n],d={card_id:r.cardId,card_ext:r.cardExt};i.push(d)}a(h.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var a=0,i=(t=JSON.parse(t)).length;a<i;++a){var n=t[a];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){a("chooseCard",{app_id:L.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,i=[],n=0,o=t.length;n<o;++n){var r=t[n],d={card_id:r.cardId,code:r.code};i.push(d)}a(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){a(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){a(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){a(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){a(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){a(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){a("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){a("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){a("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){a("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){a("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){a("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){a("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){a("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){p(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},B=1,D={};return b.addEventListener("error",function(e){if(!S){var t=e.target,a=t.tagName,i=t.src;if(("IMG"==a||"VIDEO"==a||"AUDIO"==a||"SOURCE"==a)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=B++,t["wx-id"]=n),D[n])return;D[n]=!0,W.ready(function(){W.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})})}}},!0),b.addEventListener("load",function(e){if(!S){var t=e.target,a=t.tagName;if(t.src,"IMG"==a||"VIDEO"==a||"AUDIO"==a||"SOURCE"==a){var i=t["wx-id"];i&&(D[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=W),W}}(t)}(window)},705:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n,o=a(85),r=i(o),d=a(84),c=i(d),s=a(190),l=a(517),u=i(l),f=a(503),p=i(f),m=a(127),g=a(534),h=i(g),v=a(128),b=i(v),y=a(191),w=i(y);t.default={data:function(){return{avatar:"",paraData:{type:"H5"},loading:!1,loadError:"",inviterMini:"",jumpto:"/"}},components:{modalDialog:p.default,loading:u.default},computed:(0,c.default)({},(0,m.mapState)(["UID","TOKEN","UNIONID"])),mounted:function(){this.initJumpto(),dplus.track("微信登录",{from:s.html.useragent()})},methods:(0,c.default)({},(0,m.mapActions)(["switchState","clearState"]),(n={initJumpto:function(){if(this.$route.query.search)return void(location.href=s.html.openInWechat(this.ttDomain+"/#/app/author?jumpto=/order/list"));if(this.$route.query.redirecto){var e=this.ttDomain+"/#/app/author?jumpto=",t="/prd/list?seller="+this.$route.query.seller;return this.$route.query.goodid&&(t+="&goodid="+this.$route.query.goodid),e+=encodeURIComponent(t),void(s.html.isWechat()?location.href=s.html.openInWechat(e):location.href=s.html.openInOher(e))}if("seller"==this.$route.query.from)return void(s.html.isWechat()&&(location.href=s.html.openInWechat(this.ttDomain+"/#/app/author?jumpto="+this.$route.query.jumpto)));s.html.isWechat()&&this.getLogin()},pushHistory:function(){var e=this;window.addEventListener("popstate",function(t){location.href.indexOf("/prd/list")>-1?e.$route.push(location.href.split("#")[1]):e.$router.push("/index")},!1);var t={title:"小小麦",url:"#"};window.history.replaceState(t,"小小麦","#")},closeWindow:function(){h.default.ready(function(){h.default.closeWindow()})},getShare:function(){var e=this;b.default.post("/seller_api/v1/sessions/share_config",w.default.stringify({url:window.location.href.split("#")[0]})).then(function(t){var a=t.data;a.success&&e.shareFunc(a.result)}).catch(function(e){})},shareFunc:function(e){h.default.config((0,r.default)(e,{jsApiList:["checkJsApi","closeWindow"]}))},getCode:function(e){var t=self.location.search.substr(1),a=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(a);return null!=i?i[2]:null}},n.closeWindow=function(){h.default.ready(function(){h.default.closeWindow()})},n.initMSG=function(e){var t=this;this.loading=!0,this.loadError=e,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)},n.getQueryValue=function(e){var t=self.location.href.split("#")[0].split("?")[1],a=new RegExp("(^|&)"+e+"=([^&\n]*)(&|\n|$)"),i=t.match(a);return null!=i?i[2]:null},n.getLogin=function(){var e=this;location.href.indexOf("code")>-1&&(this.paraData.code=unescape(this.getQueryValue("code"))),b.default.post("/seller_api/v1/sessions/create_oauth",w.default.stringify(this.paraData)).then(function(t){var a=t.data;a.success?(window.localStorage.setItem("ttUid",a.result.id),window.localStorage.setItem("ttToken",a.result.atoken),e.switchState({TOKEN:a.result.atoken,UID:a.result.id}),e.$route.query.jumpto?e.$router.push(e.$route.query.jumpto):e.$router.push("/")):e.initMSG(a.codemsg)}).catch(function(e){console.log(e),this.initMSG("宝贝太火爆了，系统繁忙，请稍后再试~~")})},n.testToken=function(){var e=this;b.default.post("/seller_api/v1/user/info",w.default.stringify({uid:localStorage.ttUid}),{headers:{"A-Token-Header":localStorage.ttToken}}).then(function(t){t.data.success?(e.switchState({TOKEN:localStorage.ttToken,UID:localStorage.ttUid}),e.$router.push(e.jumpto)):(localStorage.clear(),e.initJumpto())}).catch(function(t){localStorage.clear(),e.initJumpto()})},n.closeDialog=function(e){this[e]=!1},n))}},732:function(e,t,a){t=e.exports=a(477)(!1),t.push([e.i,".nowLoading[data-v-abc95cba]{width:100%;height:80%;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.nowLoading dt img[data-v-abc95cba]{width:1.293333rem}.nowLoading dd[data-v-abc95cba]{padding:.266667rem 0 .933333rem}.nowLoading dd img[data-v-abc95cba]{height:.533333rem}.nowLoading dd span[data-v-abc95cba]{display:inline-block;padding:0 .066667rem}.nowLoading dd span.special[data-v-abc95cba]{padding-left:.4rem}.fadeIn[data-v-abc95cba]{animation-name:fadeIn}.k-1[data-v-abc95cba],.k-2[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite}.k-2[data-v-abc95cba]{animation-delay:.15s}.k-3[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.3s}.k-4[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.45s}.k-5[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.6s}.k-6[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.75s}.k-7[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.9s}.k-8[data-v-abc95cba]{animation:k-loadingP-data-v-abc95cba 2s infinite;animation-delay:.105s}@keyframes k-loadingP-data-v-abc95cba{0%{transform:translateY(0)}35%{transform:translateY(0);opacity:.3}50%{transform:translateY(-.266667rem);opacity:.8}70%{transform:translateY(.04rem);opacity:.8}85%{transform:translateY(-.04rem)}}",""])}});