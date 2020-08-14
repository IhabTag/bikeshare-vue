import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css"
import router from "./router";

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(40, 167, 69)',
  failedColor: 'red',
  height: '10px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 1500
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
