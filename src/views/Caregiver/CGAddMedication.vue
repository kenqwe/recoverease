<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-teal-600 text-white p-4 flex justify-between items-center">
      <div class="w-full text-center mb-2 text-white bg-teal-600 font-bold py-2">
        MY MEDICATIONS
      </div>
      <button @click="goHome" class="text-white">
        <i class="fas fa-home"></i>
      </button>
    </header>

    <!-- Form -->
    <div class="flex-1 p-6 bg-gray-100">
      <form @submit.prevent="saveMedication" class="bg-gray-200 rounded-xl p-5 space-y-4">
        <!-- Medication Name -->
        <div>
          <label class="block font-semibold mb-1">Medication Name:</label>
          <input
            v-model="medication.name"
            type="text"
            placeholder="Enter Medicine Name (e.g., Aspirin)"
            class="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <!-- Dosage -->
        <div>
          <label class="block font-semibold mb-1">Dosage:</label>
          <input
            v-model="medication.dosage"
            type="text"
            placeholder="Enter Medicine Dosage (e.g., 50mg)"
            class="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <!-- Frequency -->
        <div>
          <label class="block font-semibold mb-1">Frequency:</label>
          <div class="flex gap-5 mt-2">
            <label class="flex items-center gap-2">
              <input type="radio" value="1x a day" v-model="medication.frequency" /> 1x a day
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="2x a day" v-model="medication.frequency" /> 2x a day
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="3x a day" v-model="medication.frequency" /> 3x a day
            </label>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between pt-4">
          <button
            type="button"
            @click="cancel"
            class="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg"
          >
            CANCEL
          </button>
          <button
            type="submit"
            class="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg shadow-lg"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CGAddMedication',
  data() {
    return {
      medication: {
        name: '',
        dosage: '',
        frequency: '',
        status: 'Pending',
      },
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    cancel() {
      this.$router.push('/CGmedication')
    },
    saveMedication() {
      // store to localStorage for now (can be replaced with API/DB)
      let meds = JSON.parse(localStorage.getItem('medications')) || []
      meds.push(this.medication)
      localStorage.setItem('medications', JSON.stringify(meds))

      alert('Medication saved successfully!')
      this.$router.push('/CGmedication')
    },
  },
}
</script>
