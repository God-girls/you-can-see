webpackJsonp([29],{1149:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=a(81),n=i(o),r=a(521),l=i(r),s=a(628),d=i(s),c=a(185),u=a(123),m=a(124),f=(i(m),a(186));i(f);e.default={data:function(){return{show1:!0,header:{name:"发现",link:"/",isNobg:!0},headImg:"",isCur:1,isSlider:0,token:"",loading:!1,begin_seconds:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"discovery",profile:{},isWechat:!1,paraData:{}}},components:{loading:l.default,myfooter:d.default},computed:(0,n.default)({},(0,u.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.PROFILE?this.profile=this.PROFILE:this.getProfile()),dplus.track("发现",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getStatusBar:function(){this.STATUSBARH&&(this.statusBar=this.STATUSBARH+"px")},goto:function(t){this.$router.push(t)},closeDialog:function(t){this[t]=!1}}}},1159:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,".wrap[data-v-0bec5be0]{background:#ebebeb}.my-set[data-v-0bec5be0]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-0bec5be0]{background:#fff;line-height:1.333333rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-0bec5be0]{padding:0 0 0 .4rem}.my-set ul li dl[data-v-0bec5be0]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-0bec5be0]{width:.933333rem}.my-set ul li dd[data-v-0bec5be0]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-0bec5be0]{padding-right:.4rem;color:#7f7f7f}.my-set ul li:last-child dl[data-v-0bec5be0]{border-bottom:none}.my-set ul li[data-v-0bec5be0]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-0bec5be0]{opacity:0}.my-set ul li dd i[data-v-0bec5be0]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-0bec5be0]{display:block}.icon-qianbao-[data-v-0bec5be0]{color:#f16e34}.icon-tubiaozoushitu[data-v-0bec5be0]{color:#588ae7}.icon-tubiao[data-v-0bec5be0]{color:#e75858}.icon-erweima[data-v-0bec5be0]{color:#80a073}.icon-fensishumian[data-v-0bec5be0]{color:#df4d90;position:relative;left:-.066667rem}.header span[data-v-0bec5be0]{display:block}.my-set ul.header li[data-v-0bec5be0]{padding:.4rem 0 .4rem .4rem}.my-set ul.header li dd[data-v-0bec5be0]{height:auto;line-height:.6rem}.my-set ul.header li img[data-v-0bec5be0]{width:1.533333rem;height:1.533333rem;margin-right:.266667rem}",""])},1202:function(t,e,a){var i=a(1159);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("0e160a44",i,!0,{})},1269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"my-set"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/my/bonus"}},[a("dl",{staticClass:"flexBox"},[a("dt",[a("i",{staticClass:"iconfont icon-tubiaozoushitu f36"})]),a("dd",{staticClass:"flex1 f30"},[t._v("收入分析")]),a("dd",{staticClass:"tR"},[t._v("\n            "+t._s(t.profile.total_income?t.profile.total_income:"0.00")+" 元"),a("i",{staticClass:"iconfont icon-jiantou f24"})])])]),a("router-link",{attrs:{tag:"li",to:"/my/analysis"}},[a("dl",{staticClass:"flexBox"},[a("dt",[a("i",{staticClass:"iconfont icon-tubiao f30"})]),a("dd",{staticClass:"flex1 f30"},[t._v("商品分析")]),a("dd",{staticClass:"tR"},[t._v("\n             "+t._s(t.profile.total_count?t.profile.total_count:"0")+" 件"),a("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1),a("ul",[a("router-link",{attrs:{tag:"li",to:"/my/fans"}},[a("dl",{staticClass:"flexBox"},[a("dt",[a("i",{staticClass:"iconfont icon-fensishumian f48"})]),a("dd",{staticClass:"flex1 f30"},[t._v("我的粉丝")]),a("dd",{staticClass:"tR"},[a("i",{staticClass:"iconfont icon-jiantou f24"})])])])],1)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("myfooter",{attrs:{current:t.navType}})],1)])},staticRenderFns:[]}},509:function(t,e,a){function i(t){a(1202)}var o=a(122)(a(1149),a(1269),i,"data-v-0bec5be0",null);t.exports=o.exports},518:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},520:function(t,e,a){var i=a(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("ae8afd90",i,!0,{})},521:function(t,e,a){function i(t){a(520)}var o=a(122)(a(518),a(522),i,"data-v-b60b2388",null);t.exports=o.exports},522:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(e){e.preventDefault(),t.closeLoading(e)}}},[a("dl",[t.loadError?a("dd",[t._v(t._s(t.loadError))]):a("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},576:function(t,e,a){t.exports=a.p+"img/mai.e026c46.png"},610:function(t,e,a){"use strict";e.__esModule=!0;var i=a(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=a(185),r=a(123);e.default={props:{current:""},data:function(){return{showCircle:!0,isH5:!1,isIos:!1}},computed:(0,o.default)({},(0,r.mapState)(["SHOWFOOTER"]),{isApp:function(){if(n.html.isWawa())return localStorage.bottomBarH?JSON.parse(localStorage.bottomBarH):""}}),mounted:function(){this.showCircle=this.SHOWFOOTER},methods:(0,o.default)({},(0,r.mapActions)(["switchState","clearState"]),{goto:function(t){if(sessionStorage.isGuest)return void this.guestClick();"/wake"==t&&this.isIos?this.$router.push("/wake_study?type=daily"):this.$router.push(t)},changeShow:function(){this.showCircle=!this.showCircle,this.switchState({SHOWFOOTER:this.showCircle})},clickDown:function(){var t=this;this.canDown=!this.canDown,setTimeout(function(){t.canDown=!t.canDown},3e3)},guestClick:function(){this.$emit("guestPop")}})}},611:function(t,e,a){var i=a(475);e=t.exports=a(473)(!1),e.push([t.i,".my-footer[data-v-e826c56a]{width:100%;position:relative;z-index:3}.my-footer ul[data-v-e826c56a]{display:-ms-flexbox;display:flex;text-align:center;position:relative;background:#fafafa;z-index:2;-ms-flex-align:center;align-items:center;height:1.333333rem;border-top:1px solid #bcbcbc}.my-footer ul li[data-v-e826c56a]{padding-top:.106667rem;position:relative}.my-footer ul li.special[data-v-e826c56a]{-ms-flex:1;flex:1;width:0}.my-footer ul li p[data-v-e826c56a]{position:relative;top:-.08rem;color:#929292;font-size:.28rem}.my-footer ul li p.power[data-v-e826c56a]{top:-.106667rem}.my-footer ul li i.dot[data-v-e826c56a]{display:inline-block;width:.173333rem;height:.173333rem;border-radius:50%;background:#ff0500;position:absolute;top:.133333rem;right:23%}.myicon[data-v-e826c56a]{display:inline-block;background:url("+i(a(627))+") no-repeat;background-size:1.733333rem}.icon-home[data-v-e826c56a]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;background:url("+i(a(576))+") no-repeat;background-size:1.6rem;width:1.6rem;height:1.6rem;border-radius:50%;z-index:2}@keyframes change-data-v-e826c56a{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.my-footer ul li.current .icon-home[data-v-e826c56a]{background:url("+i(a(576))+") no-repeat;background-size:1.493333rem}.my-footer ul li.current[data-v-e826c56a]{transition:all .4s}.my-footer ul li.current p[data-v-e826c56a]{color:#51aa38}.my-footer ul li.homeLi[data-v-e826c56a]{width:1.76rem;padding:.933333rem 0 0}.my-footer ul li.homeLi span[data-v-e826c56a]{position:absolute;left:0;right:0;margin:auto;top:-.693333rem;display:inline-block;width:1.506667rem;height:1.506667rem;border-radius:50%;box-shadow:0 -.106667rem .186667rem hsla(60,1%,55%,.56);z-index:1}.icon-my[data-v-e826c56a]{background-position:0 -4.506667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-my[data-v-e826c56a]{background-position:-.973333rem -4.506667rem}.icon-task[data-v-e826c56a]{background-position:0 .053333rem;width:.626667rem;height:.8rem}.my-footer ul li.current .icon-task[data-v-e826c56a]{background-position:-.973333rem .053333rem}.icon-book[data-v-e826c56a]{background-position:0 -1.426667rem;width:.613333rem;height:.773333rem}.my-footer ul li.current .icon-book[data-v-e826c56a]{background-position:-.973333rem -1.426667rem}.icon-rank[data-v-e826c56a]{background-position:0 -3.106667rem;width:.64rem;height:.773333rem}.my-footer ul li.current .icon-rank[data-v-e826c56a]{background-position:-.973333rem -3.106667rem}.my-footer dl[data-v-e826c56a]{position:absolute;top:-1.973333rem;z-index:1;text-align:right;width:100%}.my-footer dl dd[data-v-e826c56a]{position:absolute;top:.466667rem;line-height:0;right:0}.my-footer dl dt img[data-v-e826c56a]{width:100%}.my-footer dl dd img[data-v-e826c56a]{width:1.253333rem;height:1.506667rem}.special[data-v-e826c56a]{width:100%;background:none;position:absolute;left:0;bottom:0}.special ul[data-v-e826c56a]{border-top:none;height:1.066667rem;background:none}.special .icon-home[data-v-e826c56a],.special ul li.homeLi span[data-v-e826c56a]{top:0}",""])},626:function(t,e,a){var i=a(611);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("08c4fb67",i,!0,{})},627:function(t,e,a){t.exports=a.p+"img/icon-nav.fcb4617.png"},628:function(t,e,a){function i(t){a(626)}var o=a(122)(a(610),a(629),i,"data-v-e826c56a",null);t.exports=o.exports},629:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posoR"},[a("div",{class:["animated my-footer",{fadeInUp:t.showCircle,dn:!t.showCircle}]},[a("ul",[a("li",{class:["special",{current:"task"==t.current}],on:{touchend:function(e){e.preventDefault(),t.goto("/")}}},[a("i",{staticClass:"myicon icon-task"}),a("p",{staticClass:"power"},[t._v("商品")])]),a("li",{class:["special",{current:"order"==t.current}],on:{touchend:function(e){e.preventDefault(),t.goto("/order/list")}}},[a("i",{staticClass:"myicon icon-book"}),a("p",[t._v("订单")])]),a("li",{class:["homeLi",{current:"home"==t.current}],on:{touchend:function(e){e.preventDefault(),t.changeShow(e)}}},[a("i",{staticClass:"icon-home"}),a("span"),a("b")]),a("li",{class:["special posiR",{current:"discovery"==t.current}],on:{touchend:function(e){e.preventDefault(),t.goto("/discovery")}}},[a("i",{staticClass:"myicon icon-rank"}),a("p",[t._v("发现")])]),a("li",{class:["special",{current:"my"==t.current}],on:{touchend:function(e){e.preventDefault(),t.goto("/my")}}},[a("i",{staticClass:"myicon icon-my"}),a("p",[t._v("我")])])])]),a("div",{class:["animated my-footer special",{fadeInUp:!t.showCircle,dn:t.showCircle}]},[a("ul",[a("li",{class:["homeLi flex1",{current:"home"==t.current}],on:{touchend:function(e){e.preventDefault(),t.changeShow(e)}}},[a("i",{staticClass:"icon-home"}),a("span"),a("b")])])])])},staticRenderFns:[]}}});