webpackJsonp([15],{1123:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=a(84),n=i(o),d=a(558),s=i(d),r=a(527),l=i(r),c=a(533),f=i(c),h=a(190),u=a(536),p=i(u),m=a(127),v=a(128),g=i(v),b=a(191),x=i(b);e.default={data:function(){return{show1:!0,header:{name:"商品管理",link:"/admin/list"},qiimgs:"",isCur:0,isSlider:0,token:"",noDataText:"",loading:!1,begin_seconds:!1,isIosvg:!1,isIosvgX:!1,submit:!1,statusBar:{},loadError:"",historyTotalPN:1,bottomBarH:[],tabs:["托管"],leftTime:"00:00:00",curFomoData:{},isApp:"",navType:"shop",paraData:{pn:1},totalTrade:"0.00000",earthData:{},checked:[],myWallet:{},storeList:[],checkboxModel:[],withDrawWids:""}},components:{loading:l.default,myhead:f.default,nodate:s.default,modalDialog:p.default},computed:(0,n.default)({},(0,m.mapState)(["PROFILE","TOKEN","UID","RECORDPRD"])),watch:{checkboxModel:{handler:function(t,e){this.checkboxModel.length===this.storeList.length?this.checked=!0:this.checked=!1},deep:!0}},mounted:function(){h.html.isPc()&&document.body.setAttribute("class","pcBody"),this.TOKEN&&(this.token=this.TOKEN,this.profile=this.PROFILE,this.paraData.uid=this.UID),dplus.track("我的托管",{from:h.html.useragent()}),document.body.addEventListener("touchstart",function(){})},methods:(0,n.default)({},(0,m.mapActions)(["switchState"]),{getStatusBar:function(){if(localStorage.bottomBarH){var t=JSON.parse(localStorage.bottomBarH);this.bottomBarH=t["padding-bottom"]}localStorage.statusBarH&&(this.isApp=JSON.parse(localStorage.statusBarH))},onRefresh:function(t){var e=this;this.totalPageCount=-1,this.paraData.pn=1,setTimeout(function(){e.fetchStore(t)},1e3)},onInfinite:function(t){this.indexDone=t,this.fetchStore(t)},fetchStore:function(t){var e=this;if(this.noData=!1,this.totalPageCount+1==this.paraData.pn||0==this.totalPageCount||1==this.totalPageCount)return void(t&&t(!0));g.default.post("/bonus_api/v1/console/list_goods",x.default.stringify({uid:this.paraData.uid,pn:this.paraData.pn,ps:50}),{headers:{"A-Token-Header":this.token}}).then(function(a){var i=a.data;i.success?(1==e.paraData.pn?(e.storeList=i.result.items,e.storeList.length||(e.noData=!0)):e.storeList=e.storeList.concat(i.result.items),console.log(e.storeList),e.paraData.pn=e.paraData.pn+1,e.historyTotalPN=i.result.totalPageCount,e.totalPageCount=i.result.totalPageCount):("403"==i.code||"250"==i.code?e.goto("/"):e.initMSG(i.codemsg),e.totalPageCount=1),t&&t()}).catch(function(t){})},single:function(t){this.withDrawWids=t,this.submit=!0},double:function(){this.withDrawWids=this.checkboxModel.join(","),this.submit=!0},accept:function(t){var e=this;g.default.post("/bonus_api/v1/console/audit_withdraw",x.default.stringify({uid:this.paraData.uid,wid:this.withDrawWids}),{headers:{"A-Token-Header":this.token}}).then(function(t){var a=t.data;a.success?(e.onRefresh(),e.initMSG("审核通过"),e.submit=!1):("403"==a.code||"250"==a.code?e.goto("/"):e.initMSG(a.codemsg),e.totalPageCount=1),done&&done()}).catch(function(t){})},checkedAll:function(){var t=this;this.checked?(this.checkboxModel=[],this.storeList.forEach(function(e){t.checkboxModel.push(e.id)})):this.checkboxModel=[]},initMSG:function(t){var e=this;this.loadError=t,this.loading=!0,setTimeout(function(){e.loadError="",e.loading=!1},3e3)},goto:function(t){this.$router.push(t)},goRecord:function(t){this.switchState({RECORDPRD:t}),this.$router.push("/admin/edit?id="+t.id)},tabChange:function(t){this.paraData.pn=1,this.isCur=t,this.fetchBack()}})}},1165:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,'.tabs[data-v-17417ee2]{padding:.4rem .4rem 0}.tabs ul li.space[data-v-17417ee2]{width:.666667rem}.tabs ul li.flex1[data-v-17417ee2]{border-radius:.133333rem;height:.933333rem;line-height:.933333rem;color:#d66167;border:1px solid #d66167;text-align:center}.tabs ul li.flex1.current[data-v-17417ee2]{background:#d66167;color:#fff;border:1px solid #d66167}.header dl[data-v-17417ee2]{padding:0 .4rem}.header dl img[data-v-17417ee2]{vertical-align:middle;margin-right:.066667rem;width:.453333rem}.header dl dd i.icon-qianbao[data-v-17417ee2]{position:relative;top:-.04rem}.header ul li[data-v-17417ee2]:first-child{border-right:1px solid #fff}.prdList[data-v-17417ee2]{padding:.4rem .4rem 1.2rem}.prdList table[data-v-17417ee2]{width:100%;text-align:center;table-layout:fixed}.prdList table tr th[data-v-17417ee2]{border-bottom:1px solid #a3a4b5;padding:.2rem 0;background:#f3f3f3}.prdList table tr td[data-v-17417ee2]{border-bottom:1px solid #c1c1cc;padding:.24rem 0}.footer dl[data-v-17417ee2]{width:100%;padding:.4rem}.footer dl p[data-v-17417ee2]{width:100%}.chk_1[data-v-17417ee2]{width:.48rem;height:.48rem;border:1px solid #a8a8a8;border-radius:50%}.chk_1[data-v-17417ee2]:checked{background:#d66167;border:none;text-align:center;line-height:.48rem}.chk_1[data-v-17417ee2]:before{color:#fff;content:"\\E631";font-family:iconfont!important;font-size:.32rem;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:middle}',""])},1209:function(t,e,a){var i=a(1165);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("28200486",i,!0,{})},1277:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{attrs:{slot:"header"},slot:"header"},[a("myhead",{attrs:{hval:t.header}})],1),a("scroller",{ref:"my_scroller",attrs:{"on-infinite":t.onInfinite,"on-refresh":t.onRefresh,noDataText:t.noDataText,loadingLayerColor:"#b0abbd"}},[a("div",{staticClass:"prdList"},[a("table",[a("thead",[a("tr",[a("th",{attrs:{width:"10%"}},[t._v("排序")]),a("th",{attrs:{width:"30%"}},[t._v("商品")]),a("th",[t._v("开始时间")]),a("th",[t._v("结束时间")]),a("th",{attrs:{width:"10%"}},[t._v("状态")]),a("th",{attrs:{width:"10%"}},[t._v("操作")])])]),a("tbody",t._l(t.storeList,function(e,i){return a("tr",[a("td",[t._v(t._s(e.seq))]),a("td",[t._v("\n              "+t._s(e.title)+"\n            ")]),a("td",[t._v(t._s(e.begin_time))]),a("td",[t._v(t._s(e.end_time))]),a("td",{staticClass:"blueCR"},[t._v("\n              "+t._s(e.status?"正常":"下架")+"\n              "),a("p",{staticClass:"grayCR"},[t._v(t._s((new Date).getTime()>new Date(e.end_time.split("-").join("/")).getTime()?"已过期":""))])]),a("td",{staticClass:"redCR",on:{click:function(a){a.preventDefault(),t.goRecord(e)}}},[t._v("\n              编辑\n            ")])])}),0)]),t.storeList.length?t._e():a("div",{staticClass:"tC"},[a("nodate",{attrs:{noText:"暂无数据"}})],1)])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"footer tC f30"},[a("dl",[a("dd",[a("p",{staticClass:"btn btn-default",on:{click:function(e){e.preventDefault(),t.goto("/admin/edit")}}},[t._v("添加商品")])])])])])],1)},staticRenderFns:[]}},486:function(t,e,a){function i(t){a(1209)}var o=a(126)(a(1123),a(1277),i,"data-v-17417ee2",null);t.exports=o.exports},524:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},525:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".newLoad[data-v-4c82f682]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-4c82f682]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-4c82f682]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-4c82f682]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-4c82f682]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-4c82f682]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-4c82f682]{position:relative}.ball-spin-fade-loader>div[data-v-4c82f682]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-4c82f682 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-4c82f682 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-4c82f682]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-4c82f682{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},526:function(t,e,a){var i=a(525);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("c38d91e8",i,!0,{})},527:function(t,e,a){function i(t){a(526)}var o=a(126)(a(524),a(528),i,"data-v-4c82f682",null);t.exports=o.exports},528:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(e){return e.preventDefault(),t.closeLoading(e)}}},[a("dl",[t.loadError?a("dd",[t._v(t._s(t.loadError))]):a("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},530:function(t,e,a){"use strict";e.__esModule=!0;var i=a(84),o=function(t){return t&&t.__esModule?t:{default:t}}(i),n=a(190),d=a(127);e.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;n.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(e,a){t.goback()})},computed:(0,o.default)({},(0,d.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(n.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},531:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".my-header[data-v-d3e6e34c]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-d3e6e34c]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-d3e6e34c]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-d3e6e34c]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-d3e6e34c]{position:relative;top:.026667rem}.my-header ul li.special[data-v-d3e6e34c]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-d3e6e34c]{opacity:0}.my-header ul li>[data-v-d3e6e34c]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-d3e6e34c]{margin-right:.066667rem}.noBg[data-v-d3e6e34c]{background:none}.opacity0[data-v-d3e6e34c]{opacity:0}",""])},532:function(t,e,a){var i=a(531);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("21d3127e",i,!0,{})},533:function(t,e,a){function i(t){a(532)}var o=a(126)(a(530),a(534),i,"data-v-d3e6e34c",null);t.exports=o.exports},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[a("ul",[t.hval.noBack?a("li",{staticClass:"special opacity"},[a("i",{staticClass:"iconfont icon-fanhui f36"})]):a("li",{staticClass:"special",on:{click:function(e){return e.preventDefault(),t.goback(e)}}},[a("i",{staticClass:"iconfont icon-fanhui f36"})]),a("li",{staticClass:"midli"},[t.hval.subname?a("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.goto(e)}}},[t.hval.share?a("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):a("span",[a("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),a("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},536:function(t,e,a){function i(t){a(541)}var o=a(126)(a(538),a(542),i,"data-v-64c058d6",null);t.exports=o.exports},538:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},539:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,'.footerP[data-v-64c058d6]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-64c058d6]{display:none}.dialogMask[data-v-64c058d6]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-64c058d6]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-64c058d6]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-64c058d6]{visibility:visible}.dialog-active .dialog-content[data-v-64c058d6]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-64c058d6]{opacity:1;visibility:visible}.dialog-content[data-v-64c058d6]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-64c058d6]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-64c058d6]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-64c058d6]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-64c058d6]{padding:2em}.dialog-body .error[data-v-64c058d6]{font-size:1.2em;color:salmon}.dialog-footer[data-v-64c058d6]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-64c058d6]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-64c058d6]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-64c058d6]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-64c058d6]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-64c058d6]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-64c058d6]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-64c058d6]{font-size:.533333rem}.rotate[data-v-64c058d6]{cursor:pointer}.rotate[data-v-64c058d6]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-64c058d6]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-64c058d6]{display:none}.borNone[data-v-64c058d6]{border:none!important}.dialog-active[close=false] .close[data-v-64c058d6]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-64c058d6]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-64c058d6]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-64c058d6]{display:none}@keyframes slideInDown-data-v-64c058d6{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-64c058d6]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-64c058d6}@keyframes bounceIn-data-v-64c058d6{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-64c058d6]{text-align:center}',""])},541:function(t,e,a){var i=a(539);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("673640fb",i,!0,{})},542:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isActive?a("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[a("div",{staticClass:"dialog"},[a("div",{class:["dialog-content",{slideInDown:t.isActive},{noCloseText_tc:t.noCloseText}]},[a("div",{staticClass:"diaplg-border"},[t.dialogClose?a("div",{staticClass:"close rotate",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[a("span",{staticClass:"iconfont icon-close redCR"},[t._v(t._s(t.closeText))])]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?a("div",{staticClass:"dialogMask",on:{click:function(e){return e.preventDefault(),t.closeDefault(e)}}}):t._e()]):t._e()},staticRenderFns:[]}},555:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:["noText"],computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},methods:{closeDefault:function(t){console.log(t),this.$emit("hide")},close:function(t){this.$emit("hide")}}}},556:function(t,e,a){e=t.exports=a(478)(!1),e.push([t.i,".nodata[data-v-67784088]{padding-top:.4rem;text-align:center;color:#a8a8aa}.nodata p i[data-v-67784088]{font-size:1.146667rem}",""])},557:function(t,e,a){var i=a(556);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(479)("98fd0c46",i,!0,{})},558:function(t,e,a){function i(t){a(557)}var o=a(126)(a(555),a(559),i,"data-v-67784088",null);t.exports=o.exports},559:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nodata"},[t._m(0),t._v("\n  "+t._s(t.noText)+"\n")])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",{staticClass:"iconfont icon-jilu"})])}]}}});