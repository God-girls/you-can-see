<style src="./style.css" scoped></style>
<template src="./template.html"></template>
<script>
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';
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
        'name':'性别',
        'link':'/my/profile',
      },
      loading:false,
      profile:{},
      loadError:'',
      paraData:{}
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
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
    }
  },
  mounted(){
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      dplus.track('性别',{'from':html.useragent()});//统计代码
    }
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    modifySex (type){
      this.paraData.sex = type;
      this.profile.sex = type;
      axios.post('/seller_api/v1/user/upd_profile',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.profile.sex = this.paraData.sex;
            this.switchState({
              PROFILE:this.profile
            })
            this.$router.push('/my/profile')
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              location.href = '/'
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
    },
    closeDialog(arr){
      this[arr] = true;
    },
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
  }
}
</script>

