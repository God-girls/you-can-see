
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    loading
  },
  data () {
    return {
      header:{
        'name':'填写发货单号',
        'link':'/admin/list',
      },
      paraData:{
        deliver_status:1
      },
      loading:false,
      loadError:'',
      info: [], // 三级联动城市列表,
      editAddress:'',
      isEdit:false
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
    ])
  },
  mounted: function () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
    }

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    updateGoods (){
      
      if (!this.paraData.orderid || !this.paraData.deliver_no) {
        this.initMSG('请输入完整的信息')
        return;
      }
      axios.post('/bonus_api/v1/console/update_goods',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{           
          let resData = response.data;  

          if (resData.success) {
              this.initMSG('发货成功');
              this.paraData.orderid = '';
              this.paraData.deliver_no = '';
          }else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
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

