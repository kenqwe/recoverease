<template>
  <div
    class="bg-white p-3 rounded-xl shadow flex flex-col items-center text-center hover:bg-gray-100 transition"
  >
    <img :src="icon" alt="" class="w-14 h-14 mb-2" />
    <span class="text-sm font-medium">{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
})
</script>
