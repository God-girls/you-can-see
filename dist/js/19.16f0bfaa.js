webpackJsonp([19],{476:function(t,a,i){function e(t){i(608)}var o=i(122)(i(545),i(643),e,"data-v-056bfff7",null);t.exports=o.exports},503:function(t,a,i){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},504:function(t,a,i){a=t.exports=i(471)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},505:function(t,a,i){var e=i(504);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(472)("ae8afd90",e,!0,{})},506:function(t,a,i){function e(t){i(505)}var o=i(122)(i(503),i(507),e,"data-v-b60b2388",null);t.exports=o.exports},507:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[i("dl",[t.loadError?i("dd",[t._v(t._s(t.loadError))]):i("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},508:function(t,a,i){"use strict";a.__esModule=!0;var e=i(81),o=function(t){return t&&t.__esModule?t:{default:t}}(e),n=i(184),d=i(123);a.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(a,i){t.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},509:function(t,a,i){a=t.exports=i(471)(!1),a.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.106667rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},510:function(t,a,i){var e=i(509);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(472)("504d8d1d",e,!0,{})},511:function(t,a,i){function e(t){i(510)}var o=i(122)(i(508),i(512),e,"data-v-a5c1fd86",null);t.exports=o.exports},512:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[i("ul",[t.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(a){a.preventDefault(),t.goback(a)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[t.hval.subname?i("a",{staticClass:"f24 greenCR",attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.goto(a)}}},[t.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),i("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},513:function(t,a,i){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},514:function(t,a,i){a=t.exports=i(471)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{content:" ";border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}',""])},515:function(t,a,i){var e=i(514);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(472)("425b9258",e,!0,{})},516:function(t,a,i){function e(t){i(515)}var o=i(122)(i(513),i(517),e,"data-v-369b7310",null);t.exports=o.exports},517:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.isActive?i("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[i("div",{staticClass:"dialog"},[i("div",{class:["dialog-content",{slideInDown:t.isActive}]},[i("div",{staticClass:"diaplg-border"},[t.dialogClose?i("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[i("span",{staticClass:"iconfont icon-close redCR"})]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?i("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}},545:function(t,a,i){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=i(81),n=e(o),d=i(506),s=e(d),l=i(511),r=e(l),c=i(184),f=i(516),m=e(f),b=i(123),h=i(124),p=e(h),u=i(185),v=e(u);a.default={data:function(){return{show1:!0,header:{name:"后台管理",link:"/my",noBack:!0},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],profile:{},paraData:{},headImg:""}},components:{loading:s.default,myhead:r.default,modalDialog:m.default},computed:(0,n.default)({},(0,b.mapState)(["PROFILE","TOKEN","UID"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/210/h/210/t/"+(new Date).getTime()),"shop"==this.$route.query.from&&(this.header.link="/shop"),dplus.track("系统设置",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getProfile:function(){var t=this;p.default.post("/bonus_api/v1/bonus/userinfo",v.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(a){var i=a.data;i.success?(t.profile=i.result,t.switchState({PROFILE:i.result})):"403"!=i.code&&"250"!=i.code||(t.needLogin=!0,t.noToken=!0)}).catch(function(t){})},modifyImg:function(t){var a=this,i=new FormData;this.imgFile&&i.append("avatar",this.imgFile,this.imgFile.name),i.append("uid",this.paraData.uid),p.default.post("/bonus_api/v1/user/updated",i,{headers:{"A-Token-Header":this.token,"Content-Type":"multipart/form-data"}}).then(function(t){a.loading=!1;var i=t.data;i.success?a.getProfile():"403"==i.code||"250"==i.code?a.goto("/"):a.initMSG(i.codemsg)}).catch(function(t){})},onFileChange:function(t){var a,i,e=window.URL||window.webkitURL,o=t.target.files||t.dataTransfer.files,n=(Number(t.target.dataset.type),"");if(o&&o.length)if(a=o[0],n=/^image\/\w+$/,i=e.createObjectURL(a),this.headImg=i,n.test(a.type)){new FormData;this.imgFile=a,this.modifyImg()}else this.initMsg("请选择图片")},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},3e3)},closeDialog:function(t){this[t]=!1},goto:function(t){this.$router.push(t)}}}},576:function(t,a,i){a=t.exports=i(471)(!1),a.push([t.i,".wrap[data-v-056bfff7]{background:#fff;background:linear-gradient(180deg,#fff,#fff 50%,#fbf9dc)}.header[data-v-056bfff7]{background-size:10rem;height:5.426667rem;padding:.4rem 0 0}.header dl[data-v-056bfff7]{padding:.666667rem .4rem 0}.header dl img[data-v-056bfff7]{width:2.8rem}.header dl p.img[data-v-056bfff7]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-056bfff7]{width:2.8rem;height:2.8rem;border-radius:50%}.header dl span[data-v-056bfff7]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header input[data-v-056bfff7]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;opacity:0}.my-set[data-v-056bfff7]{position:relative;padding:.266667rem 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-056bfff7]{line-height:1.333333rem;color:#908384}.my-set ul li[data-v-056bfff7]{padding:0 .4rem}.my-set ul li dt[data-v-056bfff7]{padding-right:.4rem}.my-set ul li dd[data-v-056bfff7]{border-bottom:1px solid #e2b4b6;line-height:1.32rem;height:1.333333rem}.my-set ul li[data-v-056bfff7]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-056bfff7]{opacity:0}.my-set ul li[data-v-056bfff7]{background-size:1.026667rem}.my-set ul li a[data-v-056bfff7]{display:block}.icon-arrowR[data-v-056bfff7]{width:.173333rem;height:.293333rem;background-position:-.973333rem 0;position:relative;top:.013333rem}.my-set ul li span[data-v-056bfff7]{padding:0 .24rem 0 .066667rem}",""])},608:function(t,a,i){var e=i(576);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(472)("31350e51",e,!0,{})},643:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Layout",[i("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),i("div",{staticClass:"my-set"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"/admin/notice"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"redCR"},[i("i",{staticClass:"iconfont icon-shezhi f36"})]),i("dd",{staticClass:"flex1"},[t._v("公告管理")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-back redCR f36"})])])]),i("router-link",{attrs:{tag:"li",to:"/admin/product"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"redCR"},[i("i",{staticClass:"iconfont icon-shezhi f36"})]),i("dd",{staticClass:"flex1"},[t._v("商品管理")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-back redCR f36"})])])]),i("router-link",{attrs:{tag:"li",to:"/admin/deliver"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"redCR"},[i("i",{staticClass:"iconfont icon-shezhi f36"})]),i("dd",{staticClass:"flex1"},[t._v("填写发货单号")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-back redCR f36"})])])]),i("router-link",{attrs:{tag:"li",to:"/admin/order"}},[i("dl",{staticClass:"flexBox"},[i("dt",{staticClass:"redCR"},[i("i",{staticClass:"iconfont icon-shezhi f36"})]),i("dd",{staticClass:"flex1"},[t._v("提现审核")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-back redCR f36"})])])])],1)])],1)},staticRenderFns:[]}}});