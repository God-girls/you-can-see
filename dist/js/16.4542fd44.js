webpackJsonp([16],{502:function(a,t,e){function i(a){e(629)}var o=e(122)(e(574),e(664),i,"data-v-9c72a820",null);a.exports=o.exports},503:function(a,t,e){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},504:function(a,t,e){t=a.exports=e(471)(!1),t.push([a.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},505:function(a,t,e){var i=e(504);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(472)("ae8afd90",i,!0,{})},506:function(a,t,e){function i(a){e(505)}var o=e(122)(e(503),e(507),i,"data-v-b60b2388",null);a.exports=o.exports},507:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(t){t.preventDefault(),a.closeLoading(t)}}},[e("dl",[a.loadError?e("dd",[a._v(a._s(a.loadError))]):e("dt",[a._m(0)])])])]):a._e()},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},508:function(a,t,e){"use strict";t.__esModule=!0;var i=e(81),o=function(a){return a&&a.__esModule?a:{default:a}}(i),n=e(184),d=e(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var a=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,e){a.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},509:function(a,t,e){t=a.exports=e(471)(!1),t.push([a.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.333333rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;color:#39bbdc;padding:.106667rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},510:function(a,t,e){var i=e(509);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(472)("504d8d1d",i,!0,{})},511:function(a,t,e){function i(a){e(510)}var o=e(122)(e(508),e(512),i,"data-v-a5c1fd86",null);a.exports=o.exports},512:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:["my-header",{noBg:a.hval.isNobg}],style:a.isApp},[e("ul",[a.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),a.goback(t)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[a.hval.subname?e("a",{staticClass:"f24",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),a.goto(t)}}},[a.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[a._v(a._s(a.hval.subname))])]):a._e(),e("span",{class:{opacity0:a.hval.opacity}},[a.hval.digital?e("i",{staticClass:"digital iconD"}):a._e(),a._v(a._s(a.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},514:function(a,t,e){"use strict";t.__esModule=!0,t.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(a){this.noClickBg||this.$emit("hide")},close:function(a){this.$emit("hide")}}}},515:function(a,t,e){t=a.exports=e(471)(!1),t.push([a.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;color:#d66167;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{content:" ";border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},516:function(a,t,e){var i=e(515);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(472)("425b9258",i,!0,{})},517:function(a,t,e){function i(a){e(516)}var o=e(122)(e(514),e(518),i,"data-v-369b7310",null);a.exports=o.exports},518:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":a.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:a.isActive}]},[e("div",{staticClass:"diaplg-border"},[a.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(t){t.preventDefault(),a.close(t)}}},[e("span",{staticClass:"iconfont icon-close redCR"})]):a._e(),a._t("dialog-header"),a._t("dialog-body"),a._t("dialog-footer")],2)])]),a.isActive?e("div",{staticClass:"dialogMask",on:{click:function(t){t.preventDefault(),a.closeDefault(t)}}}):a._e()]):a._e()},staticRenderFns:[]}},574:function(a,t,e){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}t.__esModule=!0;var o=e(81),n=i(o),d=e(184),l=e(511),r=i(l),s=e(517),c=i(s),f=e(506),p=i(f),m=e(123),u=e(124),h=i(u),v=e(185),b=i(v);t.default={components:{myhead:r.default,modalDialog:c.default,loading:p.default},data:function(){return{header:{name:"提现",link:"/my/balance"},loading:!1,loadError:"",statusBarH:"",bottomBarH:"",changeAlipay:!1,clickCaptcha:!1,clickCaptcha2:!1,paraData:{paytype:"Alipay"},receiveAlipay:"",profile:{},leftTime:60,leftTime2:60,realAuth:!1,realData:{},newAlipay:"",newAlipay2:"",firstWithdraw:!1}},computed:(0,n.default)({},(0,m.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),created:function(){d.html.isWechat()&&(this.header.opacity=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,dplus.track("提现",{from:d.html.useragent()}))},methods:(0,n.default)({},(0,m.mapActions)(["switchState","clearState"]),{getStatusBar:function(){this.BOTTOMBARH&&(this.bottomBarH={"padding-bottom":this.BOTTOMBARH+"px"})},getCaptcha:function(a){var t=this;h.default.post("/bonus_api/v1/user/captcha/fetch_captcha",b.default.stringify({acc:this.profile.acc,act:a})).then(function(e){var i=e.data;i.success?("W"==a?(t.clickCaptcha=!0,t.leftTime=60):(t.clickCaptcha2=!0,t.leftTime2=60),clearInterval(t.timer),t.timer=setInterval(function(){"W"==a?(t.leftTime=t.leftTime-1,t.leftTime<=0&&(t.clickCaptcha=!1,clearInterval(t.timer),t.leftTime=0)):(t.leftTime2=t.leftTime2-1,t.leftTime2<=0&&(t.clickCaptcha2=!1,clearInterval(t.timer),t.leftTime2=0))},1e3)):t.initMSG(i.codemsg)}).catch(function(a){t.initMSG("呃哦，网络异常，再试一次~")})},withDraw:function(){var a=this;return this.loading=!0,!this.profile.balance||Number(this.paraData.amount)>Number(this.profile.balance)?void this.initMSG("账户余额不足"):!this.paraData.amount||Number(this.paraData.amount)<1?void this.initMSG("最少提现 1 元"):void h.default.post("/bonus_api/v1/bonus/withdraw_balance",b.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){var e=t.data;e.success?(a.initMSG("提现成功"),a.getProfile(),setTimeout(function(){a.goto("/my/balance")},2e3),a.clickCaptcha=!1,clearInterval(a.timer)):"403"==e.code||"250"==e.code?a.goto("/"):("344"!=e.code&&"340"!=e.code&&"343"!=e.code&&"341"!=e.code&&"342"!=e.code||(a.realAuth=!1),a.initMSG(e.codemsg))}).catch(function(t){a.loading=!1,a.initMSG("操作超时"),a.getProfile()})},getProfile:function(){var a=this;h.default.post("/bonus_api/v1/bonus/userinfo",b.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){var e=t.data;e.success?(a.profile=e.result,a.switchState({PROFILE:e.result})):"403"!=e.code&&"250"!=e.code||(a.needLogin=!0,a.noToken=!0)}).catch(function(a){})},goto:function(a){this.$router.push(a)},closeDialog:function(a){this[a]=!1},initMSG:function(a){var t=this;this.loading=!0,this.loadError=a,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)}}),beforeDestroy:function(){clearInterval(this.timer)}}},597:function(a,t,e){t=a.exports=e(471)(!1),t.push([a.i,".myAddress[data-v-9c72a820]{padding:.4rem 0;margin:0 .4rem;color:#7d7d7d;line-height:.64rem}.myDetail[data-v-9c72a820]{padding:.4rem 0;margin:0 .4rem;border-top:1px solid #e4e4e4;line-height:.64rem;color:#4e4e4e}.myDetail p[data-v-9c72a820]{padding-bottom:.266667rem}.myDetail dl[data-v-9c72a820]{padding-bottom:.4rem}.myDetail dl dd input[data-v-9c72a820]{display:inline-block;width:100%;height:.933333rem;line-height:.64rem;padding:.133333rem .2rem;border-radius:.133333rem;position:relative;border:1px solid #c9c9c9;color:#4e4e4e;background:#fff}.myDetail dl dd.special input[data-v-9c72a820]{padding-right:2.666667rem}.guestCON dl dd.special span[data-v-9c72a820],.myDetail dl dd.special span[data-v-9c72a820]{position:absolute;right:.266667rem;top:.106667rem;z-index:2}.guestCON dl dd.special span[data-v-9c72a820]{top:0}.footer dl[data-v-9c72a820]{width:100%;padding:.4rem}.footer dl dt[data-v-9c72a820]{padding-bottom:.266667rem}.footer dl p[data-v-9c72a820]{width:100%}.myFinish dl[data-v-9c72a820]{line-height:.64rem}.myFinish dl.dls dt[data-v-9c72a820]{width:48%}.myFinish dl.dls dd[data-v-9c72a820]{width:51%}.myFinish dl dt[data-v-9c72a820]{line-height:.64rem}.myFinish p[data-v-9c72a820]{padding:.533333rem 0}.guestCON .dls dt[data-v-9c72a820]{width:40%}.guestCON .dls dd[data-v-9c72a820]{width:59%}.guestCON p[data-v-9c72a820]{padding-top:.2rem}",""])},629:function(a,t,e){var i=e(597);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(472)("1985029c",i,!0,{})},664:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Layout",[e("myhead",{attrs:{slot:"header",hval:a.header},slot:"header"}),e("div",{staticClass:"myDetail "},[e("p",{staticClass:"grayCR tC"},[a._v("根据支付通道协议规定，提现需缴纳 2% 手续费。")]),e("dl",[e("dt",[e("span",{staticClass:"fr redCR"},[a._v("余额："+a._s(a.profile.balance?a.profile.balance:0)+" 元")]),a._v("\n        请输入提现金额\n      ")]),e("dd",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.amount,expression:"paraData.amount"}],attrs:{type:"number",placeholder:"最少提现 10 元",name:"",value:""},domProps:{value:a.paraData.amount},on:{input:function(t){t.target.composing||a.$set(a.paraData,"amount",t.target.value)}}})])]),e("dl",[e("dt",[a._v("请输入验证码（ 手机号："+a._s(this.profile.acc)+" ）")]),e("dd",{staticClass:"special posiR"},[a.clickCaptcha?e("span",{},[a._v(" "+a._s(a.leftTime)+" s")]):e("span",{on:{click:function(t){t.preventDefault(),a.getCaptcha("W")}}},[a._v("获取验证码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.captcha,expression:"paraData.captcha"}],attrs:{type:"number",name:"",value:""},domProps:{value:a.paraData.captcha},on:{input:function(t){t.target.composing||a.$set(a.paraData,"captcha",t.target.value)}}})])])]),e("div",{style:a.statusBarH,attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"footer tC f30"},[e("dl",[e("dt",{staticClass:"f21 grayCR"},[a._v("\n          审核通过后1-2个工作日到账\n        ")]),e("dd",[e("p",{staticClass:"btn btn-green",on:{click:function(t){t.preventDefault(),a.withDraw(t)}}},[a._v("确认")])])])]),e("loading",{attrs:{loading:a.loading,loadError:a.loadError},on:{closePop:function(t){a.closeDialog("loading")}}})],1)],1)},staticRenderFns:[]}}});