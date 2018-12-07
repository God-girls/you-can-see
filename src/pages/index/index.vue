
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {setupWebViewJavascriptBridge} from '../../assets/js/iosbridge.js';
import appshare from '../../components/base/appshare'
import myfooter from '../../components/base/footer'
import loading from '../../components/base/loading'
import modalDialog from '../../components/base/dialog'
import dialogDel from '../../components/base/dialogDel'
import {html} from '../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import qrCode from 'qrcode';
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    modalDialog,
    myfooter,
    loading,
    dialogDel,
    appshare
  },
  data () {
    return {
      listData: [{showComment:false,publish:'',imgs:'[]'}], // 下拉更新数据存放数组
      isCur: 0,
      isSlider:0,
      header:{
        'name':'小小麦',
        noBack:true
      },
      isApp:false,
      needLogin:false,
      success:false,
      paraData:{
        uid:'1',
        pn:1
      },
      noDataText:'-----技术支持：公众号“小小麦的家"-----',
      headImg:'',
      token:'',
      onlyWechat:false,
      loading:false,
      loadError:'',
      iAmGuest:false,
      setTel:false,
      popBuy:false,
      popFriend:false,
      oneReply:false,
      changebg:false,
      countBonus:0,
      statusBar:{},
      bottomBarH:'',
      navType:'task',
      profile:{},
      reply:false,
      webClick:false,
      fromShare:false,
      shareFlag:false,
      showCanvas:false,
      placeholder:'评论',
      fetBonusType:[],
      popDel:{
        title:['删除我的评论','下架本条商品','上架本条商品','置顶本条商品','复制本条商品'],
        content:['删除','下架','上架','置顶','复制']
      },
      popIndex:0,
      del:false,
      scrollFlag:false,
      scrollLeftpx:'',
      testCanvas:'',
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
      shareData:{
        title:'',
        desc:'',
        shareText:''
      },
      copyWords:'',
      curListIndex:0,
      tempLen:0
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
      'LISTDATA',
      'CART'
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
          // if (this.LISTDATA.length) 
          //   this.listData = this.LISTDATA
        }else if (!this.TOKEN && localStorage.ttToken){

          this.token = localStorage.ttToken;
          this.paraData.uid = localStorage.ttUid;  
          // this.profile = this.PROFILE;

        }else{
          this.redirect();
        }
        if (this.LISTDATA.length) {
          // tthis.paraData.pn = 2;
          this.listData = this.LISTDATA
          this.fetchList();
        }
      if (html.isWawa()) {
        this.isApp = true;

        this.getStatusBar();
        this.defaultData();
        this.initBridge();
      }else{
        if (this.$route.query.token || this.TOKEN) {
          this.defaultData();
        }else{
          this.redirect();
        }
      }     
    }
    // this.hideToolBar()
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
            // 'downloadImage',
            // 'scanQRCode'
          ]
      }));   
      wx.ready(function () {
        let shareOBJ ={
            title: `${vm.profile.nick}分享了自己的私人主页，新品首发哦！`,
            desc: vm.profile.signature ? vm.profile.signature : '我的好货朋友圈，有喜欢的尽管说，好友专享价！',
            link: vm.ttDomain+'/#/app/login?redirecto=true&seller='+vm.paraData.uid,
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
      let appID = 'wx357ca89ca431b3ca'
      let jumpUrl = this.ttDomain+'/#/app/login?redirecto=true&goodid='+item.id+'&seller='+seller;

      this.listData[this.curListIndex].showComment = false
      this.curList = item;
      this.shareFlag = true;
      this.shareData.shareText = `${item.title}，种草进我的私人主页: ${this.ttDomain}/#/prd/list?seller=${this.UID}&fromshare=true${item.id?'&goodid='+item.id:''}`
      
      wx.ready(function () {
        let shareText ={
            title: `好友${vm.profile.nick}分享了自己的宝贝，好友专享价！`,
            desc: item.title,
            link:jumpUrl,
            imgUrl: vm.ttLogoImg,
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
    defaultData(){
      this.getProfile ();
      // this.fetchList();
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
            this.sellerInfo.background = this.sellerInfo.background ? this.sellerInfo.background : ' '
            this.headImg = this.globalAvatar+(this.sellerInfo.avatar?this.sellerInfo.avatar:'')+'?imageView2/2/w/100/h/100/t/';
            // console.log(this.headImg)
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect();
            }
            else this.initMSG(resData.msg);
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
              this.redirect();
            }
            else this.initMSG(resData.msg);
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    fetchList(done){

      if (this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 || this.bugInfinite){
        if(done) done(true) 
        return;
      }
      //debugger
      this.bugInfinite = false;
      axios.post('/seller_api/v1/seller/my_goods',qs.stringify({
        uid:this.paraData.uid,
        pn:this.paraData.pn,
        ps:'2'
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.success) {
            let ranks = resData.result;
            this.totalPageCount = ranks.totalPageCount;
              if (ranks.items.length == 0) {
                if(done) done();
                return;
              }
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

              this.fetchComment(this.listData[0].id,true);
              this.fetchPraise(this.listData[0],0,true)
              this.listLen = 0;
              this.praiseLen = 0;

              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              if(done) done(done);
              this.bugInfinite = true;
              // this.redirect();
            }
            else this.initMSG(resData.msg);
          }
          if(done) done();
      }).catch((response)=>{
        if(done) done(done)
      });  

    },
    onRefresh(done) {
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        // debugger
        this.fetchList(done);  
      },1000)
    },
    onInfinite(done) {  
      // console.log(this.paraData.pn) 
      this.indexDone = done;   
      this.fetchList(done);
    },
    onOffGoods (){

      axios.post('/seller_api/v1//seller/goods_control',qs.stringify({
        'uid':this.paraData.uid,
        'gid':this.comment.gid,
        'flag':this.popIndex == 1 ? false : true
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.del = false;
            this.initMSG(this.popIndex == 1 ? '已下架':'已上架')
            this.onRefresh();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect();
            }
            else this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    upTop (gid){
      this.loading = true;
      axios.post('/seller_api/v1//seller/create_goods',qs.stringify({
        'uid':this.paraData.uid,
        'gid':this.comment.gid,
        'publish':new Date().getTime()
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.loading = false;
            this.del = false;
            this.onRefresh();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect();
            }
            else this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    praisePrd(item,index){
      this.listData[this.curListIndex].showComment = false
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
              this.redirect();
            }
            else this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    praiseBG(){
      if (this.sellerInfo.praised) return;
      axios.post('/seller_api/v1/seller/seller_praise',qs.stringify({
        'uid':this.paraData.uid,
        'seller':this.paraData.uid,
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
            if (resData.code == '403' || resData.code == '250') {
              this.redirect();
            }
            else this.initMSG(resData.codemsg);
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
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
            this.listData[index].praise_head = resData.result.items.length ? JSON.stringify(resData.result.items) : ''
            if (flag) {
                this.praiseLen++;
              if (this.praiseLen < this.listData.length)
                this.fetchPraise(this.listData[this.praiseLen],this.praiseLen,true);
            }else{
              this.listData[index].praised = true;
            }
          }  else {
            
            // console.log(resData.codemsg);
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
        this.popIndex = 0;
        this.placeholder = '评论'
      }else{
        this.oneReply = true;
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
    beforeReply(item,index){
      // debugger
      this.comment.gid = item.id;
      this.reply = true;
      this.replyIndex = index;
      this.listData[this.curListIndex].showComment = false
    },
    beforeOnoff(item,index,isTop){
      this.listData[this.curListIndex].showComment = false
      if (isTop == 0) {
        this.initMSG('已置顶')
        return;
      }
      this.comment.gid = item.id;
      this.popIndex = index;
      this.curProduct = item;
      this.del = true;
    },
    popFuncs(){
      switch(this.popIndex){
        case 0:
          this.delComment();
        break; 

        case 3:
          this.upTop();
        break; 

        case 4: //复制
          this.imgFile = JSON.parse(this.curProduct.imgs); 
          this.paraData.desc = this.curProduct.title;
          this.imgUrl = []
          for (var i = 0; i < this.imgFile.length; i++) {
            this.imgUrl.push(this.globalAvatar+'goods/'+this.imgFile[i])
          }
          this.choosed = this.imgUrl.length;
          this.switchState({
            CART:{
              imgFile:this.imgFile,
              desc:this.paraData.desc,
              imgUrl:this.imgUrl,
              priceSet:JSON.parse(this.curProduct.ext),
              specs:this.curProduct.spec ? JSON.parse(this.curProduct.spec) : [],
              other:{
                show_comment:this.curProduct.show_comment,
                show_sell:this.curProduct.show_sell,
                sell_base:this.curProduct.sell_base
              }
            }
          })      
          this.goto('/prd/create')
          // this.created();
        break; 

        default :
          this.onOffGoods();
        break; 
      }
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
      if (!this.comment.tips) {
        this.reply = false;
        return;
      }
      if (this.placeholder.indexOf('回复') > -1) {
        this.replyComment()
        return
      }
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
      if (flag && this.listLen == this.listData.length) return;

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
          if (flag && this.listLen >= this.listData.length) return;
          if (resData.success) {
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
        // this.initMSG('网络异常再试一次');
      });  
    },
    chooseImg(){
      let _this = this;
      this.changebg = false;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          _this.showImg(localIds[0])
        }
      });      

    },
    showImg(localIds){
      let _this = this;
      wx.getLocalImgData({
        localId: localIds,
        success: function (res) {
            var localData = res.localData;
            if (localData.indexOf('data:image') != 0) {
              localData = 'data:image/jpeg;base64,' +  localData
            }
            localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
            _this.sellerInfo.background = localData//images是业务中用到的变量
            _this.modifyImg(localData);
        }
      })
    },
    modifyImg (localData){
      axios.post('/seller_api/v1/user/upd_profile',qs.stringify({
        uid:this.paraData.uid,
        background_b64:localData
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{         
          let resData = response.data;  
          if (resData.success) {
            // this.sellerInfo ();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
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
          location.href = html.openInWechat(this.ttDomain+'/#/app/author')
        }else{
          // this.goto('/app/login')
        }
      }
    },
    goto (arr,title){
      // console.log(arr)
      if (arr == '/prd/create' && !this.sellerInfo.service_mobileno && !this.sellerInfo.weixin && !this.sellerInfo.qq) {
        this.setTel = true;
        return
      }
      this.$router.push(arr)
    },
    editPrd(item){
      if (item.status != 0) {
        this.initMSG('请先下架商品后再编辑')
        return;
      }else{
        this.goto('/prd/create?id='+item.id)
      }
    },
    closeDialog (arr){
      this[arr] = false;
    },
    getPoster(){
      this.loading = true;
      var _this = this;
      var item = this.curList;
      var imgs = JSON.parse(this.curList.imgs)
      var poster = {
        width:750,
        height:1020,
        imgWidth:460,
        lineWidth:16,
        lastTop:0,
        imgs:[],
        needLoad:[
          require('../../assets/img12/poster/christmas/bgtop.jpg'),
          require('../../assets/img12/poster/christmas/bgbom.jpg'),
          require('../../assets/img12/poster/christmas/bgrepeat.jpg')
        ]
      }
      var imgCounter = 0;
      var drawCanvas = document.createElement("canvas");
      var drawCtx = drawCanvas.getContext("2d");

      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      drawCanvas.height = poster.height;
      drawCanvas.width = poster.width;
      

      var fillImgs = ()=>{
        // debugger
        drawCtx.drawImage(this.imgBg, 0, 0,drawCanvas.width,drawCanvas.height);
        drawCtx.drawImage(this.imgTop, 0, poster.lastTop, drawCanvas.width, this.imgTop.height);
        poster.lastTop = this.imgTop.height;

        canvasTextAutoLine(item.title,drawCanvas,100,this.imgTop.height+30,50)

        for (var i = 0; i < poster.imgs.length; i++) {
          
          drawCtx.putImageData(poster.imgs[i].img,0,poster.lastTop);
          poster.lastTop += poster.imgs[i].height;
        }
        drawCtx.drawImage(this.imgBom, 0, poster.lastTop, drawCanvas.width, this.imgBom.height);

        drawCtx.fillStyle="#ffffff";
        drawCtx.font = "30px Arial";
        drawCtx.textAlign ='center';
        drawCtx.fillText('¥ '+item.price_range,drawCanvas.width/2,poster.lastTop + 102);

        qrCode.toDataURL( this.ttDomain+'/#/app/login?redirecto=true&seller='+this.paraData.uid+'&goodid='+item.id, {
            margin : 0,
            width : 126,
            height : 126
        }, (error,url)=> {
            if (error) console.log(error);
            var qrcodeUrl = new Image();
            qrcodeUrl.src = url;
            qrcodeUrl.onload = ()=>{
              drawCtx.drawImage(qrcodeUrl, 310, poster.lastTop+116, 126, 126);
              this.testCanvas = drawCanvas.toDataURL();
              this.loading = false;
              this.showCanvas = true;   
              this.shareFlag = false;           
            }
        }); 
      }
      /*
        str:要绘制的字符串
        canvas:canvas对象
        initX:绘制字符串起始x坐标
        initY:绘制字符串起始y坐标
        lineHeight:字行高，自己定义个值即可
      */
      function canvasTextAutoLine(str,canvas,initX,initY,lineHeight){
        var ctx = drawCtx; 
        var lineWidth = 0;
        var canvasWidth = drawCanvas.width; 
        var lastSubStrIndex= 0; 

        poster.lastTop += 60;
        // drawCtx.textAlign ='center';
        // drawCtx.font = "30px Arial";
        // drawCtx.fillText(str,drawCanvas.width/2,poster.lastTop);
        // // return;

        for(let i=0;i<str.length;i++){ 
            lineWidth += ctx.measureText(str[i]).width; 
              ctx.font = "30px Arial";
              ctx.textAlign ='center';
            if(lineWidth > canvasWidth-initX*2){//减去initX,防止边界出现的问题
                ctx.fillText(str.substring(lastSubStrIndex,i),drawCanvas.width/2,initY);
                initY += lineHeight;
                lineWidth = 0;
                lastSubStrIndex = i;
                poster.lastTop += 60
            } 
            if(i==str.length-1){

                ctx.fillText(str.substring(lastSubStrIndex,i+1),drawCanvas.width/2,initY);
            }
        }
      }

      var transImg = (param)=>{
        var img = new Image();
         img.crossOrigin = "Anonymous";

         img.src = this.globalAvatar+'goods/'+param;
         
         // console.log(param)
         //浏览器加载图片完毕后再绘制图片
         img.onload = ()=>{
          let fillWidth = poster.imgWidth + poster.lineWidth*2;
          canvas.width = poster.width;
          canvas.height = (img.height*poster.imgWidth/img.width + poster.lineWidth*2)+30;
          // console.log(canvas.height)
          ctx.drawImage(this.imgBg, 0, 0, poster.width, canvas.height);
          //以Canvas画布上的坐标(10,10)为起始点，绘制图像
          ctx.lineWidth = poster.lineWidth;
          ctx.strokeStyle = "#c12227";
          ctx.fillStyle="#c12227";
          ctx.rect((poster.width - poster.lineWidth - poster.imgWidth)/2, 0, fillWidth, canvas.height-30);
          ctx.fill();
          ctx.stroke();
          ctx.drawImage(img, (poster.width - poster.imgWidth)/2, poster.lineWidth, fillWidth - poster.lineWidth, img.height*poster.imgWidth/img.width);    

          var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);

          var tempObj = {};
          tempObj.img = imgData;
          tempObj.height = canvas.height;
          poster.imgs.push(tempObj)
          drawCanvas.height += canvas.height;

          imgCounter++;
          // debugger
          if(imgCounter < imgs.length){
            transImg(imgs[imgCounter]);
          }else{
            // drawCanvas.height += poster.this.imgBg.height
            fillImgs()
            // console.log(poster.imgs)
          }   


         };
      }
      var imgLoad = (src)=> {
        var img = new Image();
        img.src = src;
        img.onload = ()=>{
          if (this.tempLen == 0) {
            this.imgTop = img;
          }else if (this.tempLen == 1){
            this.imgBom = img;
          }else{
            this.imgBg = img;
          }
          this.tempLen++;
          // console.log(this.tempLen)

          // debugger
          if (this.tempLen < 3) {
            imgLoad(poster.needLoad[this.tempLen]);
          }else{
            //头底背景加载完加载图片
            transImg(imgs[imgCounter])
          }
                                                                                 
        }          
      }
      if (this.tempLen == 3) {
        transImg(imgs[imgCounter])
      }else{
        imgLoad(poster.needLoad[this.tempLen])
      }

    

      // transImg(imgs[imgCounter])
    }
  },
  beforeDestroy(){
    this.switchState({
      LISTDATA:this.listData
    })          
  }
}
</script>

