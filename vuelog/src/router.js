import { createWebHistory, createRouter } from "vue-router";
import PostPage from "./components/PostPage.vue";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";
import C404Page from "./components/C404Page.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/Post",
    component: PostPage,
  },
  {
    path: "/Detail/:id(\\d+)",
    component: DetailPage,
  },
  {
    path: "/:anything(.*)",
    component: C404Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;