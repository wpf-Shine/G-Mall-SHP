import { reqCartList, reqDeleteCartById, reqChangeCheckedById } from "@/api/shopcart"
const state = {
  cartList: []
}
const mutations = {
  CARTLIST (state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  async getCartList ({ commit }) {
    const res = await reqCartList()
    if (res.code === 200) {
      commit('CARTLIST', res.data)
    }
  },
  async deleteCartById ({ commit }, skuId) {
    const res = await reqDeleteCartById(skuId)
    return res
  },
  async changeCheckedById ({ commit }, { skuId, isChecked }) {
    const res = await reqChangeCheckedById(skuId, isChecked)
    return res
  },
  deleteCartCheckedCart ({ dispatch, getters }) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : ''
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
  changeAllCartChecked ({ dispatch, getters }, isChecked) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = dispatch('changeCheckedById', { skuId: item.skuId, isChecked })
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  }
}

export default {
  state, mutations, actions
}