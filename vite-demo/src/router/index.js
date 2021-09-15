import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue'
import Dashboard from "../pages/Dashboard.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import Login from "../pages/Login.vue";

let routes = [
	{
		path: '/',
		component: Home,
		children: [
			{
				path: '',
				name: 'Dashboard',
				component: Dashboard
			}
		]
	},
	{
		path: '/404',
		name: 'ErrorPage',
		component: ErrorPage
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
]

// 获取本地路由

let menuList = localStorage.getItem('menu')

if (!menuList) {
	menuList = []
}
routes = routes.concat(menuList);
console.log(routes)

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (token || (whiteList.includes(to.path) && (to.path != '/'))) {
		next()
	} else {
		next({name: 'Login'})
	}
})

export default router;
