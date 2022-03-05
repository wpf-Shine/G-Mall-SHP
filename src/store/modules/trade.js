import { reqGetAddressInfo, reqGetOrderInfo, reqSubmitOrder } from '@/api/trade'

const state = {
  addressInfo: [],
  orderInfo: {},
  orderId: ''
}
const mutations = {
  ADDRESSINFO (state, addressInfo) {
    state.addressInfo = addressInfo
  },
  ORDERINFO (state, orderInfo) {
    state.orderInfo = orderInfo
  },
  ORDERID (state, orderId) {
    state.orderId = orderId
  }
}
const actions = {
  async getAddressInfo ({ commit }) {
    const res = await reqGetAddressInfo()
    if (res.code === 200) {
      commit('ADDRESSINFO', res.data)
    }
  },
  async getOrderInfo ({ commit }) {
    const res = await reqGetOrderInfo()
    if (res.code === 200) {
      commit('ORDERINFO', res.data)
    }
  },
  async submitOrder ({ commit }, { tradeNo, data }) {
    const res = await reqSubmitOrder(tradeNo, data)
    if (res.code === 200) {
      commit('ORDERID', res.data)
      return res.message
    } else {
      return Promise.reject(new Error(res.message))
    }
  }
}

export default {
  state, mutations, actions
}