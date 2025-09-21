<!-- ExerciseGuideStep1.vue -->
<template>
  <div class="flex flex-col p-6 bg-gray-50 min-h-screen">
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

    <!-- Selected Parts (Dummy Buttons) -->
    <div class="flex flex-wrap justify-center gap-2 mb-4">
      <button class="bg-red-400 text-white px-4 py-2 rounded-md font-semibold">Right Leg</button>
      <button class="bg-red-400 text-white px-4 py-2 rounded-md font-semibold">Left Arm</button>
      <button class="bg-red-400 text-white px-4 py-2 rounded-md font-semibold">Face/Mouth</button>
    </div>

    <!-- Exercises Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow">
      <div
        v-for="(exercise, index) in exercises"
        :key="index"
        class="bg-gray-200 rounded-lg p-2 text-center shadow cursor-pointer"
        @click="openVideo(exercise)"
      >
        <div class="w-full h-24 flex items-center justify-center bg-gray-300 rounded relative">
          <!-- Play Icon -->
          <span class="text-white text-3xl bg-black bg-opacity-50 rounded-full px-2 py-1 absolute">
            ▶
          </span>
        </div>
        <p class="text-sm font-semibold mt-2">{{ exercise.title }}</p>
        <p class="text-xs text-gray-600">{{ exercise.doctor }}</p>
      </div>
    </div>

    <!-- Edit Affected Parts Button -->
    <div class="mt-6 flex justify-center">
      <button
        @click="editAffectedParts"
        class="bg-orange-300 hover:bg-orange-400 text-black font-semibold px-6 py-3 rounded-md shadow-md flex items-center gap-2"
      >
        Edit Affected Parts
      </button>
    </div>

    <!-- Video Modal -->
    <div
      v-if="showVideo"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-4 w-11/12 max-w-md relative">
        <button @click="closeVideo" class="absolute top-2 right-2 text-gray-600 hover:text-red-500">
          ✖
        </button>
        <h2 class="text-lg font-bold mb-2">{{ currentExercise.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ currentExercise.doctor }}</p>
        <!-- Dummy video (YouTube Embed) -->
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-full rounded"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Exercise Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isOpen = ref(false)
const showVideo = ref(false)
const currentExercise = ref({})

const exercises = [
  { title: 'Shoulder Flexion', doctor: 'Doc Jun Reyes' },
  { title: 'Shoulder Press', doctor: 'Doc Jun Reyes' },
  { title: 'Pronation & Supination', doctor: 'Doc Jun Reyes' },
  { title: 'Hip Flexion', doctor: 'Doc Jun Reyes' },
  { title: 'External & Internal Rotation', doctor: 'Doc Jun Reyes' },
  { title: 'Knee Extension', doctor: 'Doc Jun Reyes' },
  { title: 'Smiling...', doctor: 'Doc Jun Reyes' },
  { title: 'Raise Your Eyebrows', doctor: 'Doc Jun Reyes' },
  { title: 'Frowning', doctor: 'Doc Jun Reyes' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const openVideo = (exercise) => {
  currentExercise.value = exercise
  showVideo.value = true
}

const closeVideo = () => {
  showVideo.value = false
}

const logout = () => {
  router.push('/login')
}

const editprofile = () => {
  router.push('/editprofilecaregiver')
}

const editAffectedParts = () => {
  router.push('/editaffectedparts')
}
</script>
