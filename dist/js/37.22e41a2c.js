webpackJsonp([37],{1115:function(a,t,e){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}t.__esModule=!0;var o=e(81),d=i(o),n=(e(185),e(528)),r=i(n),l=e(522),s=i(l),c=e(123),f=e(124),p=i(f),v=e(186),u=i(v);t.default={components:{myhead:r.default,loading:s.default},data:function(){return{header:{name:"填写发货单号",link:"/admin/list"},paraData:{deliver_status:1},loading:!1,loadError:"",info:[],editAddress:"",isEdit:!1}},computed:(0,d.default)({},(0,c.mapState)(["UID","TOKEN","PROFILE"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE)},methods:(0,d.default)({},(0,c.mapActions)(["switchState"]),{updateGoods:function(){var a=this;if(!this.paraData.orderid||!this.paraData.deliver_no)return void this.initMSG("请输入完整的信息");p.default.post("/bonus_api/v1/console/update_goods",u.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){var e=t.data;e.success?(a.initMSG("发货成功"),a.paraData.orderid="",a.paraData.deliver_no=""):"403"!=e.code&&"250"!=e.code||a.goto("/")}).catch(function(a){})},goto:function(a){this.$router.push(a)},closeDialog:function(a){this[a]=!1},initMSG:function(a){var t=this;this.loading=!0,this.loadError=a,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)}})}},1176:function(a,t,e){t=a.exports=e(473)(!1),t.push([a.i,'.myAddress[data-v-5870a0fc]{padding:.4rem 0;margin:0 .4rem;color:#7d7d7d;line-height:.64rem}.myDetail[data-v-5870a0fc]{padding:.4rem 0;margin:0 .4rem;border-top:1px solid #e4e4e4;line-height:.64rem;color:#4e4e4e}.myDetail p[data-v-5870a0fc]{padding-bottom:.133333rem}.myDetail dl[data-v-5870a0fc]{padding-bottom:.4rem}.myDetail dl dd input[data-v-5870a0fc],.myDetail dl dd select[data-v-5870a0fc]{display:inline-block;width:100%;height:.933333rem;line-height:.64rem;padding:.133333rem .2rem;border-radius:.133333rem;position:relative;border:1px solid #c9c9c9;color:#4e4e4e;background:#fff;font-size:.32rem}.footer dl[data-v-5870a0fc]{width:100%;padding:.4rem}.footer dl p[data-v-5870a0fc]{width:100%}.address[data-v-5870a0fc]{position:absolute;bottom:0;left:0;z-index:121;background:#fff;width:100%;height:0;overflow:hidden;transition:height .5s}.toggHeight[data-v-5870a0fc]{height:8rem}.layout[data-v-5870a0fc]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:120;opacity:0;transition:all .5s;background:#353a3c;visibility:hidden}.layoutBg[data-v-5870a0fc]{opacity:.7;visibility:visible}.area[data-v-5870a0fc]{display:inline-block;font-size:.32rem;margin-left:.42rem;color:#4e4e4e;line-height:1.066667rem;max-width:20%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.addList[data-v-5870a0fc]{margin-left:.4rem;color:#4e4e4e;line-height:.666667rem}.address ul[data-v-5870a0fc]{height:6.933333rem;padding:.133333rem 0 .266667rem;overflow:auto}.address ul li[data-v-5870a0fc]{list-style:none}.address .title .accolor[data-v-5870a0fc],.address ul .active[data-v-5870a0fc]{color:#d66167}.address ul .active span[data-v-5870a0fc]:after{content:"\\E631";font-family:iconfont!important;font-size:.32rem;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:middle;padding-left:.133333rem}.title[data-v-5870a0fc]{height:1.066667rem;border-bottom:1px solid #8a96a3}.determine[data-v-5870a0fc]{top:.173333rem;position:relative;right:.266667rem}',""])},1220:function(a,t,e){var i=e(1176);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(474)("4f02a174",i,!0,{})},1288:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Layout",[e("myhead",{attrs:{slot:"header",hval:a.header},slot:"header"}),e("div",{staticClass:"myDetail "},[e("dl",[e("dt",[a._v("订单号")]),e("dd",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.orderid,expression:"paraData.orderid"}],attrs:{type:"text",name:"",value:""},domProps:{value:a.paraData.orderid},on:{input:function(t){t.target.composing||a.$set(a.paraData,"orderid",t.target.value)}}})])]),e("dl",[e("dt",[a._v("对应快递单号")]),e("dd",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paraData.deliver_no,expression:"paraData.deliver_no"}],attrs:{type:"text",name:"",value:""},domProps:{value:a.paraData.deliver_no},on:{input:function(t){t.target.composing||a.$set(a.paraData,"deliver_no",t.target.value)}}})])]),e("dl",[e("dt",[a._v("订单状态")]),e("dd",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.paraData.deliver_status,expression:"paraData.deliver_status"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.paraData,"deliver_status",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"0"}},[a._v("等待发货")]),e("option",{attrs:{value:"1"}},[a._v("已发货")]),e("option",{attrs:{value:"2"}},[a._v("已签收")]),e("option",{attrs:{value:"3"}},[a._v("其它")])])])])]),e("div",{staticClass:"footer tC f30"},[e("dl",[e("dd",[e("p",{staticClass:"btn btn-default",on:{click:function(t){t.preventDefault(),a.updateGoods(t)}}},[a._v("发货")])])])]),e("loading",{attrs:{loading:a.loading,loadError:a.loadError},on:{closePop:function(t){a.closeDialog("loading")}}})],1)},staticRenderFns:[]}},476:function(a,t,e){function i(a){e(1220)}var o=e(122)(e(1115),e(1288),i,"data-v-5870a0fc",null);a.exports=o.exports},518:function(a,t,e){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(a,t,e){t=a.exports=e(473)(!1),t.push([a.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(a,t,e){var i=e(519);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(474)("ae8afd90",i,!0,{})},522:function(a,t,e){function i(a){e(521)}var o=e(122)(e(518),e(523),i,"data-v-b60b2388",null);a.exports=o.exports},523:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(t){t.preventDefault(),a.closeLoading(t)}}},[e("dl",[a.loadError?e("dd",[a._v(a._s(a.loadError))]):e("dt",[a._m(0)])])])]):a._e()},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},525:function(a,t,e){"use strict";t.__esModule=!0;var i=e(81),o=function(a){return a&&a.__esModule?a:{default:a}}(i),d=e(185),n=e(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var a=this;d.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,e){a.goback()})},computed:(0,o.default)({},(0,n.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(d.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},526:function(a,t,e){t=a.exports=e(473)(!1),t.push([a.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(a,t,e){var i=e(526);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(474)("504d8d1d",i,!0,{})},528:function(a,t,e){function i(a){e(527)}var o=e(122)(e(525),e(529),i,"data-v-a5c1fd86",null);a.exports=o.exports},529:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:["my-header",{noBg:a.hval.isNobg}],style:a.isApp},[e("ul",[a.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),a.goback(t)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[a.hval.subname?e("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),a.goto(t)}}},[a.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),a._v(a._s(a.hval.subname))])]):a._e(),e("span",{class:{opacity0:a.hval.opacity}},[a._v("\n          "+a._s(a.hval.name)+"\n        ")])])])])},staticRenderFns:[]}}});