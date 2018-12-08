
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
        'name':'提现',
        'link':'/my/balance',
      },
      loading:false,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      changeAlipay: false,
      clickCaptcha:false,
      clickCaptcha2:false,
      paraData:{
        'real_name':'',
        'account':''
      },
      receiveAlipay:'',
      profile:{},
      leftTime:60,
      leftTime2:60,
      setTel:false,
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
      this.getAlipay ()
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
    getAlipay (){
      axios.post('/seller_api/v1/user/fetch_alipay_account',qs.stringify({
        uid:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            if (resData.result) {
             this.paraData.account = resData.result.alipay_account;
             this.paraData.real_name = resData.result.real_name;
             console.log(this.paraData)
            }
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }  else {
                 this.initMSG(resData.codemsg)
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
     getCaptcha(type){
      if (!this.profile.acc) {
        this.setTel = true;
        return
      }
      axios.post('/seller_api/v1/user/captcha/fetch_captcha',qs.stringify({
        acc:this.profile.acc,
        act:type
      })
      ).then((response)=>{   
        
        let resData = response.data;  

        if (resData.success) {
          if (type == 'W') {
            this.clickCaptcha = true;
            this.leftTime = 60;
          }else{
            this.clickCaptcha2 = true;
            this.leftTime2 = 60;
          }
          clearInterval(this.timer);
          this.timer = setInterval(()=>{
            if (type == 'W') {
              this.leftTime = this.leftTime -1;
              if (this.leftTime <= 0) {
                this.clickCaptcha = false;
                clearInterval(this.timer);
                this.leftTime = 0;
              }             
            }else{
              this.leftTime2 = this.leftTime2 -1;
              if (this.leftTime2 <= 0) {
                this.clickCaptcha2 = false;
                clearInterval(this.timer);
                this.leftTime2 = 0;
              }                           
            }
          }, 1000)
        }  else {
             this.initMSG(resData.codemsg)
        }
      }).catch((response)=>{
        this.initMSG('呃哦，网络异常，再试一次~')
      });  
    },
   withDraw (){
      this.loading = true;
      if (!this.profile.balance || Number(this.paraData.amount) > Number(this.profile.balance)) {
        this.initMSG('账户余额不足')
        return;
      }
      if (!this.paraData.amount || Number(this.paraData.amount) < 1) {
        this.initMSG('最少提现 1 元')
        return;
      }
      if (!this.paraData.account || !this.paraData.real_name || !this.paraData.captcha) {
        this.initMSG('请填写完整信息信息')
        return;
      }
      axios.post('/seller_api/v1/seller/withdraw',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            this.initMSG('提现成功');
            // this.getProfile ();

            this.profile.balance = html.sub(this.profile.balance,this.paraData.amount);
            this.switchState({
              PROFILE:this.profile,
            })            
            this.clickCaptcha = false;

            clearInterval(this.timer);
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }  else {
           
              this.initMSG(resData.codemsg)
            }
          }
      }).catch((response)=>{
        this.loading = false;
        this.initMSG('操作超时');
        this.getProfile ();
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

