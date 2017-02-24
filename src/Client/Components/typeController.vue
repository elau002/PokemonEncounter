<template>
<div>
    <h1> Types </h1>
    <button v-if='!showAll' v-on:click.prevent="showAll = !showAll">Show All</button>
    <button v-else v-on:click.prevent="showAll = !showAll">Hide All</button>
    <div v-if="showAll">
        <div v-for='types in allTypes' id='type'>
            <div v-on:click.prevent="showPokeOfType($data,types.name)" class='typeTag' v-bind:id='types.name'>
                {{ types.name[0].toUpperCase() + types.name.slice(1) }}
            </div>
        </div>
        <div v-for='types in allTypes'>
            <div v-if='selected === types.name'>
                <div>
                    <table id='pokeTable' sortable >
                        <tr>
                            <th> Pokemon </th>
                        </tr>
                        <tr v-for='poke in types.pokemon' v-bind:id='types.name' colspan="3">
                            <td v-on:click="getSingleQuery('pokemon', poke, $data)"> {{ poke[0].toUpperCase() + poke.slice(1) }} </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <table id='moveTable'>
                        <tr>
                            <th> Move </th>
                        </tr>
                        <tr v-for='move in types.moves' v-bind:id='types.name'>
                            <td v-on:click="getSingleQuery('move', move)"> {{ move[0].toUpperCase() + move.slice(1) }} </td>
                        </tr>
                    </table>
                </div>
                <div id='moreInfo' v-if='moreInfo'>
                    <div id='infoDiv'>
                        {{ infoSelect.name }} rQCewZKjTe CGBHAefcTG JRiRjdFMGH LtvrmKYTGI TDZPrZtNXh rBtiLwDLBL qoHsrZdijr cIxzYHDBaH JmOvHpXCYj ruseSYMhlL
                    </div>
                </div>
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
        selected: null,
        moreInfo: null,
        infoSelect: null,
      }
    },
    created () {
      this.getAllTypes();
    },
    methods: {
      getAllTypes: function () {
        this.$http.get('http://localhost:4824/api/type/all')
        .then((res)=> {
          this.$data.allTypes = res.body;
          console.log(res.body);
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
    .typeTag {
        border: 1px solid black;
        border-radius: 8px;
        color: white;
        height: 23px;
        width: 80px;
        text-shadow: 1px 1px black;
        box-shadow: 2px 2px 2px black;
    }
    .typeTag:hover {
        cursor: pointer;
    }
    #normal {
        background: #A8A878;
        background-image: -webkit-linear-gradient(top, #D8D8C0, #A8A878);
        background-image: -moz-linear-gradient(top, #D8D8C0, #A8A878);
        background-image: -ms-linear-gradient(top, #D8D8C0, #A8A878);
        background-image: -o-linear-gradient(top, #D8D8C0, #A8A878);
        background-image: linear-gradient(to bottom, #D8D8C0, #A8A878);
        box-shadow: 1px 3px 2px #705848;
    }
    #normal:hover {
        background: #A8A878;
        background-image: -webkit-linear-gradient(top, #A8A878, #D8D8C0);
        background-image: -moz-linear-gradient(top, #A8A878, #D8D8C0);
        background-image: -ms-linear-gradient(top, #A8A878, #D8D8C0);
        background-image: -o-linear-gradient(top, #A8A878, #D8D8C0);
        background-image: linear-gradient(to bottom, #A8A878, #D8D8C0);
        text-decoration: none;
    }
    #fighting {
        background: #C03028;
        box-shadow: 1px 3px 2px #F08030;
        background-image: -webkit-linear-gradient(top, #F08030, #C03028);
        background-image: -moz-linear-gradient(top, #F08030, #C03028);
        background-image: -ms-linear-gradient(top, #F08030, #C03028);
        background-image: -o-linear-gradient(top, #F08030, #C03028);
        background-image: linear-gradient(to bottom, #F08030, #C03028);
    }
    #fighting:hover {
        background: #C03028;
        background-image: -webkit-linear-gradient(top, #C03028, #F08030);
        background-image: -moz-linear-gradient(top, #C03028, #F08030);
        background-image: -ms-linear-gradient(top, #C03028, #F08030);
        background-image: -o-linear-gradient(top, #C03028, #F08030);
        background-image: linear-gradient(to bottom, #C03028, #F08030);
        text-decoration: none;
    }
    #flying {
        background: #A890F0;
        box-shadow: 1px 3px 2px #705898;
        background-image: -webkit-linear-gradient(top, #C8C0F8, #A890F0);
        background-image: -moz-linear-gradient(top, #C8C0F8, #A890F0);
        background-image: -ms-linear-gradient(top, #C8C0F8, #A890F0);
        background-image: -o-linear-gradient(top, #C8C0F8, #A890F0);
        background-image: linear-gradient(to bottom, #C8C0F8, #A890F0);
    }
    #flying:hover {
        background: #A890F0;
        background-image: -webkit-linear-gradient(top, #A890F0, #C8C0F8);
        background-image: -moz-linear-gradient(top, #A890F0, #C8C0F8);
        background-image: -ms-linear-gradient(top, #A890F0, #C8C0F8);
        background-image: -o-linear-gradient(top, #A890F0, #C8C0F8);
        background-image: linear-gradient(to bottom, #A890F0, #C8C0F8);
    }
    #fire {
        background: #C03028;
        box-shadow: 1px 3px 2px #F08030;
        background-image: -webkit-linear-gradient(top, #F8D030, #C03028);
        background-image: -moz-linear-gradient(top, #F8D030, #C03028);
        background-image: -ms-linear-gradient(top, #F8D030, #C03028);
        background-image: -o-linear-gradient(top, #F8D030, #C03028);
        background-image: linear-gradient(to bottom, #F8D030, #C03028);
    }
    #fire:hover {
        background: #C03028;
        background-image: -webkit-linear-gradient(top, #C03028, #F8D030);
        background-image: -moz-linear-gradient(top, #C03028, #F8D030);
        background-image: -ms-linear-gradient(top, #C03028, #F8D030);
        background-image: -o-linear-gradient(top, #C03028, #F8D030);
        background-image: linear-gradient(to bottom, #C03028, #F8D030);
    }
    #electric {
        background: #F8D030;
        box-shadow: 1px 3px 2px #B8A038;
        background-image: -webkit-linear-gradient(top, #F8F878, #F8D030);
        background-image: -moz-linear-gradient(top, #F8F878, #F8D030);
        background-image: -ms-linear-gradient(top, #F8F878, #F8D030);
        background-image: -o-linear-gradient(top, #F8F878, #F8D030);
        background-image: linear-gradient(to bottom, #F8F878, #F8D030);
    }
    #electric:hover {
        background: #F8D030;
        background-image: -webkit-linear-gradient(top, #F8D030, #F8F878);
        background-image: -moz-linear-gradient(top, #F8D030, #F8F878);
        background-image: -ms-linear-gradient(top, #F8D030, #F8F878);
        background-image: -o-linear-gradient(top, #F8D030, #F8F878);
        background-image: linear-gradient(to bottom, #F8D030, #F8F878);
    }
    #rock {
        background: #B8A038;
        box-shadow: 1px 3px 2px #886830;
        background-image: -webkit-linear-gradient(top, #E0C068, #B8A038);
        background-image: -moz-linear-gradient(top, #E0C068, #B8A038);
        background-image: -ms-linear-gradient(top, #E0C068, #B8A038);
        background-image: -o-linear-gradient(top, #E0C068, #B8A038);
        background-image: linear-gradient(to bottom, #E0C068, #B8A038);
    }
    #rock:hover {
        background: #B8A038;
        background-image: -webkit-linear-gradient(top, #B8A038, #E0C068);
        background-image: -moz-linear-gradient(top, #B8A038, #E0C068);
        background-image: -ms-linear-gradient(top, #B8A038, #E0C068);
        background-image: -o-linear-gradient(top, #B8A038, #E0C068);
        background-image: linear-gradient(to bottom, #B8A038, #E0C068);
    }
    #ground {
        background: #E0C068;
        box-shadow: 1px 3px 2px #886830;
        background-image: -webkit-linear-gradient(top, #F8F878, #E0C068);
        background-image: -moz-linear-gradient(top, #F8F878, #E0C068);
        background-image: -ms-linear-gradient(top, #F8F878, #E0C068);
        background-image: -o-linear-gradient(top, #F8F878, #E0C068);
        background-image: linear-gradient(to bottom, #F8F878, #E0C068);
    }
    #ground:hover {
        background: #E0C068;
        background-image: -webkit-linear-gradient(top, #E0C068, #F8F878);
        background-image: -moz-linear-gradient(top, #E0C068, #F8F878);
        background-image: -ms-linear-gradient(top, #E0C068, #F8F878);
        background-image: -o-linear-gradient(top, #E0C068, #F8F878);
        background-image: linear-gradient(to bottom, #E0C068, #F8F878);
    }
    #grass {
        background: #78C850;
        box-shadow: 1px 3px 2px #588040;
        background-image: -webkit-linear-gradient(top, #C0F860, #78C850);
        background-image: -moz-linear-gradient(top, #C0F860, #78C850);
        background-image: -ms-linear-gradient(top, #C0F860, #78C850);
        background-image: -o-linear-gradient(top, #C0F860, #78C850);
        background-image: linear-gradient(to bottom, #C0F860, #78C850);
    }
    #grass:hover {
        background: #78C850;
        background-image: -webkit-linear-gradient(top, #78C850, #C0F860);
        background-image: -moz-linear-gradient(top, #78C850, #C0F860);
        background-image: -ms-linear-gradient(top, #78C850, #C0F860);
        background-image: -o-linear-gradient(top, #78C850, #C0F860);
        background-image: linear-gradient(to bottom, #78C850, #C0F860);
    }
    #bug {
        background: #A8B820;
        box-shadow: 1px 3px 2px #789010;
        background-image: -webkit-linear-gradient(top, #D8E030, #A8B820);
        background-image: -moz-linear-gradient(top, #D8E030, #A8B820);
        background-image: -ms-linear-gradient(top, #D8E030, #A8B820);
        background-image: -o-linear-gradient(top, #D8E030, #A8B820);
        background-image: linear-gradient(to bottom, #D8E030, #A8B820);
    }
    #bug:hover {
        background: #A8B820;
        background-image: -webkit-linear-gradient(top, #A8B820, #D8E030);
        background-image: -moz-linear-gradient(top, #A8B820, #D8E030);
        background-image: -ms-linear-gradient(top, #A8B820, #D8E030);
        background-image: -o-linear-gradient(top, #A8B820, #D8E030);
        background-image: linear-gradient(to bottom, #A8B820, #D8E030);
    }
    #psychic {
        background: #F85888;
        box-shadow: 1px 3px 2px #906060;
        background-image: -moz-linear-gradient(top, #F8C0B0, #F85888);
        background-image: -ms-linear-gradient(top, #F8C0B0, #F85888);
        background-image: -o-linear-gradient(top, #F8C0B0, #F85888);
        background-image: linear-gradient(to bottom, #F8C0B0, #F85888);
    }
    #psychic:hover {
        background: #F85888;
        background-image: -webkit-linear-gradient(top, #F85888, #F8C0B0);
        background-image: -moz-linear-gradient(top, #F85888, #F8C0B0);
        background-image: -ms-linear-gradient(top, #F85888, #F8C0B0);
        background-image: -o-linear-gradient(top, #F85888, #F8C0B0);
        background-image: linear-gradient(to bottom, #F85888, #F8C0B0);
    }
    #water {
        background: #6890F0;
        box-shadow: 1px 3px 2px #807870;
        background-image: -webkit-linear-gradient(top, #98D8D8, #6890F0);
        background-image: -moz-linear-gradient(top, #98D8D8, #6890F0);
        background-image: -ms-linear-gradient(top, #98D8D8, #6890F0);
        background-image: -o-linear-gradient(top, #98D8D8, #6890F0);
        background-image: linear-gradient(to bottom, #98D8D8, #6890F0);
    }
    #water:hover {
        background: #6890F0;
        background-image: -webkit-linear-gradient(top, #6890F0, #98D8D8);
        background-image: -moz-linear-gradient(top, #6890F0, #98D8D8);
        background-image: -ms-linear-gradient(top, #6890F0, #98D8D8);
        background-image: -o-linear-gradient(top, #6890F0, #98D8D8);
        background-image: linear-gradient(to bottom, #6890F0, #98D8D8);
    }
    #dark {
        background: #705848;
        box-shadow: 1px 3px 2px #484038;
        background-image: -webkit-linear-gradient(top, #A8A878, #705848);
        background-image: -moz-linear-gradient(top, #A8A878, #705848);
        background-image: -ms-linear-gradient(top, #A8A878, #705848);
        background-image: -o-linear-gradient(top, #A8A878, #705848);
        background-image: linear-gradient(to bottom, #A8A878, #705848);
    }
    #dark:hover {
        background: #705848;
        background-image: -webkit-linear-gradient(top, #705848, #A8A878);
        background-image: -moz-linear-gradient(top, #705848, #A8A878);
        background-image: -ms-linear-gradient(top, #705848, #A8A878);
        background-image: -o-linear-gradient(top, #705848, #A8A878);
        background-image: linear-gradient(to bottom, #705848, #A8A878);
    }
    #dragon {
        background: #7038F8;
        box-shadow: 1px 3px 2px #483890;
        background-image: -webkit-linear-gradient(top, #B8A0F8, #7038F8);
        background-image: -moz-linear-gradient(top, #B8A0F8, #7038F8);
        background-image: -ms-linear-gradient(top, #B8A0F8, #7038F8);
        background-image: -o-linear-gradient(top, #B8A0F8, #7038F8);
        background-image: linear-gradient(to bottom, #B8A0F8, #7038F8);
    }
    #dragon:hover {
        background: #7038F8;
        background-image: -webkit-linear-gradient(top, #7038F8, #B8A0F8);
        background-image: -moz-linear-gradient(top, #7038F8, #B8A0F8);
        background-image: -ms-linear-gradient(top, #7038F8, #B8A0F8);
        background-image: -o-linear-gradient(top, #7038F8, #B8A0F8);
        background-image: linear-gradient(to bottom, #7038F8, #B8A0F8);
    }
    #fairy {
        background: #DEA5DE;
        box-shadow: 1px 3px 2px #BD94C6;
        background-image: -webkit-linear-gradient(top, #F7DEF7, #DEA5DE);
        background-image: -moz-linear-gradient(top, #F7DEF7, #DEA5DE);
        background-image: -ms-linear-gradient(top, #F7DEF7, #DEA5DE);
        background-image: -o-linear-gradient(top, #F7DEF7, #DEA5DE);
        background-image: linear-gradient(to bottom, #F7DEF7, #DEA5DE);
    }
    #fairy:hover {
        background: #DEA5DE;
        background-image: -webkit-linear-gradient(top, #DEA5DE, #F7DEF7);
        background-image: -moz-linear-gradient(top, #DEA5DE, #F7DEF7);
        background-image: -ms-linear-gradient(top, #DEA5DE, #F7DEF7);
        background-image: -o-linear-gradient(top, #DEA5DE, #F7DEF7);
        background-image: linear-gradient(to bottom, #DEA5DE, #F7DEF7);
    }
    #ice {
        background: #98D8D8;
        box-shadow: 1px 3px 2px #9090A0;
        background-image: -webkit-linear-gradient(top, #D0F8E8, #98D8D8);
        background-image: -moz-linear-gradient(top, #D0F8E8, #98D8D8);
        background-image: -ms-linear-gradient(top, #D0F8E8, #98D8D8);
        background-image: -o-linear-gradient(top, #D0F8E8, #98D8D8);
        background-image: linear-gradient(to bottom, #D0F8E8, #98D8D8);
    }
    #ice:hover {
        background: #98D8D8;
        background-image: -webkit-linear-gradient(top, #98D8D8, #D0F8E8);
        background-image: -moz-linear-gradient(top, #98D8D8, #D0F8E8);
        background-image: -ms-linear-gradient(top, #98D8D8, #D0F8E8);
        background-image: -o-linear-gradient(top, #98D8D8, #D0F8E8);
        background-image: linear-gradient(to bottom, #98D8D8, #D0F8E8);
    }
    #ghost {
        background: #705898;
        box-shadow: 1px 3px 2px #A890F0;
        background-image: -webkit-linear-gradient(top, #A890F0, #705898);
        background-image: -moz-linear-gradient(top, #A890F0, #705898);
        background-image: -ms-linear-gradient(top, #A890F0, #705898);
        background-image: -o-linear-gradient(top, #A890F0, #705898);
        background-image: linear-gradient(to bottom, #A890F0, #705898);
    }
    #ghost:hover {
        background: #705898;
        background-image: -webkit-linear-gradient(top, #705898, #A890F0);
        background-image: -moz-linear-gradient(top, #705898, #A890F0);
        background-image: -ms-linear-gradient(top, #705898, #A890F0);
        background-image: -o-linear-gradient(top, #705898, #A890F0);
        background-image: linear-gradient(to bottom, #705898, #A890F0);
    }
    #poison {
        background: #A040A0;
        box-shadow: 1px 3px 2px #705848;
        background-image: -webkit-linear-gradient(top, #D880B8, #A040A0);
        background-image: -moz-linear-gradient(top, #D880B8, #A040A0);
        background-image: -ms-linear-gradient(top, #D880B8, #A040A0);
        background-image: -o-linear-gradient(top, #D880B8, #A040A0);
        background-image: linear-gradient(to bottom, #D880B8, #A040A0);
    }
    #poison:hover {
        background: #A040A0;
        background-image: -webkit-linear-gradient(top, #A040A0, #D880B8);
        background-image: -moz-linear-gradient(top, #A040A0, #D880B8);
        background-image: -ms-linear-gradient(top, #A040A0, #D880B8);
        background-image: -o-linear-gradient(top, #A040A0, #D880B8);
        background-image: linear-gradient(to bottom, #A040A0, #D880B8);
    }
    #steel {
        background: #B8B8D0;
        box-shadow: 1px 3px 2px #807870;
        background-image: -webkit-linear-gradient(top, #D8D8C0, #B8B8D0);
        background-image: -moz-linear-gradient(top, #D8D8C0, #B8B8D0);
        background-image: -ms-linear-gradient(top, #D8D8C0, #B8B8D0);
        background-image: -o-linear-gradient(top, #D8D8C0, #B8B8D0);
        background-image: linear-gradient(to bottom, #D8D8C0, #B8B8D0);
    }
    #steel:hover {
        background: #B8B8D0;
        background-image: -webkit-linear-gradient(top, #B8B8D0, #D8D8C0);
        background-image: -moz-linear-gradient(top, #B8B8D0, #D8D8C0);
        background-image: -ms-linear-gradient(top, #B8B8D0, #D8D8C0);
        background-image: -o-linear-gradient(top, #B8B8D0, #D8D8C0);
        background-image: linear-gradient(to bottom, #B8B8D0, #D8D8C0);
    }
    th,
    td,
    tr {
        border-radius: 8px;
        border-bottom: 1px solid #ddd;
        text-align: center;
        color: black;
        text-shadow: 1px 1px grey;
        box-shadow: 2px 2px 2px grey;
    }
    table {
        display: inline-block;
    }
    th {
        color: white;
        background: black;
    }
    td:hover {
        cursor: pointer;
    }
    #type {
        display: inline-block;
        padding: 1% 1% 1% 0px;
    }
    #moreInfo {
        border: 1px solid black;
        left: 2%;
        position: relative;
        width: 40%;
        height: 40%;
        z-index: 10;
        overflow: auto;
    }
    #pokeTable {
        box-shadow: 5px 5px 5px grey;
        height: 500px;
        position: relative;
        overflow: auto;
        float: left;
    }
    #moveTable {
        box-shadow: 5px 5px 5px grey;
        height: 500px;
        overflow: auto;
        float: right;
        z-index: -1;
    }
</style>