webpackJsonp([26],{1118:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=a(125),d=i(o),n=a(81),l=i(n),s=a(185),r=a(528),c=i(r),f=a(531),p=i(f),u=a(522),v=i(u),h=a(123),m=a(124),b=i(m),g=a(186),x=i(g);e.default={data:function(){return{header:{name:"公告管理",link:"/admin/list"},loading:!1,loadError:"",paraData:{},news:{title:"",desc:"",link:""},listData:[],delFlag:!1,curIndex:null,delSk:""}},components:{myhead:c.default,loading:v.default,modalDialog:p.default},computed:(0,l.default)({},(0,h.mapState)(["PROFILE","TOKEN","UID"])),mounted:function(){this.TOKEN&&(this.token=this.TOKEN,this.paraData.uid=this.UID,this.profile=this.PROFILE),s.html.isPc()&&document.body.setAttribute("class","pcBody"),this.fetchNews()},methods:{initMSG:function(t){var e=this;this.loading=!0,this.loadError=t,setTimeout(function(){e.loading=!1,e.loadError=""},2e3)},addNews:function(){var t=this;if(!this.news.title||!this.news.desc)return void this.initMSG("请填写完成内容");this.news.time=(new Date).getFullYear()+"."+((new Date).getMonth()+1)+"."+(new Date).getDate(),this.paraData.msg=(0,d.default)(this.news),b.default.post("/bonus_api/v1/bonus/push_notify",x.default.stringify(this.paraData),{headers:{"A-Token-Header":this.token}}).then(function(e){var a=e.data;a.result?(t.fetchNews(),t.initMSG("添加成功"),t.news.title="",t.news.desc="",t.news.link=""):t.initMSG(a.codemsg)}).catch(function(e){t.initMSG("网络异常，请稍后再试")})},fetchNews:function(){var t=this;b.default.post("/bonus_api/v1/bonus/fetch_notify",x.default.stringify({uid:this.paraData.uid,start:0,count:5e4},{headers:{"A-Token-Header":this.token}}),{headers:{"A-Token-Header":this.token}}).then(function(e){var a=e.data;a.result&&(t.listData=a.result)}).catch(function(t){})},delNews:function(){var t=this;b.default.post("/bonus_api/v1/bonus/del_notify",x.default.stringify({uid:this.paraData.uid,id:this.curIndex}),{headers:{"A-Token-Header":this.token}}).then(function(e){var a=e.data;a.result?(t.initMSG("删除成功"),t.fetchNews(),t.delFlag=!1):t.initMSG(a.codemsg)}).catch(function(e){t.initMSG("网络异常，请稍后再试")})},closeDialog:function(){this.delFlag=!1}}}},1183:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,".webImg[data-v-7d09239e]{padding-top:.666667rem}.webImg dl[data-v-7d09239e]{background-size:209;padding-bottom:.4rem}.dls dd[data-v-7d09239e],.dls dt[data-v-7d09239e]{vertical-align:top;display:inline-block;*display:inline;*zoom:1}.dls[data-v-7d09239e]{width:100%;line-height:.48rem}.dls dt[data-v-7d09239e]{width:20%;padding-right:.2rem;text-align:right;vertical-align:top;padding-top:.066667rem}.dls dd[data-v-7d09239e]{width:70%}.dls dd input[data-v-7d09239e]{line-height:.4rem;padding:.133333rem;border-radius:.066667rem;width:90%}.dls dd textarea[data-v-7d09239e]{border:1px solid #99a6a9;border-radius:.133333rem}.dls dd button[data-v-7d09239e],.dls dd textarea[data-v-7d09239e]{width:90%;box-sizing:border-box}.dls dd select[data-v-7d09239e]{width:100%;box-sizing:border-box}.dls textarea[data-v-7d09239e]{min-height:2rem;text-align:left;line-height:.266667rem;padding:.133333rem;resize:none}.delNews[data-v-7d09239e]{padding-top:.666667rem;margin-top:.666667rem;border-top:1px solid #99a6a9}.delNews h5[data-v-7d09239e]{padding-left:.2rem}.delNews dl[data-v-7d09239e]{display:-ms-flexbox;display:flex;padding:.266667rem;border-bottom:1px dashed #99a6a9}.guestCON input[data-v-7d09239e]{width:100%;height:.533333rem;line-height:.533333rem;border-bottom:1px solid #99a6a9;margin:.266667rem 0}.delNews dt[data-v-7d09239e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.delNews dd[data-v-7d09239e]{width:1.066667rem;text-align:center;cursor:pointer}.pcBody .wrap[data-v-7d09239e]{width:650px;margin:0 auto}",""])},1227:function(t,e,a){var i=a(1183);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("21d1cd4a",i,!0,{})},1295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("myhead",{attrs:{slot:"header",hval:t.header},slot:"header"}),a("div",{staticClass:"webImg"},[a("dl",{staticClass:"dls"},[a("dt",[t._v("\n            标题\n        ")]),a("dd",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.news.title,expression:"news.title"}],attrs:{type:"text",placeholder:"必填项"},domProps:{value:t.news.title},on:{input:function(e){e.target.composing||t.$set(t.news,"title",e.target.value)}}})])]),a("dl",{staticClass:"dls"},[a("dt",[t._v("\n            正文\n        ")]),a("dd",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.news.desc,expression:"news.desc"}],staticClass:"blackCR desc",domProps:{value:t.news.desc},on:{input:function(e){e.target.composing||t.$set(t.news,"desc",e.target.value)}}})])]),a("dl",{staticClass:"dls"},[a("dt",[t._v("\n            链接\n        ")]),a("dd",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.news.link,expression:"news.link"}],attrs:{type:"text",placeholder:"请以 / 开头"},domProps:{value:t.news.link},on:{input:function(e){e.target.composing||t.$set(t.news,"link",e.target.value)}}})])]),a("dl",{staticClass:"dls"},[a("dt",[t._v("\n             \n        ")]),a("dd",[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addNews(e)}}},[t._v("添加")])])])]),a("div",{staticClass:"delNews"},[a("h5",{staticClass:"f30 redCR"},[t._v("所有公告列表")]),t._l(t.listData,function(e,i){return a("dl",{staticClass:"flexBox"},[a("dt",{staticClass:"flex1"},[t._v(t._s(i+1)+"、"+t._s(JSON.parse(e).title)+" ")]),a("dd",{staticClass:"redCR",on:{click:function(e){e.preventDefault(),t.delFlag=!0,t.curIndex=i}}},[t._v("删除")])])})],2),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("loading",{attrs:{loading:t.loading,loadError:t.loadError}}),a("modal-dialog",{attrs:{dialogshow2:t.delFlag},on:{"update:dialogshow2":function(e){t.delFlag=e},hide:function(e){t.closeDialog("delFlag")}}},[a("div",{staticClass:"dialog-header",attrs:{slot:"dialog-header"},slot:"dialog-header"},[t._v("\n          确定要删除这条新闻了吗? \n        ")]),a("dl",{staticClass:"dialog-footer",attrs:{slot:"dialog-footer"},slot:"dialog-footer"},[a("dd",{on:{click:function(e){e.preventDefault(),t.delNews(e)}}},[a("button",{attrs:{type:"button"}},[t._v("确定")])])])])],1)],1)},staticRenderFns:[]}},479:function(t,e,a){function i(t){a(1227)}var o=a(122)(a(1118),a(1295),i,"data-v-7d09239e",null);t.exports=o.exports},518:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:{loading:"",loadError:""},mounted:function(){},methods:{closeLoading:function(){this.loadError&&this.$emit("closePop")}}}},519:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,".newLoad[data-v-b60b2388]{position:fixed;z-index:9999;left:0;bottom:0;top:0;right:0;text-align:center;display:table;height:100%;width:100%}.newLoad>div[data-v-b60b2388]{display:table-cell;vertical-align:middle}.newLoad dl[data-v-b60b2388]{background:rgba(0,0,0,.9);border-radius:.106667rem;min-width:1.6rem;font-size:.32rem;display:inline-block;color:#d3d3d3}.newLoad dl dd[data-v-b60b2388]{padding:0 .2rem;line-height:1.333333rem}.newLoad dl dt[data-v-b60b2388]{padding:.666667rem 0 0;overflow:hidden}.loader[data-v-b60b2388]{padding:0 0 0 .666667rem;height:.933333rem}.ball-spin-fade-loader[data-v-b60b2388]{position:relative}.ball-spin-fade-loader>div[data-v-b60b2388]:first-child{top:.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s 0s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(2){top:.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .12s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(3){top:0;left:.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .24s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(4){top:-.227273rem;left:.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .36s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(5){top:-.333333rem;left:0;animation:ball-spin-fade-loader-data-v-b60b2388 1s .48s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(6){top:-.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .6s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(7){top:0;left:-.333333rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .72s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]:nth-child(8){top:.227273rem;left:-.227273rem;animation:ball-spin-fade-loader-data-v-b60b2388 1s .84s infinite linear}.ball-spin-fade-loader>div[data-v-b60b2388]{background-color:#fff;width:.2rem;height:.2rem;border-radius:100%;margin:.026667rem;animation-fill-mode:both;position:absolute}@keyframes ball-spin-fade-loader-data-v-b60b2388{50%{opacity:.3;transform:scale(.4)}to{opacity:1;transform:scale(1)}}",""])},521:function(t,e,a){var i=a(519);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("ae8afd90",i,!0,{})},522:function(t,e,a){function i(t){a(521)}var o=a(122)(a(518),a(523),i,"data-v-b60b2388",null);t.exports=o.exports},523:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"newLoad animated2dot zoomIn"},[a("div",{on:{touchend:function(e){e.preventDefault(),t.closeLoading(e)}}},[a("dl",[t.loadError?a("dd",[t._v(t._s(t.loadError))]):a("dt",[t._m(0)])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-spin-fade-loader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}]}},525:function(t,e,a){"use strict";e.__esModule=!0;var i=a(81),o=function(t){return t&&t.__esModule?t:{default:t}}(i),d=a(185),n=a(123);e.default={props:{hval:{}},mounted:function(){},created:function(){var t=this;d.html.isWawaAndroid()&&webBridgeAndroid.registerHandler("onBack",function(e,a){t.goback()})},computed:(0,o.default)({},(0,n.mapState)(["STATUSBARH","BOTTOMBARH"]),{isApp:function(){if(d.html.isWawa())return{"padding-top":this.STATUSBARH+"px"}}}),methods:{goback:function(){this.hval.popTips?this.$emit("popshow"):(this.$router.isBack=!0,this.hval.link?this.$router.replace(this.hval.link):window.history.go(-1))},goto:function(){this.hval.subFunc||this.hval.share?this.$emit("popshow"):this.$router.replace(this.hval.sublink)}}}},526:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,".my-header[data-v-a5c1fd86]{background:#37363b;color:#fff;font-size:.48rem;text-align:center;position:relative}.my-header ul[data-v-a5c1fd86]{width:100%;display:-ms-flexbox;display:flex;height:1.466667rem;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 .4rem 0 0;color:#fff}.my-header ul li.midli[data-v-a5c1fd86]{-ms-flex:1;flex:1;width:0;position:relative;text-align:center;padding-right:.666667rem;font-size:.48rem}.my-header .midli a[data-v-a5c1fd86]{position:absolute;right:0;padding:.04rem 0 .106667rem .133333rem}.my-header ul li.midli span[data-v-a5c1fd86]{position:relative;top:.026667rem}.my-header ul li.special[data-v-a5c1fd86]{padding-left:.4rem}.my-header ul li.special.opacity[data-v-a5c1fd86]{opacity:0}.my-header ul li>[data-v-a5c1fd86]{touch-callout:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-add[data-v-a5c1fd86]{margin-right:.066667rem}.noBg[data-v-a5c1fd86]{background:none}.opacity0[data-v-a5c1fd86]{opacity:0}",""])},527:function(t,e,a){var i=a(526);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("504d8d1d",i,!0,{})},528:function(t,e,a){function i(t){a(527)}var o=a(122)(a(525),a(529),i,"data-v-a5c1fd86",null);t.exports=o.exports},529:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["my-header",{noBg:t.hval.isNobg}],style:t.isApp},[a("ul",[t.hval.noBack?a("li",{staticClass:"special opacity"},[a("i",{staticClass:"iconfont icon-fanhui f36"})]):a("li",{staticClass:"special",on:{click:function(e){e.preventDefault(),t.goback(e)}}},[a("i",{staticClass:"iconfont icon-fanhui f36"})]),a("li",{staticClass:"midli"},[t.hval.subname?a("a",{staticClass:"f30 whiteCR",attrs:{href:"javascript:;"},on:{click:function(e){e.preventDefault(),t.goto(e)}}},[t.hval.share?a("i",{staticClass:"iconfont icon-zhuanfa f36 whiteCR"}):a("span",[a("i",{staticClass:"iconfont icon-add"}),t._v(t._s(t.hval.subname))])]):t._e(),a("span",{class:{opacity0:t.hval.opacity}},[t._v("\n          "+t._s(t.hval.name)+"\n        ")])])])])},staticRenderFns:[]}},531:function(t,e,a){function i(t){a(536)}var o=a(122)(a(533),a(537),i,"data-v-369b7310",null);t.exports=o.exports},533:function(t,e,a){"use strict";e.__esModule=!0,e.default={props:["dialogshow2","closeShow","noClickBg","noCloseText"],data:function(){return{closeText:"关闭"}},computed:{isActive:function(){return this.dialogshow2},dialogClose:function(){return!this.closeShow||this.closeShow}},mounted:function(){this.noCloseText&&(this.closeText="")},methods:{closeDefault:function(t){this.noClickBg||this.$emit("hide")},close:function(t){this.$emit("hide")}}}},534:function(t,e,a){e=t.exports=a(473)(!1),e.push([t.i,'.footerP[data-v-369b7310]{text-align:right;padding:0 1.066667rem .4rem;font-size:.186667rem}#dialog-template[data-v-369b7310]{display:none}.dialogMask[data-v-369b7310]{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;z-index:53}.dialogs[data-v-369b7310]{display:table;content:"";position:absolute;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:55;margin:auto;width:100%}.dialog[data-v-369b7310]{display:table-cell;vertical-align:middle;perspective:6.666667rem;position:relative;z-index:54}.dialog-active[data-v-369b7310]{visibility:visible}.dialog-active .dialog-content[data-v-369b7310]{opacity:1;position:relative;transform:rotateY(0)}.dialog-active~.dialog-overlay[data-v-369b7310]{opacity:1;visibility:visible}.dialog-content[data-v-369b7310]{border-radius:.266667rem;margin:0 auto;background:#fff;background-size:100%;width:90%;height:auto;padding:.666667rem .4rem;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.diaplg-border[data-v-369b7310]{width:100%;color:#000;line-height:.533333rem}.dialog-header[data-v-369b7310]{font-size:.4rem;border-bottom:1px solid silver;padding-bottom:.266667rem;margin-bottom:.266667rem;text-align:center;position:relative;z-index:2}.dialog-title[data-v-369b7310]{padding:.8rem 0 .333333rem;text-align:center;color:#fff}.dialog-body[data-v-369b7310]{padding:2em}.dialog-body .error[data-v-369b7310]{font-size:1.2em;color:salmon}.dialog-footer[data-v-369b7310]{padding:.533333rem 0 0;display:-ms-flexbox;display:flex;width:100%}.dialog-footer dd[data-v-369b7310]{-ms-flex:1;flex:1;width:0;text-align:center;font-size:.4rem;padding:.066667rem;position:relative}.dialog-footer dd[data-v-369b7310]:last-child:before{border-left:1px solid #dedede;position:absolute;left:0;top:0;bottom:0;width:.013333rem}.dialog-footer dd button[data-v-369b7310]{width:90%;height:.933333rem;line-height:.933333rem;color:#fff;font-size:.32rem}.dialog-footer dd:first-child button[data-v-369b7310]{background:#fff;border:.013333rem solid #51aa38!important;color:#51aa38!important}.dialog-overlay[data-v-369b7310]{content:"";position:fixed;visibility:hidden;top:0;left:0;right:0;bottom:0;z-index:5;opacity:0;background:rgba(0,0,0,.7);transition:all .6s}.close[data-v-369b7310]{display:inline-block;position:absolute;top:.133333rem;right:.133333rem;color:#333;text-decoration:none;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:10}.close .iconfont[data-v-369b7310]{font-size:.533333rem}.rotate[data-v-369b7310]{cursor:pointer}.rotate[data-v-369b7310]:hover{transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn);transition:transform all 1s ease;-moz-transition:-moz-transform 1s ease all;-webkit-transition:-webkit-transform all 1s ease}.loading-overlay[data-v-369b7310]{content:"";position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;opacity:1;background:rgba(0,0,0,.5);transition:all .6s}.dialog-active[fail=true] .close[data-v-369b7310]{display:none}.borNone[data-v-369b7310]{border:none!important}.dialog-active[close=false] .close[data-v-369b7310]{opacity:0;right:-133.333333rem}.dialog-active[defaultlock=true] .close[data-v-369b7310]{display:none}.dialog-active[defaultlock=true] .dialog-content[data-v-369b7310]{border:none;padding:0;background:none}.dialog-active[noclose=true] .close[data-v-369b7310]{display:none}@keyframes slideInDown-data-v-369b7310{0%{opacity:.5;transform:translateY(-6.666667rem)}to{transform:translateY(0)}}.slideInDown[data-v-369b7310]{animation-duration:.2s;animation-fill-mode:both;animation-name:bounceIn-data-v-369b7310}@keyframes bounceIn-data-v-369b7310{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}.noCloseText_tc[data-v-369b7310]{text-align:center}',""])},536:function(t,e,a){var i=a(534);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(474)("425b9258",i,!0,{})},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isActive?a("div",{staticClass:"dialogs",class:{"dialog-active":t.isActive}},[a("div",{staticClass:"dialog"},[a("div",{class:["dialog-content",{slideInDown:t.isActive},{noCloseText_tc:t.noCloseText}]},[a("div",{staticClass:"diaplg-border"},[t.dialogClose?a("div",{staticClass:"close rotate",on:{click:function(e){e.preventDefault(),t.close(e)}}},[a("span",{staticClass:"iconfont icon-close redCR"},[t._v(t._s(t.closeText))])]):t._e(),t._t("dialog-header"),t._t("dialog-body"),t._t("dialog-footer")],2)])]),t.isActive?a("div",{staticClass:"dialogMask",on:{click:function(e){e.preventDefault(),t.closeDefault(e)}}}):t._e()]):t._e()},staticRenderFns:[]}}});