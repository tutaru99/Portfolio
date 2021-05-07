import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueExpandableImage from "vue-expandable-image";
Vue.config.productionTip = false;
var VueScrollTo = require("vue-scrollto");

import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

// input validation
extend("required", {
  ...required,
  message: "*Please add your message!",
});
