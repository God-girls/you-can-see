<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge';
import modalDialog from '../../../components/base/dialog'
import myhead from '../../../components/base/header'
import { mapState, mapActions } from 'vuex'
import {html} from '../../../assets/js/global.js';
import loading from '../../../components/base/loading'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'充值',
        'link':'/my/balance',
      },
      isCur:0,
      tabList: [
        {cost:'10',id:98},
        {cost:'50',id:99},
        {cost:'100',id:100},
        {cost:'500',id:101},
        {cost:'1000',id:102},
        {cost:'5000',id:101},
        {cost:'10000',id:107},
        {cost:'50000',id:106},
      ],
      otherCoin:'',
      loadError:'',
      loading:false,
      bottomBarH:'',
      payOk:false,
      protocol:false,
      rulers:false,
      paraData:{
        channel:'A3',//app支付宝 channel:'35','N1'现代支付，'W1' 自己的微信支付
        commdityid: 101
      },
      walletData:{},
      leftTime:'00:00:00',
      onlyWechat:false
    }
  },
  components: {
    myhead,
    modalDialog,
    loading
  },
  watch: {//深度 watcher
    'otherCoin': {
      handler (val, oldVal) { 
        if (isNaN(val)) {
          this.otherCoin = oldVal
        }
        if (val >= 10) {
        }          
        this.isCur = -1;

        if (val > 1000000) {
          this.otherCoin = 1000000
        }
        if (this.otherCoin.toString().indexOf('.') > -1) {
          this.otherCoin = oldVal
        }
      },
      deep: true
    },
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
    ])
  },
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
      this.onlyWechat = true;
    }
  },
  mounted () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE
    }
    if (html.isWawa()) this.getStatusBar();
    if (this.$route.query.from == 'redcard') {
      this.header.link = '/my/redcard'
    }
    if (this.$route.query.from == 'level') {
      this.header.link = '/my/level'
    }
    if (this.$route.query.from == 'shop') {
      this.header.link = '/shop'
    }
    if (this.$route.query.from == 'my') {
      this.header.link = '/my'
    }
    if (this.$route.query.id) {
      this.header.link = '/shop/detail?id='+this.$route.query.id
    }
    this.sysRecharge();
    dplus.track('充值',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (this.BOTTOMBARH) {
        this.bottomBarH = {'padding-bottom':this.BOTTOMBARH+'px'}
      }
    },
    sysRecharge (){
      axios.post('/bonus_api/v1/bonus/sys_recharge',qs.stringify({
        uid:this.paraData.uid,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.success) {
            
           this.walletData = resData.result;
           if (resData.result.pool_seconds > 0) {
            this.timeFunc(resData.result.pool_seconds)
            clearTimeout(this.timer2)
           }else{
            this.timeFunc2();
           }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.$router.push('/')
            }
            this.initMSG(resData.codemsg)
          }
      }).catch((response)=>{
        this.loading = false
        console.log('error')
      });  
    },
    formatSeconds(value,day) { 
      var theTime = parseInt(value);// 秒
      var theTime1 = 0;// 分
      var theTime2 = 0;// 小时
      var theTime3 = 0;// 天
      if(theTime >= 60) { 
        theTime1 = parseInt(theTime/60); 
        theTime = parseInt(theTime%60); 
        if(theTime1 >= 60) { 
          theTime2 = parseInt(theTime1/60); 
          theTime1 = parseInt(theTime1%60); 
          // if (theTime2 >=24) {
          //   theTime3 = parseInt(theTime2/24); 
          //   theTime2 = parseInt(theTime2%24); 
          // }
        } 
      } 
      var result = ""+(parseInt(theTime)>9?parseInt(theTime):'0'+parseInt(theTime)); 
      if(theTime1 > 0) { 
          result = ""+(parseInt(theTime1)>9?parseInt(theTime1):'0'+parseInt(theTime1))+":"+result;          
      }else{
        result = "00:"+result; 
      }
      if(theTime2 > 0) { 
        result = ""+(parseInt(theTime2)>9?parseInt(theTime2):'0'+parseInt(theTime2))+":"+result; 
      } else{
        result = "00:"+result; 
      }
      // if(theTime3 > 0) { 
      //   result = parseInt(theTime3)+":"+result; 
      // }
      return result; 
    },
    timeFunc(endtime){
      clearInterval(this.timer);
      let totalTime = endtime;
      
      this.timer = setInterval(()=> {
        totalTime = totalTime -1;
        if (totalTime > 0) {
            this.leftTime = this.formatSeconds(totalTime)
        }else{
          this.leftTime = '00:00:00';
          clearInterval(this.timer)
          this.sysRecharge();//倒计时为0时，再查询是否真的结束了
        }
      },1000)  
    },
    timeFunc2(endtime){
      clearTimeout(this.timer2);
      this.timer2 = setTimeout(()=> {
        this.sysRecharge();
      },5000)  
    },
    getProfile (){
      axios.post('/bonus_api/v1/bonus/userinfo',qs.stringify({
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
    goPay (type){
        if (this.isCur == -1 && this.otherCoin < 10) {
          this.initMSG('最小充值金额为 10 元')
          return;
        }
        this.paraData.payment_type = type;     
        
        if (this.onlyWechat) this.paraData.channel = 'W2';
        else this.paraData.channel = type == 'AppWeixin' ? 'N1' : 'A3';
        
        this.paraData.context = this.isCur == -1 ? this.otherCoin : this.tabList[this.isCur].cost;
        this.loading = true;
        let thisFunc = type == 'AppAlipay' ? 'onAliPay' : 'onWxPay';
        axios.post('/bonus_api/v1/pay/payment_url',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          
            let resData = response.data;  
            // alert(JSON.stringify(resData))
            if (resData.success) {
              this.loading = false;

              if (this.onlyWechat) {//如果是在小程序
                // this.third_payinfo = JSON.parse(resData.result.payment_url);
                this.wxProgram(JSON.parse(resData.result.payment_url));

              }else{//非微信
                if(html.isWawa()) {
                  setupWebViewJavascriptBridge((webBridge)=> {
                    webBridge.callHandler(thisFunc, resData.result.payment_url)
                  })
                  this.initBridge();
                }
              }

            }  else {
              
              if (resData.code == '403' || resData.code == '250') {
                location.href = '/'
              }else{
                vm.initMSG(resData.codemsg);
              }
              console.log(resData.msg);
            }
        }).catch((response)=>{
          this.initMSG('请求超时，再试一次～')
        });  
    },
    wxProgram(payment){
      wx.miniProgram.navigateTo({
        url: '/pages/pay/pay?timeStamp='+payment.timeStamp+
        '&nonceStr='+payment.nonceStr+
        '&package='+encodeURIComponent(payment.package)+
        '&signType='+payment.signType+
        '&paySign='+payment.paySign
      })
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

        webBridge.registerHandler('onPayResult', (data, responseCallback) =>{
          if (data == '0') {//成功
            vm.payOk = true;
            vm.loading = false;
            // vm.getProfile ();
            vm.sysRecharge();
          }else{
            vm.initMSG('支付失败');
          }
        })    
      }
    },
    goto (arr){
       this.$router.push(arr)        
    },
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
    closeDialog(arr){
      this[arr] = false
    }

  },
  beforeDestroy(){
    clearInterval(this.timer);
    clearTimeout(this.timer2);
  }

}
</script>

