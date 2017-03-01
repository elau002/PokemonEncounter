<template>
  <div>
      <p>Number: {{infoSelect.id}}</p>
      <img :src="infoSelect.sprites"/>
      <p> {{ infoSelect.name[0].toUpperCase() + infoSelect.name.slice(1) }}</p>
      <p>Weight: {{infoSelect.weight/10}} kg </p>
      <p v-for='ability in infoSelect.abilities'> {{ability.ability[0].toUpperCase() + ability.ability.slice(1)}}</p>
      <ul>
        <li v-for='stat in infoSelect.stats'>
          <p>{{stat.name[0].toUpperCase() + stat.name.slice(1)}} : {{stat.value}} </p>
        </li>
      </ul>
      <ul>
        <li v-for='trait in infoSelect.types.slice().sort((a,b)=>{return a.slot-b.slot})'>
          <p>{{trait.slot}}: <div class='typeTag' v-bind:id='trait.type'> {{trait.type[0].toUpperCase() + trait.type.slice(1)}} </div> </p>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    props: ['infoSelect'],
  }
</script>