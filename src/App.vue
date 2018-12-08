<style src="./components/css/reset.css"></style>
<template>
  <router-view style="min-height: 100%;" ></router-view>
</template>
<script>
    import {html} from './assets/js/global.js';
    import { mapState, mapActions } from 'vuex'
    global.gisIOS = true;
    export default {
        data() {
            return {
                isIos:false
            }
        },
        computed:{
          ...mapState([
            // 映射 this.count 为 store.state.count
            'UID',
            'TOKEN'
          ])
        },
        mounted(){
          if (html.isWawaAndroid()) {
              global.webBridgeAndroid = '';
              document.addEventListener('WebViewJavascriptBridgeReady', (event)=> {
                  webBridgeAndroid  = event.bridge;
                  webBridgeAndroid.init((message, responseCallback)=> {})
              }, false)
          }      
        },
        methods: {
          ...mapActions([
            'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
            'clearState'
          ])
        },
        watch: {
            '$route' (to, from, next) {


                if (!this.TOKEN && localStorage.ttToken) {
                  this.switchState({
                    TOKEN:localStorage.ttToken,
                    UID:localStorage.ttUid
                  })
                }
                //监控变化 && html.isPc()&& location.href.indexOf('.3.11') < 0
                if (html.isPc()) {
                    this.$router.push('/webtips?seller='+this.$route.query.seller+(this.$route.query.goodid?'&goodid='+this.$route.query.goodid:''))
                }else{
                    if (location.href.indexOf('/app/login') < 0  
                        && location.href.indexOf('/index') < 0 
                        && location.href.indexOf('/shop/detail') < 0 
                        && location.href.indexOf('/shop') < 0 
                        && location.href.indexOf('/webtips') < 0 
                        && location.href.indexOf('fromshare=true') < 0
                        && location.href.indexOf('app/author') < 0
                        && location.href.indexOf('/admin/') < 0
                    ){
                        let thisToken = this.TOKEN;
                        if (!thisToken || thisToken == "null"  || thisToken == "undefined") {
                            // this.$router.push('/app/login')                   
                        }
                    }

                }

                // function onBridgeReady() {
                //   WeixinJSBridge.call('hideToolbar');
                // }
                //   const _this  =this;
                //   if (typeof WeixinJSBridge === "undefined") {
                //     if (document.addEventListener) {
                //       document.addEventListener('WeixinJSBridgeReady', _this.onBridgeReady, false);
                //     } else if (document.attachEvent) {
                //       document.attachEvent('WeixinJSBridgeReady', _this.onBridgeReady);
                //       document.attachEvent('onWeixinJSBridgeReady', _this.onBridgeReady);
                //     }
                //   } else {
                //     _this.onBridgeReady();
                //   }

            }
        },
    }
</script>