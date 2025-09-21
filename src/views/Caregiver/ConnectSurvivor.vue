<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <div class="flex justify-between items-center w-full mb-4">
      <router-link to="/caregiverdashboard">
        <img src="/home.png" alt="Logo" class="h-12" />
      </router-link>

      <div class="flex items-center space-x-2 relative">
        <span class="text-sm font-medium">John Rey Canete</span>
        <img
          src="/speech.png"
          alt="Profile"
          class="h-12 w-12 rounded-full border border-gray-300"
        />

        <button @click="toggleMenu" class="p-2 rounded-md focus:outline-none">
          <div class="space-y-1">
            <span class="block w-6 h-0.5 bg-red-500"></span>
            <span class="block w-6 h-0.5 bg-red-500"></span>
            <span class="block w-6 h-0.5 bg-red-500"></span>
          </div>
        </button>

        <div
          v-if="isOpen"
          class="absolute right-0 top-12 mt-2 w-40 bg-white rounded-md shadow-lg z-50"
        >
          <button @click="editprofile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Edit Profile
          </button>
          <button
            @click="logout"
            class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>

    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">
      CONNECT STROKE SURVIVOR
    </div>

    <div class="flex flex-col items-center justify-center flex-1 p-6 space-y-6">
      <h2 class="text-lg italic font-semibold text-gray-700">CONNECTED STROKE SURVIVOR</h2>
    </div>
  </div>
  <div class="bg-white rounded-lg shadow p-4 mb-4">
    <div class="flex justify-between items-center mb-2">
      <p class="font-semibold text-lg">Ken Cartaciano</p>
      <span class="bg-green-500 text-white text-xs px-3 py-1 rounded-full"> CONNECTED </span>
    </div>

    <div class="flex items-center space-x-2 text-sm text-gray-600 mb-1">
      <span class="text-gray-500">📧</span>
      <p>kenc12@gmail.com</p>
    </div>

    <div class="flex items-center space-x-2 text-sm text-gray-600">
      <span class="text-gray-500">📞</span>
      <p>09453568232</p>
    </div>
  </div>
  <router-link to="" class="block bg-teal-600 text-white px-4 py-2 rounded-lg w-full text-center">
    ADD SURVIVOR
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const logout = () => {
  // Clear any stored session/token here if you have one
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofilecaregiver')
}
</script>
