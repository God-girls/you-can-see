
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {html} from '../../../assets/js/global.js';
import wx from 'weixin-js-sdk'; 
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import modalDialog from '../../../components/base/dialog'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      avatar:'',
      loading:false,
      loadError:'',
      paraData:{
        type:'H5'
      },
      inviterMini:'',
      // jumpto:''
    }
  },
  components: {
    modalDialog,
    loading
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'UNIONID'
    ])
  },

  mounted (){

    // if (this.$route.query.redirecto) {
    //   let params = '/prd/list?seller='+this.$route.query.seller
    //   if (this.$route.query.goodid) params += '&goodid='+ this.$route.query.goodid;
    //   this.jumpto = params;
    // }
    // if (localStorage.ttToken) {
    //   this.testToken()
    // }else{
    //   this.initJumpto()
    // }
    this.initJumpto()
    dplus.track('qq登录',{'from':html.useragent()});//统计代码

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),

    initJumpto(){
      if (this.$route.query.redirecto) {
        let jumpUrl = this.ttDomain + '/#/app/login?jumpto=';
        let params = '/prd/list?seller='+this.$route.query.seller
        if (this.$route.query.goodid) 
          params += '&goodid='+ this.$route.query.goodid;
        jumpUrl += encodeURIComponent(params);

        if (html.isWechat()) location.href = html.openInWechat(jumpUrl);
        else if (html.isInqq())  location.href = html.openInOher(jumpUrl);
        else this.goto(params)
        return;
      }
      if (html.isWechat()) {//如果是在微信
        this.getLogin();
      }else if (html.isInqq()) {
        this.paraData.oatype = 'qq'
        this.getLogin2();
      }else{
        this.goto(this.$route.query.jumpto)
      }
    },
    getCode (name) {
        var str = self.location.search.substr(1);
        var reg = new RegExp("(^|&)"+name+"=([^&\n]*)(&|\n|$)");
        var r = str.match(reg);
        if (r!=null) return r[2]; return null;
    },  
    closeWindow (){
      wx.ready(function () {
        wx.closeWindow();
      })      
    },
    getQueryValue (name) {
        var str = self.location.href.split('#')[0].split('?')[1];
        var reg = new RegExp("(^|&)"+name+"=([^&\n]*)(&|\n|$)");
        var r = str.match(reg);
        if (r!=null) return r[2]; return null;
    },    
    getLogin (){//微信登录

        if (location.href.indexOf('code') > -1) this.paraData.code = unescape(this.getQueryValue('code'));

        axios.post('/seller_api/v1/sessions/create_oauth',qs.stringify(this.paraData)).then((response)=>{   
            let resData = response.data;  
            // alert(JSON.stringify(resData))
            if (resData.success) {
              window.localStorage.setItem('UID', resData.result.id);
              window.localStorage.setItem('TOKEN', resData.result.atoken);
              this.switchState({
                TOKEN:resData.result.atoken,
                UID:resData.result.id
              })
              // alert('jumpto：'+this.$route.query.jumpto)
              if (this.$route.query.jumpto) {
                this.$router.push(this.$route.query.jumpto)
              }else{
                this.$router.push('/')
              }

            }else{
              this.initMSG(resData.codemsg)
            }
        }).catch(function(response){
          console.log(response)
          this.initMSG('宝贝太火爆了，系统繁忙，请稍后再试~~')
        });        
    },
    getLogin2 (){//qq微博登录登录

        if (this.$route.query.code) this.paraData.code = this.$route.query.code;
        
        axios.post('/seller_api/v1/sessions/create_oauth2',qs.stringify(this.paraData)).then((response)=>{   
            let resData = response.data;  

            if (resData.success) {
              window.localStorage.setItem('ttUid', resData.result.id);
              window.localStorage.setItem('ttToken', resData.result.atoken);
              this.switchState({
                TOKEN:resData.result.atoken,
                UID:resData.result.id
              })
              if (this.$route.query.jumpto) {
                this.goto(this.$route.query.jumpto)
              }else{
                this.goto('/')
              }

            }else{
              this.initMSG(resData.codemsg)
            }
        }).catch(function(response){
          console.log(response)
          this.initMSG('宝贝太火爆了，系统繁忙，请稍后再试~')
        });        
    },
    testToken(){//检验token,如果失败重新登录

      axios.post('/seller_api/v1/user/info',qs.stringify({
        'uid':localStorage.ttUid
      }),{
        headers: {
            "A-Token-Header": localStorage.ttToken,
        }
      }).then((response)=>{   
        let resData = response.data;  

        if (resData.success) {
          this.switchState({
            TOKEN:localStorage.ttToken,
            UID:localStorage.ttUid
          })            
          this.goto(this.jumpto)
        }else{
          localStorage.clear()
          this.initJumpto()
        }
      }).catch((response)=>{
        localStorage.clear()
        this.initJumpto()
      });        
    },
    closeDialog(arr){
      this[arr] = false
    },
    goto(arr){
      this.$router.push(arr)
    }
  }
}
</script>

