import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CiekawostkiView from "../views/CiekawostkiView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ciekawostki",
    name: "ciekawostki",
    component: CiekawostkiView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
