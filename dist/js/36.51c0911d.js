webpackJsonp([36],{1099:function(t,a,i){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=i(84),n=e(o),d=i(189),r=i(527),l=e(r),s=i(535),c=e(s),f=i(127),m=i(128),g=e(m),p=i(190),u=e(p);a.default={components:{modalDialog:c.default,loading:l.default},data:function(){var t;return t={header:{name:"登录",link:"/my"},login:!1,register:!1,wawaIos:!1,loginFail:!1,regFail:!1,clickCaptcha:!1,loading:!1,loadError:"",isWeb:!1,isApp:!1,protocol:!1,findPWD:!1,resetOK:!1,iosHideWechat:!1,leftTime:60,regSubpwd:"",thirdLogin:!1,thirdInviter:"",paraData:{acc:"",pwd:""},errorMsg:"",statusBar:{},bottomBarH:{},isSlot:"footer",service:!1,setFlag:!1,profileData:{country:"",nick:"",uid:""},avatar:""},t.bottomBarH={},t.imgSrc="",t.hint="",t.clickImg=!1,t.blackName=!1,t.iAgree=!0,t.allTouchs="",t.touchs=[],t.timer="",t.firstWechatLogin=!1,t},computed:(0,n.default)({},(0,f.mapState)(["UID","TOKEN","STATUSBARH","BOTTOMBARH"])),mounted:function(){this.removeStorage(),document.body.addEventListener("touchstart",function(){}),dplus.track("登录页",{from:d.html.useragent()})},methods:(0,n.default)({},(0,f.mapActions)(["switchState","clearState"]),{quitApp:function(){this.isApp&&setupWebViewJavascriptBridge(function(t){t.callHandler("quit")})},removeStorage:function(){this.clearState("UID")},buildSocket:function(t,a,i){sockMessage({uid:t,token:a,nick:i}),this.isWsconnect=!0},mobileLogin:function(){this.login=!0,this.isSlot=null},getCaptcha:function(t){var a=this;g.default.post("/bonus_api/v1/user/captcha/fetch_captcha",u.default.stringify({acc:this.paraData.acc,act:this.firstWechatLogin?"U":"R"})).then(function(t){var i=t.data;i.success?(a.clickCaptcha=!0,a.leftTime=60,a.timer=setInterval(function(){a.leftTime=a.leftTime-1,a.leftTime<=0&&(a.clickCaptcha=!1,clearInterval(a.timer),a.leftTime=0)},1e3)):"203"==i.code?a.blackName=!0:a.initMsg(i.codemsg)}).catch(function(t){a.initMsg("呃哦，网络异常，再试一次~")})},loginFunc:function(){var t=this;if(!this.iAgree)return void this.initMsg("请先同意《红多多服务条款》及《隐私政策协议》");document.activeElement.blur(),this.mobileLoginClick||(this.mobileLoginClick=!0,setTimeout(function(){return t.mobileLoginClick=!1},2e3),this.loading=!0,g.default.post("/bonus_api/v1/sessions/login_traditional",u.default.stringify(this.paraData)).then(function(a){var i=a.data;i.success?(t.switchState({TOKEN:a.headers["a-token-header"],UID:i.result.usr.id}),t.$router.push("/admin/list"),t.loading=!1):t.initMsg(i.codemsg)}).catch(function(a){t.loading=!1,t.initMsg("呃哦，网络异常，再试一次~")}))},initMsg:function(t){var a=this;this.loading=!0,this.loadError=t,setTimeout(function(){a.loading=!1,a.loadError=""},2e3)},focusInput:function(t){var a=this;(d.html.isWawaAndroid()||d.html.isWebAndroid())&&setTimeout(function(){a.$refs[t].scrollIntoView(!0),a.$refs[t].scrollIntoViewIfNeeded()},200)},closeDialog:function(t){this[t]=!1},openDiaog:function(){this.protocol=!0},checkChar:function(t){for(var a=0,i=t.length,e=0;e<i;e++)a=t.charCodeAt(e)<=256?a+1:a+2;return a},guestTo:function(){this.$router.push("/index?isguest=true")}}),beforeDestroy:function(){clearInterval(this.timer)}}},1153:function(t,a,i){a=t.exports=i(479)(!1),a.push([t.i,".wrap[data-v-3051ac41]{background-size:100%}.loginAll[data-v-3051ac41]{background-size:3.386667rem}.login[data-v-3051ac41]{padding-top:5.333333rem},.login i[data-v-3051ac41]{width:1.626667rem;height:1.626667rem;display:inline-block}.iconMobile[data-v-3051ac41]:active{background-position:-2.013333rem -1.8rem}.login ul[data-v-3051ac41]{width:6.733333rem;margin:0 auto}.login li[data-v-3051ac41]{display:inline-block;width:3.333333rem;text-align:center}.mobileLogin[data-v-3051ac41]{padding-top:4.533333rem;position:relative;padding-bottom:.666667rem}.mobileLogin i.icon-arrowl[data-v-3051ac41]{position:absolute;left:.533333rem;top:1.333333rem}.mobileLogin h3[data-v-3051ac41]{color:#dedee6}.mobileLogin .btnDiv[data-v-3051ac41]{display:-ms-flexbox;display:flex;width:75%;margin:0 auto .266667rem;padding-top:.266667rem}.mobileLogin .btnDiv span[data-v-3051ac41]{display:block;width:.2rem}.mobileLogin .btnDiv p[data-v-3051ac41]{-ms-flex:1;flex:1;width:0;border-radius:.6rem;height:1.133333rem;line-height:1.133333rem;box-shadow:0 0 .426667rem rgba(198,85,90,.4);background:hsla(0,0%,100%,.2);text-align:center;color:#fff;font-size:.4rem}.mobileLogin p[data-v-3051ac41]:active{background:hsla(0,0%,100%,.4)}.mobileLogin p.wechat[data-v-3051ac41]{background-size:.8rem}.mobileLogin .appLogin.wechat[data-v-3051ac41]{text-align:center;padding-left:.666667rem;background-position:2.666667rem -.933333rem}.mobileLogin dl[data-v-3051ac41]{border-radius:.6rem;height:1.133333rem;width:75%;margin:0 auto .266667rem;display:-ms-flexbox;display:flex;background:hsla(0,0%,100%,.2);box-shadow:0 0 .426667rem rgba(198,85,90,.4);-ms-flex-align:center;align-items:center;color:#fff}.mobileLogin dl dt.special[data-v-3051ac41]{min-width:1.466667rem;text-align:left;margin-left:.266667rem}.mobileLogin dl dd[data-v-3051ac41]{padding-left:.266667rem}.mobileLogin dl dd.special[data-v-3051ac41]{width:1.066667rem;border-right:1px solid #f1c7c9;text-align:center}.mobileLogin dl dd.special i.icon-shouji1[data-v-3051ac41]{position:relative;top:-.04rem}.mobileLogin dl dd b[data-v-3051ac41]{position:absolute;top:-.533333rem;left:0;right:0;bottom:0;border-radius:.066667rem;width:75%;margin:0 auto}.mobileLogin dl dt[data-v-3051ac41]{width:2.4rem;line-height:1.133333rem;text-align:center;border-left:.026667rem solid #d7696e}.mobileLogin dd div[data-v-3051ac41]{line-height:.533333rem;border-top:none;border-right:none;border-bottom:none;display:block}.mobileLogin dd input[data-v-3051ac41]{border:none;display:block;width:80%;color:#fff}.mobileLogin dd input[data-v-3051ac41]::-webkit-input-placeholder{color:#fff}.mobileLogin h5[data-v-3051ac41]{width:75%;margin:0 auto .2rem}.mobileLogin h5 span[data-v-3051ac41]{padding:.133333rem 0;color:#dedee6}.mobileLogin h5 span.fr[data-v-3051ac41]{position:relative;top:-.133333rem}.mobileLogin h6 i[data-v-3051ac41]{color:#e99698;box-shadow:0 0 .426667rem rgba(198,85,90,.4)}.mobileLogin h6 i.icon-fuxuankuang[data-v-3051ac41]{color:#d14c57}.protocol[data-v-3051ac41]{font-size:.32rem;line-height:.613333rem;max-height:9.333333rem;overflow-y:auto;padding:.133333rem 0 0;-webkit-overflow-scrolling:touch}.mobileReg .clickImg img[data-v-3051ac41]{width:100%}.otherLogin[data-v-3051ac41]{margin:.8rem auto;text-align:center}.otherLogin i[data-v-3051ac41]{font-size:.746667rem}",""])},1195:function(t,a,i){var e=i(1153);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(480)("33ae0872",e,!0,{})},1266:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Layout",[i("div",{staticClass:"loginAll"},[i("div",{staticClass:"mobileLogin whiteCR"},[i("div",{ref:"offTop",staticClass:"posiR"},[i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"special"},[i("i",{staticClass:"iconfont icon-shouji1 f40"})]),i("dd",{staticClass:"flex1"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paraData.acc,expression:"paraData.acc"}],ref:"loginTel",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.paraData.acc},on:{focus:function(a){t.focusInput("loginTel")},input:function(a){a.target.composing||t.$set(t.paraData,"acc",a.target.value)}}})])])]),i("dl",{staticClass:"flexBox"},[i("dd",{staticClass:"special"},[i("i",{staticClass:"iconfont icon-yanzhengma f36"})]),i("dd",{staticClass:"posiR flex1"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paraData.pwd,expression:"paraData.pwd"}],ref:"regCapt",attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.paraData.pwd},on:{focus:function(a){t.focusInput("regCapt")},input:function(a){a.target.composing||t.$set(t.paraData,"pwd",a.target.value)}}})])])]),i("h5",{staticClass:"redCR errors"},[t._v("\n          "+t._s(t.errorMsg)+"\n        ")]),i("div",{ref:"offWidth",staticClass:"btnDiv"},[i("p",{on:{click:function(a){return a.preventDefault(),t.loginFunc(a)}}},[t._v("快速登陆 / 注册")])])])])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("loading",{attrs:{loading:t.loading,loadError:t.loadError}})],1)])},staticRenderFns:[]}},488:function(t,a,i){function e(t){i(1195)}var o=i(126)(i(1099),i(1266),e,"data-v-3051ac41",null);t.exports=o.exports},524:function(t,a,i){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(t,a,i){a=t.exports=i(479)(!1),a.push([t.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(t,a,i){var e=i(525);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(480)("c38d91e8",e,!0,{})},527:function(t,a,i){function e(t){i(526)}var o=i(126)(i(524),i(528),e,"data-v-4c82f682",null);t.exports=o.exports},528:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(a){return a.preventDefault(),t.closeLoading(a)}}},[i("dl",[t.loadError?i("dd",[t._v(t._s(t.loadError))]):i("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},535:function(t,a,i){function e(t){i(540)}var o=i(126)(i(538),i(541),e,"data-v-64c058d6",null);t.exports=o.exports},538:function(t,a,i){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},539:function(t,a,i){a=t.exports=i(479)(!1),a.push([t.i,'.footerP[data-v-64c058d6]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-64c058d6]{display:none}.dialogMask[data-v-64c058d6]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-64c058d6]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-64c058d6]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-64c058d6]{visibility:visible}.dialog-active .dialog-content[data-v-64c058d6]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-64c058d6]{opacity:1;visibility:visible}.dialog-content[data-v-64c058d6]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-64c058d6]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-64c058d6]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-64c058d6]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-64c058d6]{padding:2em}.dialog-body .error[data-v-64c058d6]{font-size:1.2em;color:salmon}.dialog-footer[data-v-64c058d6]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-64c058d6]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-64c058d6]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-64c058d6]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-64c058d6]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-64c058d6]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-64c058d6]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-64c058d6]{font-size:.533333rem}.rotate[data-v-64c058d6]{cursor:pointer}.rotate[data-v-64c058d6]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-64c058d6]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-64c058d6]{display:none}.borNone[data-v-64c058d6]{border:none!important}.dialog-active[close=false] .close[data-v-64c058d6]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-64c058d6]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-64c058d6]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-64c058d6]{display:none}@keyframes slideInDown-data-v-64c058d6{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-64c058d6]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-64c058d6}@keyframes bounceIn-data-v-64c058d6{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},540:function(t,a,i){var e=i(539);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(480)("673640fb",e,!0,{})},541:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:t.isActive}]},[i("div",{staticClass:"diaplg-border"},[t.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(a){return a.preventDefault(),t.close(a)}}},[i("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?i("div",{staticClass:"dialogMask",on:{click:function(a){return a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}}});