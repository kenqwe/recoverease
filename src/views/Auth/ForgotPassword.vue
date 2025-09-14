<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-20 px-4">
    <img
      src="@/assets/recoverease-logo.png"
      alt="RecoverEase Logo"
      class="w-50 h-50 mb-4 mx auto"
    />
    <h1
      class="w-full text-center bg-red-400 text-black py-3 text-base font-medium tracking-wide mb-6 rounded-lg shadow"
    >
      Stroke Recovery Assistant
    </h1>
    <!-- Title -->

    <div class="bg-white p-6 rounded-xl shadow border w-full max-w-sm">
      <input
        v-model="email"
        type="email"
        placeholder="Enter email address"
        class="w-full max-w-xs px-4 py-2 mb-4 text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <!-- Submit Button -->
      <button
        @click="sendVerificationCode"
        class="w-full max-w-xs px-4 py-2 mb-4 text-white bg-orange-400 rounded hover:bg-orange-500 transition-colors"
      >
        Email verification code
      </button>

      <!-- Sign In Link -->
      <router-link
        to="/login"
        class="flex items-center justify-center text-sm text-gray-600 hover:text-black transition-colors"
      >
        <span class="mr-2">←</span> Sign In
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordView',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    sendVerificationCode() {
      if (!this.email) {
        alert('Please enter your email address.')
        return
      }
      // Here, normally you would call your API to send the verification code
      console.log(`Sending verification code to ${this.email}`)
      alert('Verification code sent! Please check your email.')
    },
  },
}
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
