<template>
  <div>
      <table id='moveTable'>
          <tr>
              <th> Move </th>
          </tr>
          <tr v-for='move in moves' v-bind:id='typeName'>
              <td @click="getSingleMoveByName(move)"> {{ move[0].toUpperCase() + move.slice(1).replace('-', ' ') }} </td>
          </tr>
      </table>
  </div>
</template>

<script>
  export default {
    props: [
      'moves',
      'typeName'
    ]
  }
</script>