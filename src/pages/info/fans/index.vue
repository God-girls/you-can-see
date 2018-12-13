<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import nodate from '../../../components/base/nodate'
import modalDialog from '../../../components/base/dialog'
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
        'name':'我的粉丝',
        'link':'/discovery',
        // isNobg:true,
      },
      token:'',
      loading:false,
      noData:false,
      seeDetail:false,
      isCur:1,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'-----技术支持：公众号“小小麦的家"-----',
      totalPageCount:-1,
      paraData:{
        orderby:'count desc',
        ps:50,
        pn:1
      },
      tabs:[
        {name:'买家',type:'',flag:false},
        {name:'订单数(件)',type:'count',flag:true},
        {name:'金额元',type:'amount',flag:false},        
        {name:'最后购买时间',type:'lastbuy',flag:false}        
      ],
      minDate:'2018-1-01',
      profile:{},
      listData:[],
      orderInfo:{},
      fansPn:1,
      fansList:[],
      fansTotal:-1,
      fansName:''
    }
  },
  components: {
    loading,
    nodate,
    myhead,
    modalDialog
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
      // this.header.opacity = true;
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

    dplus.track('我的粉丝',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    changeType(item,index){
      if (index == 0) return;
      this.isCur = index;
      item.flag = !item.flag
      this.paraData.orderby = item.type + ' ' + (item.flag?'desc':'asc');
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.getList()
      },500)
    },
    getList(done){

      if ((this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 )){
        if(done) done(true) 
        return;
      }
      axios.post('/seller_api/v1/seller/fetch_fans_stat',qs.stringify(this.paraData),{
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
    fetchFans(item){
      this.buyer = item.uid;
      this.seeDetail = true;
      this.fansName = item.nick
      this.fansPn = 1;
      this.fansTotal = -1;
      this.fetchInfo()
    },  
    fetchInfo(flag){
      if (flag) {
        this.fansPn++
      }
      axios.post('/seller_api/v1/seller/package_list',qs.stringify({
        uid:this.UID,
        buyer:this.buyer,
        ps:10,
        pn:this.fansPn
      }),{
          headers: {
              "A-Token-Header": this.TOKEN,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.fansList = resData.result.items;
            this.fansTotal = resData.result.totalPageCount;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
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
    closeDialog(arr){
      this[arr] = false
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

