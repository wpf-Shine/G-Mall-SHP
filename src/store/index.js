import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import search from './modules/search'
import detail from './modules/detail'
import shopcart from './modules/shopcart'
import user from './modules/user'
import trade from './modules/trade'
import pay from './modules/pay'
import center from './modules/center'
import getters from './getters'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
    pay,
    center
  },
  getters
})