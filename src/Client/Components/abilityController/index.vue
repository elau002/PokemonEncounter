<template>
  <div>
    <h1> Abilities </h1>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button> 
    <div v-if="showAll">
      <div v-for='ability in allAbilities'>
          <div>
            <p>{{ ability.name[0].toUpperCase() + ability.name.slice(1) }}</p>
            <p>{{ ability.effect }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<<script>
  module.exports = {
    data: ()=> {
      return {
        allAbilities: null,
        showAll: false,
      }
    },
    created () {
      this.getAbilities();
    },
    methods: {
      getAbilities: function () {
        this.$http.get('http://localhost:4824/api/abilities/all')
          .then((res) => {
            this.$data.allAbilities = res.body;
            console.log(res.body);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
</script>