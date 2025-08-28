<template>
  <div class="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <div class="w-full flex justify-start items-center mb-6">
      <img src="/logo.png" alt="RecoverEase Logo" class="h-14 w-15" />
      <h1 class="ml-3 text-xl font-bold text-gray-800">Edit Profile</h1>
    </div>

    <div class="flex flex-col items-center mb-6">
      <div
        class="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.802 5.879 2.128M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <button class="mt-3 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition">
        Change Profile Picture
      </button>
    </div>

    <form @submit.prevent="saveProfile" class="bg-white w-full max-w-md p-6 rounded-lg shadow">
      <div class="mb-4">
        <label for="firstName" class="block text-sm font-medium text-gray-700"> First Name: </label>
        <input
          v-model="firstName"
          type="text"
          id="firstName"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div class="mb-4">
        <label for="lastName" class="block text-sm font-medium text-gray-700"> Last Name: </label>
        <input
          v-model="lastName"
          type="text"
          id="lastName"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div class="flex justify-between mt-6">
        <button
          type="button"
          @click="cancelEdit"
          class="bg-red-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-500 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="bg-teal-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-700 transition"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Example: values from logged-in user
const firstName = ref('Ken')
const lastName = ref('Cartaciano')

const saveProfile = () => {
  console.log('Profile saved:', {
    firstName: firstName.value,
    lastName: lastName.value,
  })
  // Save logic here (e.g., API call)
  router.push('/dashboard') // redirect after save
}

const cancelEdit = () => {
  router.push('/dashboard')
}
</script>
