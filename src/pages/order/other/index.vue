<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
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
        'name':'其它设置',
        'link':'/prd/create',
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      loading:false,
      showNumber:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      leftTime:'00:00:00',
      curFomoData:{},
      isApp:'',
      navType:'my',
      profile:{},
      isWechat:false,
      other:{
        show_comment:true,
        show_sell:true,
        sell_base:0
      }
    }
  },
  components: {
    loading,
    myhead,
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'CART'
    ])
  },
  mounted () {
    if (this.$route.query.id) {
      this.header.link = '/prd/create?id='+this.$route.query.id
    }
    dplus.track('我的',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});
    this.other = this.CART.other;
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    getStatusBar(){
      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
    },
    goto(arr){
      this.switchState({
        CART:Object.assign(this.CART,{other:this.other})
      })      
      this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
}
</script>

