webpackJsonp([36],{1134:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var n=e(84),o=i(n),d=e(190),r=e(533),l=i(r),s=e(527),c=i(s),f=e(127),p=e(128),h=i(p),u=e(191),m=i(u);a.default={components:{myhead:l.default,loading:c.default},data:function(){var t;return t={header:{name:"修改昵称",link:"/my/profile"},profile:{usr:{}},loading:!1},t.profile={},t.loadError="",t.myNick="",t.paraData={uid:7,nick:""},t.token="",t.isIosWechat=!1,t},computed:(0,o.default)({},(0,f.mapState)(["UID","TOKEN","PROFILE"])),created:function(){d.html.isWechat()&&(this.header.opacity=!0),d.html.isIosWechat()&&(this.isIosWechat=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.paraData.nick=this.profile.nick),dplus.track("修改昵称",{from:d.html.useragent()})},methods:(0,o.default)({},(0,f.mapActions)(["switchState","clearState"]),{checkChar:function(t){for(var a=0,e=t.length,i=0;i<e;i++)a=t.charCodeAt(i)<=256?a+1:a+2;return a},modifyNick:function(){var t=this;return this.checkChar(this.paraData.nick)>16||this.checkChar(this.paraData.nick)<1?void this.initMSG("昵称长度1-16位"):this.profile.nick==this.paraData.nick?void this.initMSG("与原昵称相同"):(this.loading=!0,void h.default.post("/seller_api/v1/user/upd_profile",m.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(a){t.loading=!1;var e=a.data;e.success?(t.profile.nick=t.paraData.nick,t.switchState({PROFILE:t.profile}),t.$router.push("/my/profile")):"403"==e.code||"250"==e.code?t.goto("/"):t.initMSG(e.codemsg)}).catch(function(t){}))},goto:function(t){this.$router.push(t)},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},closeDialog:function(t){this[t]=!0},clearNick:function(){this.paraData.nick=""}})}},1167:function(t,a,e){a=t.exports=e(478)(!1),a.push([t.i,".my-set ul[data-v-1d7e6278]{padding:0 .4rem;color:#7b7b7b}.my-set ul li[data-v-1d7e6278]{padding-right:1.066667rem;border-bottom:1px solid #dcdcdd}.my-set ul li input[data-v-1d7e6278]{width:100%;padding:.44rem 0;display:inline-block}.my-set ul li img[data-v-1d7e6278]{width:.933333rem;height:.933333rem;border-radius:.666667rem;border:1px solid #dcdcdd;vertical-align:middle;margin-right:.133333rem;position:relative;top:-.026667rem}.my-set a[data-v-1d7e6278]{margin:0 .4rem;height:1.066667rem;line-height:1.066667rem;display:block;text-align:center}.my-set>p[data-v-1d7e6278]{padding:.453333rem 0 1.533333rem .4rem;font-size:.293333rem}.icon-close[data-v-1d7e6278]{width:.533333rem;height:.533333rem;background-position:-1.36rem 0;position:absolute;right:.4rem;top:.4rem}.my-set dl[data-v-1d7e6278]{width:100%;padding:.4rem}.my-set dl p[data-v-1d7e6278]{width:90%}.my-set dl dt p[data-v-1d7e6278]{background:#fff;border:.013333rem solid #51aa38!important}.my-set dl dt p[data-v-1d7e6278]:active{background:#b9ddaf}",""])},1211:function(t,a,e){var i=e(1167);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("4c9d695b",i,!0,{})},1279:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"my-set f30"},[e("ul",[e("li",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paraData.nick,expression:"paraData.nick"}],ref:"myNick",attrs:{type:"text"},domProps:{value:t.paraData.nick},on:{input:function(a){a.target.composing||t.$set(t.paraData,"nick",a.target.value)}}}),e("i",{staticClass:"iconfont icon-close f40",on:{touchend:function(a){return a.preventDefault(),t.clearNick(a)}}})])]),e("p",{staticClass:"grayCR"},[t._v("昵称长度1-16位,一个汉字为两个字符")]),e("dl",{staticClass:"flexBox1"},[e("dt",{staticClass:"f21 grayCR"},[e("p",{staticClass:"btn btn-green greenCR",on:{click:function(a){a.preventDefault(),t.goto(t.header.link)}}},[t._v("取消")])]),e("dd",[e("p",{staticClass:"btn btn-green",on:{click:function(a){return a.preventDefault(),t.modifyNick(a)}}},[t._v("确定")])])])]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("loading",{attrs:{loading:t.loading,loadError:t.loadError},on:{closePop:function(a){t.closeDialog("loading")}}})],1)])},staticRenderFns:[]}},495:function(t,a,e){function i(t){e(1211)}var n=e(126)(e(1134),e(1279),i,"data-v-1d7e6278",null);t.exports=n.exports},524:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(t,a,e){a=t.exports=e(478)(!1),a.push([t.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(t,a,e){var i=e(525);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("c38d91e8",i,!0,{})},527:function(t,a,e){function i(t){e(526)}var n=e(126)(e(524),e(528),i,"data-v-4c82f682",null);t.exports=n.exports},528:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){return a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},530:function(t,a,e){"use strict";a.__esModule=!0;var i=e(84),n=function(t){return t&&t.__esModule?t:{default:t}}(i),o=e(190),d=e(127);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,n.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},531:function(t,a,e){a=t.exports=e(478)(!1),a.push([t.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},532:function(t,a,e){var i=e(531);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("21d3127e",i,!0,{})},533:function(t,a,e){function i(t){e(532)}var n=e(126)(e(530),e(534),i,"data-v-d3e6e34c",null);t.exports=n.exports},534:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){return a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});