// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

// 全局引入element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
import "bootstrap/dist/css/bootstrap.min.css";
