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
        'name':'客服方式',
        'link':'/my',
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
        service_mobileno:'',
        weixin:'',
        qq:'',
        show_mobileno:true,
        show_weixin:true,
        show_qq:true,
      },
      token:'',
      guideType:0,
      serviceInput:'',
      serviceShow:true,
      nameType:[
        {'name':'客服手机号',type:'service_mobileno',show:'show_mobileno'},
        {'name':'客服微信号',type:'weixin',show:'show_weixin'},
        {'name':'客服QQ号',type:'qq',show:'show_qq'},
      ],
      placeholder:'',
      isIosWechat:false
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
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;

      this.paraData.service_mobileno = this.profile.service_mobileno;
      this.paraData.weixin = this.profile.weixin;
      this.paraData.qq = this.profile.qq;
     this.paraData.show_mobileno = this.profile.show_mobileno ;
     this.paraData.show_weixin= this.profile.show_weixin;
     this.paraData.show_qq =  this.profile.show_qq ;
    }
    if (html.isIosWechat()) {
      this.isIosWechat = true;
    }
    if (this.$route.query.from == 'index') {
      this.header.link = '/'
    }
    // console.log(document.title)
  },
  mounted () {
    
    dplus.track('修改个性签名',{'from':html.useragent()});//统计代码
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
    modify (){
      // let serviceTest =  this.paraData[this.nameType[this.guideType].type]
      // debugger
      // if (!serviceTest || this.checkChar(serviceTest) < 1) {
      //   this.initMSG(this.placeholder)
      //   return
      // }

      this.loading = true;

      axios.post('/seller_api/v1/user/upd_profile',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.profile.service_mobileno = this.paraData.service_mobileno;
            this.profile.weixin = this.paraData.weixin;
            this.profile.qq = this.paraData.qq;
            this.profile.show_mobileno = this.paraData.show_mobileno;
            this.profile.show_weixin = this.paraData.show_weixin;
            this.profile.show_qq = this.paraData.show_qq;
            
            this.switchState({
              PROFILE:this.profile
            })
            this.initMSG('修改成功')
            setTimeout(()=>{
              
              if (this.$route.query.from == 'index') {
                this.header.link = '/'
              }else{
                this.$router.push('/my')
              }
            },2000)
            
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
    },
    goto (arr){
      this.$router.push(arr)
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
      this.$nextTick(()=>{
        this.paraData[this.nameType[this.guideType].type] = '';
      })
      console.log(this.paraData[this.nameType[this.guideType].type])
    }
  }
}
</script>

