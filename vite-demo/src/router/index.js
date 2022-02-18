import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue'
import Dashboard from "../pages/Dashboard.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import User from "../pages/systemSetting/User.vue";

let routes = [
	{
		path: '/',
		component: Home,
		children: [
			{
				path: '',
				name: 'Dashboard',
				component: Dashboard
			},
			{
				path: 'user',
				name: "User",
				component: User,
			}
		],
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
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}
]

// 获取本地路由

let menuList = JSON.parse(localStorage.getItem('menuList'))

if (!menuList) {
	menuList = []
}
routes = routes.concat(menuList);
console.log(routes)

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

const whiteList = ['/login','/register']
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (token || (whiteList.includes(to.path) && (to.path != '/'))) {
		console.log(to)
		console.log(from)
		next()
	} else {
		next({name: 'Login'})
	}
})

export default router;
