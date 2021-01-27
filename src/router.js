import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CurrentOrders from './views/CurrentOrders'
import PastOrders from './views/PastOrders.vue'
import NewOrders from './views/NewOrders.vue'

Vue.use(Router)

const router = new Router({
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/current-orders',
      name: 'Current Orders',
      component: CurrentOrders,
      props: true
    },
    {
      path: '/past-orders',
      name: 'Past Orders',
      component: PastOrders,
      props: true
    },
    {
      path: '/new-orders',
      name: 'New Orders',
      component: NewOrders,
      props: true
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
