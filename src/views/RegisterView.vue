<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-10 px-4">
    <!-- Logo -->
    <img src="@/assets/recoverease-logo.png" alt="RecoverEase Logo" class="w-50 h-50 mb-4" />

    <!-- Header -->
    <h1
      class="w-full text-center bg-red-400 text-black py-3 text-sm font-medium tracking-wide mb-6 rounded-lg shadow"
    >
      Stroke Recovery Assistant
    </h1>
    <!-- Form -->
    <form class="bg-white shadow-md rounded-lg px-6 py-6 w-full max-w-sm border border-gray-300">
      <!-- Role Selection -->
      <div class="flex flex-col items-start gap-2 mb-4">
        <label class="flex items-center space-x-2">
          <input type="radio" name="role" value="survivor" class="accent-red-500" />
          <span>I’m a stroke survivor</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" name="role" value="caregiver" class="accent-red-500" />
          <span>I’m a caregiver</span>
        </label>
      </div>

      <!-- Name Fields -->
      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">First Name:</label>
        <input
          type="text"
          placeholder="Enter first name"
          class="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
        />
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">Last Name:</label>
        <input
          type="text"
          placeholder="Enter last name"
          class="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
        />
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">Email Address:</label>
        <input
          type="email"
          placeholder="Enter email address"
          class="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
        />
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">Password:</label>
        <div class="relative">
          <input
            type="password"
            placeholder="Enter password"
            class="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
          />
          <span class="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁</span>
        </div>
      </div>

      <div class="mb-5">
        <label class="block text-sm font-medium mb-1">Confirm Password:</label>
        <div class="relative">
          <input
            type="password"
            placeholder="Confirm password"
            class="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
          />
          <span class="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁</span>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition duration-200"
      >
        Create Account
      </button>
    </form>

    <!-- Login Redirect -->
    <p class="mt-4 text-sm">
      Already have an account?
      <router-link to="/login" class="text-teal-700 font-semibold">Sign In</router-link>
    </p>
  </div>
</template>

<script setup>
// (Optional) Add interactivity, validation, and submission logic here
</script>

<style scoped>
/* (Optional) Add extra styles here */
</style>
