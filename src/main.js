import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import { MessageBox } from 'element-ui'
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
Vue.use(VueLazyload, {
  loading: atm
})

//表单验证插件
import '@/plugins/veeValidata'

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
