<template>
    <div>
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div>
          <form @submit.prevent= "loginUser">
            <div class="flex flex-col pt-4">
              <label for="email">Email</label>
              <input
                v-model="Email"
                type="email"
                id="email"
                placeholder="your@email.com"
              />
              <p class=" animate-bounce md:w-2/4 text-gray-600 my-4 p-2 text-center rounded-md bg-red-100" v-if="errorMsg == 'Invalid email' " >{{ errorMsg }}</p>
            </div>
            <div>
              <label for="password">Password</label>
              <input
                v-model="Password"
                type="password"
                id="password"
                placeholder="Password"
                />
              <p v-if="errorMsg == 'Incorrect password'" >{{ errorMsg }}</p>
            </div>
  
            <input
              on-click="loginUser"
              type="submit"
              value="Log In"
              />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              <a href="/signup" class="text-amber-500 underline font-semibold"
                >Forgot password?
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
      //some code here
  </script>