
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading
  },
  data () {
    return {
      header:{
        'name':'订单支付',
        'link':'/order/create',
      },
      paraData:{
        uid:'',
        commdityid:101,
        goods:'',
        channel:'W4',//W4 公众号支付 W5微信支付 W2
      },
      isToggle:false,
      loading:false,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      headerTxt: '添加新地址',
      specs:[],
      priceSet:{
        def_price:'',
        subIndex: 0,
        curIndex:0,
        price:[],
        list:{}
      },
      curType:0,
      isIosWechat:false,
      prdDetail:{
        orderid:[]
      }
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'CART'
    ])
  },
  created(){
    if (html.isPc()) {
      document.body.setAttribute('id','pcBody');
    }

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
    }
    if (this.CART) {
      this.prdDetail = this.CART;
      this.paraData.goods = this.prdDetail.orderid.join(',')
    }else{
      this.goto('/')
    }
  },
  mounted: function () {

    dplus.track('订单支付',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    goto(arr){
      this.switchState({
        CART:Object.assign(this.CART,{priceSet:this.priceSet})
      })      
      this.$router.push(arr)        
    },
    changeSpec(){
      if(!this.specs.length) return;
      this.priceSet.curIndex = 1
    },
    changeType(index){
      // console.log(this.priceSet.price)
      if (this.priceSet.subIndex == index || !this.specs.length) return;
      // debugger
      for (var i in this.priceSet.list) {
        if (this.priceSet.list[i] != '') {
          this.isToggle = true;
          this.curType = index;
          return;
        }
      }  
      this.priceSet.subIndex = index;
    },
    payment (){

      this.loading = true;

      axios.post('/seller_api/v1/pay/payment_url',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
              this.orderid = resData.result.orderid;
              this.orderkey = resData.result.key;
         
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
            vm.initMSG('支付成功')
            setTimeout(()=>{
              vm.goto('/order/list');
            },2000)

           }else if(res.err_msg == "get_brand_wcpay_request:cancel" || res.err_msg == "get_brand_wcpay_request:fail") {
            vm.initMSG('支付失败')
           }
         }
      );
    },
    goBack(){
      this.$router.push('/order/create')        
    },
    changeSubmit(){
      this.isToggle = false;
      this.priceSet.subIndex = this.curType;
    },
    closeDialog (arr){
      this[arr] = false;
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },

  }
}
</script>

