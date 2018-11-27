
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {setupWebViewJavascriptBridge} from '../../assets/js/iosbridge.js';
import myhead from '../../components/base/header'
import myfooter from '../../components/base/footer'
import loading from '../../components/base/loading'
import modalDialog from '../../components/base/dialog'
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
    // myhead
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
      popMoney:false,
      countBonus:0,
      statusBar:{},
      bottomBarH:'',
      navType:'home',
      profile:{
      },
      fetBonusType:[],
      statusBG:'status1',
      indexArr:[0,1,2,3],
      popArr:[
        {'position':'posiBuy bouncem','flyname':'popbuyFly','flag':false},
        {'position':'posiMoney bouncem','flyname':'popmoneyFly','flag':false},
        {'position':'posiFriend bouncem','flyname':'popfriendFly','flag':false},
        {'position':'posiTemp bouncem','flyname':'poptempFly','flag':false},
      ],
      testObj:{'poptempFly':true},
      musicDiamond:this.globalM + 'music.mp3?'+new Date().getTime(),
      numberRoa:-1,
      // isIos:gisIOS,
      wawaAndroid:false,
      scrollFlag:false,
      scrollLeftpx:'',
      noticeData:[],
      totalBonus:0,
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
          debug: true,
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
    scrollLeft(){
      var x = document.getElementById('textwrap');
      var y = document.getElementById('text1');
      // var z = document.getElementById('text2');

      this.tempWidth = x.offsetWidth;
      this.scrollLeftpx = x.offsetWidth + 'px';
      this.scrollFlag = true;

      this.testScroll = ()=> {
        if (this.tempWidth < - y.offsetWidth){
            this.scrollLeftpx = x.offsetWidth + 'px';
            this.tempWidth = x.offsetWidth;
        }else{
            this.scrollLeftpx = this.tempWidth-- + 'px';
        }
      }
      this.scrollTimer = setInterval(this.testScroll,html.isWawaIos()?10:15);
    },
    removeAD(){
      this.h5NoAd = true;
      this.limit = false;
      this.prompt = false;
      this.displayOnce = false;
    },
    defaultData(){
      this.fetchList();
      this.getProfile ();
      // this.getNotice()
    },
    countDown (total){
      // console.log(total)
      let lastBonus = Number(this.countBonus);
      let growBonus = Number(this.countBonus)
      let totalNumber = Number(total);
      let tempNumber = 0;
      if (totalNumber > 0) {

      this.time_id = setInterval(()=>{
          tempNumber =html.add(tempNumber ,totalNumber > 10 ? parseInt(totalNumber/10) : 1);
          growBonus = html.add(growBonus,totalNumber > 10 ? parseInt(totalNumber/10) : 1) ;
          this.countBonus = growBonus;
          if(tempNumber >= totalNumber){
            this.countBonus = html.add(lastBonus,totalNumber);
            clearInterval(this.time_id);
          }            
        } , 100);       
      }

    },
    getProfile (){
      
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
            this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/100/h/100/t/'+new Date().getTime();
            console.log(this.headImg)
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
      axios.post('/seller_api/v1//seller/create_goods',qs.stringify({
        'uid':this.paraData.uid,
        'gid':gid,
        'pubsh':new Date().getTime()
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
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
    fetchBonus (type){

      setTimeout(()=>{
        axios.post('/seller_api/v1/seller/fetch_bonus',qs.stringify({
          uid:this.paraData.uid,
          type:type
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
          this.fetBonusType[index].click = false;
          this.initMSG('网络异常再试一次');
        });  
      },1000)
  
    },
    roa(arr){
      var temp=[];    //temp存放生成的随机数组
  　   var count=arr.length;    
      for (let i=0;i<count;i++)
      { 
          var num=Math.floor(Math.random()*arr.length); //生成随机数num
          temp.push(arr[num]);    //获取arr[num]并放入temp
          arr.splice(num,1);    
      }
      return temp;
    },
    flashChange(arr){
      this.popArr[arr].flag = true
      // this[arr] = true;
      setTimeout(()=>{
       this.popArr[arr].flag = false;
       // this[arr]
      },2000)
    },
  },
  beforeDestroy(){
    
    clearInterval(this.scrollTimer);
    clearInterval(this.time_id);
  }
}
</script>

