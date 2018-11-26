
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import nodate from '../../../components/base/nodate'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading,
    nodate
  },
  data () {
    return {
      header:{
        'name':'规则设置',
        'link':'/prd/create',
      },
      loading:false,
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
      addFirst:false,
      checkboxModel:[],
      myAddress:[],
      noData:false,
      listData:[]
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
      this.profile = this.PROFILE;
      this.fetchAddress ()
      if (html.isWawa()) this.getStatusBar();
    }

    dplus.track('管理收货地址',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (this.BOTTOMBARH) {
        this.bottomBarH = {'padding-bottom':this.BOTTOMBARH+'px'}
      }
    },
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
    delAddress(id){
      
        axios.post('/bonus_api/v1/user/remove_receive_info',qs.stringify({
          'uid':this.paraData.uid,
          'ps':'20',
          'id':id
        }),{
            headers: {
                "A-Token-Header": this.token,
            }
          }).then((response)=>{           
            let resData = response.data;  

            if (resData.success) {
              this.fetchAddress ()
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
            this.fetchAddress();
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
      this.goto('/order/edit?from=address&type=edit&id='+item.id)
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    goto(arr){
      if (this.listData.length > 10) {
      this.initMSG('最多可添加10个收货地址')
      }
      this.$router.push(arr)        
    },
  }
}
</script>

