import Vue from 'vue';
import VueRouter from 'vue-router';

import signUp from '../Components/signUpController.vue'; 
import database from '../Components/databaseController.vue';
import moves from '../Components/movesController.vue';

const logIn = {template: '<p>loggin place holder</p>' };

const routes = [
  {
    path: '/',
    component: signUp
  },
  {
    path: '/signin',
    component: logIn
  },
  {
    path: '/database',
    component: database
  },
  {
    path: '/moves',
    component: moves
  },
];

const router = new VueRouter ({
  routes
});

export default router;