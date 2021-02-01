import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/app/home/index.vue';

Vue.use(Router)

const router = new Router({
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'app-home',
      component: AppHome
    },
    {
      path: '/create-order',
      name: 'app-create-order',
      component: () => import('@/components/app/create-order/index.vue')
    },
    {
      path: '/current-orders',
      name: 'Current Orders',
      component: () => import('@/components/app/current-orders/index.vue')
    },
    {
      path: '/completed-orders',
      name: 'Completed Orders',
      component: () => import('@/components/app/completed-orders/index.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (['all', 'active', 'completed'].some(record => record === to.params.filter)) {
//     next()
//   } else {
//     next('/all')
//   }
// })

export default router
