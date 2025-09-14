<!-- EmergencyLog.vue -->
<template>
  <div class="min-h-screen bg-gray-50 p-4 flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <router-link to="/caregiverdashboard">
        <img src="/home.png" alt="Home" class="w-13 h-12" />
      </router-link>

      <div class="flex items-center space-x-2 relative">
        <span class="font-semibold">John Rey Cañete</span>
        <img src="/logo.png" alt="Profile" class="w-12 h-12 rounded-full border border-gray-300" />

        <!-- Hamburger -->
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

    <!-- Emergency Log Header -->
    <div class="bg-red-400 text-white text-center font-bold py-2 rounded-md mb-4">
      EMERGENCY LOG
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200 text-left text-sm">
            <th class="p-2">STROKE SURVIVOR</th>
            <th class="p-2">DATE & TIME</th>
            <th class="p-2">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in logs" :key="index" class="border-b text-sm hover:bg-gray-50">
            <td class="p-2 font-semibold">{{ log.survivor }}</td>
            <td class="p-2">{{ log.date }}</td>
            <td class="p-2">
              <span
                :class="[
                  'font-semibold',
                  log.status === 'pending' ? 'text-red-500' : 'text-teal-600',
                ]"
              >
                {{ log.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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

const logs = ref([
  {
    survivor: 'KEN CARTACIANO',
    date: 'May 18, 2005 3:50 PM',
    status: 'pending',
  },
  {
    survivor: 'KEN CARTACIANO',
    date: 'May 17, 2005 1:50 PM',
    status: 'Acknowledged',
  },
  {
    survivor: 'KEN CARTACIANO',
    date: 'May 17, 2005 1:50 PM',
    status: 'Acknowledged',
  },
])
</script>
