<template>
  <div>
      <table id='pokeTable'>
        <thead>
          <tr>
              <th> Pokemon </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='pokemon in pokemons' v-bind:id='typeName' >
              <td @click="getSinglePokemonByName(pokemon)"> {{ pokemon[0].toUpperCase() + pokemon.slice(1) }} </td>
          </tr>
        </tbody>
      </table>
  </div>  
</template>

<script>
  export default {
    props: [
      'pokemons',
      'typeName'
    ]
  }
</script>

<style>
  #pokeTable {
      box-shadow: 5px 5px 5px grey;
      height: auto;
      max-height: 450px;
      overflow: auto;
  }
</style>