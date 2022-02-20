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