import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ThreeBall from "@/views/ThreeBall.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/ThreeBall",
    name: "ThreeBall",
    component: ThreeBall
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
