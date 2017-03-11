<template>
  <div>
    <p>Encounter Pokemon</p>
    <button @click.prevent='rollGacha(rollOnce)'>Wild encounter</button>
    <button @click.prevent='resetGacha(), rollParty()'>Your Team</button>
    <button @click.prevent='resetGacha(), rollGacha(goCrazy)'>Legendary encounter</button>
    <button v-if='previous.length' @click.prevent='resetGacha()'> Reset </button>
      <div v-if='counter > 0 && encounter'> <p> Rolls: {{ counter }} </p> </div>
      <div  id='prevDiv'>
        <div v-for='poke in previous' >
          <img :src="poke.sprites" @click.prevent='encounter = poke' />
          </div>
      </div>
              &nbsp
      <div v-if='encounter' class='gachaDiv'>
          <pokemon-info :info-select='encounter'></pokemon-info>
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
      counter: 0,
    }
  },
  methods: {
    resetGacha () {
      this.$data.previous = []; 
      this.$data.encounter = null;
      this.$data.counter = 0;
    },
    rollGacha (cb) {
      this.$http.get('http://localhost:4824/api/pokemon/gacha')
        .then((res)=> {
          cb(res);
        })
    },
    rollOnce (res) {
      this.$data.encounter = res.body;
      this.$data.previous = this.$data.previous.concat(res.body);
    },
    rollParty () {
      Promise.all([1,2,3,4,5,6].map((number)=> {
        return new Promise((resolve, reject)=> {
          this.rollGacha((data)=>{
            resolve(data.body);
          });
        })
      }))
      .then((value)=> { this.$data.previous = this.$data.previous.concat(value)  })
    },  
    goCrazy (res) {
      let legs = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 490, 491, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 721]
      this.$data.counter++;
      if ( legs.indexOf(res.body.id) >= 0 ) {
        this.$data.encounter = res.body;
        this.$data.previous = this.$data.previous.concat(res.body);
      } else {
        this.$data.previous = this.$data.previous.concat(res.body);
        this.rollGacha(this.goCrazy);
      }
    }, 
  },
}
</script>

<style>
  #gachaDiv {
    border: 1px solid black;
  }
  #prevDiv {
    display: inline-flex;
    overflow: auto;
    width: 100%;
  }
</style>