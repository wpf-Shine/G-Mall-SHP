export default [
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
  {
    path: '/detail/:skuid?',
    component: () => import('@/views/Detail'),
    meta: { showFooter: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/views/AddCartSuccess'),
    meta: { showFooter: true }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('@/views/ShopCart'),
    meta: { showFooter: true }
  },
  {
    path: '/trade',
    name: 'trade',
    component: () => import('@/views/Trade'),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay/:orderId?',
    name: 'pay',
    component: () => import('@/views/Pay'),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: () => import('@/views/PaySuccess'),
    meta: { showFooter: true }
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/Center'),
    meta: { showFooter: true },
    children: [
      {
        path: 'myorder',
        name: 'myorder',
        component: () => import('@/views/Center/components/MyOrder.vue')
      },
      {
        path: 'grouporder',
        name: 'grouporder',
        component: () => import('@/views/Center/components/GroupOrder.vue')
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
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