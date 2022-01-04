import Vue from 'vue'
import Router from 'vue-router'

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
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home'),
      meta: { showFooter: true }
    },
    // params写法
    {
      path: '/search/:keyWord?',
      component: () => import('@/views/Search'),
      meta: { showFooter: true },
      name: 'search',
      props: ($route) => {
        return {
          keyWord: $route.params.keyWord
        }
      }
    },
    // {
    //   path: '/search',
    //   component: () => import('@/views/Search'),
    //   meta: { showFooter: true },
    // },
    {
      path: '/login',
      component: () => import('@/views/Login'),
      meta: { showFooter: false }
    },
    {
      path: '/register',
      component: () => import('@/views/Register'),
      meta: { showFooter: false }
    }
  ]
})

export default router