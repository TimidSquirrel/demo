# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [element-ui3](https://element-plus.gitee.io/#/zh-CN/component/quickstart)
- [vue-router@4](https://next.router.vuejs.org/zh/introduction.html)
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [vue-devtools(beta)](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)
- [vite](https://cn.vitejs.dev)


#### 安装
```bash
npm init vite@latest vite-demo -- --template vue
npm install vue-router@4 axios element-plus --save
```


#### 遇到的问题

- [如果你碰见(esbuild: Failed to install correctly)这个问题](https://blog.csdn.net/m0_37682004/article/details/115001613)(手动安装吧,执行如下)
- ```bash
- node node_modules/esbuild/install.js
- ```
