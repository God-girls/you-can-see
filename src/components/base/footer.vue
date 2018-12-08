<style scoped>
.my-footer{
  width: 100%;
  /*height: 100px;*/
  position: relative;
  z-index: 12;
}
.my-footer ul{
  display: -webkit-box;
  display: flex;
  text-align: center;
  position: relative;
  background: #fafafa;
  z-index: 2;
  align-items: center;
  height: 100px;
  border-top:1px solid #bcbcbc;/*no*/
}
.my-footer ul li{
    padding-top: 8px;
    position: relative;
}
.my-footer ul li.special{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 0%;
}
.my-footer ul li p{
  position: relative;
  top: -6px;
  color: #929292;
  font-size: 21px;
}
.my-footer ul li p.power{
  top: -8px;
}
.my-footer ul li i.dot{
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ff0500;
  position: absolute;
  top: 10px;
  right: 23%;  
}
.myicon{
  display: inline-block;
  background: url(../../assets/img12/icon/icon-nav.png) no-repeat;
  background-size: 130px;
}

.icon-home{
  position: absolute;
  left:0;
  right: 0;
  margin: auto;
  top: -52px;
  /*display: inline-block;*/
  background: url(../../assets/img12/index/mai.png) no-repeat;
  background-size: 120px;
  width:120px;
  height: 120px;
  /*-webkit-animation:change 60s linear infinite;*/
  /*animation:change 60s linear infinite;*/
  border-radius: 50%;
  /*box-shadow: 11px 10px 16px rgba(42,14,60,.36);*/
  z-index: 2;
}
@-webkit-keyframes change{
　　0%{-webkit-transform:rotate(0deg);}
　　50%{-webkit-transform:rotate(180deg);}
　　100%{-webkit-transform:rotate(360deg);}
}
@keyframes change{
　　0%{transform:rotate(0deg);}
　　50%{transform:rotate(180deg);}
　　100%{transform:rotate(360deg);}
}
.my-footer ul li.current .icon-home{
  background: url(../../assets/img12/index/mai.png) no-repeat;
  background-size: 112px;
}


.my-footer ul li.current{
  transition: all .4s;
}
.my-footer ul li.current p{
  color: #51aa38
}
.my-footer ul li.homeLi{
  /*color: #f58ba1*/
  width:132px;
  padding: 70px 0px 0;
}
.my-footer ul li.homeLi span{
  position: absolute;
  left:0;
  right: 0;
  margin: auto;
  top: -52px;
  display: inline-block;
  /*background: rgba(42,14,60,.36);*/
  width:113px;
  height: 113px;
  border-radius: 50%;
  box-shadow: 0px -8px 14px rgba(142,142,140,.56);
  z-index: 1;
}
/*.my-footer ul li.homeLi b{
  position: absolute;
  left:0;
  right: 0;
  margin: auto;
  bottom: 0px;
  display: inline-block;
  background: url(../../assets/img12/default/mask.png) no-repeat center bottom;
  background-size: 112px;
  width:112px;
  height: 112px;
  border-radius: 50%;
  z-index: 3;
}*/

.icon-my{
  background-position: 0 -338px;
  width:48px;
  height: 58px;
}
.my-footer ul li.current .icon-my{
  background-position: -73px -338px;
}
.icon-task{
  background-position: 0 4px;
  width:47px;
  height: 60px;
}
.my-footer ul li.current .icon-task{
  background-position: -73px 4px;
}
.icon-book{
  background-position: 0 -107px;
  width:46px;
  height: 58px;
}
.my-footer ul li.current .icon-book{
  background-position: -73px -107px;
}
.icon-rank{
  background-position: 0 -233px;
  width:48px;
  height: 58px;
}
.my-footer ul li.current .icon-rank{
  background-position: -73px -233px;
}

/*app download*/
.my-footer dl{
  position: absolute;
  top: -148px;
  z-index: 1;
  text-align: right;
  width: 100%;
}
.my-footer dl dd{
  position: absolute;
  top: 35px;
  line-height: 0;
  right: 0;
}
.my-footer dl dt img{
  width: 100%;
}
.my-footer dl dd img{
  width: 94px;
  height: 113px;
}
.special{
  width: 100%;
  background: none;
  position: absolute;
  left: 0;
  bottom: 0;
}
.special ul{
    border-top:none;/*no*/
    height:80px;
    background: none;
}
.special .icon-home{
  top: 0px;
}
.special  ul li.homeLi span{
  top: 0px;
}
</style>
<template>
  <div class="posoR">
    <div :class="['animated my-footer',{'fadeInUp':showCircle,'dn':!showCircle}]">
      <ul>
        <li :class="['special',{'current':current=='task'}]" @touchend.prevent="goto('/')">
          <i class="myicon icon-task"></i>
          <p class="power">商品</p>
        </li>
        <li :class="['special',{'current':current=='order'}]" @touchend.prevent="goto('/order/list')">
          <i class="myicon icon-book"></i>
          <p>订单</p>
        </li>
        <li :class="['homeLi',{'current':current=='home'}]" @touchend.prevent="changeShow">
          <i class="icon-home"></i>
          <span></span>
          <b></b>
          <!-- <p>大陆中心</p> -->
        </li>

        <li :class="['special posiR',{'current':current=='discovery'}]" @touchend.prevent="goto('/discovery')">
          <i class="myicon icon-rank"></i>
          <p>发现</p>
        </li>        
        <li :class="['special',{'current':current=='my'}]" @touchend.prevent="goto('/my')">
          <i class="myicon icon-my"></i>
          <p>我</p>
        </li>
      </ul>
    </div>

   <div :class="['animated my-footer special',{'fadeInUp':!showCircle,'dn':showCircle}]" >
      <ul>
        <li :class="['homeLi flex1',{'current':current=='home'}]" @touchend.prevent="changeShow">
          <i class="icon-home"></i>
          <span></span>
          <b></b>
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
      showCircle: true,
      isH5:false,
      isIos:false
    }
  },
  computed:{
    ...mapState([
      // 映射 this.count 为 store.state.count
      'SHOWFOOTER',
    ]),
    isApp(){
      if (html.isWawa()) 
      return localStorage['bottomBarH'] ? JSON.parse(localStorage['bottomBarH']) : ''
    },
  },
  mounted: function () {
    // console.log('current'+this.current)
    this.showCircle = this.SHOWFOOTER;
  },
  methods: {
    ...mapActions([
      'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
      'clearState'
    ]),
    goto (arr){
      if (sessionStorage['isGuest']) {
        this.guestClick()
        return;
      }
      if (arr == '/wake' && this.isIos) {
        this.$router.push('/wake_study?type=daily');
      }else{
        this.$router.push(arr);
      }
    },
    changeShow(){
      this.showCircle = !this.showCircle;
      this.switchState({
        SHOWFOOTER:this.showCircle
      })                
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
