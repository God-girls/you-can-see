
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
        'name':'价格设置',
        'link':'/prd/create',
      },
      paraData:{},
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
        price:[]
      },
      curType:0
    }
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

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
    }
    this.specs = html.objClone(this.CART.specs);
    this.priceSet = html.objClone(this.CART.priceSet);
  },
  mounted: function () {

    dplus.track('编辑收货地址',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    goto(arr){
      if (this.priceSet.curIndex == 0) {
        if (!this.priceSet.def_price) {
          this.initMSG('请设置定价')
          return;
        }
        this.priceSet.price = [];
        this.subIndex = 0;
        this.priceSet.spec_name = '*';
      }else{
        if (this.specs.length) {
            let myKey = Object.keys(this.specs[this.priceSet.subIndex])
            let priceShow = this.specs[this.priceSet.subIndex][myKey];
            let priceNew = []
            let obj = {};

            for (var i = 0; i < priceShow.length; i++) {
              if (this.priceSet.price[i] == '') {
                this.initMSG('请设置定价')
                return;
              }
              priceNew.push(this.priceSet.price[i])
              obj[priceShow[i]] = this.priceSet.price[i];
            }
            this.priceSet.price = priceNew;
            this.priceSet.def_price = '';
            this.priceSet.spec_name = myKey[0];
            this.priceSet.list = obj;

          }else{
            this.initMSG('请先设置规格')
            return;
          }    
        }

      this.switchState({
        CART:Object.assign(this.CART,{priceSet:this.priceSet})
      })      
      this.$router.push(arr)        
    },
    changeType(index){
      // console.log(this.priceSet.price)
      if (this.priceSet.subIndex == index) return;
      for (var i = 0; i < this.priceSet.price.length; i++) {
        if (this.priceSet.price[i] != '') {
          this.isToggle = true;
          this.curType = index;
          return;
        }
      }  
      this.priceSet.subIndex = index;

      
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

