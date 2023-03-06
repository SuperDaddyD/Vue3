import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../view/QuizesView.vue";
import QuizSingleView from "../view/QuizSingleView.vue";

import MathView from "../view/MathView.vue";
import BiologyView from "../view/BiologyView.vue";
import ChemistryView from "../view/ChemistryView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuizesView,
    },
    {
      path: "/quiz/:id",
      name: "quizSingleView",
      component: QuizSingleView,
    },
  ],
});

export default router;
