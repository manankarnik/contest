import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ScoreboardView from "../views/ScoreboardView.vue";
import SubmissionsView from "../views/SubmissionsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/scoreboard",
    name: "scoreboard",
    component: ScoreboardView,
  },
  {
    path: "/submissions",
    name: "submissions",
    component: SubmissionsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
