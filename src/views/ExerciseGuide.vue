<!-- ExerciseGuideStep1.vue -->
<template>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center w-full mb-4">
      <router-link to="/dashboard"> <img src="/home.png" alt="Logo" class="h-12" /></router-link>
      <div class="flex items-center space-x-2">
        <span class="text-sm font-medium">Ken Cartaciano</span>
        <img
          src="/speech.png"
          alt="Profile"
          class="h-12 w-12 rounded-full border border-gray-300"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">EXERCISS GUIDE</div>

    <!-- Subtitle -->
    <div class="w-full text-center mb-6 text-white bg-red-400 font-semibold py-2 px-2 text-sm">
      Which part(s) of your body is affected by the stroke?
    </div>

    <!-- Checkbox list -->
    <div class="flex flex-col space-y-4 w-full max-w-xs text-left mb-8 justify-center">
      <label v-for="(part, index) in bodyParts" :key="index" class="flex items-center space-x-3">
        <input type="checkbox" v-model="selectedParts" :value="part" class="w-5 h-5" />
        <span>{{ part }}</span>
      </label>
    </div>

    <!-- Next button -->
    <button
      @click="goToNext"
      class="bg-teal-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-teal-700 transition"
    >
      Next →
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bodyParts = [
  'Face/Mouth',
  'Face/Mouth',
  'Left Arm',
  'Right Arm',
  'Left Leg',
  'Right Leg',
  'Hand/Arm',
]

const selectedParts = ref([])

const goToNext = () => {
  console.log('Selected parts:', selectedParts.value)
  // You can navigate to the next screen here
}
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
