<!-- ExerciseGuideStep1.vue -->
<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center w-full mb-4">
      <!-- Home Logo -->
      <router-link to="/caregiverdashboard">
        <img src="/home.png" alt="Logo" class="h-12" />
      </router-link>

      <!-- Profile + Hamburger Menu -->
      <div class="flex items-center space-x-2 relative">
        <span class="text-sm font-medium">John Rey Canete</span>
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
    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">EXERCISE GUIDE</div>

    <!-- Subtitle -->
    <div class="w-full text-center mb-6 text-white bg-red-400 font-semibold py-2 px-2 text-sm">
      Which part(s) of your body is affected by the stroke?
    </div>

    <div class="flex flex-col items-center justify-center p-5 bg-gray-50">
      <div class="flex flex-col space-y-4 w-full max-w-xs text-left mb-8">
        <label v-for="(part, index) in bodyParts" :key="index" class="flex items-center space-x-3">
          <input type="checkbox" v-model="selectedParts" :value="part" class="w-5 h-5" />
          <span>{{ part }}</span>
        </label>
      </div>

      <router-link to="/exerciselist">
        <button
          @click="goToNext"
          class="bg-teal-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-teal-700 transition"
        >
          Next →
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bodyParts = ['Face/Mouth', 'Left Arm', 'Right Arm', 'Left Leg', 'Right Leg', 'Hand/Arm']

const selectedParts = ref([])
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const goToNext = () => {
  console.log('Selected parts:', selectedParts.value)
  // Navigate to next screen
}

const logout = () => {
  // Clear any stored session/token here if you have one
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofilecaregiver')
}
</script>
