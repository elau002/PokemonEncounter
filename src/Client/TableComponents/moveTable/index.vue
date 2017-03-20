<template>
  <div>
      <table id='moveTable'>
          <tr>
              <th> Move </th>
          </tr>
            <tr v-if='typeName === undefined'  v-for='move in moves' v-bind:id='move.type'>
                <td @click.prevent="getSingleMoveByName(move)"> {{ move.name[0].toUpperCase() + move.name.slice(1).split('-').join(' ')  }} </td>
            </tr>
          <tr v-else v-for='move in moves' v-bind:id='typeName'>
              <td @click.prevent="getSingleMoveByName(move)"> {{ move[0].toUpperCase() + move.slice(1).split('-').join(' ')  }} </td>
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