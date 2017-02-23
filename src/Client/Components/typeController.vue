<template>
  <div>
    <h1> Types </h1>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button> 
    <div v-if="showAll">
      <div v-for='types in allTypes'>
          <div>
            <p>{{ types.name[0].toUpperCase() + types.name.slice(1) }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: ()=> {
      return {
        allTypes: null,
        showAll: false,
      }
    },
    created () {
      console.log(this)
      this.getAllTypes();
    },
    methods: {
      getAllTypes: function () {
        this.$http.get('http://localhost:4824/api/type/all')
        .then((res)=> {
          this.$data.allTypes = res.body;
        })
        .catch((err)=> {
          console.log(err);
        })
       },
    }
  }
</script>