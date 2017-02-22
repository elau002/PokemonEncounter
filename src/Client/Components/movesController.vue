<template>
  <div>
    <input v-model='filter'>
    <button v-on:click.prevent="findMove(filter)">Filter</button>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button> 
    <div v-if="showAll">
      <div v-for='move in allMoves'>
          <div>
            <p>{{ move.name[0].toUpperCase() + move.name.slice(1) }}</p>
            <p>{{move.id}}</p>
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
      // this.getAllMoves();
      // this.getMove();
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
               let temp = [];
      for(let i = 359; i < 622; i++) {
        temp.push(i);
      }
         Promise.all(temp.map((number, index)=> {
          return new Promise((resolve, reject)=> {
          this.$http.get('http://localhost:4824/api/move', {params: {id : number} } )
            .then((res) => {
              console.log(res.body);
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
     }
   }
 </script>