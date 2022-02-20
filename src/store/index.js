import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import search from './modules/search'
import detail from './modules/detail'
import shopcart from './modules/shopcart'
import getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart
  },
  getters
})