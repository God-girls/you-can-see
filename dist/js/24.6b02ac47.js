webpackJsonp([24],{1105:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=i(81),n=a(o),r=i(553),s=i(520),c=a(s),d=i(615),l=a(d),u=i(184),f=i(123),p=i(545),m=(a(p),i(124)),g=a(m),h=i(185),v=a(h);t.default={data:function(){return{show1:!0,header:{name:"我",link:"/",isNobg:!0},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,begin_seconds:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"my",profile:{},isWechat:!1}},components:{loading:c.default,myfooter:l.default},computed:(0,n.default)({},(0,f.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),mounted:function(){this.TOKEN&&(this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/200/h/200/"),dplus.track("我的",{from:u.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},wakeQQ:function(){u.html.isWawa()&&(0,r.setupWebViewJavascriptBridge)(function(e){e.callHandler("wakeQQ",{qq:"875332802",key:u.html.isWawaIos()?"8d8a7b4f7f60a342612e85bcd36908a5205d1381d48904d3240ed3997587d49b":"nfHFQkaZul8ms7jg23YmvKg8-ix0ZoTO"})})},getProfile:function(){var e=this;g.default.post("/seller_api/v1/seller/userinfo",v.default.stringify({uid:this.paraData.uid}),{headers:{"A-Token-Header":this.token}}).then(function(t){var i=t.data;i.success?(e.profile=i.result,e.switchState({PROFILE:i.result}),e.headImg=e.globalAvatar+(e.sellerInfo.avatar?e.sellerInfo.avatar:"")+"?imageView2/2/w/100/h/100/t/"):"403"!=i.code&&"250"!=i.code||(e.needLogin=!0,e.noToken=!0)}).catch(function(e){})},initMSG:function(e){var t=this;this.loadError=e,this.loading=!0,setTimeout(function(){t.loadError="",t.loading=!1},2e3)},goto:function(e){if("/my/bindacc"==e&&this.profile.acc)return void this.initMSG("已绑定手机号");this.$router.push(e)},closeDialog:function(e){this[e]=!1}}}},1114:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".wrap[data-v-0713a052]{background:#ebebeb}.my-set[data-v-0713a052]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-0713a052]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-0713a052]{padding:0 0 0 .4rem}.my-set ul li dl[data-v-0713a052]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-0713a052]{width:.933333rem}.my-set ul li dd[data-v-0713a052]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-0713a052]{padding-right:.4rem;color:#7f7f7f}.my-set ul li:last-child dl[data-v-0713a052]{border-bottom:none}.my-set ul li[data-v-0713a052]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-0713a052]{opacity:0}.my-set ul li dd i[data-v-0713a052]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-0713a052]{display:block}.icon-qianbao-[data-v-0713a052]{color:#f16e34}.icon-erji[data-v-0713a052]{color:#588ae7}.icon-tubiao[data-v-0713a052]{color:#e75858}.icon-erweima[data-v-0713a052]{color:#80a073}.icon-shoujibangding01[data-v-0713a052]{color:#df4d90}.icon-guanyuwomen[data-v-0713a052]{color:#9173a0}.header span[data-v-0713a052]{display:block}.my-set ul.header li[data-v-0713a052]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-0713a052]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-0713a052]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1156:function(e,t,i){var a=i(1114);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("f5901e4e",a,!0,{})},1223:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"my-set"},[i("ul",{staticClass:"header"},[i("router-link",{attrs:{tag:"li",to:"/my/profile"}},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"flex1"},[i("div",{staticClass:"flexBox"},[i("p",[i("img",{attrs:{src:e.headImg,alt:"",onerror:e.defaultHead}})]),i("p",{staticClass:"flex1 "},[i("span",{staticClass:"f30"},[e._v(e._s(e.profile.nick))]),i("span",{staticClass:"grayCR"},[e._v("手机号："+e._s(e.profile.acc?e.profile.acc:"无"))])])])]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/balance"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-qianbao- f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的钱包")]),i("dd",{staticClass:"tR"},[e._v("\n            余额："+e._s(e.profile.balance?e.profile.balance:"0")+" 元"),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/qrcode")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-erweima f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的二维码")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/bindacc")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-shoujibangding01 f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("绑定手机号")]),i("dd",{staticClass:"tR"},[e._v("\n             "+e._s(e.profile.acc?e.profile.acc:"0")),i("i",{staticClass:"iconfont icon-jiantou f24"})])])])]),i("ul",[i("li",{on:{click:function(t){t.preventDefault(),e.goto("/my/service")}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-erji f40"})]),i("dd",{staticClass:"flex1 f30"},[e._v("客服方式")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])]),i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/about"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-guanyuwomen f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("关于小小麦")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("myfooter",{attrs:{current:e.navType}}),i("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)])},staticRenderFns:[]}},506:function(e,t,i){function a(e){i(1156)}var o=i(122)(i(1105),i(1223),a,"data-v-0713a052",null);e.exports=o.exports},516:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},517:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},519:function(e,t,i){var a=i(517);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("ae8afd90",a,!0,{})},520:function(e,t,i){function a(e){i(519)}var o=i(122)(i(516),i(521),a,"data-v-b60b2388",null);e.exports=o.exports},521:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},545:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function o(e){return e=e||{},e.appId=E.appId,e.verifyAppId=E.appId,e.verifySignType="sha1",e.verifyTimestamp=E.timestamp+"",e.verifyNonceStr=E.nonceStr,e.verifySignature=E.signature,e}function n(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",E.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=a.indexOf(":");switch(a.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=h[i];a&&(i=a);var o="ok";if(t){var n=t.indexOf(":");o=t.substring(n+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=i+":"+o}function d(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],o=g[a];o&&(e[t]=o)}return e}}function l(e,t){if(!(!E.debug||t&&t.isInnerInvoke)){var i=h[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(k||_||E.debug||"6.0.2">C||B.systemType<0)){var t=new Image;B.appId=E.appId,B.initTime=T.initEndTime-T.initStartTime,B.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,R.getNetworkType({isInnerInvoke:!0,success:function(e){B.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){S&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){R.invoke||(R.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),a)},R.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),v=e.document,b=v.title,y=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),k=!(!w.match("mac")&&!w.match("win")),_=-1!=y.indexOf("wxdebugger"),S=-1!=y.indexOf("micromessenger"),x=-1!=y.indexOf("android"),I=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),C=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),T={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:x?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},E={},L={_completes:[]},M={state:0,data:{}};p(function(){T.initEndTime=f()});var V=!1,A=[],R={config:function(e){E=e,l("config",e);var t=!1!==E.check;p(function(){if(t)i(g.config,{verifyJsApiList:d(E.jsApiList)},function(){L._complete=function(e){T.preVerifyEndTime=f(),M.state=1,M.data=e},L.success=function(e){B.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):M.state=-1};var e=L._completes;return e.push(function(){u()}),L.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();L._completes=[]},L}()),T.preVerifyStartTime=f();else{M.state=1;for(var e=L._completes,a=0,o=e.length;o>a;++a)e[a]();L._completes=[]}}),E.beta&&m()},ready:function(e){0!=M.state?e():(L._completes.push(e),!S&&E.debug&&e())},error:function(e){"6.0.2">C||(-1==M.state?e(M.data):L._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=h[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(x){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(g.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(g.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(x){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(V=!1,A.length>0){var t=A.shift();wx.getLocalImgData(t)}},e}())):A.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),o=t.substring(a+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(I){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(g.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],o=0,n=t.length;n>o;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(g.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:E.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],o=0,n=t.length;n>o;++o){var r=t[o],s={card_id:r.cardId,code:r.code};a.push(s)}i(g.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(g.chooseWXPay,n(e),e)},openEnterpriseRedPacket:function(e){i(g.openEnterpriseRedPacket,n(e),e)},startSearchBeacons:function(e){i(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(g.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},P=1,O={};return v.addEventListener("error",function(e){if(!x){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=P++,t["wx-id"]=o),O[o])return;O[o]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!x){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(O[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=R),R}}(t)}(window)},553:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a},570:function(e,t,i){e.exports=i.p+"img/mai.e026c46.png"},597:function(e,t,i){"use strict";t.__esModule=!0;var a=i(184);t.default={props:{current:""},data:function(){return{canDown:!1,isH5:!1,isIos:!1}},computed:{isApp:function(){if(a.html.isWawa())return localStorage.bottomBarH?JSON.parse(localStorage.bottomBarH):""}},mounted:function(){this.isIos=gisIOS},methods:{goto:function(e){if(sessionStorage.isGuest)return void this.guestClick();"/wake"==e&&this.isIos?this.$router.push("/wake_study?type=daily"):this.$router.push(e)},downAPP:function(){location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.bhu.WaWa",dplus.track("wawa_h5点击下载app",{from:a.html.useragent()})},clickDown:function(){var e=this;this.canDown=!this.canDown,setTimeout(function(){e.canDown=!e.canDown},3e3)},guestClick:function(){this.$emit("guestPop")}}}},598:function(e,t,i){var a=i(473);t=e.exports=i(471)(!1),t.push([e.i,".my-footer[data-v-e826c56a]{width:100%;position:relative;z-index:12}.my-footer ul[data-v-e826c56a]{display:-ms-flexbox;display:flex;text-align:center;position:relative;background:#fafafa;z-index:2;-ms-flex-align:center;align-items:center;height:1.333333rem;border-top:1px solid #bcbcbc}.my-footer ul li[data-v-e826c56a]{padding-top:.106667rem;position:relative}.my-footer ul li.special[data-v-e826c56a]{-ms-flex:1;flex:1;width:0}.my-footer ul li p[data-v-e826c56a]{position:relative;top:-.08rem;color:#929292;font-size:.28rem}.my-footer ul li p.power[data-v-e826c56a]{top:-.106667rem}.my-footer ul li i.dot[data-v-e826c56a]{display:inline-block;width:.173333rem;height:.173333rem;border-radius:50%;background:#ff0500;position:absolute;top:.133333rem;right:23%}.myicon[data-v-e826c56a]{display:inline-block;background:url("+a(i(614))+") no-repeat;background-size:1.733333rem}.icon-home[data-v-e826c56a]{position:absolute;left:.133333rem;top:-.693333rem;background:url("+a(i(570))+") no-repeat;background-size:1.6rem;width:1.6rem;height:1.6rem;border-radius:50%;z-index:2}@keyframes change-data-v-e826c56a{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.my-footer ul li.current .icon-home[data-v-e826c56a]{background:url("+a(i(570))+") no-repeat;background-size:1.493333rem}.my-footer ul li.current[data-v-e826c56a]{transition:all .4s}.my-footer ul li.current p[data-v-e826c56a]{color:#51aa38}.my-footer ul li.homeLi[data-v-e826c56a]{width:1.76rem;padding:.933333rem 0 0}.my-footer ul li.homeLi span[data-v-e826c56a]{position:absolute;left:.12rem;top:-.693333rem;display:inline-block;width:1.506667rem;height:1.506667rem;border-radius:50%;box-shadow:0 -.106667rem .186667rem hsla(60,1%,55%,.56);z-index:1}.my-footer ul li.homeLi b[data-v-e826c56a]{position:absolute;left:.133333rem;bottom:0;display:inline-block;background-size:1.493333rem;width:1.493333rem;height:1.493333rem;border-radius:50%;z-index:3}.icon-my[data-v-e826c56a]{background-position:0 -4.506667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-my[data-v-e826c56a]{background-position:-.973333rem -4.506667rem}.icon-task[data-v-e826c56a]{background-position:0 .053333rem;width:.626667rem;height:.8rem}.my-footer ul li.current .icon-task[data-v-e826c56a]{background-position:-.973333rem .053333rem}.icon-book[data-v-e826c56a]{background-position:0 -1.426667rem;width:.613333rem;height:.773333rem}.my-footer ul li.current .icon-book[data-v-e826c56a]{background-position:-.973333rem -1.426667rem}.icon-rank[data-v-e826c56a]{background-position:0 -3.106667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-rank[data-v-e826c56a]{background-position:-.973333rem -3.106667rem}.my-footer dl[data-v-e826c56a]{position:absolute;top:-1.973333rem;z-index:1;text-align:right;width:100%}.my-footer dl dd[data-v-e826c56a]{position:absolute;top:.466667rem;line-height:0;right:0}.my-footer dl dt img[data-v-e826c56a]{width:100%}.my-footer dl dd img[data-v-e826c56a]{width:1.253333rem;height:1.506667rem}",""])},613:function(e,t,i){var a=i(598);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("08c4fb67",a,!0,{})},614:function(e,t,i){e.exports=i.p+"img/icon-nav.fcb4617.png"},615:function(e,t,i){function a(e){i(613)}var o=i(122)(i(597),i(616),a,"data-v-e826c56a",null);e.exports=o.exports},616:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"my-footer"},[i("ul",[i("li",{class:["special",{current:"task"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/")}}},[i("i",{staticClass:"myicon icon-task"}),i("p",{staticClass:"power"},[e._v("商品")])]),i("li",{class:["special",{current:"order"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/order/list")}}},[i("i",{staticClass:"myicon icon-book"}),i("p",[e._v("订单")])]),i("li",{class:["homeLi",{current:"home"==e.current}],on:{touchend:function(e){e.preventDefault()}}},[i("i",{staticClass:"icon-home"}),i("span"),i("b")]),i("li",{class:["special posiR",{current:"discovery"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/discovery")}}},[i("i",{staticClass:"myicon icon-rank"}),i("p",[e._v("发现")])]),i("li",{class:["special",{current:"my"==e.current}],on:{touchend:function(t){t.preventDefault(),e.goto("/my")}}},[i("i",{staticClass:"myicon icon-my"}),i("p",[e._v("我")])])])])])},staticRenderFns:[]}}});