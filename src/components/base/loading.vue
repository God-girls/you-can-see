<style scoped>
.newLoad{
    position: fixed;
    z-index: 9999;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    text-align: center;
    display: table;
    height: 100%;
    width: 100%
}
.newLoad >div{
    display: table-cell;
    vertical-align: middle;
}
.newLoad dl{
    background: rgba(0,0,0,.9);
    border-radius: 8px;
    min-width: 120px;
    font-size: 24px;
    display: inline-block;
    color: #d3d3d3;
}
.newLoad dl dd{
    padding: 0 15px;
    line-height: 100px;
}
.newLoad dl dt{
    padding: 50px 0px 0px;
    overflow: hidden;
}
.loader { 
  padding: 0px 0 0 50px;
  height: 70px;
}
.ball-spin-fade-loader {
    position: relative;
}
.ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
            animation: ball-spin-fade-loader 1s 0s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
            animation: ball-spin-fade-loader 1s 0.12s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
            animation: ball-spin-fade-loader 1s 0.24s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
            animation: ball-spin-fade-loader 1s 0.36s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
            animation: ball-spin-fade-loader 1s 0.48s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
            animation: ball-spin-fade-loader 1s 0.6s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
            animation: ball-spin-fade-loader 1s 0.72s infinite linear; }
  .ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
            animation: ball-spin-fade-loader 1s 0.84s infinite linear; }
  .ball-spin-fade-loader > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute; }
@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
            transform: scale(0.4); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
            transform: scale(0.4); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
<template>
  <div class="newLoad animated2dot zoomIn" v-if="loading">
    <div @touchend.prevent="closeLoading">
      <dl>
        <dd v-if="loadError">{{loadError}}</dd>
        <dt v-else>
          <div class="loader">
            <div class="loader-inner ball-spin-fade-loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            
          </div>
        </dt>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loading:'',
    loadError:'',
  },
  mounted: function () {
  },
  methods: {
    closeLoading () {
      if (this.loadError) {
        this.$emit('closePop')
      }
      
    }
  }
}
</script>
