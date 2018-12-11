
<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import myhead from '../../../components/base/header'
import modalDialog from '../../../components/base/dialog'
import loading from '../../../components/base/loading'
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import qs from 'qs';

export default {
  components: {
    myhead,
    modalDialog,
    loading
  },
  data () {
    return {
      header:{
        'name':'支付结果',
        'link':'/prd/list',
      },
      whichOne:'',
      showCanvas:false,
      testCanvas:'',
      loading:false,
      loadError:'',
      profile:{
        power:0
      },
      orderInfo:{
        addrinfo:'',
        spec:''
      },
      isIos:gisIOS,
      qrcode:false,
      count:0,
      addressInfo:{},
      unitPrice:1299,
      unitFlash:299,
      editPrd:{
        checkboxModel:[]
      },
      statusBarH:'',
      bottomBarH:'',
      sellerInfo:{},
      orderid:'1',
      orderStatus:'订单支付成功！',
      canvasCont:{

      },
      head_image:''
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'UID',
      'TOKEN',
      'PROFILE',
      'STATUSBARH',
      'EDITPRD'
    ])
  },
  created(){
    if (html.isWechat()) {
      this.header.opacity = true;
    }
  },
  mounted: function () {

    this.seller = this.$route.query.seller;
    this.header.link = '/prd/list?seller='+this.seller;
    if (this.$route.query.orderid) {
      this.orderid = this.$route.query.orderid;
      this.key = this.$route.query.key;
      this.fetchOrder()
      this.fetchInfo()
    }
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];    
      }
      if (localStorage['statusBarH']) this.statusBarH = JSON.parse(localStorage['statusBarH'])
    },
    fetchInfo(){
      axios.post('/seller_api/v1/seller/seller_info',qs.stringify({
        uid:this.UID,
        seller:this.seller
      }),{
          headers: {
              "A-Token-Header": this.TOKEN,
          }
        }).then((response)=>{   
          let resData = response.data;
          
          if (resData.success) {
            this.sellerInfo = resData.result;
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
    fetchOrder (){
      axios.post('/seller_api/v1/pay/order_query',qs.stringify({
        uid:this.UID,
        'orderid':this.orderid,
        key:this.key
      }),{
          headers: {
              "A-Token-Header": this.TOKEN,
          }
        }).then((response)=>{           
          let resData = response.data;  
          this.loading = false
          if (resData.success) {            
            this.orderInfo = resData.result;
            this.count = JSON.parse(resData.result.spec).spec.count;
            this.addressInfo = JSON.parse(resData.result.addrinfo);
            this.head_image = JSON.parse(resData.result.spec).head_image

            // if (resData.result.status != 9 && resData.result.status != 9 && resData.result.status != 9) {
            //   this.orderStatus = '等待支付结果'
            //   setTimeout(()=>{
            //     this.fetchOrder()
            //   },5000)
            // }
          }else {
            if (resData.code == '403' || resData.code == '250') {
               // this.goto('/')
            }else{
              this.initMSG(resData.codemsg)
            }
          }
      }).catch(function(response){});  
    },
    getPoster(){
      this.loading = true;
      var _this = this;
      var poster = {
        width:750,
        height:1100,
        lineWidth:16,
        lastTop:60,
        imgs:[],
      }
      this.canvasCont = [
        '卖家：'+this.sellerInfo.nick,
        '商品：'+this.orderInfo.commdity_name,
        '价格：'+this.orderInfo.amount,
        '数量：'+this.count,
        '订单号：'+this.orderid,
        'true',
        '收件人：'+this.addressInfo.receiver,
        '电话：'+this.addressInfo.mobileno,
        '地址：'+this.addressInfo.address,
        'true'
      ]
      if (this.sellerInfo.service_mobileno) {
        this.canvasCont.push('客服手机：'+this.sellerInfo.service_mobileno)
      }
      if (this.sellerInfo.weixin) {
        this.canvasCont.push('客服微信：'+this.sellerInfo.weixin)
      }
      if (this.sellerInfo.qq) {
        this.canvasCont.push('客服QQ：'+this.sellerInfo.qq)
      }
      var drawCanvas = document.createElement("canvas");
      var drawCtx = drawCanvas.getContext("2d");


      drawCanvas.height = poster.height;
      drawCanvas.width = poster.width;
      
      drawCtx.fillStyle = '#fff';
      drawCtx.fillRect(0,0,poster.width,poster.height)
      var drawLine = (top)=>{
        drawCtx.moveTo (0,top);       //设置起点状态
        drawCtx.lineTo (750,top);       //设置末端状态
        drawCtx.lineWidth = 15;          //设置线宽状态
        drawCtx.strokeStyle = "#efeff3" ;  //设置线的颜色状态
        drawCtx.stroke();               //进行绘制
        poster.lastTop += 80;
      }

      var fillImgs = ()=>{

        drawCtx.fillStyle="#000";
        drawCtx.font = "30px Arial";
        drawCtx.textAlign ='center';
        drawCtx.fillText('订单支付成功！',drawCanvas.width/2,poster.lastTop);
        poster.lastTop += 50;
        drawLine(poster.lastTop)
        for (var i = 0; i < this.canvasCont.length; i++) {
          if (this.canvasCont[i] == 'true') {
            drawLine(poster.lastTop)
          } 
          else canvasTextAutoLine(this.canvasCont[i],30,poster.lastTop,60)
        }
        this.testCanvas = drawCanvas.toDataURL();
        this.loading = false;
        this.showCanvas = true; 
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
        // drawCtx.textAlign ='center';
        // drawCtx.font = "30px Arial";
        // drawCtx.fillText(str,drawCanvas.width/2,poster.lastTop);
        // // return;

        for(let i=0;i<str.length;i++){ 
            lineWidth += ctx.measureText(str[i]).width; 
              ctx.font = "30px Arial";
              ctx.textAlign ='left';
            if(lineWidth > canvasWidth-initX*2){//减去initX,防止边界出现的问题
                ctx.fillText(str.substring(lastSubStrIndex,i),initX,initY);
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


      fillImgs()


    

      // transImg(imgs[imgCounter])
    },

    goto(arr){
      this.$router.push(arr)        
    },
    fansXxm(){
      location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU2Mzc0NjQwNw==#wechat_redirect';
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
  }
}
</script>

