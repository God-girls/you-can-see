webpackJsonp([28],{1155:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n,o=i(84),r=a(o),s=i(593),c=i(527),d=a(c),l=i(635),u=a(l),f=i(190),p=i(127),m=i(560),g=(a(m),i(128)),h=a(g),v=i(191),y=a(v);t.default={data:function(){return{show1:!0,header:{name:"我",link:"/",isNobg:!0},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,begin_seconds:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"my",profile:{},isWechat:!1}},components:{loading:d.default,myfooter:u.default},computed:(0,r.default)({},(0,p.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),mounted:function(){this.TOKEN&&(this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/200/h/200/"),dplus.track("我的",{from:f.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(n={getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},wakeQQ:function(){f.html.isWawa()&&(0,s.setupWebViewJavascriptBridge)(function(e){e.callHandler("wakeQQ",{qq:"875332802",key:f.html.isWawaIos()?"8d8a7b4f7f60a342612e85bcd36908a5205d1381d48904d3240ed3997587d49b":"nfHFQkaZul8ms7jg23YmvKg8-ix0ZoTO"})})},getProfile:function(){var e=this;h.default.post("/seller_api/v1/seller/userinfo",y.default.stringify({uid:this.paraData.uid}),{headers:{"A-Token-Header":this.token}}).then(function(t){var i=t.data;i.success?(e.profile=i.result,e.switchState({PROFILE:i.result}),e.headImg=e.globalAvatar+(e.sellerInfo.avatar?e.sellerInfo.avatar:"")+"?imageView2/2/w/100/h/100/t/"):"403"!=i.code&&"250"!=i.code||(e.needLogin=!0,e.noToken=!0)}).catch(function(e){})},initMSG:function(e){var t=this;this.loadError=e,this.loading=!0,setTimeout(function(){t.loadError="",t.loading=!1},2e3)},goto:function(e){if("/my/bindacc"==e&&this.profile.acc)return void this.initMSG("已绑定手机号");this.$router.push(e)}},n.wakeQQ=function(){location.href="https://jq.qq.com/?_wv=1027&k=5MTN7jt"},n.closeDialog=function(e){this[e]=!1},n)}},1187:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,".wrap[data-v-676643ef]{background:#ebebeb}.my-set[data-v-676643ef]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-676643ef]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-676643ef]{padding:0 0 0 .4rem}.my-set ul li dl[data-v-676643ef]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-676643ef]{width:.933333rem}.my-set ul li dd[data-v-676643ef]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-676643ef]{padding-right:.4rem;color:#7f7f7f}.my-set ul li:last-child dl[data-v-676643ef]{border-bottom:none}.my-set ul li[data-v-676643ef]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-676643ef]{opacity:0}.my-set ul li dd i[data-v-676643ef]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-676643ef]{display:block}.icon-qianbao-[data-v-676643ef]{color:#f16e34}.icon-erji[data-v-676643ef]{color:#588ae7}.icon-tubiao[data-v-676643ef]{color:#e75858}.icon-erweima[data-v-676643ef]{color:#80a073}.icon-shoujibangding01[data-v-676643ef]{color:#df4d90}.icon-guanyuwomen[data-v-676643ef]{color:#9173a0}.icon-zaixianzhidao[data-v-676643ef]{color:#d92f25}.header span[data-v-676643ef]{display:block}.my-set ul.header li[data-v-676643ef]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-676643ef]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-676643ef]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1231:function(e,t,i){var a=i(1187);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("0144d226",a,!0,{})},1299:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"my-set"},[i("ul",{staticClass:"header"},[i("router-link",{attrs:{tag:"li",to:"/my/profile"}},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"flex1"},[i("div",{staticClass:"flexBox"},[i("p",[i("img",{attrs:{src:e.headImg,alt:"",onerror:e.defaultHead}})]),i("p",{staticClass:"flex1 text-overflow"},[i("span",{staticClass:"f30"},[e._v(e._s(e.profile.nick))]),i("span",{staticClass:"grayCR"},[e._v("个性签名："+e._s(e.profile.signature?e.profile.signature:"我的好货朋友圈，有喜欢的尽管说。"))])])])]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/balance"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-qianbao- f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的钱包")]),i("dd",{staticClass:"tR"},[e._v("\n            余额："+e._s(e.profile.balance?e.profile.balance:"0.00")+" 元"),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/qrcode")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-erweima f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的二维码")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/bindacc")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-shoujibangding01 f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("绑定手机号")]),i("dd",{staticClass:"tR"},[e._v("\n             "+e._s(e.profile.acc?e.profile.acc:"")),i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/service")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-erji f40"})]),i("dd",{staticClass:"flex1 f30"},[e._v("客服方式")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("li",{on:{click:function(t){return t.preventDefault(),e.wakeQQ(t)}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-20pxqqqun f40"})]),i("dd",{staticClass:"flex1 f30"},[e._v("小小麦-社群新零售")]),i("dd",{staticClass:"tR"},[e._v("\n            QQ群：734465054 "),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("router-link",{attrs:{tag:"li",to:"/my/guide"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-zaixianzhidao f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("新手指导")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/about"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-guanyuwomen f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("关于小小麦")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("myfooter",{attrs:{current:e.navType}}),i("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)])},staticRenderFns:[]}},516:function(e,t,i){function a(e){i(1231)}var n=i(126)(i(1155),i(1299),a,"data-v-676643ef",null);e.exports=n.exports},524:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(e,t,i){var a=i(525);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("c38d91e8",a,!0,{})},527:function(e,t,i){function a(e){i(526)}var n=i(126)(i(524),i(528),a,"data-v-4c82f682",null);e.exports=n.exports},528:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){return t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},554:function(e,t,i){e.exports=i.p+"img/mai.e026c46.png"},560:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=P.appId,e.verifyAppId=P.appId,e.verifySignType="sha1",e.verifyTimestamp=P.timestamp+"",e.verifyNonceStr=P.nonceStr,e.verifySignature=P.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),(i=i||{})._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",P.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=v[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");"confirm"==(n=t.substring(o+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function d(e){if(e){for(var t=0,i=e.length;t<i;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!P.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(_||S||P.debug||T<"6.0.2"||B.systemType<0)){var t=new Image;B.appId=P.appId,B.initTime=M.initEndTime-M.initStartTime,B.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){B.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){x&&(e.WeixinJSBridge?"preInject"===y.__wxjsjs__isPreInject?y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1):t():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){V.invoke||(V.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},V.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),y=e.document,w=y.title,b=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),_=!(!k.match("mac")&&!k.match("win")),S=-1!=b.indexOf("wxdebugger"),x=-1!=b.indexOf("micromessenger"),C=-1!=b.indexOf("android"),I=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),T=function(){var e=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:C?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},P={},E={_completes:[]},L={state:0,data:{}};p(function(){M.initEndTime=f()});var A=!1,R=[],V={config:function(e){P=e,l("config",e);var t=!1!==P.check;p(function(){if(t)i(h.config,{verifyJsApiList:d(P.jsApiList)},function(){E._complete=function(e){M.preVerifyEndTime=f(),L.state=1,L.data=e},E.success=function(e){B.isPreVerifyOk=0},E.fail=function(e){E._fail?E._fail(e):L.state=-1};var e=E._completes;return e.push(function(){u()}),E.complete=function(t){for(var i=0,a=e.length;i<a;++i)e[i]();E._completes=[]},E}()),M.preVerifyStartTime=f();else{L.state=1;for(var e=E._completes,a=0,n=e.length;a<n;++a)e[a]();E._completes=[]}}),m()},ready:function(e){0!=L.state?e():(E._completes.push(e),!x&&P.debug&&e())},error:function(e){T<"6.0.2"||(-1==L.state?e(L.data):E._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=v[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(C){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(C){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(A=!1,R.length>0){var t=R.shift();V.getLocalImgData(t)}},e))):R.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(I){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,a=(t=JSON.parse(t)).length;i<a;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:P.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){p(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},O=1,W={};return y.addEventListener("error",function(e){if(!C){var t=e.target,i=t.tagName,a=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=O++,t["wx-id"]=n),W[n])return;W[n]=!0,V.ready(function(){V.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!C){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(W[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=V),V}}(t)}(window)},593:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a},617:function(e,t,i){"use strict";t.__esModule=!0;var a=i(84),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(190),r=i(127);t.default={props:{current:""},data:function(){return{showCircle:!0,isH5:!1,isIos:!1}},computed:(0,n.default)({},(0,r.mapState)(["SHOWFOOTER"]),{isApp:function(){if(o.html.isWawa())return localStorage.bottomBarH?JSON.parse(localStorage.bottomBarH):""}}),mounted:function(){this.showCircle=this.SHOWFOOTER},methods:(0,n.default)({},(0,r.mapActions)(["switchState","clearState"]),{goto:function(e){if(sessionStorage.isGuest)return void this.guestClick();"/wake"==e&&this.isIos?this.$router.push("/wake_study?type=daily"):this.$router.push(e)},changeShow:function(){this.showCircle=!this.showCircle,this.switchState({SHOWFOOTER:this.showCircle})},clickDown:function(){var e=this;this.canDown=!this.canDown,setTimeout(function(){e.canDown=!e.canDown},3e3)},guestClick:function(){this.$emit("guestPop")}})}},618:function(e,t,i){var a=i(480);t=e.exports=i(478)(!1),t.push([e.i,".my-footer[data-v-74da2a68]{width:100%;position:relative;z-index:3}.my-footer ul[data-v-74da2a68]{display:-ms-flexbox;display:flex;text-align:center;position:relative;background:#fafafa;z-index:2;-ms-flex-align:center;align-items:center;height:1.333333rem;border-top:1px solid #bcbcbc}.my-footer ul li[data-v-74da2a68]{padding-top:.106667rem;position:relative}.my-footer ul li.special[data-v-74da2a68]{-ms-flex:1;flex:1;width:0}.my-footer ul li p[data-v-74da2a68]{position:relative;top:-.08rem;color:#929292;font-size:.28rem}.my-footer ul li p.power[data-v-74da2a68]{top:-.106667rem}.my-footer ul li i.dot[data-v-74da2a68]{display:inline-block;width:.173333rem;height:.173333rem;border-radius:50%;background:#ff0500;position:absolute;top:.133333rem;right:23%}.myicon[data-v-74da2a68]{display:inline-block;background:url("+a(i(634))+") no-repeat;background-size:1.733333rem}.icon-home[data-v-74da2a68]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;background:url("+a(i(554))+") no-repeat;background-size:1.6rem;width:1.6rem;height:1.6rem;border-radius:50%;z-index:2}@keyframes change-data-v-74da2a68{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.my-footer ul li.current .icon-home[data-v-74da2a68]{background:url("+a(i(554))+") no-repeat;background-size:1.493333rem}.my-footer ul li.current[data-v-74da2a68]{transition:all .4s}.my-footer ul li.current p[data-v-74da2a68]{color:#51aa38}.my-footer ul li.homeLi[data-v-74da2a68]{width:1.76rem;padding:.933333rem 0 0}.my-footer ul li.homeLi span[data-v-74da2a68]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;display:inline-block;width:1.506667rem;height:1.506667rem;border-radius:50%;box-shadow:0 -.106667rem .186667rem hsla(60,1%,55%,.56);z-index:1}.icon-my[data-v-74da2a68]{background-position:0 -4.506667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-my[data-v-74da2a68]{background-position:-.973333rem -4.506667rem}.icon-task[data-v-74da2a68]{background-position:0 .053333rem;width:.626667rem;height:.8rem}.my-footer ul li.current .icon-task[data-v-74da2a68]{background-position:-.973333rem .053333rem}.icon-book[data-v-74da2a68]{background-position:0 -1.426667rem;width:.613333rem;height:.773333rem}.my-footer ul li.current .icon-book[data-v-74da2a68]{background-position:-.973333rem -1.426667rem}.icon-rank[data-v-74da2a68]{background-position:0 -3.106667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-rank[data-v-74da2a68]{background-position:-.973333rem -3.106667rem}.my-footer dl[data-v-74da2a68]{position:absolute;top:-1.973333rem;z-index:1;text-align:right;width:100%}.my-footer dl dd[data-v-74da2a68]{position:absolute;top:.466667rem;line-height:0;right:0}.my-footer dl dt img[data-v-74da2a68]{width:100%}.my-footer dl dd img[data-v-74da2a68]{width:1.253333rem;height:1.506667rem}.special[data-v-74da2a68]{width:100%;background:none;position:absolute;left:0;bottom:0}.special ul[data-v-74da2a68]{border-top:none;height:1.066667rem;background:none}.special .icon-home[data-v-74da2a68],.special ul li.homeLi span[data-v-74da2a68]{top:0}",""])},633:function(e,t,i){var a=i(618);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("33261c90",a,!0,{})},634:function(e,t,i){e.exports=i.p+"img/icon-nav.fcb4617.png"},635:function(e,t,i){function a(e){i(633)}var n=i(126)(i(617),i(636),a,"data-v-74da2a68",null);e.exports=n.exports},636:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"posoR"},[i("div",{class:["animated my-footer",{fadeInUp:e.showCircle,dn:!e.showCircle}]},[i("ul",[i("li",{class:["special",{current:"task"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/")}}},[i("i",{staticClass:"myicon icon-task"}),i("p",{staticClass:"power"},[e._v("商品")])]),i("li",{class:["special",{current:"order"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/order/list")}}},[i("i",{staticClass:"myicon icon-book"}),i("p",[e._v("订单")])]),i("li",{class:["homeLi",{current:"home"==e.current}],on:{touchend:function(t){return t.preventDefault(),e.changeShow(t)}}},[i("i",{staticClass:"icon-home"}),i("span"),i("b")]),i("li",{class:["special posiR",{current:"discovery"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/discovery")}}},[i("i",{staticClass:"myicon icon-rank"}),i("p",[e._v("发现")])]),i("li",{class:["special",{current:"my"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/my")}}},[i("i",{staticClass:"myicon icon-my"}),i("p",[e._v("我")])])])]),i("div",{class:["animated my-footer special",{fadeInUp:!e.showCircle,dn:e.showCircle}]},[i("ul",[i("li",{class:["homeLi flex1",{current:"home"==e.current}],on:{touchend:function(t){return t.preventDefault(),e.changeShow(t)}}},[i("i",{staticClass:"icon-home"}),i("span"),i("b")])])])])},staticRenderFns:[]}}});