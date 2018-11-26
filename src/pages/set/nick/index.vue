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
        'name':'修改昵称',
        'link':'/my/profile',
      },
      profile:{
        usr:{}
      },
      loading:false,
      profile:{},
      loadError:'',
      myNick:'',
      paraData:{
        uid:7,
        nick:''
      },
      token:''
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
  mounted () {
    
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.paraData.nick = this.profile.nick;
    }
    dplus.track('修改昵称',{'from':html.useragent()});//统计代码
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState',
    ]),
    checkChar (Message){ //字节统计
        let ByteCount = 0,
            StrLength = Message.length;
        for (let i=0;i<StrLength;i++){
            ByteCount  = (Message.charCodeAt(i)<=256) ? ByteCount + 1 : ByteCount + 2;
        }
        return ByteCount;
    },
    modifyNick (){
      if (this.checkChar(this.paraData.nick) > 16 || this.checkChar(this.paraData.nick) < 1) {
        this.initMSG('昵称长度1-16位')
        return
      }
      if (this.profile.nick == this.paraData.nick) {
        this.initMSG('与原昵称相同')
        return        
      }
      this.loading = true;

      axios.post('/bonus_api/v1/user/updated',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.profile.nick = this.paraData.nick;
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
    initMSG(errors){
      this.loadError = errors;
      this.loading = true;
      setTimeout(()=>{
        this.loadError = '';
        this.loading = false;
      },3000)
    },
    closeDialog(arr){
      this[arr] = true;
    },
    clearNick (){
      this.paraData.nick = '';
    }
  }
}
</script>

