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
     getAllPokemon: function() {
      this.$http.get('http://localhost:4824/api/pokemon/all')
        .then((res)=> {
          this.$data.allGen = res.body;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    GenPokemon: function (gen) {
      let pokemons = this.$data.pokemons
      let generation = this.generateGen(gen);
      if(this.$data.generations[gen]) {
        this.$data.pokemons = this.$data.generations[gen];
      }
      Promise.all(generation.map((number, index)=> {
        return new Promise((resolve, reject)=> {
          this.$http.get('http://localhost:4824/api/pokemon', { params: {id: number} })
            .then((res) => {
              resolve(res.body);
            })
            .catch((err) => {
              console.log(err);
            });
        }
          );
      }))
      .then((value)=>{ 
        this.$data.generations[gen] = value;
        this.$data.pokemons = value;
      });
    },
    generateGen: (gen)=> {
      let temp = [];
      if (gen === 1) {
        for (let i = 1; i < 152; i++) {
          temp = temp.concat(i);
        }
      }
      if (gen === 2) {
        for (let i = 152; i < 252; i++) {
          temp = temp.concat(i);
        }
      }
      if (gen === 3) {
        for (let i = 252; i < 387; i++) {
          temp= temp.concat(i);
        }
      }
      if (gen === 4) {
        for (let i = 387; i < 494; i++) {
          temp = temp.concat(i);
        }
      }
      if (gen === 5) {
        for (let i = 494; i < 650; i++) {
          temp = temp.concat(i);
        }
      }
      if (gen === 6) {
        for (let i = 650; i < 722; i++) {
          temp = temp.concat(i);
        }
      }
      return temp;
    },
  }
}

</script>