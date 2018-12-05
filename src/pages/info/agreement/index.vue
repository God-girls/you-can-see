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
        'name':'服务协议',
        'link':'/my/about',
      },
      bottomBarH:'',
    }
  },
  mounted () {
    // this.getStatusBar();
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

