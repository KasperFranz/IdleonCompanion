import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { useBuilds } from "~/composables/Builds";
import Alchemy from "~/pages/Alchemy.vue";
import Cards from "~/pages/Cards.vue";
import Characters from "~/pages/Characters.vue";
import Credits from "~/pages/Changelog.vue";
import PackMuleCrafter from "~/pages/tools/PackMuleCrafter.vue";
import PicnicQuest from "~/pages/tools/PicnicQuest.vue";
import ProgressTracker from "~/components/tracker/ProgressTracker.vue";
import RecipeCalculator from "~/pages/tools/RecipeCalculator.vue";
import StampTracker from "~/components/tracker/StampTracker.vue";
import StatueTracker from "~/components/tracker/StatueTracker.vue";
import SweetSpot from "~/pages/SweetSpot.vue";
import Tasks from "~/pages/Tasks.vue";

const { loadBuildFromDatabase } = useBuilds();

export const trackerRoutes: RouteRecordRaw[] = [
  {
    component: ProgressTracker,
    name: "Collection Progress",
    path: "/tracker/progress",
  },
  {
    component: StatueTracker,
    name: "Statues",
    path: "/tracker/statues",
  },
  {
    component: StampTracker,
    name: "Stamps",
    path: "/tracker/stamps",
  },
  {
    component: Alchemy,
    name: "Alchemy",
    path: "/tracker/alchemy",
  },
];

export const toolRoutes: RouteRecordRaw[] = [
  {
    component: PicnicQuest,
    name: "Picnic Quest",
    path: "/tools/picnic-quest",
  },
  {
    component: PackMuleCrafter,
    name: "Pack Mule Crafter",
    path: "/tools/pack-mule",
  },
  {
    component: RecipeCalculator,
    name: "Recipe Calculator",
    path: "/tools/recipe-calculator",
  },
];

export const tabRoutes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    redirect: "/characters",
  },
  {
    component: Characters,
    name: "Characters",
    path: "/characters",
  },
  {
    component: SweetSpot,
    name: "Sweet Spot",
    path: "/sweet-spot",
  },
  {
    component: Tasks,
    name: "Tasks",
    path: "/tasks",
  },
  {
    component: Cards,
    name: "Cards",
    path: "/cards",
  },
  {
    component: Credits,
    name: "Changelog",
    path: "/changelog",
  },
];

const routes: RouteRecordRaw[] = [
  {
    name: "Build",
    path: "/build/:buildId",
    redirect: (to) => {
      const buildId = to.params.buildId.toString();
      loadBuildFromDatabase(buildId);
      return "/";
    },
  },
  ...tabRoutes,
  ...toolRoutes,
  ...trackerRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
