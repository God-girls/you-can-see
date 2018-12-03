
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

    // alert(this.$route.query.seller)
    alert(location.href)
    if (this.$route.query.redirecto) {
      let jumpUrl = this.ttDomain + '/#/app/author?jumpto='+encodeURIComponent('/prd/list?seller='+this.$route.query.seller+
          + (this.$route.query.goodid?'&goodid='+ this.$route.query.goodid:''))

      if (html.isWechat()) location.href = html.openInWechat(jumpUrl);
      else  location.href = html.openInOher(jumpUrl)
      return;
    }
    if (html.isWechat()) {//如果是在微信
      this.getLogin();
      this.pushHistory();      
    }else{
      this.getLogin2();
      this.paraData.oatype = 'qq'
    }

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    pushHistory (){  
      window.addEventListener("popstate", (e)=> {
        // alert(location.href)

        if (location.href.indexOf('/prd/list') > -1) {
          this.$route.push(location.href.split('#')[1])
        }else{
          this.$router.push('/index')
        }
      }, false);
      var state = {
          title : "小小麦",
          url : "#"
      };
      window.history.replaceState(state, "小小麦", "#");
    },
    closeWindow (){
      wx.ready(function () {
        wx.closeWindow();
      })      
    },
    getShare (){
        axios.post('/seller_api/v1/sessions/share_config',qs.stringify({
          url:window.location.href.split('#')[0]
        })).then((response)=>{   
            let resData = response.data;  
            if (resData.success) 
                this.shareFunc(resData.result);         
        }).catch(function(response){});        
    },
    shareFunc(obj){
      let vm = this;
      wx.config(Object.assign(obj,{
          // debug: true,
          jsApiList: [
            "checkJsApi",
            'closeWindow',
          ]
      }));   
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
              alert('jumpto：'+this.$route.query.jumpto)
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
          alert('邪恶的外星生物破坏了娃娃机，紧急抢救中，请您稍后再试~')
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
          alert('邪恶的外星生物破坏了娃娃机，紧急抢救中，请您稍后再试~')
        });        
    },
    testToken(){//检验token,如果失败重新登录

      axios.post('/bonus_api/v1/user/info',qs.stringify({
        'uid':this.UID
      }),{
        headers: {
            "A-Token-Header": this.TOKEN,
        }
      }).then((response)=>{   
        let resData = response.data;  

        if (resData.success) {
          if(resData.result && resData.result.acc){
            this.$router.push(this.jumpto) 
          }
          else{
            this.$router.push('/app/login?firstWechatLogin=true')
          }         
        }else{
          this.clearState();
          wx.miniProgram.redirectTo({url: `/pages/login/login${this.inviterMini}`})
        }
      }).catch((response)=>{
        wx.miniProgram.redirectTo({url: `/pages/login/login${this.inviterMini}`})
      });        
    },
    // getLogin (){
    //     this.paraData.code = unescape(this.$route.query.code);

    //     this.jumpto = this.$route.query.jumpto ? unescape(this.$route.query.jumpto) : (this.ttDomain+'?'+this.timeStamp);
    //     if (this.getCode('inviter')) this.paraData.inviter = this.$route.query.jumpto;
    //     axios.post('/bonus_api/v1/sessions/create_oauth',qs.stringify(this.paraData))
    //     .then((response)=>{   
    //         let resData = response.data;  

    //         if (resData.success) {
    //           dplus.track('红多多_登录成功',{'from':html.useragent()});//统计代码

    //           this.switchState({
    //             TOKEN:resData.result.atoken,
    //             UID:resData.result.id
    //           })
    //           this.goto(this.jumpto)
    //         }else{
    //           location.href = this.wechatDirect;
    //         }
    //     }).catch(function(response){});        
    // },
  }
}
</script>

