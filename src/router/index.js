import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CiekawostkiView from "../views/CiekawostkiView.vue";
import HeroView from "../views/HeroView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/kalkulator",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ciekawostki",
    name: "ciekawostki",
    component: CiekawostkiView,
  },
  {
    path: "/",
    name: "hero",
    component: HeroView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
