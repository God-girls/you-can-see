webpackJsonp([26],{1116:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(81),n=i(o),d=e(521),s=i(d),l=e(527),r=i(l),c=e(185),f=e(530),m=i(f),b=e(123),h=e(124),u=i(h),p=e(186),v=i(p);a.default={data:function(){return{show1:!0,header:{name:"后台管理",link:"/my",noBack:!0},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],profile:{},paraData:{},headImg:""}},components:{loading:s.default,myhead:r.default,modalDialog:m.default},computed:(0,n.default)({},(0,b.mapState)(["PROFILE","TOKEN","UID"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/210/h/210/t/"+(new Date).getTime()),"shop"==this.$route.query.from&&(this.header.link="/shop"),dplus.track("系统设置",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getProfile:function(){var t=this;u.default.post("/bonus_api/v1/bonus/userinfo",v.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(a){var e=a.data;e.success?(t.profile=e.result,t.switchState({PROFILE:e.result})):"403"!=e.code&&"250"!=e.code||(t.needLogin=!0,t.noToken=!0)}).catch(function(t){})},modifyImg:function(t){var a=this,e=new FormData;this.imgFile&&e.append("avatar",this.imgFile,this.imgFile.name),e.append("uid",this.paraData.uid),u.default.post("/bonus_api/v1/user/updated",e,{headers:{"A-Token-Header":this.token,"Content-Type":"multipart/form-data"}}).then(function(t){a.loading=!1;var e=t.data;e.success?a.getProfile():"403"==e.code||"250"==e.code?a.goto("/"):a.initMSG(e.codemsg)}).catch(function(t){})},onFileChange:function(t){var a,e,i=window.URL||window.webkitURL,o=t.target.files||t.dataTransfer.files,n=(Number(t.target.dataset.type),"");if(o&&o.length)if(a=o[0],n=/^image\/\w+$/,e=i.createObjectURL(a),this.headImg=e,n.test(a.type)){new FormData;this.imgFile=a,this.modifyImg()}else this.initMsg("请选择图片")},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},closeDialog:function(t){this[t]=!1},goto:function(t){this.$router.push(t)}}}},1157:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".wrap[data-v-056bfff7]{background:#fff;background:linear-gradient(180deg,#fff,#fff 50%,#fbf9dc)}.header[data-v-056bfff7]{background-size:10rem;height:5.426667rem;padding:.4rem 0 0}.header dl[data-v-056bfff7]{padding:.666667rem .4rem 0}.header dl img[data-v-056bfff7]{width:2.8rem}.header dl p.img[data-v-056bfff7]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-056bfff7]{width:2.8rem;height:2.8rem;border-radius:50%}.header dl span[data-v-056bfff7]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header input[data-v-056bfff7]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;opacity:0}.my-set[data-v-056bfff7]{position:relative;padding:.266667rem 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-056bfff7]{line-height:1.333333rem;color:#908384}.my-set ul li[data-v-056bfff7]{padding:0 .4rem}.my-set ul li dt[data-v-056bfff7]{padding-right:.4rem}.my-set ul li dd[data-v-056bfff7]{border-bottom:1px solid #e2b4b6;line-height:1.32rem;height:1.333333rem}.my-set ul li[data-v-056bfff7]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-056bfff7]{opacity:0}.my-set ul li[data-v-056bfff7]{background-size:1.026667rem}.my-set ul li a[data-v-056bfff7]{display:block}.icon-arrowR[data-v-056bfff7]{width:.173333rem;height:.293333rem;background-position:-.973333rem 0;position:relative;top:.013333rem}.my-set ul li span[data-v-056bfff7]{padding:0 .24rem 0 .066667rem}",""])},1200:function(t,a,e){var i=e(1157);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("31350e51",i,!0,{})},1267:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),e("div",{staticClass:"my-set"},[e("ul",[e("router-link",{attrs:{tag:"li",to:"/admin/notice"}},[e("dl",{staticClass:"flexBox"},[e("dt",{staticClass:"redCR"},[e("i",{staticClass:"iconfont icon-shezhi f36"})]),e("dd",{staticClass:"flex1"},[t._v("公告管理")]),e("dd",{staticClass:"tR"},[e("i",{staticClass:"iconfont icon-back redCR f36"})])])]),e("router-link",{attrs:{tag:"li",to:"/admin/product"}},[e("dl",{staticClass:"flexBox"},[e("dt",{staticClass:"redCR"},[e("i",{staticClass:"iconfont icon-shezhi f36"})]),e("dd",{staticClass:"flex1"},[t._v("商品管理")]),e("dd",{staticClass:"tR"},[e("i",{staticClass:"iconfont icon-back redCR f36"})])])]),e("router-link",{attrs:{tag:"li",to:"/admin/deliver"}},[e("dl",{staticClass:"flexBox"},[e("dt",{staticClass:"redCR"},[e("i",{staticClass:"iconfont icon-shezhi f36"})]),e("dd",{staticClass:"flex1"},[t._v("填写发货单号")]),e("dd",{staticClass:"tR"},[e("i",{staticClass:"iconfont icon-back redCR f36"})])])]),e("router-link",{attrs:{tag:"li",to:"/admin/order"}},[e("dl",{staticClass:"flexBox"},[e("dt",{staticClass:"redCR"},[e("i",{staticClass:"iconfont icon-shezhi f36"})]),e("dd",{staticClass:"flex1"},[t._v("提现审核")]),e("dd",{staticClass:"tR"},[e("i",{staticClass:"iconfont icon-back redCR f36"})])])])],1)])],1)},staticRenderFns:[]}},478:function(t,a,e){function i(t){e(1200)}var o=e(122)(e(1116),e(1267),i,"data-v-056bfff7",null);t.exports=o.exports},518:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},520:function(t,a,e){var i=e(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("ae8afd90",i,!0,{})},521:function(t,a,e){function i(t){e(520)}var o=e(122)(e(518),e(522),i,"data-v-b60b2388",null);t.exports=o.exports},522:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},524:function(t,a,e){"use strict";a.__esModule=!0;var i=e(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=e(185),d=e(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,e){t.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},525:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},526:function(t,a,e){var i=e(525);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("504d8d1d",i,!0,{})},527:function(t,a,e){function i(t){e(526)}var o=e(122)(e(524),e(528),i,"data-v-a5c1fd86",null);t.exports=o.exports},528:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[e("ul",[t.hval.noBack?e("li",{staticClass:"special opacity"},[e("i",{staticClass:"iconfont icon-fanhui f36"})]):e("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[e("i",{staticClass:"iconfont icon-fanhui f36"})]),e("li",{staticClass:"midli"},[t.hval.subname?e("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?e("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):e("span",[e("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),e("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},530:function(t,a,e){function i(t){e(535)}var o=e(122)(e(533),e(536),i,"data-v-369b7310",null);t.exports=o.exports},533:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},534:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-369b7310]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-369b7310]{text-align:center}',""])},535:function(t,a,e){var i=e(534);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("425b9258",i,!0,{})},536:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:t.isActive},{noCloseText_tc:t.noCloseText}]},[e("div",{staticClass:"diaplg-border"},[t.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[e("span",{staticClass:"iconfont icon-close redCR"},[t._v(t._s(t.closeText))])]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?e("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}}});