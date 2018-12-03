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
        'name':'修改个性签名',
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
      placeholder:''
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
    this.guideType = Number(this.$route.query.type)
    document.title = this.nameType[this.guideType].name;
    this.header.name = this.nameType[this.guideType].name;
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;

      this.paraData[this.nameType[this.guideType].type] = this.profile[this.nameType[this.guideType].type];
      this.paraData[this.nameType[this.guideType].show] = this.profile[this.nameType[this.guideType].show];
      this.placeholder = '请输入'+this.header.name;
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
    type(){

    },
    checkChar (Message){ //字节统计
        let ByteCount = 0,
            StrLength = Message.length;
        for (let i=0;i<StrLength;i++){
            ByteCount  = (Message.charCodeAt(i)<=256) ? ByteCount + 1 : ByteCount + 2;
        }
        return ByteCount;
    },
    modifyNick (){
      let serviceTest =  this.paraData[this.nameType[this.guideType].type]
      // debugger
      if (!serviceTest || this.checkChar(serviceTest) < 1) {
        this.initMSG(this.placeholder)
        return
      }

      this.loading = true;

      axios.post('/seller_api/v1/user/upd_profile',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.profile[this.nameType[this.guideType].type] = serviceTest;
            this.profile[this.nameType[this.guideType].show] = this.paraData[this.nameType[this.guideType].show];
            this.switchState({
              PROFILE:this.profile
            })
            this.$router.push('/my/profile')
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
      this.paraData.nick = '';
    }
  }
}
</script>

