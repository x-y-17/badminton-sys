import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Registration from "@/views/Registration.vue";
import Gallery from "@/views/Gallery.vue";
import Statistics from "@/views/Statistics.vue";
import Players from "@/views/Players.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/players",
    name: "Players",
    component: Players,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
