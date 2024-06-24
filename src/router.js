import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Menu from "./pages/Menu.vue";
import Checkout from "./pages/Checkout.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/menu/:slug",
      name: "menu",
      component: Menu,
      props: true,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
  ],
});

export { router };
