<!-- src/views/AdminPanel.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-200 flex flex-col">
      <div class="p-4 flex justify-center">
        <!-- Logo -->
        <img src="/logo.png" alt="RecoverEase Logo" class="h-14 w-16 rounded-full" />
      </div>
      <nav class="flex-1">
        <button
          v-for="item in menuItems"
          :key="item.name"
          @click="active = item.name"
          class="w-full text-left px-4 py-3 hover:bg-gray-300 font-semibold"
          :class="active === item.name ? 'bg-gray-400' : ''"
        >
          {{ item.label }}
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 class="text-lg font-bold">ADMIN PANEL</h1>
        <div class="relative">
          <button @click="toggleDropdown" class="flex items-center space-x-2">
            <img src="/speech.png" alt="Profile" class="h-8 w-8 rounded-full" />
            <span class="font-semibold">Admin</span>
          </button>
          <!-- Dropdown -->
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-40 bg-white border rounded shadow"
          >
            <button class="w-full text-left px-4 py-2 hover:bg-gray-100" @click="openEditProfile">
              Edit Profile
            </button>
            <button class="w-full text-left px-4 py-2 hover:bg-gray-100" @click="logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <section class="p-6 flex-1 bg-gray-100 overflow-y-auto">
        <div v-if="active === 'exercise'">
          <h2 class="text-xl font-bold mb-4">Exercise Guide</h2>
          <p>Here you can manage exercise guides.</p>
        </div>
        <div v-else-if="active === 'speech'">
          <h2 class="text-xl font-bold mb-4">Speech Practice</h2>
          <p>Manage speech practice activities here.</p>
        </div>
        <div v-else-if="active === 'games'">
          <h2 class="text-xl font-bold mb-4">Cognitive Games</h2>
          <p>Manage cognitive games settings here.</p>
        </div>
        <div v-else>
          <h2 class="text-xl font-bold">Welcome to the Admin Panel</h2>
          <p>Select a section from the sidebar.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = [
  { name: 'exercise', label: 'EXERCISE GUIDE' },
  { name: 'speech', label: 'SPEECH PRACTICE' },
  { name: 'games', label: 'COGNITIVE GAMES' },
]

const active = ref(null)
const dropdownOpen = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function openEditProfile() {
  dropdownOpen.value = false
  alert('Open Edit Profile modal or page here')
}

function logout() {
  dropdownOpen.value = false
  alert('Succesfully Logged Out')
  router.push({ name: 'Login' })
}
</script>
