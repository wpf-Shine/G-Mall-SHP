import { reqGetCode, reqRegister, reqUserLogin, reqGetUserInfo, reqUserLogout } from '@/api/register'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}
const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
  USERLOGIN (state, token) {
    state.token = token
  },
  USERINFO (state, userInfo) {
    state.userInfo = userInfo
  },
  CLEARUSERINFO (state) {
    removeToken()
    state.token = ''
    state.userInfo = {}
  }
}
const actions = {
  async getCode ({ commit }, phone) {
    const res = await reqGetCode(phone)
    if (res.code == 200) {
      commit('GETCODE', res.data)
      return res
    }
  },
  async register ({ commit }, data) {
    const res = await reqRegister(data)
    return res
  },
  async userLogin ({ commit }, data) {
    const res = await reqUserLogin(data)
    if (res.code == 200) {
      setToken(res.data.token)
      commit('USERLOGIN', res.data.token)
      return 'ok'
    }
    else {
      return Promise.reject(new Error(res.message))
    }
  },
  async getUserInfo ({ commit }) {
    const res = await reqGetUserInfo();
    if (res.code === 200) {
      commit('USERINFO', res.data)
      return res.message
    } else {
      return Promise.reject(new Error(res.message))
    }
  },
  async userLogout ({ commit }) {
    const res = await reqUserLogout()
    if (res.code == 200) {
      commit('CLEARUSERINFO')
      return res.message
    } else {
      return Promise.reject(new Error(res.message))
    }
  }
}

export default {
  state,
  mutations,
  actions
}