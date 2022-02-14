import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

//mock数据
import '@/mock/mockServe'

import "swiper/css/swiper.css"
import '@/assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    //配置全局事件总线$bus
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
