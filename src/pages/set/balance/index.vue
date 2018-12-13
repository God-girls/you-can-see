<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import { mapState, mapActions } from 'vuex'
import {html} from '../../../assets/js/global.js';
import axios from 'axios';
import qs from 'qs';

// 引入图表
export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'我的钱包',
        'link':'/my',
        // isNobg:true,
      },
      token:'',
      loading:false,
      noData:false,
      isCur:1,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'-----技术支持：公众号“小小麦的家"-----',
      totalPageCount:-1,
      paraData:{
        begin_time:'',
        end_time:'',
        ps:50,
        pn:1
      },
      minDate:'2018-1-01',
      profile:{},
      listData:[],

    }
  },
  components: {
    loading,
    nodate,
    myhead,
    // datepicker
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

    this.getBonus()
    dplus.track('我的余额',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    changeType(index){
      this.isCur = index;
      this.typeFormat();
      this.getList()
    },
    typeFormat(){
      switch(this.isCur){
        case 0:
          this.dataTime.start = html.timeForMat(1)
          this.dataTime.end = html.timeForMat(1)
        break;

        case 1:
          this.dataTime.start = html.timeForMat(0)
          this.dataTime.end = html.timeForMat(0)
        break;

        case 2:
          this.dataTime.start = html.timeForMat(6)
          this.dataTime.end = html.timeForMat(0)
        break;

        case 3:
          this.dataTime.start = html.timeForMat(29)
          this.dataTime.end = html.timeForMat(0)
        break;

      }
    },
    getBonus (){
      axios.post('/seller_api/v1/seller/goods_stat',qs.stringify({
        uid:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;

          if (resData.success) {
            this.saleData = resData.result;
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

      if ((this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 )){
        if(done) done(true) 
        return;
      }
      axios.post('/seller_api/v1/seller/wallet_log',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;  
          if (resData.success) {
            let ranks = resData.result;
            this.totalPageCount = ranks.totalPageCount;

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
          if(done) done();
      }).catch((response)=>{
        if(done) done(done)
      });  

    },
    onRefresh(done) {
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.getList(done);  
      },1000)
    },
    onInfinite(done) {   
      setTimeout(()=>{
        this.indexDone = done;   
        this.getList(done);
      },500)
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

