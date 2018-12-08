<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
import {html} from '../../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'发现',
        'link':'/',
        isNobg:true,
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      loading:false,
      begin_seconds:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      leftTime:'00:00:00',
      curFomoData:{},
      isApp:'',
      navType:'discovery',
      profile:{},
      isWechat:false,
      paraData:{}
    }
  },
  components: {
    loading,
    myfooter,
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
  mounted () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      if (this.PROFILE) {
        this.profile = this.PROFILE;
      } else{
        this.getProfile(); 
      } 
      
    }
    dplus.track('发现',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
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
    goto (arr){
       this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false
    }
  },
}
</script>

