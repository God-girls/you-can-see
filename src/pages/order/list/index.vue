<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
import nodate from '../../../components/base/nodate'
import modalDialog from '../../../components/base/dialog'
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
      diliver:false,
      notes:false,
      notify:true,
      statusBar:{},
      loadError:'',
      bottomBarH:[],
      isApp:'',
      noDataText:'-----我是有底线的-----',
      paraData:{
        ps:50,
        pn:1,
        status:'0'
      },
      isCur:0,
      tabs:[
        {name:'未发货订单',type:'0',count:''},
        {name:'已发货订单',type:'1',count:''},
        {name:'全部订单',type:null,count:''}
      ],
      minDate:'2018-1-01',
      profile:{},
      listData:[],
      navType:'order',
      searchCon:'',
      hasClick:false,
      remark:'',
      deliver:'',
      deliver_no:'',
      packageStat:{}
    }
  },
  components: {
    loading,
    modalDialog,
    nodate,
    myfooter,
    datepicker
  },
  watch: {//深度 watcher
    'searchCon': {
      handler (val, oldVal) { 
      
        if (val == '') {
          // debugger
          this.hasClick = false
          console.log(this.hasClick)
          // this.searchList()
        }
      },
      deep: true
    },

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
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
      this.getProfile ();
    }

    dplus.track('订单管理',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    changeType(index,type){
      this.isCur = index;
      this.totalPageCount = -1;
      this.paraData.pn = 1;
      this.searchCon = ''
      this.paraData.key = '';
      // console.log(type)
      this.paraData.status = type;
      if (!type) delete this.paraData['status']
      this.hasClick = false;
      this.getList();  
    },
    searchList(){
      this.paraData.key = this.searchCon;
      this.loading = true;
      this.hasClick = true;
      this.onRefresh();  
    },
    searchCancel(){
      this.searchCon = ''
      this.paraData.key = '';
      this.loading = true;
      this.hasClick = false;
      this.onRefresh();  
    },
    popOrder(item,index,flag){//true 为订单备注修改
      this.listIndex = index;
      if (flag) 
        this.notes = true;
      else
        this.diliver = true;
      this.pid = item.id;
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
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },    
    setRemark (){
      if (!this.remark) {
        this.initMSG('请添加备注')
        return;
      }
      this.loading = true;
      axios.post('/seller_api/v1//seller/package_remark',qs.stringify({
        'uid':this.paraData.uid,
        'pid':this.pid,
        'remark': this.remark
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.notes = false;
            this.initMSG('备注成功')
            this.listData[this.listIndex].seller_remark = this.remark;
            this.remark = '';
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }else{
              this.initMSG(resData.msg)
            }
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    setDeliver (){
      if (!this.deliver || !this.deliver_no) {
        this.initMSG('请添加完整快递信息')
        return;
      }

      this.loading = true;
      axios.post('/seller_api/v1//seller/package_deliver',qs.stringify({
        'uid':this.paraData.uid,
        'pid':this.pid,
        'deliver': this.deliver,
        'deliver_no':this.deliver_no,
        'notify':this.notify
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.diliver = false;
            this.initMSG('发货成功')
            this.listData[0].deliver_no = this.deliver_no;
            this.listData[0].deliver = this.deliver;
            this.deliver_no = '';
            this.onRefresh();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.needLogin = true;
              this.noToken = true;
            }else{
              this.initMSG(resData.msg)
            }
          }
      }).catch((response)=>{
        this.logErrors(JSON.stringify(response))
      });  
    },
    getList(done){


      if ((this.totalPageCount+1 == this.paraData.pn || this.totalPageCount == 0 || this.totalPageCount == 1 )){
        if(done) done(true) 
        return;
      }
      this.noData = false;
      axios.post('/seller_api/v1/seller/package_list',qs.stringify(this.paraData),{
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
                  this.tabs[this.isCur].count = `( ${resData.result.totalItemsCount} )`
              }
              else {
                this.listData = this.listData.concat(ranks.items);
              }
              // console.log(this.listData)
              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;        
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.$router.push('/')
            }
          }
          if (done) done(true);

      }).catch((response)=>{if (done) done(true)});  

      axios.post('/seller_api/v1/seller/package_stat',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{     

          let resData = response.data; 

          if (resData.success) {
               this.packageStat = resData.result;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.$router.push('/')
            }
          }
      }).catch((response)=>{if (done) done(true)});  

    },
    onRefresh(done) {
      setTimeout(()=>{
        this.totalPageCount = -1;
        this.paraData.pn = 1;
        this.getList(done);  
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
    closeDialog (arr){
      this[arr] = false
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
    clearInterval(this.timeout);
    clearInterval(this.timerTree);
  }
}
</script>

