import Vue from 'vue';
import VueRouter from 'vue-router';

import ability from '../Components/abilityController.vue';
import encounter from '../Components/encounterController.vue';
import logIn from '../Components/logInController.vue';
import moves from '../Components/movesController.vue';
import pokemon from '../Components/pokemonController.vue';
import signUp from '../Components/signUpController.vue'; 
import type from '../Components/typeController.vue';


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
  },
  {
    path: '/encounter',
    component: encounter,
  }
];

const router = new VueRouter ({
  routes
});


export default router;