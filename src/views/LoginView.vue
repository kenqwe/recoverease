<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-20 px-4">
    <img
      src="@/assets/recoverease-logo.png"
      alt="RecoverEase Logo"
      class="w-50 h-50 mb-4 mx auto"
    />
    <h1
      class="w-full text-center bg-red-400 text-black py-3 text-basefont-medium tracking-wide mb-6 rounded-lg shadow"
    >
      Stroke Recovery Assistant
    </h1>

    <div class="bg-white p-6 rounded-xl shadow border w-full max-w-sm">
      <form @submit.prevent="handleLogin">
        <label class="block text-sm font-medium mb-1">Email address:</label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter email address"
          class="w-full px-4 py-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <label class="block text-sm font-medium mb-1">Password:</label>
        <div class="relative mb-4">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter password"
            class="w-full px-4 py-2 border rounded bg-gray-100 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button type="button" class="absolute right-2 top-2" @click="togglePassword">
            <span class="text-gray-500 text-sm">
              {{ showPassword ? '🙈' : '👁️' }}
            </span>
          </button>
        </div>

        <button
          type="submit"
          class="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 mb-3"
        >
          <router-link to="/dashboard">Sign In</router-link>
        </button>
      </form>

      <div class="text-center text-sm text-gray-600">
        <a href="#" class="underline">
          <router-link to="/forgotpassword">Forgot Password?</router-link></a
        >
      </div>
    </div>

    <button class="mt-6 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 text-sm">
      <router-link to="/register">Create Account</router-link>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const email = ref('')
const password = ref('')

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = () => {
  // Add your login logic here
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
