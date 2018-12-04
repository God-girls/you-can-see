<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';

export default {
  data () {
    return {
      header:{
        'name':'以太大陆',
        // 'link':'/match',
        // noBack:true
      },
      qiimgs:'',
      isCur: 1,
      isSlider:0,
      token:'',
      onlyWechat:false,
      inviter:'',
      isIos:false,
    }
  },
  components: {
  },
  mounted () {
    var img = new Image();

     img.src = 'https://testsellerimg.bhuwifi.com/seller/goods/1507al2dae.jpg';
     img.crossOrigin = "Anonymous";
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");


     //浏览器加载图片完毕后再绘制图片
     img.onload = ()=>{

      // debugger
      //以Canvas画布上的坐标(10,10)为起始点，绘制图像
      ctx.drawImage(img, img.width, img.height);    
      try{
        this.testCanvas = canvas.toDataURL()
      }catch(e){
        alert(e)
      }
      
     };
  },
  methods: {
    closeDialog (){
      this.needLogin = false;
    },
    goBack (){
      this.$router.push(this.header.link)      
    },
    goDown (){
      location.href = this.downMobile;
      // location.href = 'https://wawa.ttkuaizhua.com/download/ethmain.apk?time='+new Date().getTime();
    }
  }
}
</script>

