webpackJsonp([22],{1144:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var o=e(81),n=i(o),r=e(522),d=i(r),l=e(553),s=i(l),c=e(531),f=i(c),b=e(123),m=e(185),u=e(124),v=i(u),p=e(186),h=i(p);a.default={data:function(){return{show1:!0,header:{name:"我的关注",link:"/my"},token:"",loading:!1,noData:!1,diliver:!1,notes:!1,notify:!0,statusBar:{},loadError:"",bottomBarH:[],isApp:"",noDataText:"",paraData:{ps:20,pn:1},minDate:"2018-1-01",profile:{},listData:[],navType:"order",headImg:"",hasClick:!1,remark:"",deliver:"",deliver_no:"",totalBuy:0,sellerInfo:{},myContact:!1}},components:{loading:d.default,modalDialog:f.default,nodate:s.default},computed:(0,n.default)({},(0,b.mapState)(["UID","TOKEN","PROFILE","STATUSBARH"])),created:function(){m.html.isWechat()&&(this.header.opacity=!0)},mounted:function(){m.html.isWebAndroid()&&(this.isAndroid=!0),this.TOKEN&&(this.paraData.uid=this.UID,this.token=this.TOKEN),document.body.addEventListener("touchstart",function(){}),dplus.track("我的关注",{from:m.html.useragent()})},methods:{getList:function(t){var a=this;if(this.totalPageCount+1==this.paraData.pn||0==this.totalPageCount||1==this.totalPageCount)return void(t&&t(!0));this.noData=!1,v.default.post("/seller_api/v1/seller/my_subscribe",h.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){var i=e.data;if(i.success){var o=i.result;a.totalPageCount=1,1==a.paraData.pn?(a.listData=o.items,a.listData.length<6&&(a.noDataText=""),0==a.listData.length&&(a.noData=!0)):a.listData=a.listData.concat(o.items),a.totalBuy=i.result.totalItemsCount,a.loading=!1,a.paraData.pn=a.paraData.pn+1}else"403"==i.code||i.code;t&&t(!0)}).catch(function(a){t&&t(!0)})},head_url:function(t){return this.globalAvatar+t+"?imageView2/2/w/90/h/90/"},onRefresh:function(t){var a=this;this.refreshed||(this.refreshed=!0,setTimeout(function(){a.refreshed=!1,a.totalPageCount=-1,a.paraData.pn=1,a.getList(t)},1e3))},onInfinite:function(t){var a=this;this.infinited||(this.infinited=!0,setTimeout(function(){a.infinited=!1,a.indexDone=t,a.getList(t)},500))},initMSG:function(t){var a=this;this.loadError=t,this.loading=!0,setTimeout(function(){a.loadError="",a.loading=!1},2e3)},goto:function(t){this.$router.push(t)}}}},1180:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,"ul li[data-v-6f76e134]{margin-left:.4rem;border-bottom:1px solid #ebebeb}.head_image[data-v-6f76e134]{width:1.6rem;height:2rem}.head_image img[data-v-6f76e134]{width:1.2rem;height:1.2rem;margin-top:.4rem;border-radius:.2rem}.mR30[data-v-6f76e134]{margin-right:.4rem}.nick[data-v-6f76e134]{font-size:.4rem;color:#000;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.goods_num[data-v-6f76e134]{font-size:.28rem;color:#7f7f7f}.new[data-v-6f76e134],.new_warp[data-v-6f76e134]{width:.8rem;height:.4rem}.new[data-v-6f76e134]{margin-top:.133333rem;background-color:#ff8400;color:#fff;font-size:.24rem;border-radius:.2rem;text-align:center}.go[data-v-6f76e134]{position:absolute;top:50%;margin-top:-.133333rem;right:0}.footer dl[data-v-6f76e134]{width:100%;padding:.4rem}.footer dl p[data-v-6f76e134]{width:100%;font-size:.28rem;color:#7f7f7f}",""])},1224:function(t,a,e){var i=e(1180);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("3028a69e",i,!0,{})},1292:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("scroller",{ref:"my_scroller",attrs:{"on-refresh":t.onRefresh,noDataText:t.noDataText,"on-infinite":t.onInfinite}},[t._l(t.listData,function(a,i){return e("ul",[e("li",{on:{click:function(e){t.goto("/prd/list?seller="+a.seller+"&refresh=true")}}},[e("dl",{staticClass:"flexBox"},[e("dt",{staticClass:"head_image"},[e("img",{attrs:{src:t.head_url(a.avatar),alt:""}})]),e("dd",{staticClass:"flex1 f30"},[e("div",[e("p",{staticClass:"nick"},[t._v(t._s(a.nick))]),e("p",{staticClass:"goods_num"},[t._v("发布"),e("span",[t._v(t._s(a.goods_count))]),t._v("件商品")]),a.newgoods?e("p",{staticClass:"new"},[t._v("上新")]):t._e()])]),e("dd",{staticClass:"tR mR30"},[e("i",{staticClass:"iconfont icon-jiantou f24"})])])])])}),t.noData?e("div",{staticClass:"tC noDataDiv"},[e("nodate",{attrs:{noText:"暂无数据"}})],1):t._e()],2),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"footer tC f30"},[e("dl",[e("dd",[e("p",{on:{click:function(a){a.preventDefault(),t.redirect(a)}}},[t._v("闲时逛逛，增进感情")])])])]),e("loading",{attrs:{loading:t.loading,loadError:t.loadError}})],1)],1)},staticRenderFns:[]}},503:function(t,a,e){function i(t){e(1224)}var o=e(122)(e(1144),e(1292),i,"data-v-6f76e134",null);t.exports=o.exports},518:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(t,a,e){var i=e(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("ae8afd90",i,!0,{})},522:function(t,a,e){function i(t){e(521)}var o=e(122)(e(518),e(523),i,"data-v-b60b2388",null);t.exports=o.exports},523:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loading?e("div",{staticClass:"newLoad animated2dot zoomIn"},[e("div",{on:{touchend:function(a){a.preventDefault(),t.closeLoading(a)}}},[e("dl",[t.loadError?e("dd",[t._v(t._s(t.loadError))]):e("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner ball-spin-fade-loader"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}]}},531:function(t,a,e){function i(t){e(536)}var o=e(122)(e(533),e(537),i,"data-v-369b7310",null);t.exports=o.exports},533:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},534:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-369b7310]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-369b7310]{text-align:center}',""])},536:function(t,a,e){var i=e(534);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("425b9258",i,!0,{})},537:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isActive?e("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[e("div",{staticClass:"dialog"},[e("div",{class:["dialog-content",{slideInDown:t.isActive},{noCloseText_tc:t.noCloseText}]},[e("div",{staticClass:"diaplg-border"},[t.dialogClose?e("div",{staticClass:"close rotate",on:{click:function(a){a.preventDefault(),t.close(a)}}},[e("span",{staticClass:"iconfont icon-close redCR"},[t._v(t._s(t.closeText))])]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?e("div",{staticClass:"dialogMask",on:{click:function(a){a.preventDefault(),t.closeDefault(a)}}}):t._e()]):t._e()},staticRenderFns:[]}},550:function(t,a,e){"use strict";a.__esModule=!0,a.default={props:["noText"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){console.log(t),this.$emit("hide")},close:function(t){this.$emit("hide")}}}},551:function(t,a,e){a=t.exports=e(473)(!1),a.push([t.i,".nodata[data-v-39535ac2]{padding-top:.4rem;text-align:center;color:#a8a8aa}.nodata p i[data-v-39535ac2]{font-size:1.146667rem}",""])},552:function(t,a,e){var i=e(551);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(474)("521cc39c",i,!0,{})},553:function(t,a,e){function i(t){e(552)}var o=e(122)(e(550),e(554),i,"data-v-39535ac2",null);t.exports=o.exports},554:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"nodata"},[t._m(0),t._v("\n  "+t._s(t.noText)+"\n")])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("i",{staticClass:"iconfont icon-jilu"})])}]}}});