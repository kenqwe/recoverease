<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <div class="flex justify-between items-center w-full mb-4">
      <router-link to="/dashboard">
        <img src="/home.png" alt="Logo" class="h-12" />
      </router-link>

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

    <!-- Section Title -->
    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">SPEECH PRACTICE</div>

    <div class="flex flex-col items-center justify-center flex-1 p-6 space-y-6">
      <h2 class="text-lg italic font-semibold text-gray-700">Choose Difficulty Level</h2>

      <div class="flex flex-col items-center justify-center p-12 bg-gray-50">
        <div class="flex flex-col space-y-12 w-full max-w-xs text-left mb-8 justify-center">
          <button
            class="w-full py-3 rounded-lg bg-green-400 text-black font-bold shadow hover:bg-green-500 transition"
            @click="selectLevel('easy')"
          >
            EASY (3–5 WORDS)
          </button>

          <button
            class="w-full py-3 rounded-lg bg-orange-300 text-black font-bold shadow hover:bg-orange-400 transition"
            @click="selectLevel('medium')"
          >
            MEDIUM (6–9 WORDS)
          </button>

          <button
            class="w-full py-3 rounded-lg bg-red-400 text-black font-bold shadow hover:bg-red-500 transition"
            @click="selectLevel('hard')"
          >
            HARD (10+ WORDS)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function selectLevel(level) {
  // Navigate to a practice screen depending on level
  router.push(`/speechpractice${level}`)
}
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const logout = () => {
  // Clear any stored session/token here if you have one
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofilesurvivor')
}
</script>
