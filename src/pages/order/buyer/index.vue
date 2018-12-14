<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import nodate from '../../../components/base/nodate'
import modalDialog from '../../../components/base/dialog'
import dialogDel from '../../../components/base/dialogDel'
import endWechat from '../../../components/base/endWechat'
import endWechat2 from '../../../components/base/endWechat2'
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
      noDataText:'-----技术支持：公众号“小小麦的家”-----',
      paraData:{
        ps:50,
        pn:1,
      },
      minDate:'2018-1-01',
      profile:{},
      listData:[],
      navType:'order',
      headImg:'',
      hasClick:false,
      remark:'',
      deliver:'',
      deliver_no:'',
      totalBuy:0,
      sellerInfo:{},
      myContact:false,
      wechat_code:false,
      wechat_code_show:false
    }
  },
  components: {
    loading,
    modalDialog,
    dialogDel,
    nodate,
    endWechat,
    endWechat2
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
      this.getProfile()
    }
    document.body.addEventListener('touchstart', function () {});
    dplus.track('已购宝贝',{'from':html.useragent()});//统计代码

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
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
            this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/200/h/200/';
            this.switchState({
              PROFILE:resData.result,
            })
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.redirect();
            }
            else this.initMSG(resData.msg);
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    sellerFunc (seller){
      axios.post('/seller_api/v1/seller/seller_info',qs.stringify({
        uid:this.paraData.uid,
        seller:seller
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.sellerInfo = resData.result;
            this.myContact = true;
            this.loading = false;

          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.redirect();
            }
            else this.initMSG(resData.msg);
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
      this.noData = false;
      axios.post('/seller_api/v1/seller/buyer_package',qs.stringify(this.paraData),{
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

                  // if (this.listData.length < 6) {this.wechat_code_show = false}else{this.wechat_code_show = true};
                  if (this.listData.length < 6) this.noDataText='';
                  if (this.listData.length == 0) this.noData = true;
              }
              else {
                this.listData = this.listData.concat(ranks.items);
              }
              this.totalBuy = resData.result.totalItemsCount
              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;        
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.$router.push('/')
            }
          }
          if (done) done(true);

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
    redirect(arr){
      location.href = html.openInWechat(this.ttDomain+'/#/app/login')
    },
    wechatOpen(arr){
      this[arr]=true;
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
}
</script>

