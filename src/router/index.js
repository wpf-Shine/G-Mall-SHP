import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import routes from './routes'
import { removeToken } from '@/utils/auth'

Vue.use(Router)
//先把Router的原型对象的push保存一份
let originPush = Router.prototype.push
let originReplace = Router.prototype.replace

// 重写push|replace
Router.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call | apply的区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不通点：call与apply传递参数：call传递参数用逗号隔开，apply传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

Router.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

const router = new Router({
  routes,
  //滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  }
})

// 全局守卫
router.beforeEach(async (to, from, next) => {
  // next()
  let token = store.state.user.token
  let userInfo = store.state.user.userInfo
  //已登录
  if (token) {
    if (to.path == '/login') {
      next('/')
    }
    else {
      if (Object.keys(userInfo).length !== 0) {
        next()
      }
      else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (err) {
          //获取失败  token失效
          removeToken()
          next('/login')
        }
      }
    }
  }
  //未登录
  else {
    if (to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1) {
      next('/login?redirect=' + to.path)
    }
    next()
  }
})

export default router