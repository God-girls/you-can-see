<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
import myhead from '../../../components/base/header'

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
  mounted () {
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

