import Vue from 'vue'
import VueMQ from 'vue-mq';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
Vue.use(VueMQ, {
  breakpoints: {
    smartphone: 576,
    tablet: 768,
    desktop: 992,
    xl: Infinity
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
