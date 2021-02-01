import Vue from 'vue'
import VueRouter from 'vue-router'

import createOrderRoutes from './create-order'
import currentOrdersRoutes from './current-orders'
import completedOrdersRoutes from './completed-orders'

Vue.use(VueRouter);

const router = new Router({
  routes: [
    ...createOrderRoutes,
    ...currentOrdersRoutes,
    ...completedOrdersRoutes
  ]
})

export default router