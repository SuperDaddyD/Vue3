import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
console.log(app)
app.use(router);
app.mount("#app");
