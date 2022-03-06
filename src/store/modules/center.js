import { reqMyOrderList } from '@/api/center'

const state = {
  myOrderList: {}
}
const mutations = {
  MYORDERLIST (state, myOrderList) {
    state.myOrderList = myOrderList
  }
}
const actions = {
  getMyOrderList ({ commit }, { page, limit }) {
    return new Promise((resolve, reject) => {
      reqMyOrderList(page, limit).then((response) => {
        const { data } = response
        commit('MYORDERLIST', data)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}