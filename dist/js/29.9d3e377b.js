webpackJsonp([29],{1152:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(84),n=i(o),d=e(527),r=i(d),l=e(634),s=i(l),c=e(190),u=e(127),f=e(128),m=(i(f),e(191));i(m);a.default={data:function(){return{show1:!0,header:{name:"发现",link:"/",isNobg:!0},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,begin_seconds:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"discovery",profile:{},isWechat:!1,paraData:{}}},components:{loading:r.default,myfooter:s.default},computed:(0,n.default)({},(0,u.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.PROFILE?this.profile=this.PROFILE:this.getProfile()),dplus.track("发现",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},goto:function(t){this.$router.push(t)},closeDialog:function(t){this[t]=!1}}}},1166:function(t,a,e){a=t.exports=e(478)(!1),a.push([t.i,".wrap[data-v-2004dda3]{background:#ebebeb}.my-set[data-v-2004dda3]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-2004dda3]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-2004dda3]{padding:0 0 0 .4rem}.my-set ul li dl[data-v-2004dda3]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-2004dda3]{width:.933333rem}.my-set ul li dd[data-v-2004dda3]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-2004dda3]{padding-right:.4rem;color:#7f7f7f}.my-set ul li:last-child dl[data-v-2004dda3]{border-bottom:none}.my-set ul li[data-v-2004dda3]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-2004dda3]{opacity:0}.my-set ul li dd i[data-v-2004dda3]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-2004dda3]{display:block}.icon-qianbao-[data-v-2004dda3]{color:#f16e34}.icon-tubiaozoushitu[data-v-2004dda3]{color:#588ae7}.icon-tubiao[data-v-2004dda3]{color:#e75858}.icon-erweima[data-v-2004dda3]{color:#80a073}.icon-fensishumian[data-v-2004dda3]{color:#df4d90;position:relative;left:-.066667rem}.header span[data-v-2004dda3]{display:block}.my-set ul.header li[data-v-2004dda3]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-2004dda3]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-2004dda3]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1209:function(t,a,e){var i=e(1166);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("17f207a0",i,!0,{})},1276:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"my-set"},[e("ul",[e("router-link",{attrs:{tag:"li",to:"/my/bonus"}},[e("dl",{staticClass:"flexBox"},[e("dt",[e("i",{staticClass:"iconfont icon-tubiaozoushitu f36"})]),e("dd",{staticClass:"flex1 f30"},[t._v("收入分析")]),e("dd",{staticClass:"tR"},[t._v("\n            "+t._s(t.profile.total_income?t.profile.total_income:"0.00")+" 元"),e("i",{staticClass:"iconfont icon-jiantou f24"})])])]),e("router-link",{attrs:{tag:"li",to:"/my/analysis"}},[e("dl",{staticClass:"flexBox"},[e("dt",[e("i",{staticClass:"iconfont icon-tubiao f30"})]),e("dd",{staticClass:"flex1 f30"},[t._v("商品分析")]),e("dd",{staticClass:"tR"},[t._v("\n             "+t._s(t.profile.total_count?t.profile.total_count:"0")+" 件"),e("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),e("ul",[e("router-link",{attrs:{tag:"li",to:"/my/fans"}},[e("dl",{staticClass:"flexBox"},[e("dt",[e("i",{staticClass:"iconfont icon-fensishumian f48"})]),e("dd",{staticClass:"flex1 f30"},[t._v("我的粉丝")]),e("dd",{staticClass:"tR"},[e("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("myfooter",{attrs:{current:t.navType}})],1)])},staticRenderFns:[]}},514:function(t,a,e){function i(t){e(1209)}var o=e(126)(e(1152),e(1276),i,"data-v-2004dda3",null);t.exports=o.exports},523:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},524:function(t,a,e){a=t.exports=e(478)(!1),a.push([t.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(t,a,e){var i=e(524);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("c38d91e8",i,!0,{})},527:function(t,a,e){function i(t){e(526)}var o=e(126)(e(523),e(528),i,"data-v-4c82f682",null);t.exports=o.exports},528:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){return a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},553:function(t,a,e){t.exports=e.p+"img/mai.e026c46.png"},616:function(t,a,e){"use strict";a.__esModule=!0;var i=e(84),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=e(190),d=e(127);a.default={props:{current:""},data:function(){return{showCircle:!0,isH5:!1,isIos:!1}},computed:(0,o.default)({},(0,d.mapState)(["SHOWFOOTER"]),{isApp:function(){if(n.html.isWawa())return localStorage.bottomBarH?JSON.parse(localStorage.bottomBarH):""}}),mounted:function(){this.showCircle=this.SHOWFOOTER},methods:(0,o.default)({},(0,d.mapActions)(["switchState","clearState"]),{goto:function(t){if(sessionStorage.isGuest)return void this.guestClick();"/wake"==t&&this.isIos?this.$router.push("/wake_study?type=daily"):this.$router.push(t)},changeShow:function(){this.showCircle=!this.showCircle,this.switchState({SHOWFOOTER:this.showCircle})},clickDown:function(){var t=this;this.canDown=!this.canDown,setTimeout(function(){t.canDown=!t.canDown},3e3)},guestClick:function(){this.$emit("guestPop")}})}},617:function(t,a,e){var i=e(480);a=t.exports=e(478)(!1),a.push([t.i,".my-footer[data-v-74da2a68]{width:100%;position:relative;z-index:3}.my-footer ul[data-v-74da2a68]{display:-ms-flexbox;display:flex;text-align:center;position:relative;background:#fafafa;z-index:2;-ms-flex-align:center;align-items:center;height:1.333333rem;border-top:1px solid #bcbcbc}.my-footer ul li[data-v-74da2a68]{padding-top:.106667rem;position:relative}.my-footer ul li.special[data-v-74da2a68]{-ms-flex:1;flex:1;width:0}.my-footer ul li p[data-v-74da2a68]{position:relative;top:-.08rem;color:#929292;font-size:.28rem}.my-footer ul li p.power[data-v-74da2a68]{top:-.106667rem}.my-footer ul li i.dot[data-v-74da2a68]{display:inline-block;width:.173333rem;height:.173333rem;border-radius:50%;background:#ff0500;position:absolute;top:.133333rem;right:23%}.myicon[data-v-74da2a68]{display:inline-block;background:url("+i(e(633))+") no-repeat;background-size:1.733333rem}.icon-home[data-v-74da2a68]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;background:url("+i(e(553))+") no-repeat;background-size:1.6rem;width:1.6rem;height:1.6rem;border-radius:50%;z-index:2}@keyframes change-data-v-74da2a68{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.my-footer ul li.current .icon-home[data-v-74da2a68]{background:url("+i(e(553))+") no-repeat;background-size:1.493333rem}.my-footer ul li.current[data-v-74da2a68]{transition:all .4s}.my-footer ul li.current p[data-v-74da2a68]{color:#51aa38}.my-footer ul li.homeLi[data-v-74da2a68]{width:1.76rem;padding:.933333rem 0 0}.my-footer ul li.homeLi span[data-v-74da2a68]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;display:inline-block;width:1.506667rem;height:1.506667rem;border-radius:50%;box-shadow:0 -.106667rem .186667rem hsla(60,1%,55%,.56);z-index:1}.icon-my[data-v-74da2a68]{background-position:0 -4.506667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-my[data-v-74da2a68]{background-position:-.973333rem -4.506667rem}.icon-task[data-v-74da2a68]{background-position:0 .053333rem;width:.626667rem;height:.8rem}.my-footer ul li.current .icon-task[data-v-74da2a68]{background-position:-.973333rem .053333rem}.icon-book[data-v-74da2a68]{background-position:0 -1.426667rem;width:.613333rem;height:.773333rem}.my-footer ul li.current .icon-book[data-v-74da2a68]{background-position:-.973333rem -1.426667rem}.icon-rank[data-v-74da2a68]{background-position:0 -3.106667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-rank[data-v-74da2a68]{background-position:-.973333rem -3.106667rem}.my-footer dl[data-v-74da2a68]{position:absolute;top:-1.973333rem;z-index:1;text-align:right;width:100%}.my-footer dl dd[data-v-74da2a68]{position:absolute;top:.466667rem;line-height:0;right:0}.my-footer dl dt img[data-v-74da2a68]{width:100%}.my-footer dl dd img[data-v-74da2a68]{width:1.253333rem;height:1.506667rem}.special[data-v-74da2a68]{width:100%;background:none;position:absolute;left:0;bottom:0}.special ul[data-v-74da2a68]{border-top:none;height:1.066667rem;background:none}.special .icon-home[data-v-74da2a68],.special ul li.homeLi span[data-v-74da2a68]{top:0}",""])},632:function(t,a,e){var i=e(617);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(479)("33261c90",i,!0,{})},633:function(t,a,e){t.exports=e.p+"img/icon-nav.fcb4617.png"},634:function(t,a,e){function i(t){e(632)}var o=e(126)(e(616),e(635),i,"data-v-74da2a68",null);t.exports=o.exports},635:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"posoR"},[e("div",{class:["animated my-footer",{fadeInUp:t.showCircle,dn:!t.showCircle}]},[e("ul",[e("li",{class:["special",{current:"task"==t.current}],on:{touchend:function(a){a.preventDefault(),t.goto("/")}}},[e("i",{staticClass:"myicon icon-task"}),e("p",{staticClass:"power"},[t._v("商品")])]),e("li",{class:["special",{current:"order"==t.current}],on:{touchend:function(a){a.preventDefault(),t.goto("/order/list")}}},[e("i",{staticClass:"myicon icon-book"}),e("p",[t._v("订单")])]),e("li",{class:["homeLi",{current:"home"==t.current}],on:{touchend:function(a){return a.preventDefault(),t.changeShow(a)}}},[e("i",{staticClass:"icon-home"}),e("span"),e("b")]),e("li",{class:["special posiR",{current:"discovery"==t.current}],on:{touchend:function(a){a.preventDefault(),t.goto("/discovery")}}},[e("i",{staticClass:"myicon icon-rank"}),e("p",[t._v("发现")])]),e("li",{class:["special",{current:"my"==t.current}],on:{touchend:function(a){a.preventDefault(),t.goto("/my")}}},[e("i",{staticClass:"myicon icon-my"}),e("p",[t._v("我")])])])]),e("div",{class:["animated my-footer special",{fadeInUp:!t.showCircle,dn:t.showCircle}]},[e("ul",[e("li",{class:["homeLi flex1",{current:"home"==t.current}],on:{touchend:function(a){return a.preventDefault(),t.changeShow(a)}}},[e("i",{staticClass:"icon-home"}),e("span"),e("b")])])])])},staticRenderFns:[]}}});