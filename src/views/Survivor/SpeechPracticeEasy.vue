<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <!-- Header (same as speechpractice.vue) -->
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

    <!-- Content (Practice Page) -->
    <div class="flex flex-col items-center justify-center flex-1 space-y-8 w-full">
      <h2 class="text-lg font-bold text-gray-700">EASY (3-5)</h2>

      <p class="text-xl font-semibold italic">"I am okay"</p>

      <!-- Play + Record -->
      <div class="flex flex-col items-center space-y-6">
        <button
          class="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
          @click="playSentence"
        >
          <span>Play sentence</span>
        </button>

        <button
          class="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
          @click="recordSpeech"
        >
          <span>Tap to record</span>
        </button>
      </div>

      <!-- Navigation -->
      <div class="flex space-x-6 mt-8">
        <button
          @click="back"
          class="px-6 py-2 rounded-lg bg-red-400 text-white font-bold hover:bg-red-500"
        >
          BACK
        </button>
        <button class="px-6 py-2 rounded-lg bg-teal-500 text-white font-bold hover:bg-teal-600">
          SKIP
        </button>
      </div>
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
  router.push('/editprofilesurvivor')
}
const back = () => {
  router.push('/speechpractice')
}
const playSentence = () => {
  const utterance = new SpeechSynthesisUtterance('I am okay')
  speechSynthesis.speak(utterance)
}

const recordSpeech = () => {
  alert('Recording function coming soon…')
}
</script>
