<!-- src/views/Home.vue -->
<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold mb-4">Welcome to RecoverEase</h1>
    <!-- You can add your login form here -->
    <form class="space-y-4">
      <input type="email" placeholder="Email" class="border px-4 py-2 w-full rounded" />
      <input type="password" placeholder="Password" class="border px-4 py-2 w-full rounded" />
      <router-link to="/login"
        ><button class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button></router-link
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
