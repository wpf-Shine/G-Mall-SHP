import { reqPayInfo, reqGetPayStatus } from '@/api/pay'

const state = {
  payInfo: {}
}
const mutations = {
  PAYINFO: (state, payInfo) => {
    state.payInfo = payInfo
  }
}
const actions = {
  getPayInfo ({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      reqPayInfo(orderId).then(response => {
        const { data } = response
        commit('PAYINFO', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPayStatus ({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      reqGetPayStatus(orderId).then(response => {
        // const { data } = response
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  actions,
  mutations
}