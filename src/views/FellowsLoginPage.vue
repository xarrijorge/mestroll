<template>
  <div class="grid h-screen place-items-center">
    <button @click="redirectMe"
      class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
      <span>Login with Google</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectMe() {
      this.$router.push('/dashboard');
    },

  }
}
</script>

