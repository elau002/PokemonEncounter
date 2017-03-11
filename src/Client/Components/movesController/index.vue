<template>
  <div>
    <input v-model='filter'>
    <button @click.prevent="findMove(filter)">Filter</button>
    <button v-if='!showAll' @click.prevent="showAll = !showAll">Show All</button>
    <button v-else @click.prevent="showAll = !showAll">Hide All</button> 
    <div v-if="showAll">
      <div v-for='move in allMoves'>
          <div>
            <p>{{ move.id }}</p>
            <p>{{ move.name[0].toUpperCase() + move.name.slice(1) }}</p>
            <p>{{ move.type[0].toUpperCase() + move.type.slice(1) }}</p>
          </div>
        </div>
    </div>
  </div>
 </template>

 <script>
   module.exports = {
     data: ()=> {
       return {
         filter: '',
         showAll: false,
         allMoves: null
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