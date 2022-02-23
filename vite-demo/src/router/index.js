import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue'
import ErrorPage from "../pages/ErrorPage.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

let routes = [
	{
		path: '/',
		component: Home,
		name: 'Home',
		children: [

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

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

const whiteList = ['/login','/register']
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (token || (whiteList.includes(to.path) && (to.path != '/'))) {
		next()
	} else {
		next({name: 'Login'})
	}
})

export default router;
