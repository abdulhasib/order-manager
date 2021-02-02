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

// router.beforeEach((to, from, next) => {
// 	// for (var i = 0; i < localStorage.length; i++) {
// 	// 	console.log(localStorage.getItem(localStorage.key(i)))
// 	// }
// 	next()
// })

export default router
