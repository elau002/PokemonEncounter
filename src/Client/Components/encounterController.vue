<template>
  <div>
    <p>Encounter</p>
    <button v-on:click.prevent='getSingleQuery("pokemon", encounterRateGen())'>Roll</button>
  </div>
</template>

<script>
module.exports = {
  data: ()=> {
    return  {
      previous: [],
      encounter: null,
    }
  },
  methods: {
    encounterRateGen: () =>{
      return Math.floor(Math.random()* 721);
    }
  },
}
</script>