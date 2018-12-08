<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import {html} from '../../../assets/js/global.js';
import qrCode from 'qrcode';

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
      qrcodeUrl:''
    }
  },
  components: {
  },
  mounted () {
    if (html.isPc()) {
      document.body.setAttribute('class','pcBody');
    }    
    
    if (this.$route.query.seller) {
      this.mySeller = this.$route.query.seller
    }
    if (this.$route.query.goodid) {
      this.goodid = this.$route.query.goodid
    }
    this.makeCode()

  },
  methods: {
    closeDialog (){
      this.needLogin = false;
    },
    goBack (){
      this.$router.push(this.header.link)      
    },
    makeCode (){
      qrCode.toDataURL( this.ttDomain+'/#/app/author?redirecto=true&seller='+this.mySeller + (this.goodid?'&goodid='+this.goodid:''), {
          margin: 0,
          width:400,
          height:400
      }, (error,url)=> {
          if (error) console.log(error);
          this.qrcodeUrl = url;
      });   
    }
  }
}
</script>

