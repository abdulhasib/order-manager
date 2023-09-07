import { createRouter, createWebHistory } from 'vue-router'

import createOrderRoutes from './create-order'
import currentOrdersRoutes from './current-orders'
import completedOrdersRoutes from './completed-orders'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...createOrderRoutes, ...currentOrdersRoutes, ...completedOrdersRoutes]
})

export default router
