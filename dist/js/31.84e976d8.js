webpackJsonp([31],{1102:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=i(126),o=a(n),r=i(125),s=a(r),c=i(82),d=a(c),l=i(81),u=a(l),p=i(522),f=a(p),h=i(528),m=a(h),g=i(184),v=i(123),b=i(549),y=a(b),_=i(124),w=a(_),S=i(185),I=a(S);t.default={data:function(){return{show1:!0,header:{name:"发布商品",link:"/"},headImg:"",isCur:1,isSlider:0,token:"",begin_seconds:!1,statusBar:{},historyTotalPN:1,bottomBarH:[],loading:!1,loadError:"",leftTime:"00:00:00",paraData:{price:{},imgs:[]},isApp:"",navType:"my",profile:{},imgUrl:[],imgFile:[],isWechat:!1,choosed:0,prdID:"",defaultImgLen:0,curSpecs:[],priceSet:"",curPrice:[],priceRang:""}},components:{loading:f.default,myhead:m.default},computed:(0,u.default)({},(0,v.mapState)(["UID","TOKEN","PROFILE","STATUSBARH","CART"])),created:function(){this.$route.query.id&&(document.title="修改商品")},mounted:function(){this.TOKEN&&(this.profile=this.PROFILE,this.paraData.uid=this.UID,this.token=this.TOKEN),this.imgFile=this.CART.imgFile?this.CART.imgFile:[],this.paraData.desc=this.CART.desc,this.imgUrl=this.CART.imgUrl?this.CART.imgUrl:[],this.choosed=this.imgUrl.length?this.imgUrl.length:0,this.initPrice(),this.autoTextarea(document.getElementById("text"),"",500),this.$route.query.id&&(this.prdID=this.$route.query.id,this.CART.imgFile||this.fetchList()),dplus.track("创建商品",{from:g.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,u.default)({},(0,v.mapActions)(["switchState"]),{initPrice:function(){if(this.curSpecs=g.html.objClone(this.CART.specs),this.priceSet=g.html.objClone(this.CART.priceSet),this.curSpecs.length){var e=[];for(var t in this.priceSet.list)e.push(Number(this.priceSet.list[t]));e.sort(function(e,t){return e-t}),e.length&&(this.priceRang="￥"+e[0]),e.length>1&&(this.priceRang+="-"+e.pop())}},fetchList:function(){var e=this;w.default.post("/seller_api/v1/seller/seller_goods_info",I.default.stringify({uid:this.paraData.uid,gid:this.prdID}),{headers:{"A-Token-Header":this.token}}).then(function(t){var i=t.data;if(i.success){e.imgFile=JSON.parse(i.result.imgs),e.paraData.desc=i.result.description,e.imgUrl=[];for(var a=0;a<e.imgFile.length;a++)e.imgUrl.push(e.globalAvatar+"goods/"+e.imgFile[a]);e.choosed=e.imgFile.length;var n=JSON.parse(i.result.ext);n.list||(n.list={}),e.switchState({CART:(0,d.default)(e.CART,{imgFile:e.imgFile,desc:e.paraData.desc,imgUrl:e.imgUrl,priceSet:n,specs:i.result.spec?JSON.parse(i.result.spec):[],other:{show_comment:i.result.show_comment,show_sell:i.result.show_sell,sell_base:i.result.sell_base}})}),e.initPrice()}else"403"==i.code||"250"==i.code?e.goto("/"):e.initMSG(i.codemsg)})},chooseImg:function(){var e=this;y.default.chooseImage({count:9-this.choosed,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var i=t.localIds;this.defaultImgLen=i.length,e.showImg(i)}})},showImg:function(e){var t=this,i=e.shift();y.default.getLocalImgData({localId:i,success:function(i){var a=i.localData;0!=a.indexOf("data:image")&&(a="data:image/jpeg;base64,"+a),a=a.replace(/\r|\n/g,"").replace("data:image/jgp","data:image/jpeg"),t.imgUrl.push(a),t.choosed++,e.length>0?t.showImg(e):(t.loadImg=0,t.modifyImg(t.imgUrl[0]))}})},previewImage:function(e){y.default.previewImage({current:e,urls:this.imgUrl})},delImg:function(e){this.imgUrl.splice(e,1),this.imgFile.splice(e,1),this.choosed--},initMSG:function(e){var t=this;this.loading=!0,this.loadError=e,setTimeout(function(){t.loading=!1,t.loadError=""},2e3)},modifyImg:function(e){var t=this;w.default.post("/seller_api/v1/seller/upload_image",I.default.stringify({uid:this.paraData.uid,image_b64:e}),{headers:{"A-Token-Header":this.token}}).then(function(e){var i=e.data;i.success?(t.imgFile.push(i.result),++t.loadImg<t.imgUrl.length&&t.modifyImg(t.imgUrl[t.loadImg])):"403"==i.code||"250"==i.code?t.goto("/"):t.initMSG(i.codemsg)}).catch(function(e){})},autoTextarea:function(e,t,i){t=t||0;var a=!!document.getBoxObjectFor||"mozInnerScreenX"in window,n=!!window.opera&&!!window.opera.toString().indexOf("Opera"),o=function(t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)},r=e.currentStyle?function(t){var i=e.currentStyle[t];if("height"===t&&1!==i.search(/px/i)){var a=e.getBoundingClientRect();return a.bottom-a.top-parseFloat(r("paddingTop"))-parseFloat(r("paddingBottom"))+"px"}return i}:function(t){return getComputedStyle(e,null)[t]},s=parseFloat(r("height"));e.style.resize="none";var c=function(){var o,c,d=0,l=e.style;e._length!==e.value.length&&(e._length=e.value.length,a||n||(d=parseInt(r("paddingTop"))+parseInt(r("paddingBottom"))),o=document.body.scrollTop||document.documentElement.scrollTop,e.style.height=s+"px",e.scrollHeight>s&&(i&&e.scrollHeight>i?(c=i-d,l.overflowY="auto"):(c=e.scrollHeight-d,l.overflowY="hidden"),l.height=c+t+"px",o+=parseInt(l.height)-e.currHeight,document.body.scrollTop=o,document.documentElement.scrollTop=o,e.currHeight=parseInt(l.height)))};o("propertychange",c),o("input",c),o("focus",c),c()},created:function(){var e=this,t={};return t.spec_name=this.CART.priceSet.spec_name,t.def_price=this.CART.priceSet.def_price,t.price=this.CART.priceSet.list,this.paraData.imgs=(0,s.default)(this.imgFile),this.paraData.price=(0,s.default)(t),this.CART.specs.length?this.paraData.spec=(0,s.default)(this.CART.specs):this.prdID&&(this.paraData.spec=""),this.paraData.show_comment=this.CART.other.show_comment,this.paraData.show_sell=this.CART.other.show_sell,this.paraData.sell_base=this.CART.other.sell_base,this.paraData.ext=(0,s.default)(this.CART.priceSet),this.prdID&&(this.paraData.gid=this.prdID),this.paraData.desc?this.imgUrl.length?!t.spec_name||"*"!=t.spec_name&&!(0,o.default)(t.price).length?void this.initMSG("请设置定价"):(this.loading=!0,this.imgUrl.length!=this.imgFile.length?void setTimeout(function(){e.created()},1e3):void w.default.post("/seller_api/v1/seller/create_goods",I.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(t){e.loading=!1;var i=t.data;i.success?(e.initMSG(e.prdID?"修改成功":"发布成功"),setTimeout(function(){e.goto("/")},2e3)):"403"==i.code||"250"==i.code||e.initMSG(i.codemsg)}).catch(function(e){})):void this.initMSG("请选择图片"):void this.initMSG("添加商品描述")},goto:function(e){"/"!=e?this.switchState({CART:(0,d.default)(this.CART,{imgFile:this.imgFile,desc:this.paraData.desc,imgUrl:this.imgUrl})}):(this.switchState({CART:{priceSet:{def_price:"",subIndex:0,curIndex:0,price:[],list:{}},specs:[],other:{show_comment:!0,show_sell:!0,sell_base:0}}}),this.imgUrl=[],this.paraData={price:{},imgs:[]},this.imgFile=[]),this.$router.push(e)},closeDialog:function(e){this[e]=!1}}),beforeDestroy:function(){}}},1153:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".myHeader[data-v-99cd9594]{padding:.4rem .4rem 0}.publish[data-v-99cd9594]{padding:.666667rem .8rem 0}.publish div[data-v-99cd9594]{outline:0;line-height:.533333rem;overflow-y:auto;padding-bottom:.266667rem}.publish div textarea[data-v-99cd9594]{width:100%;border:none;min-height:2rem}.modifyImg[data-v-99cd9594]{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0}.publish ul[data-v-99cd9594]{display:-ms-flexbox;display:flex;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.publish ul li[data-v-99cd9594]{width:2.6rem;height:2.6rem;line-height:0;margin:0 .133333rem .266667rem 0}.publish ul li p[data-v-99cd9594]{width:100%;height:100%;position:relative;z-index:1}.publish ul li img[data-v-99cd9594]{width:100%;height:100%}.publish ul li.special[data-v-99cd9594]{line-height:2.6rem;background:#d7d7d7;text-align:center}.publish ul li.special[data-v-99cd9594]:active{background:#c5c4c4}.icon-add[data-v-99cd9594]{font-size:1.2rem}.publish ul li span[data-v-99cd9594]{position:absolute;top:.026667rem;right:.026667rem;z-index:3}.publish i.icon-chahao[data-v-99cd9594]{width:.48rem;height:.48rem;line-height:.48rem;background:hsla(0,0%,100%,.8);border-radius:50%;text-align:center;display:inline-block}.my-set[data-v-99cd9594]{position:relative;padding:0 0 1.066667rem;background-size:.666667rem}.my-set ul[data-v-99cd9594]{background:#fff;line-height:1.6rem;color:#908384;margin-top:.2rem}.my-set ul li[data-v-99cd9594]{padding:0 .8rem}.my-set ul li dl[data-v-99cd9594]{border-bottom:1px solid #dedede}.my-set ul li dt[data-v-99cd9594]{width:.933333rem}.my-set ul li dd[data-v-99cd9594]{line-height:1.333333rem;height:1.333333rem;color:#000}.my-set ul li dd.tR[data-v-99cd9594]{color:#7f7f7f}.my-set ul li:last-child dl[data-v-99cd9594]{border-bottom:none}.my-set ul li[data-v-99cd9594]:active{background-color:rgba(0,0,0,.05)}.my-set ul li .whiteCR[data-v-99cd9594]{opacity:0}.my-set ul li dd i[data-v-99cd9594]{color:#b5b5b5;margin-left:.133333rem}.my-set ul li a[data-v-99cd9594]{display:block}.footer[data-v-99cd9594]{width:100%;padding:.4rem}.footer p[data-v-99cd9594]{width:100%}",""])},1196:function(e,t,i){var a=i(1153);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("1bef839a",a,!0,{})},1268:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("div",{staticClass:"myHeader f30",attrs:{slot:"header"},slot:"header"},[i("h1",[i("span",{staticClass:"greenCR fr",on:{click:function(t){t.preventDefault(),e.created(t)}}},[e._v(e._s(e.prdID?"确认修改":"发布"))]),i("span",{on:{click:function(t){t.preventDefault(),e.goto("/")}}},[e._v("取消")])])]),i("div",{staticClass:"publish f30"},[i("div",{staticClass:"blackCR"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.paraData.desc,expression:"paraData.desc"}],attrs:{placeholder:"商品描述...",id:"text"},domProps:{value:e.paraData.desc},on:{input:function(t){t.target.composing||e.$set(e.paraData,"desc",t.target.value)}}})]),i("ul",[e._l(e.imgUrl,function(t,a){return i("li",{staticClass:"posiR imgs"},[i("p",{on:{click:function(t){t.preventDefault(),e.previewImage(e.imgUrl[a])}}},[i("img",{attrs:{src:e.imgUrl[a],alt:""}})]),i("span",{on:{click:function(t){t.preventDefault(),e.delImg(a)}}},[i("i",{staticClass:"iconfont icon-chahao f30"})])])}),e.imgUrl.length<9?i("li",{staticClass:"special posiR",on:{click:function(t){t.preventDefault(),e.chooseImg(t)}}},[i("i",{staticClass:"iconfont icon-add"})]):e._e()],2)]),i("div",{staticClass:"my-set f30"},[i("ul",{staticClass:"blackCR"},[i("li",{on:{click:function(t){t.preventDefault(),e.goto("/prd/spec"+(e.prdID?"?id="+e.prdID:""))}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-guigecanshu f30"})]),i("dd",{staticClass:"flex1"},[e._v("规格")]),i("dd",{staticClass:"tR f24 redCR"},[e._v("\n             "+e._s(e.curSpecs.length?"已添加":"")+"\n            "),i("i",{staticClass:"iconfont icon-jiantou f30"})])])]),i("li",{on:{click:function(t){t.preventDefault(),e.goto("/prd/price"+(e.prdID?"?id="+e.prdID:""))}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-jin f30"})]),i("dd",{staticClass:"flex1"},[e._v("单价")]),i("dd",{staticClass:"tR f24 redCR"},["*"==e.priceSet.spec_name&&e.priceSet.def_price?i("span",[e._v("￥"+e._s(e.priceSet.def_price))]):[e.priceRang.length?i("span",[e._v(e._s(e.priceRang))]):e._e()],i("i",{staticClass:"iconfont icon-jiantou f30"})],2)])]),i("li",{on:{click:function(t){t.preventDefault(),e.goto("/prd/other"+(e.prdID?"?id="+e.prdID:""))}}},[i("dl",{staticClass:"flexBox"},[i("dt",[i("i",{staticClass:"iconfont icon-qita f36"})]),i("dd",{staticClass:"flex1"},[e._v("其它")]),i("dd",{staticClass:"tR"},[i("i",{staticClass:"iconfont icon-jiantou f30"})])])])])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("loading",{attrs:{loading:e.loading,loadError:e.loadError},on:{closePop:function(t){e.closeDialog("loading")}}})],1)])},staticRenderFns:[]}},498:function(e,t,i){function a(e){i(1196)}var n=i(122)(i(1102),i(1268),a,"data-v-99cd9594",null);e.exports=n.exports},519:function(e,t,i){"use strict";t.__esModule=!0,t.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},520:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(e,t,i){var a=i(520);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("ae8afd90",a,!0,{})},522:function(e,t,i){function a(e){i(521)}var n=i(122)(i(519),i(523),a,"data-v-b60b2388",null);e.exports=n.exports},523:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loading?i("div",{staticClass:"newLoad animated2dot zoomIn"},[i("div",{on:{touchend:function(t){t.preventDefault(),e.closeLoading(t)}}},[i("dl",[e.loadError?i("dd",[e._v(e._s(e.loadError))]):i("dt",[e._m(0)])])])]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"loader-inner ball-spin-fade-loader"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])])}]}},525:function(e,t,i){"use strict";t.__esModule=!0;var a=i(81),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(184),r=i(123);t.default={props:{hval:{}},mounted:function(){},created:function(){var e=this;o.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(t,i){e.goback()})},computed:(0,n.default)({},(0,r.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(o.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},526:function(e,t,i){t=e.exports=i(474)(!1),t.push([e.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(e,t,i){var a=i(526);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(475)("504d8d1d",a,!0,{})},528:function(e,t,i){function a(e){i(527)}var n=i(122)(i(525),i(529),a,"data-v-a5c1fd86",null);e.exports=n.exports},529:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["my-header",{noBg:e.hval.isNobg}],style:e.isApp},[i("ul",[e.hval.noBack?i("li",{staticClass:"special opacity"},[i("i",{staticClass:"iconfont icon-fanhui f36"})]):i("li",{staticClass:"special",on:{click:function(t){t.preventDefault(),e.goback(t)}}},[i("i",{staticClass:"iconfont icon-fanhui f36"})]),i("li",{staticClass:"midli"},[e.hval.subname?i("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),e.goto(t)}}},[e.hval.share?i("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):i("span",[i("i",{staticClass:"iconfont icon-add"}),e._v(e._s(e.hval.subname))])]):e._e(),i("span",{class:{opacity0:e.hval.opacity}},[e._v("\n          "+e._s(e.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},549:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=g[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");n=t.substring(o+1),"confirm"==n&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),n=n.replace(/_/g," "),n=n.toLowerCase(),("access denied"==n||"no permission to execute"==n)&&(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function d(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],n=m[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!A.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||S||A.debug||"6.0.2">x||R.systemType<0)){var t=new Image;R.appId=A.appId,R.initTime=k.initEndTime-k.initStartTime,R.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){R.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+R.version+"&o="+R.isPreVerifyOk+"&s="+R.systemType+"&c="+R.clientVersion+"&a="+R.appId+"&n="+R.networkType+"&i="+R.initTime+"&p="+R.preVerifyTime+"&u="+R.url;t.src=i}})}}function p(){return(new Date).getTime()}function f(t){I&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function h(){L.invoke||(L.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),v=e.document,b=v.title,y=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),w=!(!_.match("mac")&&!_.match("win")),S=-1!=y.indexOf("wxdebugger"),I=-1!=y.indexOf("micromessenger"),T=-1!=y.indexOf("android"),C=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),x=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},R={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:C?1:T?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},D={_completes:[]},M={state:0,data:{}};f(function(){k.initEndTime=p()});var E=!1,B=[],L={config:function(e){A=e,l("config",e);var t=!1!==A.check;f(function(){if(t)i(m.config,{verifyJsApiList:d(A.jsApiList)},function(){D._complete=function(e){k.preVerifyEndTime=p(),M.state=1,M.data=e},D.success=function(e){R.isPreVerifyOk=0},D.fail=function(e){D._fail?D._fail(e):M.state=-1};var e=D._completes;return e.push(function(){u()}),D.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();D._completes=[]},D}()),k.preVerifyStartTime=p();else{M.state=1;for(var e=D._completes,a=0,n=e.length;n>a;++a)e[a]();D._completes=[]}}),A.beta&&h()},ready:function(e){0!=M.state?e():(D._completes.push(e),!I&&A.debug&&e())},error:function(e){"6.0.2">x||(-1==M.state?e(M.data):D._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(T){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(m.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(E=!1,B.length>0){var t=B.shift();wx.getLocalImgData(t)}},e}())):B.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(C){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(m.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(m.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(m.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(m.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(m.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(m.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},U=1,O={};return v.addEventListener("error",function(e){if(!T){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=U++,t["wx-id"]=n),O[n])return;O[n]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!T){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(O[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(t)}(window)}});