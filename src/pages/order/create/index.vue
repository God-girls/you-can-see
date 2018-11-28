<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {setupWebViewJavascriptBridge} from '../../../assets/js/iosbridge.js';
import loading from '../../../components/base/loading'
import myfooter from '../../../components/base/footer'
import {html} from '../../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
import wx from 'weixin-js-sdk'; 
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
    return {
      show1:true,     
      header:{
        'name':'我的',
        'link':'/',
        isNobg:true,
      },
      headImg:'',
      isCur: 1,
      isSlider:0,
      token:'',
      begin_seconds:false,
      statusBar:{},
      historyTotalPN:1,
      bottomBarH:[],
      loading:false,
      loadError:'',
      leftTime:'00:00:00',
      paraData:{
        price:{},
        imgs:[]
      },
      isApp:'',
      navType:'my',
      profile:{},
      imgUrl:[],
      imgFile:[],
      isWechat:false
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
      'CART'
    ])
  },
  mounted () {
    console.log(this.CART)


    if (this.TOKEN) {
      this.profile = this.PROFILE;
      this.paraData.uid = this.UID;
      this.token = this.TOKEN;
    }
    // this.getShare ();
    this.autoTextarea(document.getElementById("text"),'',400)
    dplus.track('我的',{'from':html.useragent()});//统计代码
    document.body.addEventListener('touchstart', function () {});

  },
  methods: {
    getStatusBar(){
      if (this.STATUSBARH) {
        this.statusBar = this.STATUSBARH+'px';     
      }
    },
    getShare (){
      axios.post('/seller_api/v1/sessions/share_config',qs.stringify({
        url:window.location.href.split('#')[0]
      })).then((response)=>{   
          let resData = response.data;  
          if (resData.success) 
              this.shareFunc(resData.result);         
      }).catch(function(response){

      });        
    },
    shareFunc(obj){
      let vm = this;
      wx.config(Object.assign(obj,{
          debug: true,
          jsApiList: [
            "checkJsApi",
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'closeWindow',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'scanQRCode'
          ]
      }));   
      wx.ready(function () {
        let shareOBJ ={
            title: '小小麦',
            desc: '小小卖家最爱的小小麦~',
            link: vm.ttDomain+'?'+ vm.timeStamp,
            imgUrl: vm.ttLogoImg,
            success:function () {
               // dplus.track('分享成功',{'from':html.useragent(),'inviter':vm.inviter,'page':'index'});
            }
        };
        wx.onMenuShareAppMessage(shareOBJ);
        wx.onMenuShareQQ(shareOBJ);
        wx.onMenuShareWeibo(shareOBJ);
        wx.onMenuShareQZone(shareOBJ);
        wx.onMenuShareTimeline(shareOBJ);
      })
    },
    chooseImg(){
      let _this = this;
      wx.chooseImage({
          count: 9, // 默认9
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
            _this.imgUrl.push(localData)//images是业务中用到的变量
            // showImage(localData)
        }
      })
    },
    uploadImg(localIds){
      // alert('uploadImage1')
      wx.uploadImage({
        localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1,// 默认为1，显示进度提示
        success: function (res) {
          // alert(JSON.stringify(res))
            var serverId = res.serverId; // 返回图片的服务器端ID
        }
      });
    },
    previewImage(currentImg){
      wx.previewImage({
        current: currentImg,
        urls: this.imgUrl
      });
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },
    modifyImg (thisImgFile){
      var data = new FormData();
      data.append('image_b64',thisImgFile,thisImgFile.name);
      data.append("uid", this.paraData.uid);
      axios.post('/seller_api/v1/seller/upload_image',data,{
          headers: {
              "A-Token-Header": this.token,
              'Content-Type':'multipart/form-data'
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            
            this.imgFile.push(resData.result)
            // this.getProfile ();
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
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

            // console.log(files)
            // return;
            testFile = /^image\/\w+$/;
            for (var i = 0; i < files.length; i++) {

              if (testFile.test(files[i].type)) {
                // console.log(files[i])
                this.imgUrl.push(URL.createObjectURL(files[i]))
                this.modifyImg (files[i]);
              } else {
                this.initMsg('请选择图片')
              }              
            }

        }

    },
    /**
    * 文本框根据输入内容自适应高度
    * @param                {HTMLElement}        输入框元素
    * @param                {Number}                设置光标与输入框保持的距离(默认0)
    * @param                {Number}                设置最大高度(可选)
    */
    autoTextarea (elem, extra, maxHeight) {
        extra = extra || 0;
        var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                addEvent = function (type, callback) {
                        elem.addEventListener ?
                                elem.addEventListener(type, callback, false) :
                                elem.attachEvent('on' + type, callback);
                },
                getStyle = elem.currentStyle ? function (name) {
                        var val = elem.currentStyle[name];
 
                        if (name === 'height' && val.search(/px/i) !== 1) {
                                var rect = elem.getBoundingClientRect();
                                return rect.bottom - rect.top -
                                        parseFloat(getStyle('paddingTop')) -
                                        parseFloat(getStyle('paddingBottom')) + 'px';        
                        };
 
                        return val;
                } : function (name) {
                                return getComputedStyle(elem, null)[name];
                },
                minHeight = parseFloat(getStyle('height'));
 
        elem.style.resize = 'none';
 
        var change = function () {
                var scrollTop, height,
                        padding = 0,
                        style = elem.style;
 
                if (elem._length === elem.value.length) return;
                elem._length = elem.value.length;
 
                if (!isFirefox && !isOpera) {
                        padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                };
                scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
                elem.style.height = minHeight + 'px';
                if (elem.scrollHeight > minHeight) {
                        if (maxHeight && elem.scrollHeight > maxHeight) {
                                height = maxHeight - padding;
                                style.overflowY = 'auto';
                        } else {
                                height = elem.scrollHeight - padding;
                                style.overflowY = 'hidden';
                        };
                        style.height = height + extra + 'px';
                        scrollTop += parseInt(style.height) - elem.currHeight;
                        document.body.scrollTop = scrollTop;
                        document.documentElement.scrollTop = scrollTop;
                        elem.currHeight = parseInt(style.height);
                };
        };
 
        addEvent('propertychange', change);
        addEvent('input', change);
        addEvent('focus', change);
        change();
    },
    created(){
      let obj = {};
      obj.spec_name = this.CART.priceSet.spec_name;
      obj.def_price = this.CART.priceSet.def_price;
      obj.price = this.CART.priceSet.list;

      this.paraData.imgs = JSON.stringify(this.imgFile);
      this.paraData.price = JSON.stringify(obj)
      this.paraData.spec = JSON.stringify(this.CART.specs);
      this.paraData.show_comment = this.CART.other.show_comment;
      this.paraData.show_sell = this.CART.other.show_sell;
      this.paraData.sell_base = this.CART.other.sell_base;
      this.paraData.ext = JSON.stringify(this.CART.priceSet);
      // console.log(this.paraData)
      if (!this.imgFile.length) {
        this.initMSG('请选择图片');
        return
      }
      if (!this.paraData.desc) {
        this.initMSG('添加商品描述')
        return;
      }
      this.loading = true;
      axios.post('/seller_api/v1/seller/create_goods',qs.stringify(this.paraData),{
          headers: {
              "A-Token-Header": this.token,
          }
        }).then((response)=>{   
        this.loading = false;        
          let resData = response.data;  
          if (resData.success) {
            this.loading = false
          }  else {
            if (resData.code == '403' || resData.code == '250') {
              // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }

      }).catch(function(response){});        
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

