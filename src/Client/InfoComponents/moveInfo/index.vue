<template>
  <div>
    <p> {{ infoSelect.name[0].toUpperCase() + infoSelect.name.slice(1).split('-').join(' ') }}</p>
    <div>
    <table id='moveStats'>
      <tr>
        <th> PP </th>
        <th> Damage </th>
        <th> Accuracy </th>
        <th> Type </th>
      </tr>
      <tr>
        <td>{{infoSelect.pp}} </td>
        <td v-if='infoSelect.power'>{{infoSelect.power}}</td>
        <td v-else> - </td>
        <td v-if='infoSelect.accuracy'>{{infoSelect.accuracy}}</td>
        <td v-else> - </td>
        <td class='typeTag' v-bind:id='infoSelect.damageType'>{{infoSelect.damageType[0].toUpperCase() + infoSelect.damageType.slice(1)}}</td>
      </tr>
    </table>
    <p> Effect: {{infoSelect.effect}} </p>
  </div>
</template>

<script>
  export default {
    props: ['infoSelect'],
  }
</script>

<style>
  #moveStats {
    text-align: center;
    font-size: 12px;
    overflow: auto;
    border: 1px solid #ddd;
    color: black;
    box-shadow: 2px 2px 2px grey;
  }
</style>