webpackJsonp([19],{1134:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=i(81),n=a(o),r=(i(587),i(522)),s=a(r),d=i(528),l=a(d),c=i(185),u=i(531),f=a(u),p=i(123),m=i(555),h=a(m),g=i(124),v=a(g),b=i(186),y=a(b);t.default={data:function(){return{show1:!0,header:{name:"卖家信息",link:"/prd/list"},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],sellerInfo:{},paraData:{},headImg:"",pushpop:{version:"",push:""},isWechat:!1}},components:{loading:s.default,myhead:l.default,modalDialog:f.default},computed:(0,n.default)({},(0,p.mapState)(["PROFILE","TOKEN","UID","PUSHPOP"])),created:function(){c.html.isWechat()&&(this.header.opacity=!0,this.isWechat=!0)},mounted:function(){this.$route.query.seller&&(this.header.link+="?seller="+this.$route.query.seller,this.getProfile()),this.$route.query.goodid&&(this.header.link+="?goodid="+this.$route.query.goodid),dplus.track("卖家信息",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,n.default)({},(0,p.mapActions)(["switchState"]),{getProfile:function(){var e=this;v.default.post("/seller_api/v1/seller/seller_info",y.default.stringify({seller:this.$route.query.seller})).then(function(t){var i=t.data;i.success&&(e.sellerInfo=i.result,e.headImg=e.globalAvatar+(e.sellerInfo.avatar?e.sellerInfo.avatar:"")+"?imageView2/2/w/100/h/100/t/")}).catch(function(e){})},chooseImg:function(){var e=this;h.default.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var i=t.localIds;e.showImg(i[0])}})},showImg:function(e){var t=this;h.default.getLocalImgData({localId:e,success:function(e){var i=e.localData;0!=i.indexOf("data:image")&&(i="data:image/jpeg;base64,"+i),i=i.replace(/\r|\n/g,"").replace("data:image/jgp","data:image/jpeg"),t.headImg=i,t.modifyImg(i)}})},modifyImg:function(e){var t=this;v.default.post("/seller_api/v1/user/upd_profile",y.default.stringify({uid:this.paraData.uid,avatar_b64:e}),{headers:{"A-Token-Header":this.token}}).then(function(e){t.loading=!1;var i=e.data;i.success?t.getProfile():"403"==i.code||"250"==i.code?t.goto("/"):t.initMSG(i.codemsg)}).catch(function(e){})},initMSG:function(e){var t=this;this.loadError=e,this.loading=!0,setTimeout(function(){t.loadError="",t.loading=!1},3e3)},closeDialog:function(e){this[e]=!1},goto:function(e){this.$router.push(e)}})}},1176:function(e,t,i){t=e.exports=i(473)(!1),t.push([e.i,".wrap[data-v-566bd846]{background:#ebebeb}.header[data-v-566bd846]{background:#fff;background-size:100%;padding:0 0 .666667rem;position:relative}.header .icon-fanhui[data-v-566bd846]{position:absolute;left:.4rem}.header dl[data-v-566bd846]{padding:.666667rem .4rem 0}.header dl img[data-v-566bd846]{width:2.8rem}.header dl p.img[data-v-566bd846]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-566bd846]{width:2.8rem;height:2.8rem}.header dl span[data-v-566bd846]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header h3[data-v-566bd846]{padding-bottom:.133333rem}.my-set[data-v-566bd846]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-566bd846]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-566bd846]{padding:0 .4rem}.my-set ul li dl[data-v-566bd846]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-566bd846]{color:#000}.my-set ul li dd[data-v-566bd846]{line-height:1.333333rem;height:1.333333rem;max-width:60%}.my-set ul li dd.tR[data-v-566bd846]{color:#7f7f7f}.my-set ul li:last-child dl[data-v-566bd846]{border-bottom:none}.my-set ul li[data-v-566bd846]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-566bd846]{opacity:0}.my-set ul li dd i[data-v-566bd846]{color:#b5b5b5;margin-left:.133333rem}.header span[data-v-566bd846],.my-set ul li a[data-v-566bd846]{display:block}.my-set ul.header li[data-v-566bd846]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-566bd846]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-566bd846]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1220:function(e,t,i){var a=i(1176);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(474)("020f295c",a,!0,{})},1288:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("myhead",{attrs:{slot:"header",hval:e.header},slot:"header"}),i("div",[i("div",{staticClass:"header posiR"},[e.isWechat?i("i",{staticClass:"iconfont icon-fanhui f36",on:{click:function(t){t.preventDefault(),e.goto("/my")}}}):e._e(),i("dl",{staticClass:"tC"},[i("dt",[i("p",{staticClass:"img",on:{click:function(t){t.preventDefault(),e.chooseImg(t)}}},[i("img",{attrs:{src:e.headImg,alt:"",onerror:e.defaultHead}})])]),i("dd",{staticClass:"f24"},[i("h3",{staticClass:"f36"},[e._v(e._s(e.sellerInfo.nick))]),e._v("\n          个性签名："+e._s(e.sellerInfo.signature?e.sellerInfo.signature:"无")+"\n        ")])])])]),i("div",{staticClass:"my-set f30"},[i("ul",[i("li",[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("性别：")]),i("dd",{staticClass:"tR"},[e._v("\n              "+e._s(e.sellerInfo.sex)+" \n            ")])])]),i("li",[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("地区：")]),i("dd",{staticClass:"tR"},[e._v("\n               "+e._s((e.sellerInfo.country?e.sellerInfo.country:"")+" "+(e.sellerInfo.province?e.sellerInfo.province:"")+" "+(e.sellerInfo.city?e.sellerInfo.city:""))+"\n            ")])])])]),i("ul",[i("li",[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("客服手机号：")]),i("dd",{staticClass:"tR"},[e._v("\n              "+e._s(e.sellerInfo.service_mobileno?e.sellerInfo.service_mobileno:"无")+"\n            ")])])]),i("li",[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("客服微信号：")]),i("dd",{staticClass:"tR"},[e._v("\n              "+e._s(e.sellerInfo.weixin?e.sellerInfo.weixin:"无")+"\n            ")])])]),i("li",[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[e._v("客服QQ号：")]),i("dd",{staticClass:"tR"},[e._v("\n               "+e._s(e.sellerInfo.qq?e.sellerInfo.qq:"无")+"\n            ")])])])])])],1)},staticRenderFns:[]}},493:function(e,t,i){function a(e){i(1220)}var o=i(122)(i(1134),i(1288),a,"data-v-566bd846",null);e.exports=o.exports},518:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(e,t,i){t=e.exports=i(473)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(e,t,i){var a=i(519);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(474)("ae8afd90",a,!0,{})},522:function(e,t,i){function a(e){i(521)}var o=i(122)(i(518),i(523),a,"data-v-b60b2388",null);e.exports=o.exports},523:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},525:function(e,t,i){"use strict";t.__esModule=!0;var a=i(81),o=function(e){return e&&e.__esModule?e:{default:e}}(a),n=i(185),r=i(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,i){e.goback()})},computed:(0,o.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},526:function(e,t,i){t=e.exports=i(473)(!1),t.push([e.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(e,t,i){var a=i(526);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(474)("504d8d1d",a,!0,{})},528:function(e,t,i){function a(e){i(527)}var o=i(122)(i(525),i(529),a,"data-v-a5c1fd86",null);e.exports=o.exports},529:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[i("ul",[e.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),e.goback(t)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[e.hval.subname?i("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),e.goto(t)}}},[e.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),i("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},531:function(e,t,i){function a(e){i(536)}var o=i(122)(i(533),i(537),a,"data-v-369b7310",null);e.exports=o.exports},533:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(e){this.noClickBg||this.$emit("hide")},close:function(e){this.$emit("hide")}}}},534:function(e,t,i){t=e.exports=i(473)(!1),t.push([e.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-369b7310]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-369b7310]{text-align:center}',""])},536:function(e,t,i){var a=i(534);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(474)("425b9258",a,!0,{})},537:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":e.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:e.isActive},{noCloseText_tc:e.noCloseText}]},[i("div",{staticClass:"diaplg-border"},[e.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(t){t.preventDefault(),e.close(t)}}},[i("span",{staticClass:"iconfont icon-close redCR"},[e._v(e._s(e.closeText))])]):e._e(),e._t("dialog-header"),e._t("dialog-body"),e._t("dialog-footer")],2)])]),e.isActive?i("div",{staticClass:"dialogMask",on:{click:function(t){t.preventDefault(),e.closeDefault(t)}}}):e._e()]):e._e()},staticRenderFns:[]}},555:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){s(t,e,a)}):c(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?c(t,a):c(t,i)}function o(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function n(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=d(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",M.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=a.indexOf(":");switch(a.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function d(e,t){var i=e,a=g[i];a&&(i=a);var o="ok";if(t){var n=t.indexOf(":");o=t.substring(n+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=i+":"+o}function l(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],o=h[a];o&&(e[t]=o)}return e}}function c(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||x||M.debug||"6.0.2">C||B.systemType<0)){var t=new Image;B.appId=M.appId,B.initTime=T.initEndTime-T.initStartTime,B.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){B.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;t.src=i}})}}function f(){return(new Date).getTime()}function p(t){I&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){L.invoke||(L.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),a)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),v=e.document,b=v.title,y=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),w=!(!_.match("mac")&&!_.match("win")),x=-1!=y.indexOf("wxdebugger"),I=-1!=y.indexOf("micromessenger"),k=-1!=y.indexOf("android"),S=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),C=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),T={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:S?1:k?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},M={},A={_completes:[]},V={state:0,data:{}};p(function(){T.initEndTime=f()});var E=!1,R=[],L={config:function(e){M=e,c("config",e);var t=!1!==M.check;p(function(){if(t)i(h.config,{verifyJsApiList:l(M.jsApiList)},function(){A._complete=function(e){T.preVerifyEndTime=f(),V.state=1,V.data=e},A.success=function(e){B.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):V.state=-1};var e=A._completes;return e.push(function(){u()}),A.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();A._completes=[]},A}()),T.preVerifyStartTime=f();else{V.state=1;for(var e=A._completes,a=0,o=e.length;o>a;++a)e[a]();A._completes=[]}}),M.beta&&m()},ready:function(e){0!=V.state?e():(A._completes.push(e),!I&&M.debug&&e())},error:function(e){"6.0.2">C||(-1==V.state?e(V.data):A._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:l(e.jsApiList)},function(){return e._complete=function(e){if(k){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(k){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(E=!1,R.length>0){var t=R.shift();wx.getLocalImgData(t)}},e}())):R.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),o=t.substring(a+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(S){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],o=0,n=t.length;n>o;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],o=0,n=t.length;n>o;++o){var r=t[o],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,n(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,n(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},P=1,O={};return v.addEventListener("error",function(e){if(!k){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=P++,t["wx-id"]=o),O[o])return;O[o]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!k){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(O[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(t)}(window)},587:function(e,t,i){"use strict";function a(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)}t.__esModule=!0,t.setupWebViewJavascriptBridge=a}});