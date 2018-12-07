
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {html} from '../../../assets/js/global.js';
import wx from 'weixin-js-sdk'; 
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      avatar:'',
      paraData:{
        type:'H5'
      },
      inviterMini:''
    }
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

    if (this.$route.query.redirecto) {
      let jumpUrl = this.ttDomain + '/#/app/login?jumpto=';
      let params = '/prd/list?seller='+this.$route.query.seller
      if (this.$route.query.goodid) 
        params += '&goodid='+ this.$route.query.goodid;
      jumpUrl += encodeURIComponent(params);

      if (html.isWechat()) location.href = html.openInWechat(jumpUrl);
      else if (html.inqq())  location.href = html.openInOher(jumpUrl);
      else this.goto(params)
      return;
    }
    if (html.isWechat()) {//如果是在微信
      this.getLogin();
    }else if (html.isInqq()) {
      this.getLogin2();
      this.paraData.oatype = 'qq'
    }else{
      console.log('121212',this.$route.query.jumpto)

      // console.log(params)
      this.goto(this.$route.query.jumpto)

    }

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),

    initJumpto(){
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
    resolveInviter(){
      if (location.href.indexOf('inviter') > -1) {
          this.paraData.inviter = this.getCode('inviter');
          this.inviterMini = '?inviter='+this.getCode('inviter');                
        if (location.href.indexOf('params') > -1) {
            this.paraData.inviter = this.getCode('params');
            this.inviterMini += '&params='+this.getCode('params');                
        }
      }
    },
    openWechat (){
      let appID = 'wx357ca89ca431b3ca';
      let jumpUrl = this.ttDomain + '/?'
                  +'&goodid=' + this.$route.query.goodid
                  +'&seller=' + this.$route.query.seller
                  +'#/app/author';

     location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appID
            +'&redirect_uri='+encodeURIComponent(jumpUrl)
            +'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'

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
              window.localStorage.setItem('ttUid', resData.result.id);
              window.localStorage.setItem('ttToken', resData.result.atoken);
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
              alert(resData.codemsg)
            }
        }).catch(function(response){
          console.log(response)
          alert('宝贝太火爆了，系统繁忙，请稍后再试~~')
        });        
    },
    getLogin2 (){//qq微博登录登录

        if (location.href.indexOf('code') > -1) this.paraData.code = unescape(this.getQueryValue('code'));
        
        axios.post('/seller_api/v1/sessions/create_oauth2',qs.stringify(this.paraData)).then((response)=>{   
            let resData = response.data;  
            // alert(JSON.stringify(resData))
            if (resData.success) {
              window.localStorage.setItem('ttUid', resData.result.id);
              window.localStorage.setItem('ttToken', resData.result.atoken);
              this.switchState({
                TOKEN:resData.result.atoken,
                UID:resData.result.id
              })

              if (this.$route.query.jumpto) {
                this.$router.push(this.$route.query.jumpto)
              }else{
                this.$router.push('/')
              }

            }else{
              alert(resData.codemsg)
            }
        }).catch(function(response){
          console.log(response)
          alert('宝贝太火爆了，系统繁忙，请稍后再试~')
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
          this.goto('/prd/list?seller='+this.$route.query.seller)
            
        }else{
          this.clearState();
          wx.miniProgram.redirectTo({url: `/pages/login/login${this.inviterMini}`})
        }
      }).catch((response)=>{
        wx.miniProgram.redirectTo({url: `/pages/login/login${this.inviterMini}`})
      });        
    },
    goto(arr){
      this.$router.push(arr)
    }
  }
}
</script>

