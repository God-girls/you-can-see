
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
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
        pwd:'',
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
      firstWechatLogin:false
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'STATUSBARH',
      'BOTTOMBARH'
    ])
  },
  mounted: function () {
    // this.creatOauth()
    this.removeStorage();

    document.body.addEventListener('touchstart', function () {});
    dplus.track('登录页',{'from':html.useragent(),});//统计代码
  },
  methods: { 
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    quitApp(){
      if (this.isApp) {
        setupWebViewJavascriptBridge((webBridge)=> {
          webBridge.callHandler('quit')
        })      
      }      
    },
    removeStorage(){//退出登录时清册数据
      this.clearState('UID');
    },
    buildSocket (uid,token,nick){
      sockMessage({'uid':uid,'token':token,'nick':nick})//建立消息通道
      this.isWsconnect = true;
    },
    mobileLogin (){
        this.login = true;
        this.isSlot = null;
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

      document.activeElement.blur(); 
      if (this.mobileLoginClick) return;
      this.mobileLoginClick = true;
      setTimeout(()=>this.mobileLoginClick = false,2000) 

      this.loading = true;
      
      axios.post('/seller_api/v1/sessions/login_traditional',qs.stringify(this.paraData))
        .then((response)=>{   
        
          let resData = response.data;  
          // debugger
          this.loading = false;
          if (resData.success) {
        
            this.switchState({
              TOKEN:response.headers['a-token-header'],
              UID:resData.result.usr.id
            })
            localStorage.setItem('UID', resData.result.usr.id);
            localStorage.setItem('TOKEN', response.headers['a-token-header']);
            this.$router.push('/')
           
          }  else {
            this.initMsg(resData.codemsg)
          }
      }).catch((response)=>{
        this.loading = false;
        this.initMsg('呃哦，网络异常，再试一次~')
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

