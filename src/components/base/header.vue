<style scoped>
    .my-header{
      background: #37363b;
      color: #fff;
      font-size: 36px;
      text-align: center;
      position: relative;
      /*height: 90px;*/
    }
    .my-header ul{
        width: 100%;
        display: -webkit-box;
        display: flex;
        height: 110px;
        justify-content: center;
        align-items: center;
        padding:0 30px 0 0;
        color: #fff;
    }
    .my-header ul li.midli{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 0%;
        position: relative;
        text-align: center;
        padding-right: 50px;
        font-size: 36px;
    }
    .my-header .midli a{
      position: absolute;
      right: 0px;
      /*top: 8px;*/
      /*color: #39bbdc;*/
      padding: 3px 0 8px 10px;
    }
    .my-header ul li.midli span{
        position: relative;
        top: 2px;
    }
    .my-header ul li.special{
        padding-left: 30px;
    }
    .my-header ul li.special.opacity {
        opacity: 0;
    }
    .my-header ul li > *{
        touch-callout:none;
        -webkit-touch-callout:none;  /*系统默认菜单被禁用*/     
        -webkit-user-select:none; /*webkit浏览器*/     
        -khtml-user-select:none; /*早期浏览器*/     
        -moz-user-select:none;/*火狐*/     
        -ms-user-select:none; /*IE10*/     
        user-select:none;  
    }
    .icon-add{
      margin-right: 5px;
    }
    .noBg{
      background: none;
    }
    .opacity0{
      opacity: 0;
    }
</style>
<template>
    <div :class="['my-header',{'noBg':hval.isNobg}]" :style="isApp">
      <ul>
        <li class="special" @click.prevent="goback" v-if="hval.noBack ? false : true">
            <i class="iconfont icon-fanhui f36"></i>
        </li>
        <li  class="special opacity" v-else><i class="iconfont icon-fanhui f36"></i></li>
        <li class="midli">
            <a class="f30 whiteCR" href="javascript:;" @click.prevent="goto" v-if="hval.subname">
              <i class="iconfont icon-zhuanfa f36 whiteCR" v-if="hval.share"></i> 
              <span v-else><i class="iconfont icon-add"></i>{{hval.subname}}</span>
            </a>
            <span :class="{'opacity0':hval.opacity}">
              {{hval.name}}
            </span>
        </li>
        <!-- <li class="special"></li> -->
      </ul>
    </div>
</template>
<script>
import {html} from '../../assets/js/global.js';
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    hval:{}
  },
  mounted: function () {
    // console.log(this.hval)
  },
  created(){
    if (html.isWawaAndroid()) {
      webBridgeAndroid.registerHandler('onBack', (data, response)=> {
        this.goback();
      })  
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'STATUSBARH',
      'BOTTOMBARH'
    ]),
    isApp(){
      if (html.isWawa()) 
      return {'padding-top':this.STATUSBARH+'px'}
    },
  },
  methods:{
    goback (){
      if (this.hval.popTips) {
        // console.log('popshow')
        this.$emit('popshow')
      }else {
        this.$router.isBack = true;
        this.hval.link ? this.$router.replace(this.hval.link) : window.history.go(-1)
      }
    },
    goto (){
      if (this.hval.subFunc || this.hval.share) {
        this.$emit('popshow')
      }else{
        this.$router.replace(this.hval.sublink)        
      }
    },
  }


}
</script>
