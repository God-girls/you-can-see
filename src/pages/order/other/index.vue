<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
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
        sell_base:'0'
      },
      isIosWechat:false
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
  created () {
    if (html.isIosWechat()) {
      this.isIosWechat = true;
    }

  },
  mounted () {
    if (this.$route.query.id) {
      this.header.link = '/prd/create?id='+this.$route.query.id
    }
    dplus.track('其它设置',{'from':html.useragent()});//统计代码
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
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    goBack(){
      this.$router.push('/prd/create')        
    },
    goto(arr){
      if (this.other.show_sell && (Number(this.other.sell_base) < 0 || Number(this.other.sell_base) > 10000)) {
        this.initMSG('数量基数0-10000');
        return;
      }
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

