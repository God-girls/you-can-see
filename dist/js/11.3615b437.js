webpackJsonp([11],{498:function(t,a,e){function i(t){e(611)}var o=e(122)(e(569),e(646),i,"data-v-16df844e",null);t.exports=o.exports},503:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},504:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},505:function(t,a,e){var i=e(504);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("ae8afd90",i,!0,{})},506:function(t,a,e){function i(t){e(505)}var o=e(122)(e(503),e(507),i,"data-v-b60b2388",null);t.exports=o.exports},507:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},508:function(t,a,e){"use strict";a.__esModule=!0;var i=e(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=e(184),d=e(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},509:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.106667rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},510:function(t,a,e){var i=e(509);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("504d8d1d",i,!0,{})},511:function(t,a,e){function i(t){e(510)}var o=e(122)(e(508),e(512),i,"data-v-a5c1fd86",null);t.exports=o.exports},512:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f24 greenCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},513:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},514:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},515:function(t,a,e){var i=e(514);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("425b9258",i,!0,{})},516:function(t,a,e){function i(t){e(515)}var o=e(122)(e(513),e(517),i,"data-v-369b7310",null);t.exports=o.exports},517:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:t.isActive}]},[e("div",{staticClass:"diaplg-border"},[t.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[e("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?e("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}},519:function(t,a,e){"use strict";function i(t){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var a=document.createElement("iframe");a.style.display="none",a.src="https://__bridge_loaded__",document.documentElement.appendChild(a),setTimeout(function(){document.documentElement.removeChild(a)},0)}a.__esModule=!0,a.setupWebViewJavascriptBridge=i},569:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(81),n=i(o),d=e(519),s=e(506),l=i(s),r=e(511),c=i(r),f=e(184),u=e(516),p=i(u),m=e(123),h=e(124),v=i(h),g=e(185),b=i(g);a.default={data:function(){return{show1:!0,header:{name:"个人设置",link:"/my"},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],profile:{},paraData:{},headImg:"",pushpop:{version:"",push:""},isWechat:!1}},components:{loading:l.default,myhead:c.default,modalDialog:p.default},computed:(0,n.default)({},(0,m.mapState)(["PROFILE","TOKEN","UID","PUSHPOP"])),created:function(){f.html.isWechat()&&(this.header.opacity=!0,this.isWechat=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/210/h/210/t/"+(new Date).getTime()),"shop"==this.$route.query.from&&(this.header.link="/shop"),f.html.isWawa()&&this.initBridge(),dplus.track("个人信息",{from:f.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,n.default)({},(0,m.mapActions)(["switchState"]),{getProfile:function(){var t=this;v.default.post("/seller_api/v1/seller/userinfo",b.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(a){var e=a.data;e.success?(t.profile=e.result,t.switchState({PROFILE:e.result})):"403"!=e.code&&"250"!=e.code||(t.needLogin=!0,t.noToken=!0)}).catch(function(t){})},initBridge:function(){function t(t){var e=t||webBridgeAndroid;f.html.isWawaIos()?e.callHandler("pushpop",function(t,e){a.pushpop=JSON.parse(t)}):e.registerHandler("pushpop",function(t,e){a.pushpop=JSON.parse(t)}),e.registerHandler("notification",function(t,i){"DidBecomeActive"==t&&e.callHandler("pushpop",function(t,e){a.pushpop=JSON.parse(t)})})}var a=this;f.html.isWawaIos()?(0,d.setupWebViewJavascriptBridge)(function(a){t(a)}):f.html.isWawaAndroid()&&t()},downloadApp:function(){function t(t){(t||webBridgeAndroid).callHandler("downloadapp",{id:"1375298342"})}f.html.isWawaIos()?(0,d.setupWebViewJavascriptBridge)(function(a){t(a)}):t()},chooseImg:function(){var t=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){var e=a.localIds;t.showImg(e[0])}})},showImg:function(t){var a=this;wx.getLocalImgData({localId:t,success:function(t){var e=t.localData;0!=e.indexOf("data:image")&&(e="data:image/jpeg;base64,"+e),e=e.replace(/\r|\n/g,"").replace("data:image/jgp","data:image/jpeg"),a.imgFile=e,a.modifyImg()}})},modifyImg:function(){var t=this;v.default.post("/seller_api/v1/user/upd_profile",b.default.stringify({uid:this.paraData.uid,avatar_b64:this.imgFile}),{headers:{"A-Token-Header":this.token}}).then(function(a){t.loading=!1;var e=a.data;e.success?t.getProfile():"403"==e.code||"250"==e.code?t.goto("/"):t.initMSG(e.codemsg)}).catch(function(t){})},onFileChange:function(t){var a,e,i=window.URL||window.webkitURL,o=t.target.files||t.dataTransfer.files,n=(Number(t.target.dataset.type),"");if(o&&o.length)if(a=o[0],n=/^image\/\w+$/,e=i.createObjectURL(a),this.headImg=e,n.test(a.type)){new FormData;this.imgFile=a,this.modifyImg()}else this.initMsg("请选择图片")},popSet:function(){(0,d.setupWebViewJavascriptBridge)(function(t){t.callHandler("push",function(t){})})},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},closeDialog:function(t){this[t]=!1},goto:function(t){this.$router.push(t)}})}},579:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".wrap[data-v-16df844e]{background:#ebebeb}.header[data-v-16df844e]{background:#fff;background-size:100%;padding:0 0 .666667rem;position:relative}.header .icon-fanhui[data-v-16df844e]{position:absolute;left:.4rem}.header dl[data-v-16df844e]{padding:.666667rem .4rem 0}.header dl img[data-v-16df844e]{width:2.8rem}.header dl p.img[data-v-16df844e]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-16df844e]{width:2.8rem;height:2.8rem}.header dl span[data-v-16df844e]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header input[data-v-16df844e]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;opacity:0}.my-set[data-v-16df844e]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-16df844e]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-16df844e]{padding:0 .4rem}.my-set ul li dl[data-v-16df844e]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-16df844e]{width:.933333rem}.my-set ul li dd[data-v-16df844e]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-16df844e]{color:#7f7f7f}.my-set ul li:last-child dl[data-v-16df844e]{border-bottom:none}.my-set ul li[data-v-16df844e]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-16df844e]{opacity:0}.my-set ul li dd i[data-v-16df844e]{color:#b5b5b5;margin-left:.133333rem}.header span[data-v-16df844e],.my-set ul li a[data-v-16df844e]{display:block}.my-set ul.header li[data-v-16df844e]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-16df844e]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-16df844e]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},611:function(t,a,e){var i=e(579);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("0e781789",i,!0,{})},646:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[t.isWechat?t._e():e("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),e("div",[e("div",{staticClass:"header posiR whiteCR"},[t.isWechat?e("i",{staticClass:"iconfont icon-fanhui f36",on:{click:function(a){a.preventDefault(),t.goto("/my")}}}):t._e(),e("dl",{staticClass:"tC"},[e("dt",[e("p",{staticClass:"img"},[e("img",{attrs:{src:t.headImg,alt:"",onerror:t.defaultHead}}),t.isWechat?t._e():e("input",{staticClass:"modifyImg",attrs:{type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",unselectable:"on"},on:{change:t.onFileChange}})])])])])]),e("div",{staticClass:"my-set"},[e("ul",[e("router-link",{attrs:{tag:"li",to:"/my/nick"}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("昵称：")]),e("dd",{staticClass:"tR"},[t._v("\n              "+t._s(t.profile.nick)+" "),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("router-link",{attrs:{tag:"li",to:"/my/nick"}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("个性签名：")]),e("dd",{staticClass:"tR"},[t._v("\n              "+t._s(t.profile.signature?t.profile.signature:"")+" "),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("router-link",{attrs:{tag:"li",to:"/my/sex"}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("性别：")]),e("dd",{staticClass:"tR"},[t._v("\n              "+t._s(t.profile.sex)+" "),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("li",[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("出生日期：")]),e("dd",{staticClass:"tR"},[t._v("\n               "+t._s(t.profile.birthday?t.profile.birthday:"")),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),t.isWechat?t._e():e("li",{on:{click:function(a){a.preventDefault(),t.popSet(a)}}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("地区：")]),e("dd",{staticClass:"tR"},[t._v("\n               "+t._s(t.profile.country+" "+t.profile.province+" "+t.profile.city)),e("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),e("ul",[e("router-link",{attrs:{tag:"li",to:"/my/nick"}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("手机号：")]),e("dd",{staticClass:"tR"},[t._v("\n              "+t._s(t.profile.acc?t.profile.acc:"")+" "),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("router-link",{attrs:{tag:"li",to:"/my/sex"}},[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("微信号：")]),e("dd",{staticClass:"tR"},[t._v("\n              "+t._s(t.profile.weixin)+" "),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("li",[e("dl",{staticClass:"flexBox"},[e("dd",{staticClass:"flex1"},[t._v("QQ号：")]),e("dd",{staticClass:"tR"},[t._v("\n               "+t._s(t.profile.version)),e("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("modal-dialog",{attrs:{dialogshow2:t.iquit},on:{"update:dialogshow2":function(a){t.iquit=a},hide:function(a){t.closeDialog("iquit")}}},[e("div",{staticClass:"dialog-header",attrs:{slot:"dialog-header"},slot:"dialog-header"},[t._v("\n          是否离开红多多? \n        ")]),e("dl",{staticClass:"dialog-footer",attrs:{slot:"dialog-footer"},slot:"dialog-footer"},[e("dd",{on:{touchend:function(a){a.preventDefault(),t.goto("/app/login?quit=true")}}},[e("button",{attrs:{type:"button"}},[t._v("确定")])])])])],1)],1)},staticRenderFns:[]}}});