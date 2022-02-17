import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

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

export default router