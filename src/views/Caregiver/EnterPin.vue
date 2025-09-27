<!-- src/views/Caregiver/EnterPin.vue -->
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-teal-600 text-white py-3 px-4 text-center font-bold">
      CONNECT STROKE SURVIVOR
    </header>

    <!-- Content -->
    <div class="flex-1 flex flex-col justify-center items-center px-6 space-y-6">
      <!-- PIN Inputs -->
      <p class="text-gray-600 font-semibold mb-2">ENTER PIN</p>
      <div class="flex space-x-4">
        <input
          v-for="(digit, index) in pin"
          :key="index"
          v-model="pin[index]"
          type="text"
          maxlength="1"
          class="w-10 h-12 border-b-2 border-gray-500 text-center text-lg focus:outline-none focus:border-teal-600"
          @input="moveNext(index, $event)"
        />
      </div>

      <!-- Connect Button -->
      <button
        class="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700"
        @click="connectPin"
      >
        CONNECT
      </button>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const pin = ref(['', '', '', '', '', '']) // 6-digit PIN

const moveNext = (index, event) => {
  if (event.target.value && index < pin.value.length - 1) {
    const nextInput = event.target.nextElementSibling
    if (nextInput) nextInput.focus()
  }
}

const connectPin = () => {
  const enteredPin = pin.value.join('')
  if (enteredPin.length === 6) {
    alert(`Connecting with PIN: ${enteredPin}`)
    // TODO: Call API to verify PIN
  } else {
    alert('Please enter a 6-digit PIN')
  }
}

const cancel = () => {
  router.back() // balik sa previous page
}
</script>
