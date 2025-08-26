<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center space-x-1">
        <img src="/logo.png" alt="RecoverEase" class="w-12 h-12" />
        <span class="font-semibold text-lg">RecoverEase</span>
      </div>

      <!-- Profile + Hamburger -->
      <div class="flex items-center space-x-2 relative">
        <span class="font-semibold">Ken Cartaciano</span>
        <img src="/logo.png" alt="Profile" class="w-12 h-12 rounded-full border border-gray-300" />

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
          class="absolute right-0 top-14 mt-2 w-40 bg-white rounded-md shadow-lg z-50"
        >
          <button @click="editprofile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Edit Profile
          </button>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>

    <!-- Activity Section -->
    <div class="bg-white rounded-xl shadow p-4 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">ACTIVITY</h2>
        <button class="text-sm text-blue-600">Show All</button>
      </div>

      <!-- Filter Tabs -->
      <div class="flex space-x-2 mb-8 justify-center">
        <button class="bg-red-400 text-white px-4 py-1 rounded-full text-sm">THIS DAY</button>
        <button class="bg-teal-500 text-white px-4 py-1 rounded-full text-sm">THIS WEEK</button>
        <button class="bg-red-200 text-gray-700 px-4 py-1 rounded-full text-sm">THIS MONTH</button>
      </div>

      <!-- Recent Activity -->
      <div class="text-sm text-gray-500 mb-2">5 minutes ago</div>
      <div class="bg-gray-100 rounded-xl p-4 text-sm">
        <p class="font-bold">Exercise Guide</p>
        <p>Arm exercise</p>
        <p class="text-gray-500 text-xs">Last session: 2025-05-10 • 8:00pm</p>
      </div>
    </div>

    <!-- Menu Grid -->
    <div class="grid grid-cols-3 gap-4">
      <router-link to="/exerciseguide"
        ><FeatureCard title="Exercise Guide" icon="/exercise.png"
      /></router-link>
      <router-link to="/speechpractice">
        <FeatureCard title="Speech Practice" icon="/speech.png" />
      </router-link>
      <FeatureCard title="Cognitive Games" icon="/brain.png" />
      <FeatureCard title="My Medications" icon="/meds.png" />
      <FeatureCard title="Connect Caregiver" icon="/connect.png" />
      <FeatureCard title="Emergency" icon="/emergency.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FeatureCard from '../components/FeatureCard.vue'

const router = useRouter()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofile')
}
</script>
