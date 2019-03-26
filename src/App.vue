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
        },
        methods: {
          ...mapActions([
            'switchState', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`'
            'clearState'
          ])
        },
        watch: {
            '$route' (to, from, next) {

                if (!this.TOKEN && localStorage.TOKEN) {
                    this.switchState({
                      TOKEN:localStorage.TOKEN,
                      UID:localStorage.UID
                    })
                }

                if (location.href.indexOf('/app/login') < 0  
                    && location.href.indexOf('/index') < 0 
                    && location.href.indexOf('/webtips') < 0 
                    && location.href.indexOf('fromshare=true') < 0
                    && location.href.indexOf('app/author') < 0
                ){
                    let thisToken = this.TOKEN;
                    if (!thisToken || thisToken == "null"  || thisToken == "undefined") {
                        // this.$router.push('/app/login')                   
                    }
                }

            }
        },
    }
</script>