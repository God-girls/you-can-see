<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import myhead from '../../../components/base/header'
import {html} from '../../../assets/js/global.js';

export default {
  components: {
    myhead,
  },
  data () {
    return {
      header:{
        'name':'隐私条款',
        'link':'/my/about',
      },
      bottomBarH:'',
      isIosWechat:false
    }
  },
  created () {
    if (html.isIosWechat()) {
      this.isIosWechat = true;
    }
  },
  methods: {
    getStatusBar(){
      if (localStorage['bottomBarH']) {
        let statusLocalBarH = JSON.parse(localStorage['bottomBarH']);
        this.bottomBarH = statusLocalBarH['padding-bottom'];     
      }
    },

  }
}
</script>

