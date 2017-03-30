<template>
  <div>
    <button v-if='!showAll' @click.prevent="genPokemon(1)">Generation 1</button>
    <button v-if='!showAll' @click.prevent="genPokemon(2)">Generation 2</button>
    <button v-if='!showAll' @click.prevent="genPokemon(3)">Generation 3</button>
    <button v-if='!showAll' @click.prevent="genPokemon(4)">Generation 4</button>
    <button v-if='!showAll' @click.prevent="genPokemon(5)">Generation 5</button>
    <button v-if='!showAll' @click.prevent="genPokemon(6)">Generation 6</button>
    <button v-if='!showAll' @click.prevent="showAll = !showAll">Show All</button>
    <button v-else @click.prevent="showAll = !showAll">Hide All</button>

    <div>
     <div id='pokePage'  v-if="showAll">
        <div v-for='pokemon in allGen'>
          {{ pokemon.id }} {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}
          <img :src="pokemon.sprites"/>
        </div>
    </div>
      <div id='pokePage' v-else>
        <div v-for='pokemon in pokemons'>
          <pokemon-info :info-select='pokemon'></pokemon-info>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>

import pokemonInfo from '../../InfoComponents/pokemonInfo/index.vue';

export default {
  components: {
    pokemonInfo
  },
  data: ()=> {
    return {
      pokemon: null,
      pokemons: null,
      generations: {},
      allGen: [], 
      showAll: false,
    }
  },
  created () {
    this.getAllPokemon();
  },
  methods: {
     getAllPokemon () {
      this.$http.get('http://localhost:4824/api/pokemon/all')
        .then((res)=> {
          this.$data.allGen = res.body;
          [1,2,3,4,5,6].forEach((number)=> { this.generateGen(number, res.body); })
        })
        .catch((err) => {
          console.log(err);
        })
    },
    genPokemon (gen) {
         this.$data.pokemons = this.$data.generations[gen];
    },
    generateGen (gen, arr) {
      let temp = [];
      if (gen === 1) {  temp = arr.slice(0, 151) }
      if (gen === 2) {  temp = arr.slice(151, 251) }
      if (gen === 3) {  temp= arr.slice(251, 386) }
      if (gen === 4) {  temp = arr.slice(386, 493) }
      if (gen === 5) {  temp = arr.slice(493, 649) }
      if (gen === 6) {  temp = arr.slice(649, 721) }
      this.$data.generations[gen] =  temp
    },
  }
}

</script>

<style>
  #pokePage {
   display: -webkit-flex;
   display: flex;
   -webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: center;
   /* You can set flex-wrap and flex-direction individually */
   -webkit-flex-direction: row;
   flex-direction: row;
   -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
   /* Or do it all in one line with flex flow */
   -webkit-flex-flow: row wrap;
   flex-flow: row wrap;
   /* tweak the where items line up on the row */
   /* valid values are: flex-start, flex-end, space-between, space-around, stretch */
   -webkit-align-content: flex-end;
   align-content: flex-end;
  }
</style>