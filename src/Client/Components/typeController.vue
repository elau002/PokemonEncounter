<template>
  <div>
    <h1> Types </h1>
    <transition name="slide-fade" mode="out-in">
      <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
      <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button> 
    </transition>
    <div v-if="showAll">
      <div v-for='types in allTypes' id='type'>
          <div v-bind:id='types.name'>
            <p v-on:click.prevent="showPokeOfType($data,types.name)" >{{ types.name[0].toUpperCase() + types.name.slice(1) }}</p>
          </div>
        </div>
      </div>
      <div v-for='types in allTypes'>
        <div v-if='selected === types.name' id='pokeTable'>
          <table>
            <tr>
              <th> Number </th>
              <th> Pokemon </th>
            </tr>
            <tr v-for='poke in types.pokemon'>
              <td> {{ poke.id }} </td>
              <td> {{ poke[0].toUpperCase() + poke.slice(1) }} </td>
            </tr>
          </table>
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
        selected: null
      }
    },
    created () {
      this.getAllTypes();
      console.log(this)
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
      showPokeOfType: (data, type)=> {
        if(data.selected != type) {
          data.selected = type;
        } else {
          data.selected = null;
        }
      }
    }
  }
</script>


<style>
  th, td {
    border-bottom: 1px solid #ddd;
  }
  #type {
    display: inline-block;
    padding-left: 1%;
  }
  #pokeTable {
    border: 1px solid red;
    width: 50%;
  }
</style>