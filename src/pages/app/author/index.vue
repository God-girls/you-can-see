
<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import {html} from '../../../assets/js/global.js';
import loading from '../../../components/base/loading'
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      avatar:'',
      paraData:{
        type:'H5',
        inviter:''
      },
      loading:false,
      loadError:'',
      inviterMini:'',
      jumpto:'/'
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
  created(){

    if (this.$route.query.inviter) {
      this.paraData.inviter = unescape(this.$route.query.inviter);
    }

    this.getLogin()
  },
  mounted (){

    dplus.track('微信登录',{'from':html.useragent()});//统计代码

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    initJumpto(){
      if (this.$route.query.search) {
        location.href = html.openInWechat(this.ttDomain + '/#/app/author?jumpto=/order/list');
        return;
      }
      if (this.$route.query.redirecto) {
        let jumpUrl = this.ttDomain + '/#/app/author?jumpto=';
        let params = '/prd/list?seller='+this.$route.query.seller
        if (this.$route.query.goodid) params += '&goodid='+ this.$route.query.goodid;
        jumpUrl += encodeURIComponent(params);

        if (html.isWechat()) location.href = html.openInWechat(jumpUrl);
        else  location.href = html.openInOher(jumpUrl)
        return;
      }
      if (this.$route.query.from == 'seller') {
        if (html.isWechat()) location.href = html.openInWechat(this.ttDomain + '/#/app/author?jumpto=' + this.$route.query.jumpto);
        return;
      }
      if (html.isWechat()) {//如果是在微信
        this.getLogin();     
      }
    },
    pushHistory (){  
      window.addEventListener("popstate", (e)=> {

        this.$router.push('/')
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
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
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
                location.href = html.openInWechat(this.ttDomain + '/#/app/author');
              }

            }else{
              this.initMSG(resData.codemsg)
            }
        }).catch(function(response){
          console.log(response)
          this.initMSG('宝贝太火爆了，系统繁忙，请稍后再试~~')
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
          this.$router.push(this.jumpto)
        }else{
          localStorage.clear()
          this.getLogin()
        }
      }).catch((response)=>{
        localStorage.clear()
        this.getLogin()
      });        
    },
    closeDialog(arr){
      this[arr] = false
    }
  }
}
</script>

