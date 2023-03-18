import { createApp } from "vue";
import router from "@/router/router";
// import App from "./App";
import components from "@/components/UI";
import MyApp from "./MyApp" // Корневой модуль vue

// console.log(components)
const app = createApp(MyApp);
components.forEach((component) => {
  app.component(component.name, component);
});
// app.use(router).mount("#app");
app.use(router).mount("#app");
