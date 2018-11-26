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
    if (html.isPc()) {
      document.body.setAttribute('class','pcBody');
    }
    if (html.isWechat()) {
      this.onlyWechat = true;
    }
    if (html.isWawaIos() || html.isWebIos()) {
      this.isIos = true;
    }
    dplus.track('webtips',{'from':html.useragent()});//统计代码
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

