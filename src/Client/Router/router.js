import Vue from 'vue';
import VueRouter from 'vue-router';

import signUp from '../Components/signUpController.vue'; 
import pokemon from '../Components/pokemonController.vue';
import moves from '../Components/movesController.vue';
import ability from '../Components/abilityController.vue';
import type from '../Components/typeController.vue';

const logIn = {template: '<p>loggin place holder</p>' };

const routes = [
  {
    path: '/signup',
    component: signUp
  },
  {
    path: '/login',
    component: logIn
  },
  {
    path: '/pokemon',
    component: pokemon
  },
  {
    path: '/moves',
    component: moves
  },
  {
    path: '/abilities',
    component: ability
  },
  {
    path: '/type',
    component: type
  }
];

const router = new VueRouter ({
  routes
});

export default router;