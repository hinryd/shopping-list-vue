import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductListOne from "../components/ProductListOne";
import ProductListTwo from "../components/ProductListTwo";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/one",
    name: "One",
    component: ProductListOne,
  },
  {
    path: "/two",
    name: "Home",
    component: ProductListTwo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
