<template>
  <div>
    <p> {{ infoSelect.name[0].toUpperCase() + infoSelect.name.slice(1).replace('-', ' ') }}</p>
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
        <td>{{infoSelect.power}}</td>
        <td>{{infoSelect.accuracy}}</td>
        <td><div class='typeTag' v-bind:id='infoSelect.damageType'>{{infoSelect.damageType[0].toUpperCase() + infoSelect.damageType.slice(1)}}</div></td>
      </tr>
    </table>
    <p>Effect: {{infoSelect.effect}}</p>
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
    font-size: 1.1vw;
    overflow: auto;
    border: 1px solid #ddd;
    color: black;
    box-shadow: 2px 2px 2px grey;
  }
</style>