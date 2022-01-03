import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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