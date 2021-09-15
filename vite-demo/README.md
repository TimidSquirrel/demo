# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup


#### Document
- [element-ui3](https://element-plus.gitee.io/#/zh-CN/component/quickstart)
- [vue-router@4](https://next.router.vuejs.org/zh/introduction.html)
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [vue-devtools(beta)](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)
- [vite](https://cn.vitejs.dev)
- [vite-plugins](https://github.com/vitejs/awesome-vite#plugins)
- [axios](https://www.kancloud.cn/yunye/axios/234845)
- [vuex4](https://next.vuex.vuejs.org/zh/index.html)

#### 安装
```bash
npm init vite@latest vite-demo -- --template vue
npm install vue-router@4 axios element-plus --save
npm install vuex@next --save
```


#### 遇到的问题

- [如果你碰见(esbuild: Failed to install correctly)这个问题](https://blog.csdn.net/m0_37682004/article/details/115001613)(手动安装吧,执行如下)
```bash
node node_modules/esbuild/install.js
```

- [如果你碰见vue-devtools不能用的情况,尝试安装它的beta版本吧,可能还需要翻墙](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)


#### 组合式 api 访问
- vuex

```js
// vuex
import {useStore} from 'vuex';

	export default {
		setup() {
			const store = useStore()

			return {
				// 在 computed 函数中访问 state
				count: computed(() => store.state.count),

				// 在 computed 函数中访问 getter
				double: computed(() => store.getters.double),

				// 使用 mutation
				increment: () => store.commit('increment'),

				// 使用 action
				asyncIncrement: () => store.dispatch('asyncIncrement')
			}
		}
	}
```
