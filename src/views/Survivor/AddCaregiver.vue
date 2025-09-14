<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center w-full mb-4">
      <!-- Home Logo -->
      <router-link to="/dashboard">
        <img src="/home.png" alt="Logo" class="h-12" />
      </router-link>

      <!-- Profile + Hamburger Menu -->
      <div class="flex items-center space-x-2 relative">
        <span class="text-sm font-medium">Ken Cartaciano</span>
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

        <!-- Dropdown -->
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
    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">
      CONNECT CAREGIVER
    </div>

    <!-- Instruction -->
    <p class="text-center text-gray-600 mb-4 text-sm">
      Share this QR or PIN with your caregiver so they can connect to your profile
    </p>

    <!-- QR Code -->
    <div class="flex flex-col items-center mb-6">
      <p class="font-semibold mb-2">QR CODE</p>
      <img src="/qrcode.png" alt="QR Code" class="w-40 h-40 border p-2 bg-white shadow" />
    </div>

    <!-- PIN Code -->
    <div class="flex flex-col items-center mb-6">
      <p class="font-semibold mb-2">PIN CODE</p>
      <div class="flex space-x-4">
        <span
          v-for="(digit, index) in pin"
          :key="index"
          class="text-lg font-bold border-b-2 border-gray-400 px-2"
        >
          {{ digit }}
        </span>
      </div>
    </div>

    <!-- Close Button -->
    <button @click="close" class="bg-red-400 text-white font-semibold px-6 py-2 rounded-lg shadow">
      CLOSE
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const pin = ref([])

// Generate random 6-digit PIN on load
const generatePin = () => {
  pin.value = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10).toString())
}

onMounted(() => {
  generatePin()
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const logout = () => {
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofilesurvivor')
}
const close = () => {
  router.push('/dashboard')
}
</script>
