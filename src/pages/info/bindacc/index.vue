
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
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
        'name':'绑定手机号',
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
      receiveAlipay:'',
      profile:{},
      leftTime:60,
      leftTime2:60,
      realAuth:false,
      realData:{},
      newAlipay:'',
      newAlipay2:'',
      isIosWechat:false
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
    if (html.isIosWechat()) {
      this.isIosWechat = true;
    }

  },
  mounted: function () {
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;

      dplus.track('提现',{'from':html.useragent()});//统计代码      
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
            this.profile.acc = this.paraData.acc;
            this.switchState({
              PROFILE:this.profile
            })
            this.initMSG('操作成功')
            setTimeout(()=>{
              if (this.$route.query.from == 'widthdraw') {
                this.goto('/my/widthdraw')
              }else
                this.goto('/my')
            },2000)
        }else{

          this.initMSG(resData.codemsg);     
        }
      }).catch(function(response){
        this.initMSG('网络异常，请重试')
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

