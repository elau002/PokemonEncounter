<template>
  <div>
    <input v-model='filter'>
    <button v-on:click.prevent="findMove(filter)">Filter</button>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button> 
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

 <<script>
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
       getAllMoves: function () {
        this.$http.get('http://localhost:4824/api/move/all')
        .then((res)=> {
          console.log(res.body);
          this.$data.allMoves = res.body;
        })
        .catch((err)=> {
          console.log(err);
        })
       },
       getMove: function (name) {
        this.$http.get('http://localhost:4824/api/move', {params: {id : number} } )
          .then((res) => {
            console.log(res.body);
          })
          .catch((err) => {
            console.log(err);
          });
       },
     }
   }
 </script>