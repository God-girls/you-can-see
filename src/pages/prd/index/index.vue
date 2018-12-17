
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import myhead from '../../../components/base/header'
import myfooter from '../../../components/base/footer'
import nodate from '../../../components/base/nodate'
import loading from '../../../components/base/loading'
import modalDialog from '../../../components/base/dialog'
import {html} from '../../../assets/js/global.js';
import dialogDel from '../../../components/base/dialogDel'
import endWechat from '../../../components/base/endWechat'
import endWechat2 from '../../../components/base/endWechat2'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    modalDialog,
    myfooter,
    loading,
    dialogDel,
    nodate,
    endWechat,
    endWechat2
  },
  data () {
    return {
      listData: [], // 下拉更新数据存放数组
      isCur: 0,
      isSlider:0,
      header:{
        'name':'小小麦',
        'link':'/diamond_record',
        noBack:true
      },
      isApp:false,
      needLogin:false,
      success:false,
      noData:false,
      noDataText:'',
      paraData:{
        uid:'1',
        pn:1,
        ps:5
      },
      headImg:'',
      token:'',
      onlyWechat:false,
      loading:false,
      loadError:'',
      iAmGuest:false,
      iAmGuestClick:false,
      popBuy:false,
      popFriend:false,
      changebg:false,
      countBonus:0,
      statusBar:{},
      bottomBarH:'',
      navType:'home',
      profile:{},
      reply:false,
      placeholder:'评论',
      fetBonusType:[],
      popDel:{
        title:['关注该卖家'],
        content:['关注']
      },
      popIndex:0,
      del:false,
      scrollFlag:false,
      scrollLeftpx:'',
      noticeData:[],
      totalBonus:0,
      sellerInfo:{
        background:''
      },
      comment:{
        tips:'',
        cid:'',
        gid:''
      },
      // mySeller:'',
      goodid:'',
      inWeixin:false,
      myContact:false,
      wechat_code:false,
      wechat_code_show:false,
      isSubscribed:false,//微信是否关注
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'BOTTOMBARH',
      'LISTDATA'
    ])
  },
  mounted () {
      // alert(navigator.userAgent.toLowerCase())
    if (html.isInqq() || html.isWechat()) {
      this.inWeixin = true;
    }

      if (this.$route.query.seller) {
        this.paraData.seller = this.$route.query.seller
      }
      if (this.$route.query.goodid) {
        this.goodid = this.$route.query.goodid
      }

      if (this.$route.query.token) {
        this.paraData.uid = this.$route.query.uid;
        this.token = unescape(this.$route.query.token);

        this.switchState({
          TOKEN:this.token,
          UID:this.paraData.uid
        })

      }else if (this.TOKEN){

        this.token = this.TOKEN;
        this.paraData.uid = this.UID;  
        this.profile = this.PROFILE;
        if (this.LISTDATA.length) 
          this.listData = this.LISTDATA

      }

      if (html.isWawa()) {
        this.isApp = true;

        this.getStatusBar();
        this.initBridge();
      }   
      this.defaultData();


    if (html.isWechat()) {
      this.getShare ();
    }
    dplus.track('首页',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {}); 
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState',
    ]),
    getStatusBar(){

      if (this.$route.query.statusBarH ) {
        this.statusBar = (Number(this.$route.query.statusBarH) ? Number(this.$route.query.statusBarH)*2 : 0) +'px';
        this.switchState({
          STATUSBARH:Number(this.$route.query.statusBarH) ? Number(this.$route.query.statusBarH)*2 : 0,
        })
      }
      //通过缓存获取

      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
      if (html.isWawaIos()) {
        if (this.$route.query.bottomBarH) {
          this.bottomBarH = {'padding-bottom':(Number(this.$route.query.bottomBarH) ? Number(this.$route.query.bottomBarH)*2+30 : 0) +'px'};
          this.switchState({
            BOTTOMBARH:(Number(this.$route.query.bottomBarH) ? Number(this.$route.query.bottomBarH)*2+30 : 0),
          })
        }
        if (this.BOTTOMBARH) {
          this.bottomBarH = {'padding-bottom':this.BOTTOMBARH +'px'};     
        }
      }

    },
    initBridge(){
      var vm = this;
      if (html.isWawaIos()) {
        setupWebViewJavascriptBridge(function(webBridge) {
          bridgeLogin(webBridge)
        });
      }else if (html.isWawaAndroid()){
        bridgeLogin();
      }
      function bridgeLogin(param){
        var webBridge = param ? param : webBridgeAndroid;
        webBridge.callHandler('loadOk');
        webBridge.registerHandler('notification', (data, responseCallback) =>{
          if (data == 'DidBecomeActive') {//成功
            vm.defaultData()
          }
        })    
      }
    },
    isYestday (theDate){
        var date = (new Date());    //当前时间
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime(); //今天凌晨
        var yestday = new Date(today - 24*3600*1000).getTime();
        return theDate < today && yestday <= theDate;
    },
    formatDateTime(inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        // return y+'-'+m+'-'+d+' '+' '+h+':'+minute+':'+second;
        return y+'-'+m+'-'+d;
    },
    previewImage(currentImg,totalImg){
      let tempUrls = []
      let tempTotal = JSON.parse(totalImg)
      for (var i = 0; i < tempTotal.length; i++) {
        tempUrls.push(this.globalAvatar+'goods/'+tempTotal[i])
      }
      // console.log(tempUrls)
      wx.previewImage({
        current: this.globalAvatar+'goods/'+currentImg,
        urls: tempUrls
      });
    },
    getShare (){
      
      axios.post('/seller_api/v1/sessions/share_config',qs.stringify({
        url:window.location.href.split('#')[0]
      })).then((response)=>{   
          let resData = response.data;  
          if (resData.success) 
              this.shareFunc(resData.result);         
      }).catch(function(response){

      });        

      function onBridgeReady() {
        WeixinJSBridge.call('hideToolbar');
        weixinjsbridge.call('hideoptionmenu'); 
      }

      if (typeof WeixinJSBridge == "undefined") {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else {
        onBridgeReady();
      }
    },
    shareFunc(obj){
      let vm = this;
      if (obj) {
        wx.config(Object.assign(obj,{
            // debug: true,
            jsApiList: [
              "checkJsApi",
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone',
              'closeWindow',
              'chooseImage',
              'previewImage',
              'uploadImage',
              // 'downloadImage',
              // 'scanQRCode'
            ]
        }));         
      }
  
      wx.ready(function () {
        let shareOBJ = {
            title: `${vm.sellerInfo.nick}分享了自己的私人主页，新品首发哦！`,
            desc: vm.sellerInfo.signature ? vm.sellerInfo.signature : '我的好货朋友圈，有喜欢的尽管说，好友专享价！',
            link: vm.ttDomain+'/#/app/login?redirecto=true&seller='+vm.paraData.seller,
            imgUrl: vm.ttLogoImg,
            success:function () {
            }
        };
        wx.onMenuShareAppMessage(shareOBJ);
        wx.onMenuShareQQ(shareOBJ);
        wx.onMenuShareWeibo(shareOBJ);
        wx.onMenuShareQZone(shareOBJ);
        wx.onMenuShareTimeline(shareOBJ);
      })

    },
    reinitShare (item,seller){
      let vm = this;
      let shareImg = this.globalAvatar+'goods/'+JSON.parse(item.imgs)[0]+'?imageView2/2/w/300/'
      let jumpUrl = this.ttDomain+'/#/app/login?redirecto=true&goodid='+item.goodid+'&seller='+seller;

      this.listData[this.curListIndex].showComment = false
      this.curList = item;
      this.shareFlag = true;
      
      wx.ready(function () {
        let shareText ={
            title: `${vm.sellerInfo.nick}分享了自己的宝贝，好友专享价！`,
            desc: item.title,
            link:jumpUrl,
            imgUrl: shareImg,
            success:function() {
            },
            cancel: function () {}
        };
        wx.onMenuShareAppMessage(shareText);
        wx.onMenuShareQQ(shareText);
        wx.onMenuShareWeibo(shareText);
        wx.onMenuShareQZone(shareText);
        wx.onMenuShareTimeline(shareText);
      })
    },
    initDefault(){
      if (!this.goodid) {
        wx.previewImage({
          current: this.globalAvatar+this.sellerInfo.avatar,
          urls: [this.globalAvatar+this.sellerInfo.avatar]
        });
        return;
      }
      this.shareFunc();
      this.fetchList();
      this.goodid = '';
    },
    defaultData(){
      this.getProfile ();
    },
    subScribe(){
      axios.post('/seller_api/v1/seller/subscribe',qs.stringify({
        uid:this.paraData.uid,
        seller:this.paraData.seller,
        agent:html.isWechat() ? 'weixin' : 'qq'
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  

          if (resData.success) {
            // this.del = false;
            
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // location.href = '/';
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      })
    },
    fetchPrd(){
      axios.post('/seller_api/v1/seller/goods_info',qs.stringify({
        uid:this.paraData.uid,
        gid:this.goodid
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  
          // alert(JSON.stringify(resData))
          if (resData.success) {
            // this.noDataText = ''
            let tempArr = [];
            let vm = this;
            tempArr.push(resData.result)
            this.listData = tempArr;
            this.listLen = 0;
            this.praiseLen = 0;

           this.fetchComment(resData.result.id,true);
           this.fetchPraise(resData.result,0,true)
           //初始化分享
          let jumpUrl = this.ttDomain+'/#/app/login?redirecto=true&goodid='+this.goodid+'&seller='+this.paraData.seller;
          let shareImg = this.globalAvatar+'goods/'+JSON.parse(resData.result.imgs)[0]+'?imageView2/2/w/300/'
          wx.ready(function () {
            let shareText ={
                title: `${vm.sellerInfo.nick}分享了自己的宝贝，好友专享价！`,
                desc: resData.result.title,
                link:jumpUrl,
                imgUrl: shareImg,
                success:function() {
                },
                cancel: function () {}
            };
            wx.onMenuShareAppMessage(shareText);
            wx.onMenuShareQQ(shareText);
            wx.onMenuShareWeibo(shareText);
            wx.onMenuShareQZone(shareText);
            wx.onMenuShareTimeline(shareText);
          })


          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // location.href = '/';
            }else{
              this.initMSG(resData.codemsg)
              if (resData.code == '350') {
                setTimeout(()=>{
                  this.initDefault();
                },2000)
              }
            }
          }
      })

    },
    getProfile (){
      axios.post('/seller_api/v1/seller/seller_info',qs.stringify({
        uid:this.paraData.uid,
        seller:this.paraData.seller
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          this.wechat_code_show = true
          if (resData.success) {
            this.sellerInfo = resData.result;
            this.sellerInfo.background = this.sellerInfo.background ? this.sellerInfo.background : ' '
            this.headImg = this.globalAvatar+(this.sellerInfo.avatar?this.sellerInfo.avatar:'')+'?imageView2/2/w/100/h/100/t/';
            if (this.goodid) {
              this.fetchPrd();
            }
          }
      }).catch((response)=>{
      });  

      if (!this.paraData.uid) return;

      axios.post('/seller_api/v1/seller/userinfo',qs.stringify({
        uid:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.profile = resData.result;
            this.switchState({
              PROFILE:resData.result,
            })
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.needLogin = true;
              // this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
      //是否关注
      axios.post('/seller_api/v1/user/is_subscribed',qs.stringify({
        uid:this.paraData.uid,
      }),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  
          // alert(JSON.stringify(resData))
          if (resData.success) {

            this.isSubscribed = resData.result;

          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // location.href = '/';
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      })
    },
    fetchList(done){
      if (this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 || this.bugInfinite){
        if(done) done(true) 
        return;
      }

      axios.post('/seller_api/v1/seller/seller_goods',qs.stringify(this.paraData),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  
          // alert(JSON.stringify(resData))

          if (resData.success) {
           var ranks = resData.result;
           this.totalPageCount = ranks.totalPageCount;
            if (this.paraData.pn == 1) {
                
              for (var i = 0; i < ranks.items.length; i++) {
                ranks.items[i].showComment = false;
              }
              this.listData = ranks.items;
              if (this.listData.length == 0) this.noData = true;
            }
            else {
              for (var i = 0; i < ranks.items.length; i++) {
                ranks.items[i].showComment = false;
              }
              this.listData = this.listData.concat(ranks.items);
            }
            if (this.listData.length) {
               this.listLen = 0;
               this.praiseLen = 0;

              this.fetchComment(this.listData[0].id,true);
              this.fetchPraise(this.listData[0],0,true)
              this.paraData.pn = this.paraData.pn + 1;

            }else{
              done(true)
            }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              if(done) done(done);
              this.bugInfinite = true;
            }else{
              this.initMSG(resData.codemsg)
            }
          }
          if(done) done();
      })

    },
    onRefresh(done) {
      if (this.refreshed) return;
      this.refreshed = true;
      setTimeout(()=>{
        this.refreshed = false;
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        if (!this.goodid) this.fetchList(done);  
        else this.fetchPrd()
      },1000)
    },
    onInfinite(done) {  
      this.indexDone = done;   
      if (this.infinited) return;
      this.infinited = true;
      setTimeout(()=>{
        this.infinited = false;
        if (this.goodid) {
          done(true)
        }else this.fetchList(done);
      },500)
    },
    praisePrd(item,index){
      axios.post('/seller_api/v1/seller/goods_praise',qs.stringify({
        'uid':this.paraData.uid,
        'gid':item.id,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.fetchPraise(item,index);
          }  else {
            
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    praiseBG(){
      this.changebg = false
      if (this.sellerInfo.praised) {
        this.initMSG('已赞过该封面')
        return;
      }

      axios.post('/seller_api/v1/seller/seller_praise',qs.stringify({
        'uid':this.paraData.uid,
        'seller':this.paraData.seller,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.sellerInfo.praise++;
            this.sellerInfo.praised = true;
          }  else {
            
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    fetchPraise(item,index,flag){
      axios.post('/seller_api/v1/seller/fetch_praise',qs.stringify({
        'uid':this.paraData.uid,
        'gid':item.id,
        'pn':1,
        'ps':9999
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            // debugger;
            this.listData[index].praise_head = resData.result.items.length ? JSON.stringify(resData.result.items) : ''
            if (flag) {
                this.praiseLen++;
              if (this.praiseLen < this.listData.length)
                this.fetchPraise(this.listData[this.praiseLen],this.praiseLen,true);
            }else{
              this.listData[index].praised = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    replaySomeone(item,gid,index){
      this.comment.gid = gid;
      this.comment.cid = item.id;
      this.replyIndex = index;
      if (item.uid == this.UID) {
        this.reply = true;
        // this.popIndex = 0;
        this.placeholder = '评论'
      }else{
        this.reply = true;
        this.placeholder = '回复'+item.nick+'：';
      }
    },
    keyFunc(){
      if (this.hasClicked) return;
      this.hasClicked = true;
      setTimeout(()=>{
        this.$refs.commentInput.scrollIntoView();
      },100)
    },
    replyComment (type){
      this.reply = false;
      axios.post('/seller_api/v1/seller/reply_comment',qs.stringify({
        uid:this.paraData.uid,
        cid:this.comment.cid,
        comment:this.comment.tips
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;   

          if (resData.success) {
            this.reply = false;
            this.comment.tips = '';
            this.fetchComment();
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        // this.initMSG('网络异常再试一次');
      });  
  
    },
    beforeReply(item,index){
      this.placeholder = '评论'
      this.popIndex = 0;
      this.comment.gid = item.id;
      this.reply = true;
      this.replyIndex = index;
    },
    beforeOnoff(item,index){

      this.popIndex = index;
      if (item) this.curProduct = item;
      this.del = true;
    },
    popFuncs(){
      switch(this.popIndex){
        case 0:
          this.del = false;
          if (!this.sellerInfo.subscribed) this.subScribe();
          if (!this.isSubscribed) this.wechat_code = true;
        break; 

        default :
          this.onOffGoods();
        break; 
      }
    },
    created(){
      delete this.curProduct['spec']
      this.curProduct.uid = this.paraData.uid;
      this.loading = true;
      axios.post('/seller_api/v1/seller/create_goods',qs.stringify(this.curProduct),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.initMSG('发布成功');
            this.del = false;
            setTimeout(()=>{
              this.fetchList();
            },2000)
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});        
    },
    delComment(){
      axios.post('/seller_api/v1/seller/del_comment',qs.stringify({
        uid:this.paraData.uid,
        cid:this.comment.cid,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;   

          if (resData.success) {
            this.del = false;
            this.fetchComment();
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        // this.initMSG('网络异常再试一次');
      });  
    },
    goodsComment (){
      if (!this.comment.tips) {
        this.reply = false;
        return;
      }
      if (this.placeholder.indexOf('回复') > -1) {
        this.replyComment()
        return
      }
      this.reply = false;
      axios.post('/seller_api/v1/seller/goods_comment',qs.stringify({
        uid:this.paraData.uid,
        gid:this.comment.gid,
        comment:this.comment.tips
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;   

          if (resData.success) {
            this.comment.tips = '';
            this.fetchComment();
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        // this.initMSG('网络异常再试一次');
      });  
    },
    fetchComment(paraGid,flag){
      // console.log(this.listLen)
      
      axios.post('/seller_api/v1/seller/fetch_comment',qs.stringify({
        uid:this.paraData.uid,
        gid:paraGid ? paraGid : this.comment.gid,
        ps:9999,
        pn:1
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;   
          // debugger;
          if (resData.success) {
            if (flag && this.listLen >= this.listData.length) return;
            this.listData[flag ? this.listLen : this.replyIndex].comment_head = resData.result.items.length ? JSON.stringify(resData.result.items) : ''
            if (flag) {
              this.listLen++;
              if (this.listLen < this.listData.length)
                this.fetchComment(this.listData[this.listLen].id,true);
            }
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        console.log(response)
        // this.initMSG('网络异常再试一次');
      });  
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    redirect (){
      if (this.iAmGuest) {
        this.goto('/app/login')
        this.$router.isBack = true;
        return;
      }
      if (html.isWawa()) {
        this.needLogin = false;
        this.lock = true;
        setTimeout(()=>{
          setupWebViewJavascriptBridge(function(webBridge) {
            webBridge.callHandler('relogin', function(response) {})     
          })
        },50)
      }
      else {
        if (html.isWechat()) {
          location.href = html.openInWechat(this.ttDomain+'/#/app/app')
        }else{
          // this.goto('/app/login')
        }
      }
    },
    goto (arr){
      this.$router.push(arr)
    },
    wechatOpen(arr){
      this[arr]=true;
    },
    closeDialog (arr){
        this[arr] = false;
    },

  },
  beforeDestroy(){
    this.switchState({
      LISTDATA:this.listData
    })          
  }
}
</script>

