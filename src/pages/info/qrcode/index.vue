
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import qrCode from 'qrcode';
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading
  },
  data () {
    return {
      header:{
        'name':'我的二维码',
        'link':'/my',
      },
      loading:false,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      changeAlipay: false,
      clickCaptcha:false,
      clickCaptcha2:false,
      paraData:{
      },
      headImg:'',
      profile:{},
      leftTime:60,
      leftTime2:60,
      realAuth:false,
      realData:{},
      qrcodeUrl:'',
      firstWithdraw:false
    }
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
    }
  },
  mounted: function () {
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/100/h/100/t/';

      qrCode.toDataURL( this.ttDomain+'/#/app/author?redirecto=true&seller='+this.paraData.uid , {
          margin: 0,
          width:280,
          height:280
      }, (error,url)=> {
          if (error) console.log(error);
          this.qrcodeUrl = url;
      });      
    }
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (this.BOTTOMBARH) {
        this.bottomBarH = {'padding-bottom':this.BOTTOMBARH+'px'};     
      }
    },
    getCaptcha(type){
      if (!this.paraData.acc) {
        this.initMSG('请输入手机号')
        return;
      }
      axios.post('/seller_api/v1/user/captcha/fetch_captcha',qs.stringify({
        acc:this.paraData.acc,
        act:type
      })
      ).then((response)=>{   
        
        let resData = response.data;  

        if (resData.success) {

          this.clickCaptcha = true;
          this.leftTime = 60;
          clearInterval(this.timer);
          this.timer = setInterval(()=>{
              this.leftTime = this.leftTime -1;
              if (this.leftTime <= 0) {
                this.clickCaptcha = false;
                clearInterval(this.timer);
                this.leftTime = 0;
              }             
          }, 1000)
        }  else {
             this.initMSG(resData.codemsg)
        }
      }).catch((response)=>{
        this.initMSG('呃哦，网络异常，再试一次~')
      });  
    },
    bindAcc(){
      if (!this.paraData.acc) {
        this.initMSG('请输入手机号')
        return;
      }
      if (!this.paraData.captcha) {
        this.initMSG('请输入验证码')
        return;
      }
      document.activeElement.blur(); 
      if (this.mobileLoginClick) return;
      this.mobileLoginClick = true;
      setTimeout(()=>this.mobileLoginClick = false,2000) 

      this.loading = true;

      axios.post('/seller_api/v1/user/upd_mobileno',qs.stringify(this.paraData),{
        headers: {
            "A-Token-Header": this.token,
        }
      }).then((response)=>{   
        let resData = response.data;  
        if (resData.success) {
          this.loading = false;
            this.profile.sex = this.paraData.sex;
            this.switchState({
              PROFILE:this.profile
            })
            this.initMSG('操作成功')
            setTimeout(()=>{
              this.$router.push('/my')
            },2000)
        }else{

          this.initMsg(resData.codemsg);     
        }
      }).catch(function(response){
        alert('网络异常，请重试')
      });  
    },
    goto(arr){
      this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false;
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },

  },
  beforeDestroy(){
    clearInterval(this.timer);
  }
}
</script>

