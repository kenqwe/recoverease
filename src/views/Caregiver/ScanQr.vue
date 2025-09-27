<!-- src/views/Caregiver/ScanQr.vue -->
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-teal-600 text-white py-3 px-4 text-center font-bold">
      CONNECT STROKE SURVIVOR
    </header>

    <div class="flex-1 flex flex-col justify-center items-center space-y-6">
      <!-- QR Scanner -->
      <p class="text-gray-600 font-semibold mb-2">SCAN QR</p>
      <div class="w-60 h-60 border-4 border-teal-500 rounded-lg flex items-center justify-center">
        <qrcode-stream @decode="onDecode" @init="onInit">
          <div class="text-gray-400">SCANNING...</div>
        </qrcode-stream>
      </div>

      <!-- Cancel Button -->
      <button
        class="bg-red-400 text-white px-6 py-2 rounded-lg shadow hover:bg-red-500"
        @click="cancel"
      >
        CANCEL
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { QrcodeStream } from 'vue-qrcode-reader'

const router = useRouter()

const onDecode = (result) => {
  alert(`QR Code detected: ${result}`)
  // TODO: connect to API using QR data
}

const onInit = (promise) => {
  promise.catch((error) => {
    alert('Camera initialization failed: ' + error.message)
  })
}

const cancel = () => {
  router.back()
}
</script>

<style>
/* Optional scanning animation */
.qrcode-stream-overlay {
  border: none !important;
}
</style>
