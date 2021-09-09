import {
	createApp
} from 'vue'
import App from './App.vue'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import './public/css/index.css'

import axios from 'axios'

import router from './router/index.js'

const app = createApp(App)
	.use(ElementPlus)
	.use(router)
	.mount('#app')
