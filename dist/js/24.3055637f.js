webpackJsonp([24],{1056:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=i(81),o=a(n),r=i(581),s=i(520),c=a(s),d=i(641),l=a(d),u=i(184),f=i(123),p=i(565),m=a(p),h=i(124),g=a(h),v=i(185),b=a(v);t.default={data:function(){return{show1:!0,header:{name:"我的",link:"/",isNobg:!0},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,begin_seconds:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"my",profile:{},isWechat:!1}},components:{loading:c.default,myfooter:l.default},computed:(0,o.default)({},(0,f.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),mounted:function(){this.TOKEN&&(this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/200/h/200/"),dplus.track("我的",{from:u.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},wakeQQ:function(){u.html.isWawa()&&(0,r.setupWebViewJavascriptBridge)(function(e){e.callHandler("wakeQQ",{qq:"875332802",key:u.html.isWawaIos()?"8d8a7b4f7f60a342612e85bcd36908a5205d1381d48904d3240ed3997587d49b":"nfHFQkaZul8ms7jg23YmvKg8-ix0ZoTO"})})},getProfile:function(){var e=this;g.default.post("/seller_api/v1/seller/userinfo",b.default.stringify({uid:this.paraData.uid}),{headers:{"A-Token-Header":this.token}}).then(function(t){var i=t.data;i.success?(e.profile=i.result,e.switchState({PROFILE:i.result}),e.headImg=e.globalAvatar+(e.sellerInfo.avatar?e.sellerInfo.avatar:"")+"?imageView2/2/w/100/h/100/t/"):"403"!=i.code&&"250"!=i.code||(e.needLogin=!0,e.noToken=!0)}).catch(function(e){})},goto:function(e){if("/my/invite"==e&&this.isWechat)return void(Number(this.profile.total_bonus)>10?m.default.miniProgram.navigateTo({url:"/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter="+this.profile.invite_code+"&desc="+this.profile.nick+"邀请你一起购物赚钱，"+this.profile.nick+"已在红多多获得分红"+this.profile.total_bonus+"元！"}):m.default.miniProgram.navigateTo({url:"/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter="+this.profile.invite_code+"&desc="+this.profile.nick+"邀请你一起购物赚钱，全新分红式电商，买的多赚的多！"}));this.$router.push(e)},closeDialog:function(e){this[e]=!1}}}},1065:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".wrap[data-v-0713a052]{background:#ebebeb}.my-set[data-v-0713a052]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-0713a052]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-0713a052]{padding:0 0 0 .4rem}.my-set ul li dl[data-v-0713a052]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-0713a052]{width:.933333rem}.my-set ul li dd[data-v-0713a052]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-0713a052]{padding-right:.4rem;color:#7f7f7f}.my-set ul li:last-child dl[data-v-0713a052]{border-bottom:none}.my-set ul li[data-v-0713a052]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-0713a052]{opacity:0}.my-set ul li dd i[data-v-0713a052]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-0713a052]{display:block}.icon-qianbao-[data-v-0713a052]{color:#f16e34}.icon-tubiaozoushitu[data-v-0713a052]{color:#588ae7}.icon-tubiao[data-v-0713a052]{color:#e75858}.icon-erweima[data-v-0713a052]{color:#80a073}.icon-shezhi[data-v-0713a052]{color:#9173a0}.header span[data-v-0713a052]{display:block}.my-set ul.header li[data-v-0713a052]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-0713a052]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-0713a052]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1097:function(e,t,i){var a=i(1065);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("f5901e4e",a,!0,{})},1133:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"my-set"},[i("ul",{staticClass:"header"},[i("router-link",{attrs:{tag:"li",to:"/my/profile"}},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"flex1"},[i("div",{staticClass:"flexBox"},[i("p",[i("img",{attrs:{src:e.headImg,alt:"",onerror:e.defaultHead}})]),i("p",{staticClass:"flex1 "},[i("span",{staticClass:"f30"},[e._v(e._s(e.profile.nick))]),i("span",{staticClass:"grayCR"},[e._v("手机号："+e._s(e.profile.acc?e.profile.acc:"无"))])])])]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/balance"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-qianbao- f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的钱包")]),i("dd",{staticClass:"tR"},[e._v("\n            余额："+e._s(e.profile.balance?e.profile.balance:"0")+" 元"),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("router-link",{attrs:{tag:"li",to:"/my/bonus"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-tubiaozoushitu f36"})]),i("dd",{staticClass:"flex1 f30"},[e._v("收入分析")]),i("dd",{staticClass:"tR"},[e._v("\n            总计："+e._s(e.profile.total_income?e.profile.total_income:"0")+" 元"),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("router-link",{attrs:{tag:"li",to:"/my/analysis"}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-tubiao f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("商品分析")]),i("dd",{staticClass:"tR"},[e._v("\n             总计："+e._s(e.profile.total_count?e.profile.total_count:"0")+" 件"),i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("li",{on:{click:function(t){t.preventDefault(),e.popSet(t)}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-erweima f30"})]),i("dd",{staticClass:"flex1 f30"},[e._v("我的二维码")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("myfooter",{attrs:{current:e.navType}})],1)])},staticRenderFns:[]}},497:function(e,t,i){function a(e){i(1097)}var n=i(122)(i(1056),i(1133),a,"data-v-0713a052",null);e.exports=n.exports},517:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},518:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},519:function(e,t,i){var a=i(518);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("ae8afd90",a,!0,{})},520:function(e,t,i){function a(e){i(519)}var n=i(122)(i(517),i(521),a,"data-v-b60b2388",null);e.exports=n.exports},521:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},565:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",M.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=g[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");n=t.substring(o+1),"confirm"==n&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),n=n.replace(/_/g," "),n=n.toLowerCase(),("access denied"==n||"no permission to execute"==n)&&(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function d(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||S||M.debug||"6.0.2">T||B.systemType<0)){var t=new Image;B.appId=M.appId,B.initTime=C.initEndTime-C.initStartTime,B.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){B.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){k&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){L.invoke||(L.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),v=e.document,b=v.title,y=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),w=!(!_.match("mac")&&!_.match("win")),S=-1!=y.indexOf("wxdebugger"),k=-1!=y.indexOf("micromessenger"),I=-1!=y.indexOf("android"),x=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),T=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:I?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},M={},V={_completes:[]},A={state:0,data:{}};p(function(){C.initEndTime=f()});var R=!1,E=[],L={config:function(e){M=e,l("config",e);var t=!1!==M.check;p(function(){if(t)i(h.config,{verifyJsApiList:d(M.jsApiList)},function(){V._complete=function(e){C.preVerifyEndTime=f(),A.state=1,A.data=e},V.success=function(e){B.isPreVerifyOk=0},V.fail=function(e){V._fail?V._fail(e):A.state=-1};var e=V._completes;return e.push(function(){u()}),V.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();V._completes=[]},V}()),C.preVerifyStartTime=f();else{A.state=1;for(var e=V._completes,a=0,n=e.length;n>a;++a)e[a]();V._completes=[]}}),M.beta&&m()},ready:function(e){0!=A.state?e():(V._completes.push(e),!k&&M.debug&&e())},error:function(e){"6.0.2">T||(-1==A.state?e(A.data):V._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(I){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(I){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===R?(R=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(R=!1,E.length>0){var t=E.shift();wx.getLocalImgData(t)}},e}())):E.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},O=1,P={};return v.addEventListener("error",function(e){if(!I){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=O++,t["wx-id"]=n),P[n])return;P[n]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!I){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(P[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(t)}(window)},581:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a},631:function(e,t,i){"use strict";t.__esModule=!0;var a=i(81),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(184),r=i(123);t.default={props:{current:""},data:function(){return{canDown:!1,isH5:!1,isIos:!1}},computed:(0,n.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{bottomBarh:function(){if(o.html.isWawa())return this.BOTTOMBARH?{"padding-bottom":this.BOTTOMBARH+"px"}:""}}),mounted:function(){this.isIos=gisIOS},methods:{goto:function(e){if(sessionStorage.isGuest)return void this.guestClick();this.$router.push(e)},clickDown:function(){var e=this;this.canDown=!this.canDown,setTimeout(function(){e.canDown=!e.canDown},3e3)},guestClick:function(){this.$emit("guestPop")}}}},637:function(e,t,i){t=e.exports=i(471)(!1),t.push([e.i,'.my-footer[data-v-e826c56a]{width:100%;position:relative;z-index:12;background-size:100% 1.226667rem}.my-footer ul[data-v-e826c56a]{display:-ms-flexbox;display:flex;text-align:center;position:relative;background:#fafafa;z-index:2;-ms-flex-align:center;align-items:center;height:1.066667rem;border-top:1px solid #d6d6d6}.my-footer ul li[data-v-e826c56a]{position:relative;padding:.066667rem 0}.my-footer ul li.special[data-v-e826c56a]:before{position:absolute;content:" ";border-left:1px solid #cacaca;width:.026667rem;top:0;bottom:0;left:0}.my-footer ul li.current[data-v-e826c56a]{transition:all .4s;color:#52a938}.icon-home[data-v-e826c56a]{background-position:0 0}',""])},639:function(e,t,i){var a=i(637);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(472)("08c4fb67",a,!0,{})},641:function(e,t,i){function a(e){i(639)}var n=i(122)(i(631),i(643),a,"data-v-e826c56a",null);e.exports=n.exports},643:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:e.bottomBarh},[i("div",{staticClass:"my-footer"},[i("ul",{staticClass:"flexBox1 f30"},[i("li",{class:[{"current animateds":"home"==e.current}],on:{click:function(t){t.preventDefault(),e.goto("/")}}},[i("i",{staticClass:"iconfont icon-wo f21"}),e._v("\n        商品管理\n      ")]),i("li",{class:["special",{"current animateds":"shop"==e.current}],on:{click:function(t){t.preventDefault(),e.goto("/order/list")}}},[i("i",{staticClass:"iconfont icon-wo f21"}),e._v("\n        订单管理\n      ")]),i("li",{class:["special",{"current animateds":"my"==e.current}],on:{click:function(t){t.preventDefault(),e.goto("/my")}}},[i("i",{staticClass:"iconfont icon-wo f21"}),e._v("\n        我的\n      ")])])])])},staticRenderFns:[]}}});