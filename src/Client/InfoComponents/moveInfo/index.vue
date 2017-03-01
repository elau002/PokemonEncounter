<template>
  <div>
    <p> {{ infoSelect.name[0].toUpperCase() + infoSelect.name.slice(1) }}</p>
    <div>
    <p v-if='infoSelect.power'>Damage : {{infoSelect.power}}</p>
    <p v-if='infoSelect.accuracy'>Accuracy: {{infoSelect.accuracy}}</p>
    <p>PP: {{infoSelect.pp}} </p>
    <ul>
    <li>
    <p>Type: <div class='typeTag' v-bind:id='infoSelect.damageType'>{{infoSelect.damageType[0].toUpperCase() + infoSelect.damageType.slice(1)}}</div> </p>
    </li>
    </ul>
    <p>Effect: {{infoSelect.effect}}</p>
  </div>
</template>

<script>
  export default {
    props: ['infoSelect'],
  }
</script>