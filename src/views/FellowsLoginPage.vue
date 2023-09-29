<template>
  <div class="bg-blue-100 h-screen w-screen">
    <div class="grid place-items-center">
      <div class="flex flex-col bg-white m-10 lg:mt-20 ">
        <img class="h-24 w-24 lg:h-36 lg:w-36 mx-12" src="../assets/images/logo.png" alt="" />
        <div class="flex flex-col lg:flex-row h-ful w-full">
          <div class="mx-8 lg:w-full lg:h-full lg:float-left grid place-items-center">
            <img src="../assets/images/login_page_img.png" alt="there's a picture here" />
          </div>
          <div class="grid place-items-center lg:w-full">
            <h1 class="text-2xl lg:text-3xl text-center">
              Welcome to <span class="text-blue-700">mestroll</span> <br/>
              web!
            </h1>
            <button
              @click="redirectMe"
              class="float-left mt-8 px-4 py-2 lg:-mt-48 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
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
        <div class="mt-8 lg:mt-0 ">
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
