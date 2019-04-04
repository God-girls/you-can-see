<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
import nodate from '../../../components/base/nodate'
import modalDialog from '../../../components/base/dialog'
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
      noDataText:'--技术支持：小小麦--',
      paraData:{
        ps:10,
        pn:1,
        state:'',
      },
      isCur:0,
      tabs:[
        {name:'全部订单',type:null,count:0},
        {name:'未付款',type:'0',count:0},
        {name:'待发货',type:'1',count:0},
        {name:'已完成',type:'10',count:0},
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
      checked:false,
      checkboxModel:[],
      wechat_code:false,
      wechat_code_show:false,
      totalPrice:0
    }
  },
  components: {
    loading,
    modalDialog,
    nodate,
    myfooter,
  },
  watch: {//深度 watcher
    'searchCon': {
      handler (val, oldVal) { 
      
        if (val == '') {
          // debugger
          this.hasClick = false
        }
      },
      deep: true
    },
    'checkboxModel': {
      handler (val, oldVal) { 

        if (this.checkboxModel.length && this.checkboxModel.length === this.listData.length) {
          this.checked=true;
        }else{
          this.checked=false;
        }
        this.countPrice()
      },
      deep: true
    }

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
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }
  },
  mounted () {

    if (html.isWebAndroid()) {
      this.isAndroid = true;
    }
    if (this.TOKEN) {
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
    }
    this.getState()
    dplus.track('小小麦订单管理',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    countPrice(){
      this.totalPrice = 0;
      this.listData.forEach((item)=> {
        if (this.checkboxModel.indexOf(item.id) > -1) {
          this.totalPrice = html.add(this.totalPrice,item.price)
        }
      });    
    },
    counTotalPrice(price,postage){
      return html.sub(price,postage)
    },
    checkedAll(){
      if (this.checked) {//实现反选
        this.checkboxModel = [];
      }else{//实现全选
        this.checkboxModel = [];
        this.listData.forEach((item)=> {
          this.checkboxModel.push(item.id);
        });
      }
    },
    changeType(index,type){
      this.isCur = index;
      this.totalPageCount = -1;
      this.paraData.pn = 1;
      this.searchCon = ''
      this.paraData.key = '';
      // console.log(type)
      this.paraData.state = type;
      this.hasClick = false;
      this.getList();  
      this.getState()
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
    payment (){

      this.loading = true;

      axios.post('/seller_api/v1/pay/payment_url',qs.stringify({
        uid:this.paraData.uid,
        commdityid:101,
        goods:this.checkboxModel.join(','),
        channel:'W4',//W4 公众号支付 W5微信支付 W2
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
              this.orderid = resData.result.orderid;
              this.orderkey = resData.result.key;
              this.loading = false;
              if (html.isWechat()) {
                this.payment_url = JSON.parse(resData.result.payment_url);
                let payVM = this;
                
                if (typeof WeixinJSBridge == "undefined"){
                   if( document.addEventListener ){
                       document.addEventListener('WeixinJSBridgeReady', payVM.onBridgeReady, false);
                   }else if (document.attachEvent){
                       document.attachEvent('WeixinJSBridgeReady', payVM.onBridgeReady); 
                       document.attachEvent('onWeixinJSBridgeReady', payVM.onBridgeReady);
                   }
                }else{
                   this.onBridgeReady();
                }
              }else{                
                location.href = `${JSON.parse(resData.result.payment_url).mweb_url}&redirect_url=${encodeURIComponent(this.ttDomain+'/#/prd/success?seller='+this.mySeller+'&key='+this.orderkey+'&orderid='+this.orderid)}`
              }

          }else {
            if (resData.code == '403' || resData.code == '250') {
               this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }).catch(function(response){});  
    },
    onBridgeReady (){
      let vm = this;
      this.loading = true;
      WeixinJSBridge.invoke(
         'getBrandWCPayRequest', vm.payment_url,
         function(res){ 
          
           if(res.err_msg == "get_brand_wcpay_request:ok" ) {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
            vm.initMSG('支付成功');
            vm.checkboxModel = [];
            vm.onRefresh()

           }else if(res.err_msg == "get_brand_wcpay_request:cancel" || res.err_msg == "get_brand_wcpay_request:fail") {
            vm.initMSG('支付失败')
           }
         }
      );
    },
    delPop(item){
      this.curOrder = item;
      this.notes = true;
    },
    delOrder (){
      this.loading = true;
      axios.post('/seller_api/v1/proxy/del_order',qs.stringify({
        'uid':this.paraData.uid,
        'oid':this.curOrder.id,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.notes = false;
            this.initMSG('删除成功')
            this.onRefresh()
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
      axios.post('/seller_api/v1/proxy/query_order',qs.stringify(this.paraData),{
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

                  if (this.listData.length < 6) this.noDataText='';
                  if (this.listData.length == 0) this.noData = true;
                  if (this.isCur == 1) {
                    this.checkboxModel = [];
                    this.listData.forEach((item)=> {
                      this.checkboxModel.push(item.id)
                    });    
                  }
              }
              else {
                this.listData = this.listData.concat(ranks.items);
              }
              // if (this.isCur == 1) {
              //   if (this.checkboxModel.length < this.listData.length) this.checked = false
              //   else{
              //     this.checked = true;
              //   }                
              // }

              this.loading = false;
              this.paraData.pn = this.paraData.pn + 1;        
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }
          }
          if (done) done(true);

      }).catch((response)=>{if (done) done(true)});  

    },
    getState(){
      axios.post('/seller_api/v1/proxy/order_stat',qs.stringify({
        uid:this.paraData.uid,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            // this.orderNumber = resData.result;
            this.tabs[0].count = resData.result.total;
            this.tabs[1].count = resData.result.init;
            this.tabs[2].count = resData.result.payed;
            this.tabs[3].count = resData.result.finished;
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
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
    wechatOpen(arr){
      this[arr]=true;
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
  beforeDestroy(){
  }
}
</script>

