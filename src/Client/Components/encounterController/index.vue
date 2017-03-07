<template>
  <div>
    <p>Encounter</p>
    <button v-on:click.prevent='rollGacha($http, $data)'>Roll</button>
      <div v-if='encounter' class='gachaDiv'>
          <pokemon-info :info-select='encounter'></pokemon-info>
      </div>

      <div v-for='poke in previous' id='prevDiv'>
          <img :src="poke.sprites"/>
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
    return  {
      previous: [],
      encounter: null,
    }
  },
  methods: {
    rollGacha () {
      this.$http.get('http://localhost:4824/api/pokemon/gacha')
        .then((res)=> {
          this.$data.encounter = res.body;
          this.$data.previous = this.$data.previous.concat(res.body);
        })
    }, 
  },
}
</script>

<style>
  #gachaDiv {
    border: 1px solid black;
  }
  #prevDiv {
    display: inline;
  }
</style>