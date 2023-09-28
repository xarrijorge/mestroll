<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>
    <button><NuxtLink to="/dashboard">Log in with Google</NuxtLink></button>
  </div>
</template>

<script>
// Initialize Userfront

export default {
  data() {
    return {
      emailOrUsername: '',
      password: '',
      alert: ''
    }
  },
  methods: {
    // Log in with the form's email/username and password
    loginWithPassword() {
      this.alert = ''
      Userfront.login({
        method: 'password',
        emailOrUsername: this.emailOrUsername,
        password: this.password
      }).catch((error) => {
        this.alert = error.message
      })
    },
    // Log in with SSO (google)
    loginWithSSO() {
      Userfront.login({ method: 'google' })
    }
  }
}
</script>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
