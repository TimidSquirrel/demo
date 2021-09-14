import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./public/css/index.css";

import router from "./router/index.js";
import store from "./store/index.js";


const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
