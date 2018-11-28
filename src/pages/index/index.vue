
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {setupWebViewJavascriptBridge} from '../../assets/js/iosbridge.js';
import myhead from '../../components/base/header'
import myfooter from '../../components/base/footer'
import loading from '../../components/base/loading'
import modalDialog from '../../components/base/dialog'
import dialogDel from '../../components/base/dialogDel'
import {html} from '../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';
// console.log(wx)
export default {
  components: {
    modalDialog,
    myfooter,
    loading,
    dialogDel
  },
  data () {
    return {
      listData: [], // 下拉更新数据存放数组
      isCur: 0,
      isSlider:0,
      header:{
        'name':'以太大陆',
        'link':'/diamond_record',
        noBack:true
      },
      isApp:false,
      needLogin:false,
      success:false,
      paraData:{
        uid:'1',
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
      popMoney:false,
      countBonus:0,
      statusBar:{},
      bottomBarH:'',
      navType:'home',
      profile:{},
      reply:false,
      placeholder:'评论',
      fetBonusType:[],
      statusBG:'status1',
      indexArr:[0,1,2,3],
      del:false,
      scrollFlag:false,
      scrollLeftpx:'',
      noticeData:[],
      totalBonus:0,
      sellerInfo:{},
      comment:{
        tips:'',
        cid:'',
        gid:''
      },
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
      'PUSHPOP'
    ])
  },
  mounted () {

    if (html.istestPay()) {
      this.wawaAndroid = true;
    }
    if (html.isIpad()) {
      this.isIpad = true;
    }
    if (this.$route.query.isguest){
      this.iAmGuest = true;
      this.fetchList();
      this.getStatusBar();
    }else{

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

        }else{
          // this.redirect();
        }

      if (html.isWawa()) {
        this.isApp = true;

        this.getStatusBar();
        this.defaultData();
        this.initBridge();
      }else{
        if (this.$route.query.token) {
          this.paraData.uid = this.$route.query.uid;
          this.token = unescape(this.$route.query.token);

          this.switchState({
            TOKEN:this.token,
            UID:this.paraData.uid
          })
          this.defaultData();

        }else if (this.TOKEN) {
          this.token = this.TOKEN;
          this.paraData.uid = this.UID;
          this.defaultData();
        }else{
          // this.redirect();
        }
      }     
    }
    console.log(this.token,this.UID)
    this.getShare ();
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
    },
    shareFunc(obj){
      let vm = this;
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
            'downloadImage',
            'scanQRCode'
          ]
      }));   
      wx.ready(function () {
        let shareOBJ ={
            title: '小小麦',
            desc: '小小卖家最爱的小小麦~',
            link: vm.ttDomain+'?'+ vm.timeStamp,
            imgUrl: vm.ttLogoImg,
            success:function () {
               // dplus.track('分享成功',{'from':html.useragent(),'inviter':vm.inviter,'page':'index'});
            }
        };
        wx.onMenuShareAppMessage(shareOBJ);
        wx.onMenuShareQQ(shareOBJ);
        wx.onMenuShareWeibo(shareOBJ);
        wx.onMenuShareQZone(shareOBJ);
        wx.onMenuShareTimeline(shareOBJ);
      })
    },
    defaultData(){
      this.fetchList();
      this.getProfile ();
      // this.getNotice()
    },
    getProfile (){
      axios.post('/seller_api/v1/seller/seller_info',qs.stringify({
        uid:this.paraData.uid,
        seller:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.sellerInfo = resData.result;
            this.headImg = this.globalAvatar+(this.sellerInfo.avatar?this.sellerInfo.avatar:'')+'?imageView2/2/w/100/h/100/t/';
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
      
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
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    fetchList(){

      axios.post('/seller_api/v1/seller/my_goods',qs.stringify(this.paraData),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        
          let resData = response.data;  

          if (resData.success) {
           this.listData = resData.result.items;

           this.fetchComment(this.listData[0].id,true);
           this.listLen = 0;
            // this.listData.forEach((value,index)=>{  
            //   this.fetchComment(value.id,true);
            //   this.replyIndex = index;
            //    console.log(value,index)
            // });
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              location.href = '/';
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      })

    },
    onOffGoods (gid,flag){
      axios.post('/seller_api/v1//seller/goods_control',qs.stringify({
        'uid':this.paraData.uid,
        'gid':gid,
        'flag':flag
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.initMSG(!flag ? '已下架':'已上架')
            this.fetchList();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    upTop (gid){
      this.loading = true;
      axios.post('/seller_api/v1//seller/create_goods',qs.stringify({
        'uid':this.paraData.uid,
        'gid':gid,
        'publish':new Date().getTime()
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.loading = false;
            this.fetchList();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
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
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    fetchPraise(item,index){
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
            this.listData[index].praise_head = JSON.stringify(resData.result.items)
            this.listData[index].praised = true;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
            // console.log(resData.msg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    replaySomeone(item,gid,index){
      this.comment.gid = gid;
      this.comment.cid = item.id;
      this.replyIndex = index;
      if (item.uid == this.UID) {
        this.del = true;
      }else{
        this.reply = true;
        this.placeholder = '回复'+item.nick+'：';
      }
    },
    replyComment (type){
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
            this.getProfile();
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.initMSG('网络异常再试一次');
      });  
  
    },
    beforeReply(item,index){
      this.comment.gid = item.id;
      this.reply = true;
      this.replyIndex = index;
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
        this.initMSG('网络异常再试一次');
      });  
    },
    goodsComment (){
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
            this.reply = false;
            this.comment.tips = '';
            this.fetchComment();
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.initMSG('网络异常再试一次');
      });  
    },
    fetchComment(paraGid,flag){
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

            this.listData[flag ? this.listLen : this.replyIndex].comment_head = resData.result.items.length ? JSON.stringify(resData.result.items) : ''
            if (flag) {
              this.listLen++;
              if (this.listLen != this.listData.length)
                this.fetchComment(this.listData[this.listLen].id,true);
            }
          }else{
            this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.initMSG('网络异常再试一次');
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
    logErrors(log){
      axios.post('/land_api/v1/debug/log',qs.stringify({'logstr':log}));  
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
          this.goto('/app/author')
        }else{
          this.goto('/app/login')
        }
      }
    },
    goto (arr,title){
      // console.log(arr)
      if (title) {
        this.switchState({
          SHARETITLE:title
        })
      }
      this.$router.push(arr)
    },
    closeDialog (arr){
        this[arr] = false;
    },

  },
  beforeDestroy(){
    
    clearInterval(this.scrollTimer);
    clearInterval(this.time_id);
  }
}
</script>

