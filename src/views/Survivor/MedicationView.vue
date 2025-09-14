<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-teal-600 text-white p-4 flex justify-between items-center">
      <router-link to="/dashboard">
        <img src="/home.png" alt="Logo" />
      </router-link>

      <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">
        MY MEDICATIONS
      </div>
      <button @click="goHome" class="text-white">
        <i class="fas fa-home"></i>
      </button>
    </header>

    <!-- List -->
    <div class="flex-1 p-4">
      <div
        v-for="(med, index) in medications"
        :key="index"
        class="bg-white rounded-xl shadow-md p-4 mb-3 flex justify-between items-center"
      >
        <div>
          <h2 class="font-bold">{{ med.name }}</h2>
          <p class="text-gray-600">Dosage: {{ med.dosage }}</p>
          <p class="text-gray-600">Time: {{ med.time }}</p>
          <p class="text-sm" :class="med.status === 'Taken' ? 'text-green-600' : 'text-red-600'">
            Status: {{ med.status }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex gap-2">
          <button
            @click="markTaken(index)"
            class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Mark Taken
          </button>
          <button
            @click="markMissed(index)"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Skip
          </button>
          <button
            @click="editMedication(index)"
            class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Edit
          </button>
        </div>
      </div>
    </div>

    <!-- Add Button -->
    <footer class="p-4">
      <button
        @click="addMedication"
        class="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg shadow-lg"
      >
        + Add Medication
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MedicationView',
  data() {
    return {
      medications: [
        { name: 'Aspirin', dosage: '1 Tablet', time: '8:00 AM', status: 'Pending' },
        { name: 'Metformin', dosage: '500mg', time: '12:00 PM', status: 'Pending' },
      ],
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    addMedication() {
      this.$router.push('/addmedication')
    },
    editMedication(index) {
      alert(`Edit medication: ${this.medications[index].name}`)
    },
    markTaken(index) {
      this.medications[index].status = 'Taken'
    },
    markMissed(index) {
      this.medications[index].status = 'Skipped'
    },
  },
}
</script>
