import { reqGetSearchInfo } from '@/api/home'
// state  仓库存储数据的地方
const state = {
  searchList: {}
}

// mutations 修改state的唯一手段
const mutations = {
  SEARCHLIST (state, searchList) {
    state.searchList = searchList
  }
}

// action 处理action，可以书写自己的业务逻辑，也可以处理异步操作
const actions = {
  async getSearchInfo ({ commit }, data = {}) {
    const res = await reqGetSearchInfo(data)
    if (res.code === 200)
      commit('SEARCHLIST', res.data)
  }
}

// getters l理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}