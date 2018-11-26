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
        watch: {
            '$route' (to, from, next) {
                //监控变化 && html.isPc()&& location.href.indexOf('.3.11') < 0
                if (!html.isWechat() && !html.isWawa() 
                  && location.href.indexOf('localhost') < 0 
                  && location.href.indexOf('4.114') < 0 
                  && location.href.indexOf('testbonus.bhuwifi.com') < 0 
                  && location.href.indexOf('/webtips') < 0 
                  && location.href.indexOf('app/author') < 0
                  && location.href.indexOf('fromshare=true') < 0
                  && location.href.indexOf('/admin/') < 0
                ) {
                    // this.$router.push('/webtips')
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
            }
        },
    }
</script>