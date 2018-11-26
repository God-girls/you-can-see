
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import {map} from '../../../assets/js/map.js'
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
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
        'name':'选择收货地址',
        'link':'/order/submit',
      },
      loading:true,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      paraData:{
        uid:5,
        ps:100000,
        state:0,
        pn:1
      },
      token:'',
      profile:{},
      checked:false,
      checkboxModel:[],
      listData:[],
      noData:false
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'EDITAddress'
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
      this.fetchAddress()
    }

    dplus.track('选择地址',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    fetchAddress (){
      axios.post('/bonus_api/v1/user/fetch_receive_info',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  
          this.loading = false
          if (resData.success) {

            this.listData = resData.result;
            if (!resData.result.length) this.noData = true;
          }else {
            if (resData.code == '403' || resData.code == '250') {
               this.goto('/')
            }
          }
      }).catch(function(response){});        
    },
    setDefault(item){
      axios.post('/bonus_api/v1/user/update_receive_info',qs.stringify({
        'uid':this.paraData.uid,
        'id':item.id,
        'info':item.info,
        'def':true,
      }),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
            this.goto('/order/submit');
          }else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/');
            }
          }
      }).catch(function(response){});        
    },
    editAddress(item){
      this.switchState({
        EDITAddress:JSON.parse(item.info),
      })
      this.goto('/order/edit?from=select&type=edit&id='+item.id)
    },
    goto(arr){
      this.$router.push(arr)        
    },
  }
}
</script>

