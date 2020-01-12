import Vue from 'vue'
import App from './App'
import http from 'vue-http'
import router from './router'
import title from 'plugins/title'
import utils from 'plugins/utils'
import Layout from 'components/layout'
import VueScroller from 'vue-scroller'
import store from './store'

Vue.use(VueScroller)
Vue.use(http)
Vue.use(utils)
Vue.use(title)
Vue.component('Layout', Layout)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    ...App
}).$mount('#app')