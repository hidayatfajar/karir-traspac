import Highcharts from "highcharts";
import draggable from "vuedraggable";
import HighchartsVue from "highcharts-vue";

import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  app.use(HighchartsVue);
  app.component("Draggable", draggable);
  app.provide("Highcharts", Highcharts);
});
