<template>
  <div>
    <button v-on:click.prevent="GenPokemon(1)">Generation 1</button>
    <button v-on:click.prevent="GenPokemon(2)">Generation 2</button>
    <button v-on:click.prevent="GenPokemon(3)">Generation 3</button>
    <button v-on:click.prevent="GenPokemon(4)">Generation 4</button>
    <button v-on:click.prevent="GenPokemon(5)">Generation 5</button>
    <button v-on:click.prevent="GenPokemon(6)">Generation 6</button>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button>

    <div>
     <div v-if="showAll">
        <div v-for='pokemon in allGen'>
          <img :src="pokemon.sprites"/>
          <div>
            <p>{{pokemon.id}} {{pokemon.name}}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for='pokemon in pokemons'>
          <img :src="pokemon.sprites"/>
          <div>
            <p>Number: {{pokemon.id}}</p>
            <p> {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}</p>
            <p>Weight: {{pokemon.weight/10}} kg </p>
            <p v-for='ability in pokemon.abilities'> {{ability}}</p>
            <ul>
              <li v-for='stat in pokemon.stats'>
                <p>{{stat.name}} : {{stat.value}} </p>
              </li>
            </ul>
            <ul>
              <li v-for='trait in pokemon.types'>
                <p> {{trait.slot}}: {{trait.type}} </p>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
module.exports = {
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
          [1,2,3,4,5,6].forEach((number)=> { this.generateGen(number, res.body, this.$data); })
        })
        .catch((err) => {
          console.log(err);
        })
    },
    genPokemon  (gen) {
         this.$data.pokemons = this.$data.generations[gen];
    },
    generateGen  (gen, arr) {
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