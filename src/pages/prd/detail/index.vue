
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
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
        'name':'购买',
        'link':'/my/store',
      },
      whichOne:'',
      powerFlag:false,
      powerType:0,
      loading:false,
      loadError:'',
      profile:{
        power:0
      },
      listData:{
        district:{}
      },
      isIos:gisIOS,
      noData:false,
      amount:1,
      unitPrice:1299,
      unitFlash:299,
      editPrd:{
        checkboxModel:[]
      },
      statusBarH:'',
      bottomBarH:'',
      paraData:{}
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'EDITPRD'
    ])
  },
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
    }
  },
  mounted: function () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.editPrd = this.EDITPRD;
      this.paraData.goodsid = this.editPrd.goodsid;
      this.fetchAddress()
    }
    dplus.track('订单确认',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];    
      }
      if (localStorage['statusBarH']) this.statusBarH = JSON.parse(localStorage['statusBarH'])
    },
    fetchAddress (){
      axios.post('/bonus_api/v1/user/fetch_receive_info',qs.stringify({
        uid:this.paraData.uid
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  
          this.loading = false
          if (resData.success) {            
            if (!resData.result.length) this.noData = true;
            else this.listData = JSON.parse(resData.result[0].info);

            this.paraData.context = JSON.stringify(this.listData);
            this.loading = false
          }else {
            if (resData.code == '403' || resData.code == '250') {
               this.goto('/')
            }
          }
      }).catch(function(response){});  
    },
    widthDrawPrd (){
      if (!this.listData.name) {
        this.initMSG('请添加收货地址')
        return;
      }
      this.loading = true;
      axios.post('/bonus_api/v1/bonus/withdraw_goods',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
            this.initMSG('提取成功')
            setTimeout(()=>{
              this.goto('/my/store?type=4')
            },2000)
          }else {
            if (resData.code == '403' || resData.code == '250') {
               this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }).catch(function(response){});  
    },
    goto(arr){
      this.$router.push(arr)        
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

