<template>
  <div class="min-h-screen bg-white p-4 flex flex-col items-center">
    <!-- Header -->
    <div class="w-full flex justify-between items-center mb-6">
      <router-link to="/caregiverdashboard">
        <img src="/home.png" alt="Home" class="w-13 h-12" />
      </router-link>
      <div class="flex items-center gap-2 relative">
        <span class="font-medium">John Rey Canete</span>
        <img
          src="/speech.png"
          alt="Profile"
          class="h-10 w-10 rounded-full border border-gray-300"
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
    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">SPEECH PRACTICE</div>

    <!-- Title -->
    <p class="text-gray-600 font-semibold mb-4">MEDIUM (6–9 WORDS)</p>

    <!-- List -->
    <ul class="w-full max-w-md space-y-2">
      <li
        v-for="(phrase, index) in phrases"
        :key="index"
        class="flex justify-between items-center border-b pb-2"
      >
        <span class="italic">“{{ phrase.text }}”</span>
        <span :class="phrase.status === 'completed' ? 'text-green-600' : 'text-gray-500 italic'">
          -{{ phrase.status }}
        </span>
      </li>
    </ul>

    <!-- Back Button -->
    <button class="mt-6 bg-red-400 text-white font-bold px-6 py-2 rounded-lg" @click="goBack">
      BACK
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

const phrases = [
  { text: 'Can you please open the window for me?', status: 'completed' },
  { text: 'I want to go outside for fresh air', status: 'skipped' },
  { text: 'Please bring me a glass of water', status: 'completed' },
  { text: 'I need help to stand up now', status: 'skipped' },
  { text: 'Could you call my caregiver for me?', status: 'completed' },
]

function goBack() {
  router.push('/speechpracticemonitor')
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const logout = () => {
  router.push('/login')
}

const editprofile = () => {
  router.push('/editprofilecaregiver')
}
</script>
