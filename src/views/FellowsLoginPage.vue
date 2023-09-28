<template>
  <div class="bg-blue-100 h-screen w-screen">
    <div class="grid place-items-center">
      <div class="flex flex-col mt-10 bg-white">
        <img class="h-36 w-36 mx-12" src="../assets/images/logo.png" alt="" />
        <div class="flex flex-row">
          <div class="mx-10 float-left grid place-items-center">
            <img src="../assets/images/login_page_img.png" alt="there's a picture here" />
          </div>
          <div class="grid place-items-center mr-32">
            <h1 class="-mb-56 text-4xl text-center">
              Welcome to <span class="text-blue-700">mestroll</span> <br />
              web!
            </h1>
            <button
              @click="redirectMe"
              class="float-left px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <img
                class="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
        <div>
          <img class="h-20 w-full" src="../assets/images/Vector.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectMe() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
