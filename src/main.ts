import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//匯入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//匯入全域css
import "../src/css/global.css";

createApp(App).use(router).mount("#app");
