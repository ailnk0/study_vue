import { createWebHistory, createRouter } from "vue-router";
import PostPage from "./components/PostPage.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/List",
    component: PostPage,
  },
  {
    path: "/",
    component: HomePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;