<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';
import modalDialog from '../../../components/base/dialog'
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'卖家信息',
        'link':'/prd/list',
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
      sellerInfo:{},
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


    if (this.$route.query.seller) {
      this.header.link += '?seller=' + this.$route.query.seller;
      this.getProfile()
    }
    if (this.$route.query.goodid) {
      this.header.link += '?goodid=' + this.$route.query.goodid
    }


    dplus.track('卖家信息',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
    ]),
    getProfile (){
      axios.post('/seller_api/v1/seller/seller_info',qs.stringify({
        seller:this.$route.query.seller
      })).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.sellerInfo = resData.result;
            // this.sellerInfo.background = this.sellerInfo.background ? this.sellerInfo.background : ' '
            this.headImg = this.globalAvatar+(this.sellerInfo.avatar?this.sellerInfo.avatar:'')+'?imageView2/2/w/100/h/100/t/';
            // console.log(this.headImg)
          }
      }).catch((response)=>{
        // this.logErrors(JSON.stringify(response))
      });      
    },
    chooseImg(){
      let _this = this;
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
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
            _this.headImg = localData//images是业务中用到的变量
            _this.modifyImg(localData);
        }
      })
    },
    modifyImg (localData){

      axios.post('/seller_api/v1/user/upd_profile',qs.stringify({
        uid:this.paraData.uid,
        avatar_b64:localData
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

