<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Fellows Landing page</RouterLink>
        <RouterLink to="/checkin">Checkin</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

</style>
