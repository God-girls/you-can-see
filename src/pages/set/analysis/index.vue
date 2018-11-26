<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import datepicker from '../../../components/base/Datepicker.vue'
import { mapState, mapActions } from 'vuex'
import {html} from '../../../assets/js/global.js';
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'商品分析',
        'link':'/my',
        // isNobg:true,
      },
      token:'',
      loading:false,
      noData:false,
      isAndroid:false,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'-----我是有底线的-----',
      paraData:{
        begin_time:'',
        end_time:'',
        ps:50,
        pn:1
      },
      isCur:0,
      tabs:[
        {name:'全部商品'},
        {name:'查看单品'},
        {name:'商品排行'}
      ],
      minDate:'2018-1-01',
      profile:{},
      listData:[]
    }
  },
  components: {
    loading,
    nodate,
    myhead,
    datepicker
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
  mounted () {

    if (html.isWebAndroid()) {
      this.isAndroid = true;
    }
    if (this.TOKEN) {
      this.profile = this.PROFILE
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
    }
    if (this.$route.query.from == 'shop') {
      this.header.link = '/shop'
    }
    this.paraData.begin_time = this.curData();
    this.paraData.end_time = this.curData();       

    // this.getProfile ();
    dplus.track('我的余额',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    curData(){
      const oDate = new Date();
      function add_zero(temp){
        if(temp<10) return "0"+temp;
        else return temp;
      }
      return oDate.getFullYear()+'-'+add_zero(oDate.getMonth() + 1)+'-'+add_zero(oDate.getDate());
    },
    getProfile (){
      axios.post('/bonus_api/v1/bonus/userinfo',qs.stringify({
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

          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    getList(done){

      this.noData = false;

      if ((this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 )){
        if(done) done(true) 
        return;
      }
      axios.post('/bonus_api/v1/bonus/wallet_log',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{     

          let resData = response.data; 
          
          if (resData.success) {
            let ranks = resData.result;
            this.totalPageCount = 1;

              if (this.paraData.pn == 1) {
                  this.listData = ranks.items;

                  if (this.listData.length < 6) this.noDataText = '';
                  if (this.listData.length == 0) this.noData = true;
              }
              else {
                this.listData = this.listData.concat(ranks.items);
              }
              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;        
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.$router.push('/')
            }
          }
          if (done) done(true);

      }).catch((response)=>{if (done) done(true)});  

    },
    initBridge(){
      var vm = this;
      if (html.isWawaIos()) {
        setupWebViewJavascriptBridge(function(webBridge) {
          bridgeLogin(webBridge)
        });
      }else if (html.isWawaAndroid()){
        bridgeLogin();
      }
      function bridgeLogin(param){
        var webBridge = param ? param : webBridgeAndroid;
        webBridge.registerHandler('notification', (data, responseCallback) =>{
          if (data == 'DidBecomeActive') {//成功
            vm.keysLog = false;
            vm.fetchCurrent();
          }
        })    
      }
    },
    onRefresh(done) {
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.getList(done);  
        this.getProfile ();      
      },1000)
    },
    onInfinite(done) {   
      this.indexDone = done;   
      this.getList(done);
    },
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
    goto (arr){
       this.$router.push(arr)        
    },
    goBack (){
      this.$router.push('/')      
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
    clearInterval(this.timeout);
    clearInterval(this.timerTree);
  }
}
</script>

