webpackJsonp([26],{1119:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=a(84),d=i(o),n=a(527),s=i(n),l=a(532),r=i(l),c=a(190),f=a(535),m=i(f),h=a(127),u=a(128),p=i(u),v=a(191),g=i(v);e.default={data:function(){return{show1:!0,header:{name:"后台管理",link:"/my",noBack:!0},qiimgs:"",isCur:1,iquit:0,token:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,isAndroid:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],profile:{},paraData:{},headImg:""}},components:{loading:s.default,myhead:r.default,modalDialog:m.default},computed:(0,d.default)({},(0,h.mapState)(["PROFILE","TOKEN","UID"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE,this.headImg=this.globalAvatar+(this.profile.avatar?this.profile.avatar:"")+"?imageView2/2/w/210/h/210/t/"+(new Date).getTime()),"shop"==this.$route.query.from&&(this.header.link="/shop"),dplus.track("系统设置",{from:c.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:{getProfile:function(){var t=this;p.default.post("/bonus_api/v1/bonus/userinfo",g.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){var a=e.data;a.success?(t.profile=a.result,t.switchState({PROFILE:a.result})):"403"!=a.code&&"250"!=a.code||(t.needLogin=!0,t.noToken=!0)}).catch(function(t){})},modifyImg:function(t){var e=this,a=new FormData;this.imgFile&&a.append("avatar",this.imgFile,this.imgFile.name),a.append("uid",this.paraData.uid),p.default.post("/bonus_api/v1/user/updated",a,{headers:{"A-Token-Header":this.token,"Content-Type":"multipart/form-data"}}).then(function(t){e.loading=!1;var a=t.data;a.success?e.getProfile():"403"==a.code||"250"==a.code?e.goto("/"):e.initMSG(a.codemsg)}).catch(function(t){})},onFileChange:function(t){var e,a,i=window.URL||window.webkitURL,o=t.target.files||t.dataTransfer.files,d=(Number(t.target.dataset.type),"");if(o&&o.length)if(e=o[0],d=/^image\/\w+$/,a=i.createObjectURL(e),this.headImg=a,d.test(e.type)){new FormData;this.imgFile=e,this.modifyImg()}else this.initMsg("请选择图片")},initMSG:function(t){var e=this;this.loadError=t,this.loading=!0,setTimeout(function(){e.loadError="",e.loading=!1},3e3)},closeDialog:function(t){this[t]=!1},goto:function(t){this.$router.push(t)}}}},1168:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".wrap[data-v-234ce5d8]{background:#fff;background:linear-gradient(180deg,#fff,#fff 50%,#fbf9dc)}.header[data-v-234ce5d8]{background-size:10rem;height:5.426667rem;padding:.4rem 0 0}.header dl[data-v-234ce5d8]{padding:.666667rem .4rem 0}.header dl img[data-v-234ce5d8]{width:2.8rem}.header dl p.img[data-v-234ce5d8]{line-height:0;width:2.8rem;height:2.8rem;position:relative;display:inline-block}.header dl p.img img[data-v-234ce5d8]{width:2.8rem;height:2.8rem;border-radius:50%}.header dl span[data-v-234ce5d8]{position:absolute;bottom:.04rem;right:.04rem;background:#d66167;border-radius:50%;width:.68rem;height:.68rem;line-height:.546667rem;border:.066667rem solid #fff;box-shadow:0 0 .266667rem rgba(204,71,78,.88)}.header input[data-v-234ce5d8]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;opacity:0}.my-set[data-v-234ce5d8]{position:relative;padding:.266667rem 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-234ce5d8]{line-height:1.333333rem;color:#908384}.my-set ul li[data-v-234ce5d8]{padding:0 .4rem}.my-set ul li dt[data-v-234ce5d8]{padding-right:.4rem}.my-set ul li dd[data-v-234ce5d8]{border-bottom:1px solid #e2b4b6;line-height:1.32rem;height:1.333333rem}.my-set ul li[data-v-234ce5d8]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-234ce5d8]{opacity:0}.my-set ul li[data-v-234ce5d8]{background-size:1.026667rem}.my-set ul li a[data-v-234ce5d8]{display:block}.icon-arrowR[data-v-234ce5d8]{width:.173333rem;height:.293333rem;background-position:-.973333rem 0;position:relative;top:.013333rem}.my-set ul li span[data-v-234ce5d8]{padding:0 .24rem 0 .066667rem}",""])},1211:function(t,e,a){var i=a(1168);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("52923e9f",i,!0,{})},1278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),a("div",{staticClass:"my-set"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/admin/notice"}},[a("dl",{staticClass:"flexBox"},[a("dt",{staticClass:"redCR"},[a("i",{staticClass:"iconfont icon-shezhi f36"})]),a("dd",{staticClass:"flex1"},[t._v("公告管理")]),a("dd",{staticClass:"tR"},[a("i",{staticClass:"iconfont icon-back redCR f36"})])])]),a("router-link",{attrs:{tag:"li",to:"/admin/product"}},[a("dl",{staticClass:"flexBox"},[a("dt",{staticClass:"redCR"},[a("i",{staticClass:"iconfont icon-shezhi f36"})]),a("dd",{staticClass:"flex1"},[t._v("商品管理")]),a("dd",{staticClass:"tR"},[a("i",{staticClass:"iconfont icon-back redCR f36"})])])]),a("router-link",{attrs:{tag:"li",to:"/admin/deliver"}},[a("dl",{staticClass:"flexBox"},[a("dt",{staticClass:"redCR"},[a("i",{staticClass:"iconfont icon-shezhi f36"})]),a("dd",{staticClass:"flex1"},[t._v("填写发货单号")]),a("dd",{staticClass:"tR"},[a("i",{staticClass:"iconfont icon-back redCR f36"})])])]),a("router-link",{attrs:{tag:"li",to:"/admin/order"}},[a("dl",{staticClass:"flexBox"},[a("dt",{staticClass:"redCR"},[a("i",{staticClass:"iconfont icon-shezhi f36"})]),a("dd",{staticClass:"flex1"},[t._v("提现审核")]),a("dd",{staticClass:"tR"},[a("i",{staticClass:"iconfont icon-back redCR f36"})])])])],1)])],1)},staticRenderFns:[]}},483:function(t,e,a){function i(t){a(1211)}var o=a(126)(a(1119),a(1278),i,"data-v-234ce5d8",null);t.exports=o.exports},523:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},524:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(t,e,a){var i=a(524);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("c38d91e8",i,!0,{})},527:function(t,e,a){function i(t){a(526)}var o=a(126)(a(523),a(528),i,"data-v-4c82f682",null);t.exports=o.exports},528:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(e){return e.preventDefault(),t.closeLoading(e)}}},[a("dl",[t.loadError?a("dd",[t._v(t._s(t.loadError))]):a("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},529:function(t,e,a){"use strict";e.__esModule=!0;var i=a(84),o=function(t){return t&&t.__esModule?t:{default:t}}(i),d=a(190),n=a(127);e.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;d.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(e,a){t.goback()})},computed:(0,o.default)({},(0,n.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(d.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},530:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},531:function(t,e,a){var i=a(530);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("21d3127e",i,!0,{})},532:function(t,e,a){function i(t){a(531)}var o=a(126)(a(529),a(533),i,"data-v-d3e6e34c",null);t.exports=o.exports},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[a("ul",[t.hval.noBack?a("li",{staticClass:"special opacity"},[a("i",{staticClass:"iconfont icon-fanhui f36"})]):a("li",{staticClass:"special",on:{click:function(e){return e.preventDefault(),t.goback(e)}}},[a("i",{staticClass:"iconfont icon-fanhui f36"})]),a("li",{staticClass:"midli"},[t.hval.subname?a("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.goto(e)}}},[t.hval.share?a("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):a("span",[a("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),a("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},535:function(t,e,a){function i(t){a(540)}var o=a(126)(a(538),a(541),i,"data-v-64c058d6",null);t.exports=o.exports},538:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},539:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,'.footerP[data-v-64c058d6]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-64c058d6]{display:none}.dialogMask[data-v-64c058d6]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-64c058d6]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-64c058d6]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-64c058d6]{visibility:visible}.dialog-active .dialog-content[data-v-64c058d6]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-64c058d6]{opacity:1;visibility:visible}.dialog-content[data-v-64c058d6]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-64c058d6]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-64c058d6]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-64c058d6]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-64c058d6]{padding:2em}.dialog-body .error[data-v-64c058d6]{font-size:1.2em;color:salmon}.dialog-footer[data-v-64c058d6]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-64c058d6]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-64c058d6]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-64c058d6]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-64c058d6]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-64c058d6]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-64c058d6]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-64c058d6]{font-size:.533333rem}.rotate[data-v-64c058d6]{cursor:pointer}.rotate[data-v-64c058d6]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-64c058d6]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-64c058d6]{display:none}.borNone[data-v-64c058d6]{border:none!important}.dialog-active[close=false] .close[data-v-64c058d6]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-64c058d6]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-64c058d6]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-64c058d6]{display:none}@keyframes slideInDown-data-v-64c058d6{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-64c058d6]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-64c058d6}@keyframes bounceIn-data-v-64c058d6{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-64c058d6]{text-align:center}',""])},540:function(t,e,a){var i=a(539);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("673640fb",i,!0,{})},541:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isActive?a("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[a("div",{staticClass:"dialog"},[a("div",{class:["dialog-content",{slideInDown:t.isActive},{noCloseText_tc:t.noCloseText}]},[a("div",{staticClass:"diaplg-border"},[t.dialogClose?a("div",{staticClass:"close rotate",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[a("span",{staticClass:"iconfont icon-close redCR"},[t._v(t._s(t.closeText))])]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?a("div",{staticClass:"dialogMask",on:{click:function(e){return e.preventDefault(),t.closeDefault(e)}}}):t._e()]):t._e()},staticRenderFns:[]}}});