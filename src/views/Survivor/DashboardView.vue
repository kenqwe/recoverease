<template>
  <div class="min-h-screen bg-gray-50 p-4 flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center space-x-1">
        <img src="/logo.png" alt="RecoverEase" class="w-13 h-12" />
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
        <button class="text-sm text-blue-600" @click="toggleView">
          {{ showAll ? 'Minimize' : 'View All' }}
        </button>
      </div>

      <!-- Filter Tabs -->
      <div class="flex space-x-2 mb-4 justify-center">
        <button
          v-for="tab in ['day', 'week', 'month']"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-4 py-1 rounded-full text-sm font-semibold',
            activeTab === tab ? 'bg-teal-400 text-white' : 'bg-red-200 text-gray-700',
          ]"
        >
          {{ tab === 'day' ? 'THIS DAY' : tab === 'week' ? 'THIS WEEK' : 'THIS MONTH' }}
        </button>
      </div>

      <!-- Activities -->
      <div class="space-y-3 overflow-y-auto" :class="showAll ? 'max-h-[300px]' : 'max-h-[120px]'">
        <!-- Show first card only in minimize mode -->
        <div
          v-for="(activity, index) in filteredActivities"
          :key="index"
          v-show="showAll || index === 0"
          class="flex items-center justify-between p-3 rounded-lg border bg-gray-50"
        >
          <div>
            <h3 class="font-semibold">{{ activity.title }}</h3>
            <p class="text-sm text-gray-600">{{ activity.subtitle }}</p>
          </div>
          <div class="text-right text-sm">
            <span v-if="activity.missed" class="text-red-500 font-semibold">Missed</span>
            <p class="text-gray-500">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Grid (always visible, even in minimize) -->
    <div class="grid grid-cols-2 gap-7">
      <router-link to="/exerciseguide"
        ><FeatureCard title="Exercise Guide" icon="/exercise.png"
      /></router-link>
      <router-link to="/speechpractice">
        <FeatureCard title="Speech Practice" icon="/speech.png" />
      </router-link>
      <FeatureCard title="Cognitive Games" icon="/brain.png" />
      <router-link to="/medication">
        <FeatureCard title="My Medications" icon="/meds.png" />
      </router-link>
      <router-link to="/connectcaregiver">
        <FeatureCard title="Connect Caregiver" icon="/connect.png" />
      </router-link>
      <FeatureCard @click="openModal" title="Emergency" icon="/emergency.png" />
    </div>

    <!-- Emergency Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-80 p-5 relative">
        <!-- Header -->
        <div
          class="flex justify-between items-center bg-gradient-to-r from-orange-300 to-red-400 p-2 rounded-t-lg"
        >
          <h2 class="text-red-800 font-bold flex items-center gap-1">EMERGENCY ALERT</h2>
          <button @click="closeModal" class="text-black text-lg font-bold">&times;</button>
        </div>

        <!-- Body -->
        <div class="p-4 space-y-4">
          <button
            @click="sendEmergency"
            class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg shadow-md"
          >
            SEND EMERGENCY
          </button>

          <textarea
            v-model="optionalMessage"
            placeholder="optional message"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FeatureCard from '../../components/FeatureCard.vue'

const router = useRouter()
const isOpen = ref(false)
const isModalOpen = ref(false)
const optionalMessage = ref('')
const showAll = ref(false)
const activeTab = ref('day')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleView = () => {
  showAll.value = !showAll.value
}

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
const editprofile = () => {
  router.push('/editprofilesurvivor')
}
const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
const sendEmergency = () => {
  const alertData = {
    message: optionalMessage.value,
    time: new Date().toLocaleString(),
  }
  console.log('🚨 Emergency Sent:', alertData)
  alert('Emergency Alert Sent!')

  optionalMessage.value = ''
  isModalOpen.value = false
}

const activities = ref([
  { title: 'Exercise Guide', subtitle: 'Arm exercise', time: 'Last session: 8:00pm' },
  { title: 'Medicine', subtitle: 'Metformin', time: '5 minutes ago', missed: true },
  { title: 'Cognitive Games', subtitle: 'Memory Match Game', time: 'Last session: 8:00pm' },
  { title: 'Emergency', subtitle: 'Fall', time: 'Last session: 8:00pm' },
])

const filteredActivities = computed(() => {
  if (activeTab.value === 'day') return activities.value
  if (activeTab.value === 'week') return activities.value.slice(0, 3)
  if (activeTab.value === 'month') return activities.value.slice(0, 2)
  return activities.value
})
</script>
