<template>
  <div>
    <form v-if='showAll'>
      <input v-model='filter'>
      <button @click.prevent="findMove(filter)">Filter</button>
    </form>
    <button v-if='!showAll' @click.prevent="showAll = !showAll">Show All</button>
    <button v-else @click.prevent="showAll = !showAll">Hide All</button> 
    <div v-if="showAll">
      <move-table :moves='allMoves'></move-table>
    </div>
  </div>
 </template>


 <script>
  import moveInfo from '../../InfoComponents/pokemonInfo/index.vue';
  import moveTable from '../../TableComponents/moveTable/index.vue'

   export default {
     components: {
      moveInfo,
      moveTable,
     },
     data: ()=> {
       return {
         filter: '',
         showAll: false,
         allMoves: null,
         move: null 
       } 
     },
     created () {
      this.getAllMoves();
     },
     methods: {
       getAllMoves () {
        this.$http.get('http://localhost:4824/api/move/all')
        .then((res)=> {
          this.$data.allMoves = res.body;
        })
        .catch((err)=> {
          console.log(err);
        })
       },
     },
   }
 </script>