import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import router from './Router/router.js';

// import App from './app.vue';

Vue.use(VueResource);
Vue.use(VueRouter);


const app = new Vue({
  router
}).$mount('#app');
