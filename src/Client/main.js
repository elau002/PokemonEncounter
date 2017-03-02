import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import router from './Router/router.js';
import navBar from './Components/NavBarController/index.vue';
import mixin from './Components/mixinComponent/index.js';

// import App from './app.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('navBar', navBar);

Vue.mixin(mixin);


const app = new Vue({
  router
}).$mount('#app');
