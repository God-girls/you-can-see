webpackJsonp([12],{491:function(t,a,e){function i(t){e(622)}var o=e(122)(e(563),e(657),i,"data-v-72f174f7",null);t.exports=o.exports},503:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},504:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},505:function(t,a,e){var i=e(504);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("ae8afd90",i,!0,{})},506:function(t,a,e){function i(t){e(505)}var o=e(122)(e(503),e(507),i,"data-v-b60b2388",null);t.exports=o.exports},507:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},508:function(t,a,e){"use strict";a.__esModule=!0;var i=e(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),d=e(184),s=e(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;d.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,o.default)({},(0,s.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(d.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},509:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.333333rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;color:#39bbdc;padding:.106667rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},510:function(t,a,e){var i=e(509);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("504d8d1d",i,!0,{})},511:function(t,a,e){function i(t){e(510)}var o=e(122)(e(508),e(512),i,"data-v-a5c1fd86",null);t.exports=o.exports},512:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f24",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t.hval.digital?e("i",{staticClass:"digital iconD"}):t._e(),t._v(t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},513:function(t,a,e){t.exports=e.p+"img/topbg.48a920e.jpg"},514:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},515:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;color:#d66167;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{content:" ";border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},516:function(t,a,e){var i=e(515);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("425b9258",i,!0,{})},517:function(t,a,e){function i(t){e(516)}var o=e(122)(e(514),e(518),i,"data-v-369b7310",null);t.exports=o.exports},518:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:t.isActive}]},[e("div",{staticClass:"diaplg-border"},[t.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[e("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?e("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}},563:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(125),d=i(o),s=e(81),n=i(s),l=e(184),r=e(511),c=i(r),f=e(517),p=i(f),m=e(506),b=i(m),u=e(123),v=e(124),h=i(v),g=e(185),y=i(g);a.default={components:{myhead:c.default,modalDialog:p.default,loading:b.default},data:function(){return{header:{name:"购买",link:"/my/store"},whichOne:"",powerFlag:!1,powerType:0,loading:!1,loadError:"",profile:{power:0},listData:{district:{}},isIos:gisIOS,noData:!1,amount:1,unitPrice:1299,unitFlash:299,editPrd:{checkboxModel:[]},statusBarH:"",bottomBarH:"",paraData:{}}},computed:(0,n.default)({},(0,u.mapState)(["UID","TOKEN","PROFILE","STATUSBARH","EDITPRD"])),created:function(){l.html.isWechat()&&(this.header.opacity=!0)},mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.editPrd=this.EDITPRD,this.paraData.goodsid=this.editPrd.goodsid,this.fetchAddress()),dplus.track("订单确认",{from:l.html.useragent()})},methods:(0,n.default)({},(0,u.mapActions)(["switchState","clearState"]),{getStatusBar:function(){if(localStorage.bottomBarH){var t=JSON.parse(localStorage.bottomBarH);this.bottomBarH=t["padding-bottom"]}localStorage.statusBarH&&(this.statusBarH=JSON.parse(localStorage.statusBarH))},fetchAddress:function(){var t=this;h.default.post("/bonus_api/v1/user/fetch_receive_info",y.default.stringify({uid:this.paraData.uid}),{headers:{"A-Token-Header":this.token}}).then(function(a){var e=a.data;t.loading=!1,e.success?(e.result.length?t.listData=JSON.parse(e.result[0].info):t.noData=!0,t.paraData.context=(0,d.default)(t.listData),t.loading=!1):"403"!=e.code&&"250"!=e.code||t.goto("/")}).catch(function(t){})},widthDrawPrd:function(){var t=this;if(!this.listData.name)return void this.initMSG("请添加收货地址");this.loading=!0,h.default.post("/bonus_api/v1/bonus/withdraw_goods",y.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(a){var e=a.data;e.success?(t.initMSG("提取成功"),setTimeout(function(){t.goto("/my/store?type=4")},2e3)):"403"==e.code||"250"==e.code?t.goto("/"):t.initMSG(e.codemsg)}).catch(function(t){})},goto:function(t){this.$router.push(t)},closeDialog:function(t){this[t]=!1},initMSG:function(t){var a=this;this.loading=!0,this.loadError=t,setTimeout(function(){a.loading=!1,a.loadError=""},2e3)}})}},590:function(t,a,e){a=t.exports=e(471)(!1),a.push([t.i,".buyNum[data-v-72f174f7],.detailTop[data-v-72f174f7],.myDetail[data-v-72f174f7],.specs[data-v-72f174f7]{padding:.4rem;border-bottom:.2rem solid #ebebeb}.detailTop dl[data-v-72f174f7]{-ms-flex-align:start;align-items:flex-start}.detailTop dt img[data-v-72f174f7]{width:2.4rem;height:2.4rem;margin-right:.2rem}.specs[data-v-72f174f7]{padding-bottom:0}.specs dl[data-v-72f174f7]{padding-bottom:.4rem}.specs dl dd span[data-v-72f174f7]{display:inline-block;margin-right:.2rem;background:#ebebeb;padding:0 .133333rem 0 .266667rem;border-radius:.133333rem;height:.733333rem;line-height:.733333rem;margin-top:.2rem;text-align:center;min-width:1.333333rem}.specs dl dd span.current[data-v-72f174f7]{border:1px solid #90ce7f;background:#c7edbd;color:#51aa38}.specs dl dd span.special[data-v-72f174f7]:active{background:#c7edbd}.buyNum dl[data-v-72f174f7]{padding-top:.4rem}.buyNum dl dd div[data-v-72f174f7]{background:#ebebeb;border:.013333rem solid #dedede;border-radius:.133333rem;width:2.666667rem}.buyNum dl dd div span[data-v-72f174f7]{width:.733333rem;height:.733333rem;text-align:center;line-height:.733333rem}.buyNum dl dd div span[data-v-72f174f7]:active{background:rgba(0,0,0,.1)}.buyNum dl dd div input[data-v-72f174f7]{height:.733333rem;background:#fff;text-align:center}.myAddress[data-v-72f174f7]{margin:0 .4rem .4rem;color:#7d7d7d;line-height:.64rem;border-bottom:1px solid #e4e4e4}.myDetail[data-v-72f174f7]{padding-top:.133333rem;line-height:.64rem;color:#7d7d7d}.myDetail[data-v-72f174f7]:last-child{border-bottom:none}.myDetail dl dt[data-v-72f174f7]{width:20%;padding-right:.2rem}.myDetail dl dd[data-v-72f174f7]{width:79%}.myDetail dl dd input[data-v-72f174f7]{border-top:none;border-right:none;border-left:none}.footer dl[data-v-72f174f7]{width:100%;border-top:1px solid #51aa38;background:#fff;height:1.2rem}.footer dd[data-v-72f174f7]{width:33%;background:#51aa38;height:1.186667rem;line-height:1.186667rem}",""])},622:function(t,a,e){var i=e(590);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(472)("2976c182",i,!0,{})},657:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Layout",[i("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),i("div",{staticClass:"detailTop"},[i("dl",{staticClass:"flexBox"},[i("dt",[i("img",{attrs:{src:e(513),alt:""}})]),i("dd",{staticClass:"flex1 f30"},[t._v("\n        新款加厚加绒毛衣新款加厚加绒毛衣\n        "),i("p",{staticClass:"redCR"},[t._v("¥466.00-599.00")])])])]),i("div",{staticClass:"specs"},[i("dl",[i("dt",{staticClass:"blackCR"},[t._v("规则一")]),i("dd",[i("span",{staticClass:"current"},[t._v("红色")]),i("span",[t._v("绿色")]),i("span",[t._v("灰色")])])]),i("dl",[i("dt",{staticClass:"blackCR"},[t._v("规则2")]),i("dd",[i("span",[t._v("M")]),i("span",[t._v("L")]),i("span",[t._v("XL")])])])]),i("div",{staticClass:"buyNum"},[i("h3",{staticClass:"blackCR f30"},[t._v("购买数量")]),i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[t._v("\n        绿色，L号，毛线料\n      ")]),i("dd",[i("div",{staticClass:"flexBox1"},[i("span",{staticClass:"mini"},[i("i",{staticClass:"iconfont icon-sub"})]),i("input",{staticClass:"flex1",attrs:{type:"number",name:"",value:"1"}}),i("span",{staticClass:"plus"},[i("i",{staticClass:"iconfont icon-iconjia"})])])])]),i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[t._v("\n        绿色，L号，毛线料\n      ")]),i("dd",[i("div",{staticClass:"flexBox1"},[i("span",{staticClass:"mini"},[i("i",{staticClass:"iconfont icon-sub"})]),i("input",{staticClass:"flex1",attrs:{type:"number",name:"",value:"1"}}),i("span",{staticClass:"plus"},[i("i",{staticClass:"iconfont icon-iconjia"})])])])])]),i("div",{staticClass:"myDetail "},[i("dl",{staticClass:"dls"},[i("dt",{staticClass:"blackCR"},[t._v("收货人")]),i("dd",[i("input",{attrs:{type:"text",name:""}})])]),i("dl",{staticClass:"dls"},[i("dt",{staticClass:"blackCR"},[t._v("联系方式")]),i("dd",[i("input",{attrs:{type:"number",name:""}})])]),i("dl",{staticClass:"dls"},[i("dt",{staticClass:"blackCR"},[t._v("所在地区")]),i("dd",[i("input",{attrs:{type:"text",name:""}})])]),i("dl",{staticClass:"dls"},[i("dt",{staticClass:"blackCR"},[t._v("详细地址")]),i("dd",[i("input",{attrs:{type:"text",name:""}})])])]),i("div",{staticClass:"myDetail "},[i("dl",{staticClass:"dls"},[i("dt",{staticClass:"blackCR"},[t._v("买家留言")]),i("dd",[i("input",{attrs:{type:"text",name:""}})])])]),i("div",{style:t.statusBarH,attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"footer tC  f30"},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"flex1"},[t._v("商品总价："+t._s(t.editPrd.count))]),i("dd",{staticClass:"whiteCR",on:{click:function(a){a.preventDefault(),t.widthDrawPrd(a)}}},[t._v("立即购买")])])]),i("loading",{attrs:{loading:t.loading,loadError:t.loadError}})],1)],1)},staticRenderFns:[]}}});