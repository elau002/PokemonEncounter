<template>
  <div>
      <p>Number: {{infoSelect.id}}</p>
      <img :src="infoSelect.sprites"/>
      <p> {{ infoSelect.name[0].toUpperCase() + infoSelect.name.slice(1).replace('-', ' ') }}</p>
      <p>Weight: {{infoSelect.weight/10}} kg </p>
      <div>
      <ul class='abilityTags'>
          <li v-for='ability in infoSelect.abilities'> {{ability.ability[0].toUpperCase() + ability.ability.slice(1).replace('-', ' ') }}</li>
      </ul>
      </div>
      <table id='pokeStats'>
        <tr>
          <th  v-for='stat in infoSelect.stats.slice().reverse()'>{{stat.name[0].toUpperCase() + stat.name.slice(1).replace('-', ' ')   }}</th>
        </tr>
        <tr>
          <td v-for='stat in infoSelect.stats.slice().reverse()'>{{stat.value}} </td>
        </tr>
      </table>
      <ul>
        <li v-for='trait in infoSelect.types.slice().sort((a,b)=>{return a.slot-b.slot})'>
          <div class='typeTag' v-bind:id='trait.type'> {{trait.type[0].toUpperCase() + trait.type.slice(1)}} </div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    created () {
      console.log(this)
    },
    props: ['infoSelect'],
  }
</script>

<style>
  #pokeStats {
    text-align: center;
    font-size: 12px;
    border: 1px solid #ddd;
    color: black;
    box-shadow: 2px 2px 2px grey;
  }
  .abilityTags {
    display: inline-flex;
  }
</style>