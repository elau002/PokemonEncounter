import Vue from 'vue';
import VueRouter from 'vue-router';

import ability from '../Components/abilityController/index.vue';
import encounter from '../Components/encounterController/index.vue';
import logIn from '../Components/logInController/index.vue';
import moves from '../Components/movesController/index.vue';
import pokemon from '../Components/pokemonController/index.vue';
import signUp from '../Components/signUpController/index.vue'; 
import type from '../Components/typeController/index.vue';


export default new VueRouter ({
  routes: [
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
  ]
});
