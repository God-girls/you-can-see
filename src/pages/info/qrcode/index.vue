
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import VueQr from 'vue-qr'
// import qrCode from 'qrcode';
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading,
    VueQr
  },
  data () {
    return {
      header:{
        'name':'我的二维码',
        'link':'/my',
      },
      loading:false,
      loadError:'',
      statusBarH:'',
      bottomBarH:'',
      changeAlipay: false,
      clickCaptcha:false,
      clickCaptcha2:false,
      paraData:{
      },
      headImg:'',
      profile:{},
      leftTime:60,
      leftTime2:60,
      realAuth:false,
      realData:{},
      qrcodeUrl:'',
      showCanvas:false,
      testCanvas:'',
      
    }
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
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
    }
    if (this.TOKEN) {
      this.token = this.TOKEN;
      this.paraData.uid = this.UID;
      this.profile = this.PROFILE;
      this.headImg = this.globalAvatar+(this.profile.avatar?this.profile.avatar:'')+'?imageView2/2/w/100/h/100/t/';

      // qrCode.toDataURL( this.ttDomain+'/#/app/author?redirecto=true&seller='+this.paraData.uid , {
      //     margin: 0,
      //     width:280,
      //     height:280
      // }, (error,url)=> {
      //     if (error) console.log(error);
      //     this.qrcodeUrl = url;
      //     this.getPoster()
      // });  
      
 
    }
  },
  mounted: function () {
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (this.BOTTOMBARH) {
        this.bottomBarH = {'padding-bottom':this.BOTTOMBARH+'px'};     
      }
    },
    test(dataUrl,id){
      // console.log(dataUrl)
      this.qrcodeUrl = dataUrl;
      this.getPoster()
    },
    /**
     * 把图片处理成圆形,如果不是正方形就按最小边一半为半径处理
     * @param  {[type]} img 图片(img)对象
     * @param  {[number]} oldImgWidth 原始图片(img)的实际宽度（非css设置的）
     * @param  {[number]} oldImgHeight 原始图片(img)的实际高度（非css设置的）
     * @return {[type]}     return base64 png图片字符串
     */
    circle_image (img, oldImgWidth, oldImgHeight) {
        var width, height, canvas, contex, circle;
        if (img.width > img.height) {
            width = img.height;
            height = img.height;
        } else {
            width = img.width;
            height = img.width;
        }
        canvas = document.createElement('canvas');
        if (!canvas.getContext) { // 判断浏览器是否支持canvas，如果不支持在此处做相应的提示
            console.log('您的浏览器版本过低，暂不支持。');
            return false;
        }
        canvas.width = width;
        canvas.height = height;
        contex = canvas.getContext("2d");
        circle = {
            x: width / 2,
            y: height / 2,
            r: width / 2
        };
        contex.clearRect(0, 0, width, height);
        contex.save();
        contex.beginPath();
        contex.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
        contex.clip();
        contex.drawImage(img, 0, 0, oldImgWidth, oldImgHeight, 0, 0, width, height);
        contex.restore();
        return canvas.toDataURL('image/png');
    },

    getPoster(){
      this.loading = true;
      var _this = this;
      var poster = {
        width:550,
        height:760,
        lineWidth:16,
        lastTop:60,
        imgs:[],
        needLoad:[
          require('../../../assets/img12/other/qbg.png'),
          this.qrcodeUrl,
          this.headImg,
        ]
      }
      this.tempLen = 0;
      var drawCanvas = document.createElement("canvas");
      var drawCtx = drawCanvas.getContext("2d");

      drawCanvas.height = poster.height;
      drawCanvas.width = poster.width;
      



      var fillImgs = ()=>{
        drawCtx.drawImage(this.qrcodeBg, 0, 0, poster.width,poster.height);
        drawCtx.drawImage(this.qrcodeImg, 125, 100, 280, 280);

        let newHead = this.circle_image(this.qrcodeHead,this.qrcodeHead.width,this.qrcodeHead.height);

        var img = new Image();
        
        img.src = newHead;
        img.onload = ()=>{
          drawCtx.drawImage(img, 219, 421, 100, 100);
          drawCtx.fillStyle="#000";
          drawCtx.font = "30px Arial";
          drawCtx.textAlign ='center';
          drawCtx.fillText(this.profile.nick,drawCanvas.width/2 - 10,570);
          drawCtx.font = "24px Arial";
          drawCtx.fillStyle="#858585";
          drawCtx.fillText('扫描二维码打开我的主页',drawCanvas.width/2 - 10,610);
          
          this.testCanvas = drawCanvas.toDataURL();
          this.loading = false;
          this.showCanvas = true; 

        }

      }
      /*
        str:要绘制的字符串
        canvas:canvas对象
        initX:绘制字符串起始x坐标
        initY:绘制字符串起始y坐标
        lineHeight:字行高，自己定义个值即可
      */
      function canvasTextAutoLine(str,initX,initY,lineHeight){
        var ctx = drawCtx; 
        var lineWidth = 0;
        var canvasWidth = drawCanvas.width; 
        var lastSubStrIndex= 0; 

        poster.lastTop += 60;

        for(let i=0;i<str.length;i++){ 
            lineWidth += ctx.measureText(str[i]).width; 
              ctx.font = "30px Arial";
              ctx.textAlign ='left';
            if(lineWidth > canvasWidth-initX*2){//减去initX,防止边界出现的问题
                ctx.fillText(str.substring(lastSubStrIndex,i),drawCanvas.width/2,initY);
                initY += lineHeight;
                lineWidth = 0;
                lastSubStrIndex = i;
                poster.lastTop += 60
            } 
            if(i==str.length-1){

                ctx.fillText(str.substring(lastSubStrIndex,i+1),30,initY);
            }
        }
      }


      var imgLoad = (src)=> {
        var img = new Image();
        if (this.tempLen == 2) img.crossOrigin = "Anonymous";
        img.src = src;
        img.onload = ()=>{
          if (this.tempLen == 0) {
            this.qrcodeBg = img;
          }else if (this.tempLen == 1){
            this.qrcodeImg = img;
          }else{
            this.qrcodeHead = img;
          }
          this.tempLen++;
          // console.log(this.tempLen)

          // debugger
          if (this.tempLen < 3) {
            imgLoad(poster.needLoad[this.tempLen]);
          }else{
            //头底背景加载完加载图片
            fillImgs()
          }
                                                                                 
        }          
      }
      if (this.tempLen == 3) {
        fillImgs()
      }else{
        imgLoad(poster.needLoad[this.tempLen])
      }


    },    
    goto(arr){
      this.$router.push(arr)        
    },
    closeDialog (arr){
      this[arr] = false;
    },
    initMSG(arr){
      this.loading = true;
      this.loadError = arr;
      setTimeout(()=>{
        this.loading = false;
        this.loadError = '';
      },2000)
    },

  },
  beforeDestroy(){
    clearInterval(this.timer);
  }
}
</script>

