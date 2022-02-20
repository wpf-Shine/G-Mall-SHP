import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api/detail'
import { getUUID } from '@/utils/index'

const state = {
  goodsInfo: {},
  uuid_token: getUUID()
}

const mutations = {
  GOODSINFO (state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}

const actions = {
  async getGoodsInfo ({ commit }, skuId) {
    const res = await reqGoodsInfo(skuId)
    if (res.code === 200)
      commit('GOODSINFO', res.data)
  },
  async addOrUpdateShopCart ({ commit }, { skuId, skuNum }) {
    const res = await reqAddOrUpdateShopCart(skuId, skuNum)
    return res
  }
}
export default {
  state,
  actions,
  mutations
}