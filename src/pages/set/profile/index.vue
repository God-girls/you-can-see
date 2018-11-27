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
      axios.post('/seller_api/v1/seller/userinfo',qs.stringify(this.paraData),{
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
    chooseImg(){
      let _this = this;
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              // alert(JSON.stringify(res))
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              // _this.imgUrl = localIds
              // _this.uploadImg(localIds)
              _this.showImg(localIds[0])
          }
      });      

    },
    showImg(localIds){
      let _this = this;
      wx.getLocalImgData({
        localId: localIds,
        success: function (res) {
            var localData = res.localData;
            if (localData.indexOf('data:image') != 0) {
                //判断是否有这样的头部
                localData = 'data:image/jpeg;base64,' +  localData
            }
            localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
            //第一个替换的是换行符，第二个替换的是图片类型，因为在IOS机上测试时看到它的图片类型时jgp，
            //这不知道时什么格式的图片，为了兼容其他设备就把它转为jpeg
            // _this.imgUrl.push(localData)//images是业务中用到的变量
            _this.imgFile = localData;
            _this.modifyImg();
        }
      })
    },
    modifyImg (){

      axios.post('/seller_api/v1/user/upd_profile',qs.stringify({
        uid:this.paraData.uid,
        avatar_b64:this.imgFile
      }),{
          headers: {
              "A-Token-Header": this.token,
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

