<template>
  <div>
    <div v-if='!loggedIn'>
      <input v-model="username">
      <input type='password' v-model="password">
      <button @click.prevent="logIn(username, password)">Log In</button>
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
    logIn (user, pass) {
      let body = {
        username: user,
        password: pass
        }
      this.$http.get('http://localhost:4824/api/trainer/login', { params:  body })
        .then((res)=> {
          // this.$router.push('/database');
        })
        .catch((err)=> {
          console.log(err);
        })
    }
  },
}
</script>