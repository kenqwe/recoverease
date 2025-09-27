<!-- ConnectSurvivor.vue -->
<template>
  <div class="flex flex-col p-6 bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="flex justify-between items-center w-full mb-4">
      <!-- Home Logo -->
      <router-link to="/caregiverdashboard">
        <img src="/home.png" alt="Logo" class="h-12" />
      </router-link>

      <!-- Profile + Hamburger -->
      <div class="flex items-center space-x-2 relative">
        <span class="text-sm font-medium">John Rey Cañete</span>
        <img
          src="/speech.png"
          alt="Profile"
          class="h-12 w-12 rounded-full border border-gray-300"
        />

        <!-- Hamburger Button -->
        <button @click="toggleMenu" class="p-2 rounded-md focus:outline-none">
          <div class="space-y-1">
            <span class="block w-6 h-0.5 bg-red-500"></span>
            <span class="block w-6 h-0.5 bg-red-500"></span>
            <span class="block w-6 h-0.5 bg-red-500"></span>
          </div>
        </button>

        <!-- Dropdown Menu -->
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

    <!-- Title -->
    <div class="w-full text-center mb-10 text-white bg-teal-600 font-bold py-2">
      CONNECT STROKE SURVIVOR
    </div>

    <!-- Buttons -->
    <div class="flex flex-col items-center gap-4 flex-grow">
      <button
        class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-md shadow-md"
        @click="scanQr"
      >
        SCAN QR CODE
      </button>

      <span class="text-gray-500 font-medium">OR</span>

      <button
        class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-md shadow-md"
        @click="enterPin"
      >
        ENTER PIN CODE
      </button>
    </div>

    <!-- Back Button -->
    <div class="mt-10 flex justify-center">
      <button
        @click="goBack"
        class="bg-red-400 hover:bg-red-500 text-white font-semibold px-8 py-2 rounded-md shadow-md"
      >
        BACK
      </button>
    </div>
  </div>
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
  router.push('/login')
}

const editprofile = () => {
  router.push('/editprofilecaregiver')
}

const scanQr = () => {
  router.push('/scanqr') // sample route kung mag-scan qr code page ka
}

const enterPin = () => {
  router.push('/enterpin') // sample route kung mag-enter pin page ka
}

const goBack = () => {
  router.back()
}
</script>
