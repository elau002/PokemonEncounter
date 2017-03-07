<template>
  <div>
    <div v-if='!loggedIn'>
      <input v-model="username">
      <input type='password' v-model="password">
      <button v-on:click.prevent="signUp(username, password)">Sign Up</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: ()=> {
    return  {
      username: '',
      password: '',
      loggedIn: false,
    }
  },
  methods: {
    signUp (user, pass) {
      let body = {
        username: user,
        password: pass
        }
      this.$http.post('http://localhost:4824/api/trainer/signup', body)
        .then((res)=> {
          if(res.status === 208) {
            window.alert("User already signed up. Try again");
          }
        })
        .catch((err)=> {
          console.log(err);
        })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
