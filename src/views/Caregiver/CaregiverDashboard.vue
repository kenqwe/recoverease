<!-- CaregiverDashboard.vue -->
<template>
  <div class="min-h-screen bg-gray-50 p-4 flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center space-x-1">
        <img src="/logo.png" alt="RecoverEase" class="w-13 h-12" />
      </div>

      <!-- Profile + Hamburger -->
      <div class="flex items-center space-x-2 relative">
        <span class="font-semibold">John Rey Cañete</span>
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
        <h2 class="text-lg font-bold">Ken ACTIVITY</h2>
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
            activeTab === tab ? 'bg-red-400 text-white' : 'bg-red-200 text-gray-700',
          ]"
        >
          {{ tab === 'day' ? 'THIS DAY' : tab === 'week' ? 'THIS WEEK' : 'THIS MONTH' }}
        </button>
      </div>

      <!-- Activities -->
      <div class="space-y-3 overflow-y-auto" :class="showAll ? 'max-h-[300px]' : 'max-h-[120px]'">
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

    <!-- Menu Grid -->
    <div class="grid grid-cols-2 gap-7">
      <router-link to="/caregiverexerciselist">
        <FeatureCard title="Monitor Exercise Guide" icon="/exercise.png" />
      </router-link>
      <router-link to="/speechpracticemonitor">
        <FeatureCard title="Speech Practice" icon="/speech.png" />
      </router-link>
      <FeatureCard title="Cognitive Games" icon="/brain.png" />
      <router-link to="CGmedication/">
        <FeatureCard title="Ken Medications" icon="/meds.png" />
      </router-link>
      <router-link to="/connectsurvivor">
        <FeatureCard title="Connect Stroke Survivor" icon="/connect.png" />
      </router-link>
      <!-- Emergency Log direct navigation -->
      <router-link to="/emergencylog">
        <FeatureCard title="Emergency Log" icon="/emergency.png" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FeatureCard from '../../components/FeatureCard.vue'

const router = useRouter()
const isOpen = ref(false)
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
  router.push('/editprofilecaregiver')
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
