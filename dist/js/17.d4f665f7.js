webpackJsonp([17],{1128:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=i(84),o=a(n),r=(i(592),i(527)),d=a(r),s=i(532),c=a(s),l=i(190),u=i(535),f=a(u),p=i(127),m=i(554),g=a(m),h=i(128),v=a(h),b=i(191),y=a(b);t.default={data:function(){return{show1:!0,header:{name:"关于小小麦",link:"/my"},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],profile:{},paraData:{},headImg:"",pushpop:{version:"",push:""},isWechat:!1,isIosWechat:!1}},components:{loading:d.default,myhead:c.default,modalDialog:f.default},computed:(0,o.default)({},(0,p.mapState)(["PROFILE","TOKEN","UID","PUSHPOP"])),created:function(){l.html.isWechat()&&(this.header.opacity=!0,this.isWechat=!0),l.html.isIosWechat()&&(this.isIosWechat=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE),l.html.isWawa()&&this.initBridge(),dplus.track("个人信息",{from:l.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,o.default)({},(0,p.mapActions)(["switchState"]),{getProfile:function(){var e=this;v.default.post("/seller_api/v1/seller/userinfo",y.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){var i=t.data;i.success?(e.profile=i.result,e.switchState({PROFILE:i.result})):"403"!=i.code&&"250"!=i.code||(e.needLogin=!0,e.noToken=!0)}).catch(function(e){})},chooseImg:function(){var e=this;g.default.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var i=t.localIds;e.showImg(i[0])}})},showImg:function(e){var t=this;g.default.getLocalImgData({localId:e,success:function(e){var i=e.localData;0!=i.indexOf("data:image")&&(i="data:image/jpeg;base64,"+i),i=i.replace(/\r|\n/g,"").replace("data:image/jgp","data:image/jpeg"),t.headImg=i,t.modifyImg(i)}})},modifyImg:function(e){var t=this;v.default.post("/seller_api/v1/user/upd_profile",y.default.stringify({uid:this.paraData.uid,avatar_b64:e}),{headers:{"A-Token-Header":this.token}}).then(function(e){t.loading=!1;var i=e.data;i.success?t.getProfile():"403"==i.code||"250"==i.code?t.goto("/"):t.initMSG(i.codemsg)}).catch(function(e){})},initMSG:function(e){var t=this;this.loadError=e,this.loading=!0,setTimeout(function(){t.loadError="",t.loading=!1},3e3)},closeDialog:function(e){this[e]=!1},goto:function(e){this.$router.push(e)}})}},1196:function(e,t,i){var a=i(480);t=e.exports=i(478)(!1),t.push([e.i,".wrap[data-v-d46261bc]{background:#ebebeb}.header[data-v-d46261bc]{background:#fff;background-size:100%;padding:0 0 .666667rem;position:relative}.setDefault[data-v-d46261bc]{width:100%;height:1.213333rem;background:url("+a(i(1264))+") no-repeat 50%;background-size:100% 100%}.setDefault span[data-v-d46261bc]{padding:.266667rem .4rem;display:inline-block}.header .icon-fanhui[data-v-d46261bc]{position:absolute;left:.4rem}.header dl[data-v-d46261bc]{padding:.666667rem .4rem 0}.header dl img[data-v-d46261bc]{width:2.8rem}.header dl p.img[data-v-d46261bc]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-d46261bc]{width:2.8rem;height:2.8rem}.header dl span[data-v-d46261bc]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header input[data-v-d46261bc]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;opacity:0}.my-set[data-v-d46261bc]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-d46261bc]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-d46261bc]{padding:0 .4rem}.my-set ul li dl[data-v-d46261bc]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-d46261bc]{color:#000}.my-set ul li dd[data-v-d46261bc]{line-height:1.333333rem;height:1.333333rem;max-width:60%}.my-set ul li dd.tR[data-v-d46261bc]{color:#7f7f7f}.my-set ul li:last-child dl[data-v-d46261bc]{border-bottom:none}.my-set ul li[data-v-d46261bc]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-d46261bc]{opacity:0}.my-set ul li dd i[data-v-d46261bc]{color:#b5b5b5;margin-left:.133333rem}.header span[data-v-d46261bc],.my-set ul li a[data-v-d46261bc]{display:block}.my-set ul.header li[data-v-d46261bc]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-d46261bc]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-d46261bc]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1239:function(e,t,i){var a=i(1196);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("f77b454e",a,!0,{})},1264:function(e,t,i){e.exports=i.p+"img/defaultbg.a84e801.jpg"},1306:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[(e.isIosWechat,i("div",{staticClass:"setDefault whiteCR",attrs:{slot:"header"},slot:"header"},[i("span",{on:{click:function(t){t.preventDefault(),e.goto("/my")}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})])])),i("div",{staticClass:"my-set f30"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"/my/agreement"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("服务协议")]),i("dd",[i("i",{staticClass:"iconfont icon-jiantou f24"})])])]),i("router-link",{attrs:{tag:"li",to:"/my/private"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("隐私条款")]),i("dd",[i("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)])],1)},staticRenderFns:[]}},490:function(e,t,i){function a(e){i(1239)}var n=i(126)(i(1128),i(1306),a,"data-v-d46261bc",null);e.exports=n.exports},523:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},524:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(e,t,i){var a=i(524);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("c38d91e8",a,!0,{})},527:function(e,t,i){function a(e){i(526)}var n=i(126)(i(523),i(528),a,"data-v-4c82f682",null);e.exports=n.exports},528:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){return t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},529:function(e,t,i){"use strict";t.__esModule=!0;var a=i(84),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(190),r=i(127);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,i){e.goback()})},computed:(0,n.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},530:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},531:function(e,t,i){var a=i(530);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("21d3127e",a,!0,{})},532:function(e,t,i){function a(e){i(531)}var n=i(126)(i(529),i(533),a,"data-v-d3e6e34c",null);e.exports=n.exports},533:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[i("ul",[e.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(t){return t.preventDefault(),e.goback(t)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[e.hval.subname?i("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){return t.preventDefault(),e.goto(t)}}},[e.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),i("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},535:function(e,t,i){function a(e){i(540)}var n=i(126)(i(538),i(541),a,"data-v-64c058d6",null);e.exports=n.exports},538:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(e){this.noClickBg||this.$emit("hide")},close:function(e){this.$emit("hide")}}}},539:function(e,t,i){t=e.exports=i(478)(!1),t.push([e.i,'.footerP[data-v-64c058d6]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-64c058d6]{display:none}.dialogMask[data-v-64c058d6]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-64c058d6]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-64c058d6]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-64c058d6]{visibility:visible}.dialog-active .dialog-content[data-v-64c058d6]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-64c058d6]{opacity:1;visibility:visible}.dialog-content[data-v-64c058d6]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-64c058d6]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-64c058d6]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-64c058d6]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-64c058d6]{padding:2em}.dialog-body .error[data-v-64c058d6]{font-size:1.2em;color:salmon}.dialog-footer[data-v-64c058d6]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-64c058d6]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-64c058d6]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-64c058d6]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-64c058d6]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-64c058d6]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-64c058d6]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-64c058d6]{font-size:.533333rem}.rotate[data-v-64c058d6]{cursor:pointer}.rotate[data-v-64c058d6]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-64c058d6]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-64c058d6]{display:none}.borNone[data-v-64c058d6]{border:none!important}.dialog-active[close=false] .close[data-v-64c058d6]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-64c058d6]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-64c058d6]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-64c058d6]{display:none}@keyframes slideInDown-data-v-64c058d6{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-64c058d6]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-64c058d6}@keyframes bounceIn-data-v-64c058d6{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},540:function(e,t,i){var a=i(539);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(479)("673640fb",a,!0,{})},541:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":e.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:e.isActive}]},[i("div",{staticClass:"diaplg-border"},[e.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(t){return t.preventDefault(),e.close(t)}}},[i("span",{staticClass:"iconfont icon-close redCR"},[e._v(e._s(e.closeText))])]):e._e(),e._t("dialog-header"),e._t("dialog-body"),e._t("dialog-footer")],2)])]),e.isActive?i("div",{staticClass:"dialogMask",on:{click:function(t){return t.preventDefault(),e.closeDefault(t)}}}):e._e()]):e._e()},staticRenderFns:[]}},554:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){d(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),d(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function d(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=s(e,a),t.errMsg=a),(i=i||{})._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function s(e,t){var i=e,a=v[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");"confirm"==(n=t.substring(o+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function c(e){if(e){for(var t=0,i=e.length;t<i;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!A.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(_||x||A.debug||C<"6.0.2"||P.systemType<0)){var t=new Image;P.appId=A.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,R.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){I&&(e.WeixinJSBridge?"preInject"===b.__wxjsjs__isPreInject?b.addEventListener&&b.addEventListener("WeixinJSBridgeReady",t,!1):t():b.addEventListener&&b.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){R.invoke||(R.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},R.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),b=e.document,y=b.title,w=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),_=!(!k.match("mac")&&!k.match("win")),x=-1!=w.indexOf("wxdebugger"),I=-1!=w.indexOf("micromessenger"),S=-1!=w.indexOf("android"),T=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),C=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),M={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:S?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},A={},B={_completes:[]},E={state:0,data:{}};p(function(){M.initEndTime=f()});var L=!1,V=[],R={config:function(e){A=e,l("config",e);var t=!1!==A.check;p(function(){if(t)i(h.config,{verifyJsApiList:c(A.jsApiList)},function(){B._complete=function(e){M.preVerifyEndTime=f(),E.state=1,E.data=e},B.success=function(e){P.isPreVerifyOk=0},B.fail=function(e){B._fail?B._fail(e):E.state=-1};var e=B._completes;return e.push(function(){u()}),B.complete=function(t){for(var i=0,a=e.length;i<a;++i)e[i]();B._completes=[]},B}()),M.preVerifyStartTime=f();else{E.state=1;for(var e=B._completes,a=0,n=e.length;a<n;++a)e[a]();B._completes=[]}}),m()},ready:function(e){0!=E.state?e():(B._completes.push(e),!I&&A.debug&&e())},error:function(e){C<"6.0.2"||(-1==E.state?e(E.data):B._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=v[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:c(e.jsApiList)},(e._complete=function(e){if(S){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(S){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===L?(L=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(L=!1,V.length>0){var t=V.shift();R.getLocalImgData(t)}},e))):V.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var r=t[n],d={card_id:r.cardId,card_ext:r.cardExt};a.push(d)}i(h.addCard,{card_list:a},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,a=(t=JSON.parse(t)).length;i<a;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var r=t[n],d={card_id:r.cardId,code:r.code};a.push(d)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){p(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},W=1,O={};return b.addEventListener("error",function(e){if(!S){var t=e.target,i=t.tagName,a=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=W++,t["wx-id"]=n),O[n])return;O[n]=!0,R.ready(function(){R.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})})}}},!0),b.addEventListener("load",function(e){if(!S){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(O[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=R),R}}(t)}(window)},592:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a}});