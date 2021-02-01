import Vue from 'vue'
import VueRouter from 'vue-router'

import createOrderRoutes from './create-order'
import currentOrdersRoutes from './current-orders'
import completedOrdersRoutes from './completed-orders'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'app-home',
		component: () => import('@/components/app/home/index.vue')
	},
	...createOrderRoutes,
	...currentOrdersRoutes,
	...completedOrdersRoutes
]

const router = new VueRouter({ mode: 'history', routes })

export default router
