<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'个人设置',
        'link':'/my',
        // isNobg:true,
      },
      qiimgs:'',
      isCur: 1,
      iquit:0,
      token:'',
      loading:false,
      begin_seconds:false,
      isIosvg:false,
      isIosvgX:false,
      isAndroid:false,
      statusBar:{},
      loadError:'',
      historyTotalPN:1,
      bottomBarH:[],
      profile:{},
      paraData:{},
      headImg:'',
      pushpop:{
        version:'',
        push:''
      },
      isWechat:false
    }
  },
  components: {
    loading,
    myhead,
    modalDialog
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'PROFILE',
      'TOKEN',
      'UID',
      'PUSHPOP'
    ])
  },
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
      this.isWechat = true;
    }
  },
  mounted () {

    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      // if (html.isWawa()) this.pushpop = this.PUSHPOP
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/210/h/210/t/'+new Date().getTime();
    }
    if (this.$route.query.from == 'shop') {
      this.header.link = '/shop'
    }
    if (html.isWawa()) {
      this.initBridge();
    }
    dplus.track('个人信息',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    getProfile (){
      axios.post('/bonus_api/v1/bonus/userinfo',qs.stringify(this.paraData),{
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
              this.needLogin = true;
              this.noToken = true;
            }
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });  
    },
    initBridge(){
      var vm = this;
      if (html.isWawaIos()) {
        setupWebViewJavascriptBridge(function(webBridge) {
          bridgeLogin(webBridge)
        });
      }else if (html.isWawaAndroid()){
        bridgeLogin();
      }
      function bridgeLogin(param){
        var webBridge = param ? param : webBridgeAndroid;

      // alert(2)
        if (html.isWawaIos()) {
          webBridge.callHandler('pushpop', (data, responseCallback) =>{
            vm.pushpop = JSON.parse(data)
          })              
        }else{
          webBridge.registerHandler('pushpop', (data, responseCallback) =>{
            vm.pushpop = JSON.parse(data)
          })                        
        }
         webBridge.registerHandler('notification', (data, responseCallback) =>{

          if (data == 'DidBecomeActive') {//成功
            webBridge.callHandler('pushpop', (data, responseCallback) =>{
              vm.pushpop = JSON.parse(data)
            })              
          }
        })    
     }
    },
    downloadApp(){
      var vm = this;
        if (html.isWawaIos()) {
          setupWebViewJavascriptBridge(function(webBridge) {
            bridgeLogin(webBridge)
          });
        }else bridgeLogin();

        function bridgeLogin(param){
          var webBridge = param ? param : webBridgeAndroid;
          webBridge.callHandler('downloadapp', {id:'1375298342'})              

        }
    },
    modifyImg (type){
      var data = new FormData();
      if (this.imgFile) data.append('avatar',this.imgFile,this.imgFile.name);
      data.append("uid", this.paraData.uid);
      axios.post('/bonus_api/v1/user/updated',data,{
          headers: {
              "A-Token-Header": this.token,
              'Content-Type':'multipart/form-data'
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.getProfile ();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});  
    },
    onFileChange (e){
        //图片上传
        var URL = window.URL || window.webkitURL;
        var files = e.target.files || e.dataTransfer.files,
            file,
            blobURL,
            thisType = Number(e.target.dataset.type),
            testFile = '';

        if (files && files.length) {
            file = files[0];
            
            testFile = /^image\/\w+$/;
            blobURL = URL.createObjectURL(file);  
            this.headImg = blobURL;

              // console.log(blobURL)
            if (testFile.test(file.type)) {

              var data = new FormData();
              this.imgFile = file;
              this.modifyImg ();
            } else {
              this.initMsg('请选择图片')
            }
        }

    },
    popSet(){
      setupWebViewJavascriptBridge(function(webBridge) {
        webBridge.callHandler('push', function(response) {})     
      })
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
      this[arr] = false
    },
    goto (arr){
       this.$router.push(arr)        
    },
  },
}
</script>

