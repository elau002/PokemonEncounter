<template>
  <div id='encounterPage'>
    <p>Encounter Pokemon</p>
    <div v-if='!hidden'>
      <button @click.prevent='resetGacha(), rollParty()'>Meet Your Team</button>
      <button @click.prevent='rollGacha(rollOnce)'>Wild Encounter</button>
      <button @click.prevent='resetGacha(), hidden = !hidden, rollGacha(goCrazy)'>Legendary Encounter</button>
      <button v-if='previous.length > 6' @click.prevent='displayPrevious = !displayPrevious'> Show Past Encounters </button>
      <button v-if='previous.length' @click.prevent='resetGacha()'> Reset </button>
    </div>
      <div v-if='counter > 0'> <p> Encounters: {{ counter }} </p> </div>
      <div v-if='displayPrevious' id='prevDiv' >
        <div v-for='poke in previous' class='pokeBoarder'>
          <img :src="poke.sprites" @click.prevent='rollOnce(poke)' />
        </div>
      </div>
      <div v-if='encounter' id='gachaDiv'>
          <pokemon-info :info-select='encounter'></pokemon-info>
          <move-table :more-info-needed='false' :moves='encounter.moves'></movetable>
      </div>
  </div>
</template>

<script>
  import pokemonInfo from '../../InfoComponents/pokemonInfo/index.vue';
  import moveTable from '../../TableComponents/moveTable/index.vue'

export default {
  components: {
    pokemonInfo,
    moveTable
  }, 
  data: ()=> {
    return  {
      previous: [],
      encounter: null,
      counter: 0,
      displayPrevious: false,
      hidden: false,
    }
  },
  methods: {
    resetGacha () {
      this.$data.previous = []; 
      this.$data.encounter = null;
      this.$data.counter = 0;
      this.$data.displayPrevious = false;
    },
    rollGacha (cb) {
      this.$http.get('http://localhost:4824/api/pokemon/gacha')
        .then((res)=> {
          cb(res.body);
        })
    },
    rollOnce (res) {
      Promise.all(res.moves.map((move, index)=> {
        return new Promise((resolve, reject)=> {
            this.getSingleMoveByName(move.name, resolve)
        })
      }))
      .then((value) => {
        res.moves = value;
        this.$data.encounter = res
      })
    },
    rollParty () {
      Promise.all([1,2,3,4,5,6].map((number)=> {
        return new Promise((resolve, reject)=> {
          this.rollGacha((data)=>{
            resolve(data);
          });
        })
      }))
      .then((value)=> { this.$data.previous = this.$data.previous.concat(value); this.$data.displayPrevious = !this.$data.displayPrevious  })
    },  
    goCrazy (res) {
      let legs = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 490, 491, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 721]
      this.$data.counter++;
      if ( legs.indexOf(res.id) >= 0 ) {
        this.$data.encounter = res;
        this.$data.previous = this.$data.previous.concat(res);
        this.$data.hidden = !this.$data.hidden
      } else {
        this.$data.previous = this.$data.previous.concat(res);
        this.rollGacha(this.goCrazy);
      }
    }, 
  },
}
</script>

<style>
  #gachaDiv {
    border: 1px solid #B3BFC7;
    display:flex;
    justify-content: space-around;
    width: auto;
    height: 50%;
    z-index: 10;
    overflow: auto;
    max-width: 550px;
    border-radius: 8px;
    background: #FAFAFA;
    box-shadow: 5px 5px 5px grey;
  }
  #encounterPage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #prevDiv {
    display: flex;
    align-items: center;
    overflow: auto;
    width: 100%;
  }
  [v-cloak] {
  display: none;
  }
  .pokeBoarder {
    padding: 5px 5px 5px 5px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>