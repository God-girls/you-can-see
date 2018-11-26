<style scoped>
.my-footer{
  width: 100%;
  /*height: 75px;*/
  position: relative;
  z-index: 12;
/*  background: url(../../assets/img12/index/wave.png) no-repeat center top;*/
  background-size: 100% 92px;
  /*padding-top: 90px;*/
}

.my-footer ul{
  display: -webkit-box;
  display: flex;
  text-align: center;
  position: relative;
  background: #fafafa;
  z-index: 2;
  align-items: center;
  height: 80px;
  border-top: 1px solid #d6d6d6;/*no*/
}
.my-footer ul li{
    position: relative;
    padding: 5px 0;
}
.my-footer ul li.special:before {
  position: absolute;
  content: ' ';
  border-left: 1px solid #cacaca;/*no*/
  width: 2px;
  top: 0px;
  bottom: 0px;
  left: 0;
}

.my-footer ul li.current{
  transition: all .4s;
}
.my-footer ul li.current{
  color: #52a938
}

.icon-home{
  background-position: 0 0px;
}


</style>
<template>
  <div :style="bottomBarh">
    <div class="my-footer" >
      <ul class="flexBox1 f30">
        <li :class="[{'current animateds':current=='home'}]" @click.prevent="goto('/')">
          <i class="iconfont icon-wo f21"></i>
          商品管理
        </li>
        <li :class="['special',{'current animateds':current=='shop'}]" @click.prevent="goto('/order/list')">
          <i class="iconfont icon-wo f21"></i>
          订单管理
        </li>     
        <li :class="['special',{'current animateds':current=='my'}]" @click.prevent="goto('/my')">
          <i class="iconfont icon-wo f21"></i>
          我的
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import {html} from '../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    current:''
  },
  data () {
    return {
      canDown: false,
      isH5:false,
      isIos:false
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'STATUSBARH',
      'BOTTOMBARH'
    ]),
    bottomBarh(){
      if (html.isWawa()) 
      return this.BOTTOMBARH ? {'padding-bottom':this.BOTTOMBARH+'px'} : ''
    },
  },
  mounted: function () {
    this.isIos = gisIOS;
  },
  methods: {
    goto (arr){
      if (sessionStorage['isGuest']) {
        this.guestClick()
        return;
      }
      this.$router.push(arr);

    },
    clickDown(){
      this.canDown = !this.canDown;
      setTimeout(()=>{
        this.canDown = !this.canDown;
      },3000)
    },
    guestClick () {
      this.$emit('guestPop')
    }
  }
}
</script>
