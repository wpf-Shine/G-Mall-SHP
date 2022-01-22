import { getBaseCategoryList, reqgetBanner, reqGetFloorList } from '@/api/home'
// state  仓库存储数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

// mutations 修改state的唯一手段
const mutations = {
  CATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST (state, floorList) {
    state.floorList = floorList
  }
}

// action 处理action，可以书写自己的业务逻辑，也可以处理异步操作
const actions = {
  async getCategory ({ commit }) {
    const res = await getBaseCategoryList()
    if (res.code === 200) {
      commit("CATEGORYLIST", res.data)
    }
  },
  async getBannerList ({ commit }) {
    const res = await reqgetBanner()
    if (res.code === 200) {
      commit("BANNERLIST", res.data)
    }
  },
  async getFloorList ({ commit }) {
    const res = await reqGetFloorList()
    if (res.code === 200) {
      commit('FLOORLIST', res.data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}