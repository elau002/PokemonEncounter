<template>
    <div class='navigation'>
            <div class='routePaths'>
              <div class='nav'>
                <router-link to='/abilities'><a href="#">Abilities</a></router-link>
              </div>
              <div class='nav'>
                <router-link to='/encounter'><a href="#">Encounter</a></router-link>
              </div>
              <div class='nav'>
              <router-link to='/moves'><a href="#">Moves</a>
              </router-link>
              </div>
              <div class='nav'>
                <router-link to='/pokemon'><a href="#">Avalible Pokemon</a></router-link>
              </div>
              <div class='nav'>
                <router-link to='/type'><a href="#">Types</a></router-link>
              </div>
            </div>
            <div class='navTitle'>
              <h1> Pokemon Encounter </h1>
            </div>
              <div v-if='false' class='registration'>
              <router-link to='/signup'><a href="#">Sign Up</a>
              </router-link>
              <router-link to='/login'><a href="#">Log In</a>
              </router-link>
            </div>
    </div>
</template>

<script>
  export default {
    stateless: true,
  }
</script>

<style>
  .navigation {
    display: inline;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  .registration {
    float: left;
    padding-left: 20%;
  }
  .navTitle {
    padding-left: 5%;
    float: left;
    font-size: 1vw;
  }
  .routePaths {
    float: left;
  }
  .nav {
    position: relative;
    display: inline;
    height: 100%;
    box-shadow: 0px 5px 5px rgba(0,0,0,.27);
    z-index: 10;
    background-color: #E84F6D;
  }
  .nav a {
  text-align: center;
  text-border: 1px solid black;
  text-decoration: none;
  margin-top: 2px;
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif;;
  color: #FFF;
  margin: 2px;
  }
</style>