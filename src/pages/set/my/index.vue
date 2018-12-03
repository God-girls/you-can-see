<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
import {html} from '../../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'我',
        'link':'/',
        isNobg:true,
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      loading:false,
      begin_seconds:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      leftTime:'00:00:00',
      curFomoData:{},
      isApp:'',
      navType:'my',
      profile:{},
      isWechat:false
    }
  },
  components: {
    loading,
    myfooter,
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
  mounted () {

    // if (html.isWebAndroid()) {
    //   this.isAndroid = true;
    // }
    // if (html.isWawa()) this.getStatusBar();
    // if (html.isWechat()) {
    //   this.isWechat = true;
    // }

    if (this.TOKEN) {
      this.profile = this.PROFILE
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/200/h/200/';
    }
    dplus.track('我的',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
    },
    wakeQQ(){
      if(html.isWawa()) {
        setupWebViewJavascriptBridge((webBridge)=> {
          webBridge.callHandler('wakeQQ',
            {'qq':'875332802',
             'key':html.isWawaIos()?'8d8a7b4f7f60a342612e85bcd36908a5205d1381d48904d3240ed3997587d49b':'nfHFQkaZul8ms7jg23YmvKg8-ix0ZoTO'})
        })
      }
    },
    getProfile (){ 
      
      axios.post('/seller_api/v1/seller/userinfo',qs.stringify({
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
            this.headImg = this.globalAvatar+(this.sellerInfo.avatar?this.sellerInfo.avatar:'')+'?imageView2/2/w/100/h/100/t/';
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },    goto (arr){
      if (arr == '/my/invite' && this.isWechat) {
        if (Number(this.profile.total_bonus) > 10) {
          wx.miniProgram.navigateTo({url: `/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter=${this.profile.invite_code}&desc=${this.profile.nick}邀请你一起购物赚钱，${this.profile.nick}已在红多多获得分红${this.profile.total_bonus}元！`})
        }else{
          wx.miniProgram.navigateTo({url: `/pages/share/share?type=invite&sharepic=sharefinviter.jpg&inviter=${this.profile.invite_code}&desc=${this.profile.nick}邀请你一起购物赚钱，全新分红式电商，买的多赚的多！`})
        }
        return;
      }
       this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
}
</script>

