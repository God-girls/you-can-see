
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge';
import {html} from '../../../assets/js/global';
import loading from '../../../components/base/loading'
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    modalDialog,
    loading,
  },
  data () {
    return {
      header:{
        'name':'登录',
        'link':'/my',
      },
      login:false,
      register:false,
      wawaIos:false,
      loginFail:false,
      regFail:false,
      clickCaptcha:false,
      loading:false,
      loadError:'',
      isWeb:false,
      isApp:false,
      protocol:false,
      findPWD:false,
      resetOK:false,
      iosHideWechat:false,
      leftTime:60,
      regSubpwd:'',
      thirdLogin:false,
      thirdInviter:'',
      paraData:{
        acc:'',
        captcha:'',
        source:1,
      },
      errorMsg:'',
      statusBar:{},
      bottomBarH:{},
      isSlot:'footer',
      service:false,
      setFlag:false,
      profileData:{
        country:'',
        nick:'',
        uid:''
      },
      avatar:'',
      bottomBarH:{},
      imgSrc:'',
      hint:'',
      clickImg:false,
      blackName:false,
      iAgree:true,
      allTouchs:'',
      touchs:[],
      timer:'',
      firstWechatLogin:false,
      noBack:false,
      iosHideWechat:false
    }
  },
  created(){
    if (this.$route.query.isguest){
      this.guestTo();
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'STATUSBARH',
      'BOTTOMBARH',
      'ISWXAAPPINSTALLED'
    ])
  },
  mounted: function () {
    // this.creatOauth()
    if (html.isWawa()) {
      this.removeStorage();
      this.isApp = true;
      this.paraData.source = 2;//app
      setupWebViewJavascriptBridge((webBridge)=> {
       webBridge.callHandler('loadOk')
      });
      if (this.$route.query.channel) {
        this.paraData.channel = this.$route.query.channel;
      } 
      if (this.$route.query.quit) {
        this.quitApp();
      } 
      this.getStatusBar();
      if (this.$route.query.firstWechatLogin) {
        this.firstWechatLogin = true;
        // this.noBack = true;
        this.paraData.uid = this.$route.query.uid;
        this.token = this.$route.query.token;
      } 
      if (this.ISWXAAPPINSTALLED == '0' || this.$route.query.isWXAppInstalled == '0') {
        this.iosHideWechat = true;
        this.switchState({
          ISWXAAPPINSTALLED:'0',
        })            
      }    
    }else{
      if (this.$route.query.firstWechatLogin) {
        this.firstWechatLogin = true;
        this.noBack = true;
        this.paraData.uid = this.UID;
        this.token = this.TOKEN;
      } 
    }   
    document.body.addEventListener('touchstart', function () {});
    dplus.track('登录页',{'from':html.useragent(),});//统计代码
  },
  methods: { 
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (this.$route.query.statusBarH) {
        this.switchState({
          STATUSBARH:(Number(this.$route.query.statusBarH) ? Number(this.$route.query.statusBarH)*2 : 0),
        })
      }
      if (this.$route.query.bottomBarH) {
        this.switchState({
          BOTTOMBARH:(Number(this.$route.query.bottomBarH) ? Number(this.$route.query.bottomBarH)*2+30 : 0),
        })
      }
    },
    quitApp(){
      if (this.isApp) {
        setupWebViewJavascriptBridge((webBridge)=> {
          webBridge.callHandler('quit')
        })      
      }      
    },
    removeStorage(){//退出登录时清册数据
      this.clearState();
      this.clearState();
    },
    getCaptcha(arr){
      // this.getImage();
      axios.post('/bonus_api/v1/user/captcha/fetch_captcha',qs.stringify({
        acc:this.paraData.acc,
        act:this.firstWechatLogin ? 'U' : 'R'
      })
      ).then((response)=>{   
        
        let resData = response.data;  

        if (resData.success) {
          this.clickCaptcha = true;
          this.leftTime = 60;
          this.timer = setInterval(()=>{
            this.leftTime = this.leftTime -1;
            if (this.leftTime <= 0) {
              this.clickCaptcha = false;
              clearInterval(this.timer);
              this.leftTime = 0;
            }
          }, 1000)
        }  else {
          if (resData.code == '203') {
            this.blackName = true;
          }else
             this.initMsg(resData.codemsg)
        }
      }).catch((response)=>{
        this.initMsg('呃哦，网络异常，再试一次~')
      });  
    },
    loginFunc(){//手机号登录
      if (!this.iAgree) {
        this.initMsg('请先同意《红多多服务条款》及《隐私政策协议》')
        return;
      }
      document.activeElement.blur(); 
      if (this.mobileLoginClick) return;
      this.mobileLoginClick = true;
      setTimeout(()=>this.mobileLoginClick = false,2000) 

      this.loading = true;
      
      axios.post('/bonus_api/v1/sessions/quick_create',qs.stringify(this.paraData)).then((response)=>{   
        
          let resData = response.data;  
          if (resData.success) {
        
            this.switchState({
              TOKEN:response.headers['a-token-header'],
              UID:resData.result.usr.id
            })

            this.$router.push(`/?time=${new Date().getTime()}&uid=${resData.result.usr.id}&token=${response.headers['a-token-header']}`)
             
            if (this.isApp) {
              setupWebViewJavascriptBridge((webBridge)=> {
                webBridge.callHandler('mobileLogin',Object.assign(resData.result,this.paraData,{'token':response.headers['a-token-header']}))      
              })
            }          
          this.loading = false;
           
          }  else {

            this.initMsg(resData.codemsg)
          }
      }).catch((response)=>{
        this.loading = false;
        this.initMsg('呃哦，网络异常，再试一次~')
      });  
    },
    wechatLogin(){//app微信登录
      if (this.wechatLoginClick) return;
      this.wechatLoginClick = true;
      setTimeout(()=>this.wechatLoginClick = false,2000) 
      
      var vm = this;
      if (html.isWawaIos()) {
        setupWebViewJavascriptBridge(function(webBridge) {
          bridgeLogin(webBridge)
        });
      }else{
        bridgeLogin();
      }
      this.loading = true;
      //微信 登录逻辑：先向app 取得微信 code，再向服务器获取用户信息,小程序传 'mini'
      function bridgeLogin(param){
        var webBridge = param ? param : webBridgeAndroid;

        webBridge.callHandler('wechatLogin');

        webBridge.registerHandler('getCode', (data, responseCallback) =>{
          // alert(data)
          // return;
          vm.paraData.icode = data;
          vm.creatOauth('app');
        })
      }
    },
    creatOauth(type){
      axios.post('/bonus_api/v1/sessions/create_oauth',qs.stringify({
        code:this.paraData.icode,
        type:type
      })).then((response)=>{   
        let resData = response.data;  
        this.loading = false;
        if (resData.success) {
          this.switchState({
            TOKEN:resData.result.atoken,
            UID:resData.result.id
          })
          if (type == 'app') {
            setupWebViewJavascriptBridge((webBridge)=> {
              webBridge.callHandler('weixinLogin',Object.assign(resData.result,{'uid':resData.result.id},{'token':resData.result.atoken}))      
            })        
            this.token = resData.result.atoken;
            this.paraData.uid = resData.result.id;
          }

          if (resData.result.acc) {
            this.$router.push(`/?time=${new Date().getTime()}`)
          }else{
            this.firstWechatLogin = true;
          }
          // alert(JSON.stringify(resData))
          

        }else{
          this.initMsg(resData.codemsg);
         
        }
      }).catch(function(response){
        this.initMsg('网络异常，请重试');
      });  
    },
    bindAcc(){
      if (!this.iAgree) {
        this.initMsg('请先同意《红多多服务条款》及《隐私政策协议》')
        return;
      }
      document.activeElement.blur(); 
      if (this.mobileLoginClick) return;
      this.mobileLoginClick = true;
      setTimeout(()=>this.mobileLoginClick = false,2000) 

      this.loading = true;

      axios.post('/bonus_api/v1/user/upd_mobileno',qs.stringify(this.paraData),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        let resData = response.data;  
        if (resData.success) {
          this.loading = false;
          if (resData.result.user_switch) {
            this.switchState({
              TOKEN:resData.result.token,
              UID:resData.result.uid
            })            
          }
          this.$router.push(`/?time=${new Date().getTime()}`)
        }else{

          this.initMsg(resData.codemsg);     
        }
      }).catch(function(response){
        alert('网络异常，请重试')
      });  
    },
    initMsg(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    focusInput(arr){
      if (html.isWawaAndroid() || html.isWebAndroid()) {
        setTimeout(()=>{
          this.$refs[arr].scrollIntoView(true);
          this.$refs[arr].scrollIntoViewIfNeeded();
        },200)      
      }
    },
    closeDialog (arr){
      this[arr] = false
    },
    openDiaog(){
      this.protocol = true;
    },
    checkChar (Message){ //字节统计
        let ByteCount = 0,
            StrLength = Message.length;
        for (let i=0;i<StrLength;i++){
            ByteCount  = (Message.charCodeAt(i)<=256) ? ByteCount + 1 : ByteCount + 2;
        }
        return ByteCount;
    },
    guestTo(){
      this.$router.push('/index?isguest=true')
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
  }
}
</script>

