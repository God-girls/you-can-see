webpackJsonp([29],{1036:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=i(81),n=a(o),l=i(184),d=i(514),r=a(d),s=i(529),c=a(s),f=i(123),m=i(124),b=a(m),g=i(185),p=a(g);e.default={components:{modalDialog:c.default,loading:r.default},data:function(){var t;return t={header:{name:"登录",link:"/my"},login:!1,register:!1,wawaIos:!1,loginFail:!1,regFail:!1,clickCaptcha:!1,loading:!1,loadError:"",isWeb:!1,isApp:!1,protocol:!1,findPWD:!1,resetOK:!1,iosHideWechat:!1,leftTime:60,regSubpwd:"",thirdLogin:!1,thirdInviter:"",paraData:{acc:"",pwd:""},errorMsg:"",statusBar:{},bottomBarH:{},isSlot:"footer",service:!1,setFlag:!1,profileData:{country:"",nick:"",uid:""},avatar:""},t.bottomBarH={},t.imgSrc="",t.hint="",t.clickImg=!1,t.blackName=!1,t.iAgree=!0,t.allTouchs="",t.touchs=[],t.timer="",t.firstWechatLogin=!1,t},computed:(0,n.default)({},(0,f.mapState)(["UID","TOKEN","STATUSBARH","BOTTOMBARH"])),mounted:function(){this.removeStorage(),document.body.addEventListener("touchstart",function(){}),dplus.track("登录页",{from:l.html.useragent()})},methods:(0,n.default)({},(0,f.mapActions)(["switchState","clearState"]),{quitApp:function(){this.isApp&&setupWebViewJavascriptBridge(function(t){t.callHandler("quit")})},removeStorage:function(){this.clearState("UID")},buildSocket:function(t,e,i){sockMessage({uid:t,token:e,nick:i}),this.isWsconnect=!0},mobileLogin:function(){this.login=!0,this.isSlot=null},getCaptcha:function(t){var e=this;b.default.post("/bonus_api/v1/user/captcha/fetch_captcha",p.default.stringify({acc:this.paraData.acc,act:this.firstWechatLogin?"U":"R"})).then(function(t){var i=t.data;i.success?(e.clickCaptcha=!0,e.leftTime=60,e.timer=setInterval(function(){e.leftTime=e.leftTime-1,e.leftTime<=0&&(e.clickCaptcha=!1,clearInterval(e.timer),e.leftTime=0)},1e3)):"203"==i.code?e.blackName=!0:e.initMsg(i.codemsg)}).catch(function(t){e.initMsg("呃哦，网络异常，再试一次~")})},loginFunc:function(){var t=this;if(!this.iAgree)return void this.initMsg("请先同意《红多多服务条款》及《隐私政策协议》");document.activeElement.blur(),this.mobileLoginClick||(this.mobileLoginClick=!0,setTimeout(function(){return t.mobileLoginClick=!1},2e3),this.loading=!0,b.default.post("/bonus_api/v1/sessions/login_traditional",p.default.stringify(this.paraData)).then(function(e){var i=e.data;i.success?(t.switchState({TOKEN:e.headers["a-token-header"],UID:i.result.usr.id}),t.$router.push("/admin/list"),t.loading=!1):t.initMsg(i.codemsg)}).catch(function(e){t.loading=!1,t.initMsg("呃哦，网络异常，再试一次~")}))},initMsg:function(t){var e=this;this.loading=!0,this.loadError=t,setTimeout(function(){e.loading=!1,e.loadError=""},2e3)},focusInput:function(t){var e=this;(l.html.isWawaAndroid()||l.html.isWebAndroid())&&setTimeout(function(){e.$refs[t].scrollIntoView(!0),e.$refs[t].scrollIntoViewIfNeeded()},200)},closeDialog:function(t){this[t]=!1},openDiaog:function(){this.protocol=!0},checkChar:function(t){for(var e=0,i=t.length,a=0;a<i;a++)e=t.charCodeAt(a)<=256?e+1:e+2;return e},guestTo:function(){this.$router.push("/index?isguest=true")}}),beforeDestroy:function(){clearInterval(this.timer)}}},1061:function(t,e,i){e=t.exports=i(471)(!1),e.push([t.i,".wrap[data-v-00f85e04]{background-size:100%}.loginAll[data-v-00f85e04]{background-size:3.386667rem}.login[data-v-00f85e04]{padding-top:5.333333rem},.login i[data-v-00f85e04]{width:1.626667rem;height:1.626667rem;display:inline-block}.iconMobile[data-v-00f85e04]:active{background-position:-2.013333rem -1.8rem}.login ul[data-v-00f85e04]{width:6.733333rem;margin:0 auto}.login li[data-v-00f85e04]{display:inline-block;width:3.333333rem;text-align:center}.mobileLogin[data-v-00f85e04]{padding-top:4.533333rem;position:relative;padding-bottom:.666667rem}.mobileLogin i.icon-arrowl[data-v-00f85e04]{position:absolute;left:.533333rem;top:1.333333rem}.mobileLogin h3[data-v-00f85e04]{color:#dedee6}.mobileLogin .btnDiv[data-v-00f85e04]{display:-ms-flexbox;display:flex;width:75%;margin:0 auto .266667rem;padding-top:.266667rem}.mobileLogin .btnDiv span[data-v-00f85e04]{display:block;width:.2rem}.mobileLogin .btnDiv p[data-v-00f85e04]{-ms-flex:1;flex:1;width:0;border-radius:.6rem;height:1.133333rem;line-height:1.133333rem;box-shadow:0 0 .426667rem rgba(198,85,90,.4);background:hsla(0,0%,100%,.2);text-align:center;color:#fff;font-size:.4rem}.mobileLogin p[data-v-00f85e04]:active{background:hsla(0,0%,100%,.4)}.mobileLogin p.wechat[data-v-00f85e04]{background-size:.8rem}.mobileLogin .appLogin.wechat[data-v-00f85e04]{text-align:center;padding-left:.666667rem;background-position:2.666667rem -.933333rem}.mobileLogin dl[data-v-00f85e04]{border-radius:.6rem;height:1.133333rem;width:75%;margin:0 auto .266667rem;display:-ms-flexbox;display:flex;background:hsla(0,0%,100%,.2);box-shadow:0 0 .426667rem rgba(198,85,90,.4);-ms-flex-align:center;align-items:center;color:#fff}.mobileLogin dl dt.special[data-v-00f85e04]{min-width:1.466667rem;text-align:left;margin-left:.266667rem}.mobileLogin dl dd[data-v-00f85e04]{padding-left:.266667rem}.mobileLogin dl dd.special[data-v-00f85e04]{width:1.066667rem;border-right:1px solid #f1c7c9;text-align:center}.mobileLogin dl dd.special i.icon-shouji1[data-v-00f85e04]{position:relative;top:-.04rem}.mobileLogin dl dd b[data-v-00f85e04]{position:absolute;top:-.533333rem;left:0;right:0;bottom:0;border-radius:.066667rem;width:75%;margin:0 auto}.mobileLogin dl dt[data-v-00f85e04]{width:2.4rem;line-height:1.133333rem;text-align:center;border-left:.026667rem solid #d7696e}.mobileLogin dd div[data-v-00f85e04]{line-height:.533333rem;border-top:none;border-right:none;border-bottom:none;display:block}.mobileLogin dd input[data-v-00f85e04]{border:none;display:block;width:80%;color:#fff}.mobileLogin dd input[data-v-00f85e04]::-webkit-input-placeholder{color:#fff}.mobileLogin h5[data-v-00f85e04]{width:75%;margin:0 auto .2rem}.mobileLogin h5 span[data-v-00f85e04]{padding:.133333rem 0;color:#dedee6}.mobileLogin h5 span.fr[data-v-00f85e04]{position:relative;top:-.133333rem}.mobileLogin h6 i[data-v-00f85e04]{color:#e99698;box-shadow:0 0 .426667rem rgba(198,85,90,.4)}.mobileLogin h6 i.icon-fuxuankuang[data-v-00f85e04]{color:#d14c57}.protocol[data-v-00f85e04]{font-size:.32rem;line-height:.613333rem;max-height:9.333333rem;overflow-y:auto;padding:.133333rem 0 0;-webkit-overflow-scrolling:touch}.mobileReg .clickImg img[data-v-00f85e04]{width:100%}.otherLogin[data-v-00f85e04]{margin:.8rem auto;text-align:center}.otherLogin i[data-v-00f85e04]{font-size:.746667rem}",""])},1093:function(t,e,i){var a=i(1061);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(472)("b7519b00",a,!0,{})},1134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"loginAll"},[i("div",{staticClass:"mobileLogin whiteCR"},[i("div",{ref:"offTop",staticClass:"posiR"},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"special"},[i("i",{staticClass:"iconfont icon-shouji1 f40"})]),i("dd",{staticClass:"flex1"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paraData.acc,expression:"paraData.acc"}],ref:"loginTel",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.paraData.acc},on:{focus:function(e){t.focusInput("loginTel")},input:function(e){e.target.composing||t.$set(t.paraData,"acc",e.target.value)}}})])])]),i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"special"},[i("i",{staticClass:"iconfont icon-yanzhengma f36"})]),i("dd",{staticClass:"posiR flex1"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paraData.pwd,expression:"paraData.pwd"}],ref:"regCapt",attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.paraData.pwd},on:{focus:function(e){t.focusInput("regCapt")},input:function(e){e.target.composing||t.$set(t.paraData,"pwd",e.target.value)}}})])])]),i("h5",{staticClass:"redCR errors"},[t._v("\n          "+t._s(t.errorMsg)+"\n        ")]),i("div",{ref:"offWidth",staticClass:"btnDiv"},[i("p",{on:{click:function(e){e.preventDefault(),t.loginFunc(e)}}},[t._v("快速登陆 / 注册")])])])])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("loading",{attrs:{loading:t.loading,loadError:t.loadError}})],1)])},staticRenderFns:[]}},480:function(t,e,i){function a(t){i(1093)}var o=i(122)(i(1036),i(1134),a,"data-v-00f85e04",null);t.exports=o.exports},510:function(t,e,i){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},511:function(t,e,i){e=t.exports=i(471)(!1),e.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},513:function(t,e,i){var a=i(511);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(472)("ae8afd90",a,!0,{})},514:function(t,e,i){function a(t){i(513)}var o=i(122)(i(510),i(515),a,"data-v-b60b2388",null);t.exports=o.exports},515:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(e){e.preventDefault(),t.closeLoading(e)}}},[i("dl",[t.loadError?i("dd",[t._v(t._s(t.loadError))]):i("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},525:function(t,e,i){"use strict";e.__esModule=!0,e.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},526:function(t,e,i){e=t.exports=i(471)(!1),e.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},528:function(t,e,i){var a=i(526);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(472)("425b9258",a,!0,{})},529:function(t,e,i){function a(t){i(528)}var o=i(122)(i(525),i(530),a,"data-v-369b7310",null);t.exports=o.exports},530:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:t.isActive}]},[i("div",{staticClass:"diaplg-border"},[t.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(e){e.preventDefault(),t.close(e)}}},[i("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?i("div",{staticClass:"dialogMask",on:{click:function(e){e.preventDefault(),t.closeDefault(e)}}}):t._e()]):t._e()},staticRenderFns:[]}}});